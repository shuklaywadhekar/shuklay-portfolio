Add-Type -AssemblyName System.Drawing

function Compress-AllPortfolioImages {
    param(
        [string]$TargetDir = "assets/images",
        [int]$MaxDimension = 2048,
        [long]$Quality = 82
    )

    $allFiles = Get-ChildItem -Path $TargetDir -Recurse -File | Where-Object {
        $_.Extension -match '^\.(jpe?g|png)$'
    }

    $totalBefore = 0
    $totalAfter = 0
    $count = 0

    $encoders = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
    $jpegCodec = $encoders | Where-Object { $_.MimeType -eq "image/jpeg" }
    $pngCodec = $encoders | Where-Object { $_.MimeType -eq "image/png" }

    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)

    foreach ($file in $allFiles) {
        $path = $file.FullName
        $origBytes = $file.Length
        $totalBefore += $origBytes
        $ext = $file.Extension.ToLower()

        $tempPath = "$path.tmp"

        try {
            $sourceBytes = [System.IO.File]::ReadAllBytes($path)
            $ms = New-Object System.IO.MemoryStream($sourceBytes, 0, $sourceBytes.Length)
            $sourceImage = [System.Drawing.Image]::FromStream($ms)

            # Auto-orient based on EXIF tag 0x0112
            if ($sourceImage.PropertyIdList -contains 274) {
                try {
                    $prop = $sourceImage.GetPropertyItem(274)
                    $orientation = [BitConverter]::ToUInt16($prop.Value, 0)
                    switch ($orientation) {
                        2 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                        3 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                        4 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                        5 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                        6 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                        7 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                        8 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
                    }
                    $sourceImage.RemovePropertyItem(274)
                } catch {}
            }

            $origWidth = $sourceImage.Width
            $origHeight = $sourceImage.Height

            $newWidth = $origWidth
            $newHeight = $origHeight

            if ($origWidth -gt $MaxDimension -or $origHeight -gt $MaxDimension) {
                if ($origWidth -ge $origHeight) {
                    $newWidth = $MaxDimension
                    $newHeight = [int][math]::Round(($origHeight * $MaxDimension) / $origWidth)
                } else {
                    $newHeight = $MaxDimension
                    $newWidth = [int][math]::Round(($origWidth * $MaxDimension) / $origHeight)
                }
            }

            $destBitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $graphics = [System.Drawing.Graphics]::FromImage($destBitmap)

            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

            $graphics.DrawImage($sourceImage, 0, 0, $newWidth, $newHeight)

            if ($ext -eq '.png') {
                $destBitmap.Save($tempPath, $pngCodec, $null)
            } else {
                $destBitmap.Save($tempPath, $jpegCodec, $encoderParams)
            }

            $graphics.Dispose()
            $destBitmap.Dispose()
            $sourceImage.Dispose()
            $ms.Dispose()

            $newFileInfo = Get-Item $tempPath
            if ($newFileInfo.Length -gt 0 -and $newFileInfo.Length -lt $origBytes) {
                Remove-Item -Path $path -Force
                Move-Item -Path $tempPath -Destination $path -Force
                $totalAfter += (Get-Item $path).Length
                $count++
                $relPath = $path.Substring((Get-Location).Path.Length + 1)
                Write-Host "[$count/$($allFiles.Count)] Optimized: $relPath ($([math]::Round($origBytes/1MB, 2))MB -> $([math]::Round((Get-Item $path).Length/1KB, 0))KB)"
            } else {
                if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
                $totalAfter += $origBytes
                $count++
                $relPath = $path.Substring((Get-Location).Path.Length + 1)
                Write-Host "[$count/$($allFiles.Count)] Kept original: $relPath"
            }
        } catch {
            Write-Warning "Error processing $path : $_"
            if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
            $totalAfter += $origBytes
        }
    }

    Write-Host "=========================================================="
    Write-Host "COMPRESSION SUMMARY:"
    Write-Host "Total images processed: $($allFiles.Count)"
    Write-Host "Total size BEFORE: $([math]::Round($totalBefore / 1MB, 2)) MB"
    Write-Host "Total size AFTER:  $([math]::Round($totalAfter / 1MB, 2)) MB"
    Write-Host "Bandwidth Saved:   $([math]::Round(($totalBefore - $totalAfter) / 1MB, 2)) MB ($([math]::Round((1 - ($totalAfter/$totalBefore))*100, 1))% reduction!)"
    Write-Host "=========================================================="
}

Compress-AllPortfolioImages
