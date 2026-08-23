Add-Type -AssemblyName System.Drawing

function Add-WatermarkToAllImages {
    param(
        [string]$TargetDir = "assets/images",
        [string]$WatermarkText = "SHUKLAY WADHEKAR",
        [long]$Quality = 85
    )

    $allFiles = Get-ChildItem -Path $TargetDir -Recurse -File | Where-Object {
        $_.Extension -match '^\.(jpe?g|png)$' -and $_.Name -notmatch 'shuklay-portrait'
    }

    $encoders = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
    $jpegCodec = $encoders | Where-Object { $_.MimeType -eq "image/jpeg" }
    $pngCodec = $encoders | Where-Object { $_.MimeType -eq "image/png" }

    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)

    $count = 0
    $total = $allFiles.Count
    $copySymbol = [char]0x00A9
    $displayLabel = "$copySymbol $WatermarkText"

    Write-Host "Applying watermark '$displayLabel' to $total images..."

    foreach ($file in $allFiles) {
        $path = $file.FullName
        $ext = $file.Extension.ToLower()
        $tempPath = "$path.wm.tmp"

        try {
            $sourceBytes = [System.IO.File]::ReadAllBytes($path)
            $ms = New-Object System.IO.MemoryStream($sourceBytes, 0, $sourceBytes.Length)
            $img = [System.Drawing.Image]::FromStream($ms)

            $bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
            $g = [System.Drawing.Graphics]::FromImage($bmp)

            $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

            $g.DrawImage($img, 0, 0, $img.Width, $img.Height)

            # Elegant Proportional Typography Calculation
            $fontSize = [math]::Max(12, [int][math]::Round($img.Height * 0.020))
            $font = New-Object System.Drawing.Font("Segoe UI", $fontSize, [System.Drawing.FontStyle]::Bold)

            $size = $g.MeasureString($displayLabel, $font)

            # Position in bottom-right corner with 3.2% margin
            $marginRight = [int][math]::Round($img.Width * 0.032)
            $marginBottom = [int][math]::Round($img.Height * 0.032)
            $x = $img.Width - $size.Width - $marginRight
            $y = $img.Height - $size.Height - $marginBottom

            # Subtle Dark Drop Shadow for high readability against bright scenes
            $shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(150, 0, 0, 0))
            $g.DrawString($displayLabel, $font, $shadowBrush, ($x + 1.5), ($y + 1.5))

            # Crisp Off-White Semi-Transparent Watermark Text
            $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(215, 245, 245, 247))
            $g.DrawString($displayLabel, $font, $textBrush, $x, $y)

            if ($ext -eq '.png') {
                $bmp.Save($tempPath, $pngCodec, $null)
            } else {
                $bmp.Save($tempPath, $jpegCodec, $encoderParams)
            }

            $g.Dispose()
            $bmp.Dispose()
            $img.Dispose()
            $ms.Dispose()

            if (Test-Path $tempPath) {
                Remove-Item -Path $path -Force
                Move-Item -Path $tempPath -Destination $path -Force
                $count++
            }
        } catch {
            Write-Warning "Error processing $path : $_"
            if (Test-Path $tempPath) { Remove-Item $tempPath -Force }
        }
    }

    Write-Host "=========================================================="
    Write-Host "WATERMARK COMPLETE: $count / $total images successfully watermarked with '$displayLabel'!"
    Write-Host "=========================================================="
}

Add-WatermarkToAllImages
