# SHUKLAY WADHEKAR — CINEMATIC PORTFOLIO

A luxury, editorial portfolio website built for **Shuklay Wadhekar** — *Photographer, Cinematographer, Documentary Filmmaker & BTS Videographer*.

Engineered specifically for **100% free, permanent, and high-performance hosting on GitHub Pages** with zero runtime build dependencies, zero databases, and zero server management.

---

## 📁 PROJECT STRUCTURE

```text
shuklay-portfolio/
├── index.html               # Master website structure & SEO markup
├── CNAME                    # Custom domain configuration (www.shuklaywadhekar.com)
├── robots.txt               # Search engine indexing instructions
├── sitemap.xml              # XML Sitemap for Google search ranking
├── README.md                # Quickstart & GitHub deployment manual
└── assets/
    ├── css/
    │   └── style.css        # Cinematic dark theme, typography, & layouts
    ├── js/
    │   ├── projects.js      # Central database of your projects & photos
    │   └── script.js        # Dynamic filtering, modal lightbox, & animations
    ├── images/              # Put your photo files here
    └── videos/              # Put your hero.mp4 video here
```

---

## 🚀 STEP-BY-STEP GITHUB PAGES DEPLOYMENT GUIDE

Deploying this portfolio to the internet is completely free and takes under 3 minutes.

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com/) and sign in to your account.
2. Click the **`+`** icon in the top right corner and select **New repository**.
3. Name your repository (e.g., `portfolio` or `shuklay-portfolio`).
4. Set the repository to **Public**.
5. Do **not** check "Initialize with README" (we already have all files ready).
6. Click **Create repository**.

---

### Step 2: Upload Your Website Files

#### Option A: Using the GitHub Web Interface (Easiest — No Terminal Needed)
1. On your newly created repository page, click the link that says **"uploading an existing file"**.
2. Drag and drop all the files and folders from this project (`index.html`, `assets/`, `CNAME`, `robots.txt`, `sitemap.xml`, `README.md`) into the GitHub window.
3. Scroll down and click **Commit changes**.

#### Option B: Using Git Command Line
Open PowerShell or Terminal in the project folder and run:
```bash
git init
git add .
git commit -m "Initial release of cinematic portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

---

### Step 3: Enable GitHub Pages & Select Branch
1. In your GitHub repository, click on **Settings** (tab on the top right).
2. On the left sidebar menu, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master`) and keep folder as `/ (root)`.
4. Click **Save**.
5. Wait 30–60 seconds. Refresh the page, and GitHub will display your live URL:
   `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

---

## 🎨 HOW TO CUSTOMIZE YOUR PORTFOLIO

### 1. MY PROJECTS (Adding, Editing, or Removing Work)
All your projects are managed inside **`assets/js/projects.js`**. You don't need to touch `index.html` to add new work!

To add a new project, simply open `assets/js/projects.js` and add an entry:
```javascript
{
  id: "my-new-film",
  title: "Name of Your Project",
  category: "Films & BTS", // Choose from: Films & BTS, Documentary, Brands, Music, Events, Corporate, Weddings, Wildlife, Editorial
  year: "2026",
  role: "Director of Photography",
  client: "Production Name",
  location: "Mumbai, India",
  featured: true,
  cover: "assets/images/my-project-cover.jpg",
  synopsis: "Brief description of the story, lighting setup, and behind the scenes moments.",
  gear: "Sony FX6 • 35mm & 50mm T1.5 Cine Primes",
  images: [
    "assets/images/my-project-cover.jpg",
    "assets/images/my-project-still-01.jpg",
    "assets/images/my-project-still-02.jpg"
  ]
}
```

---

### 2. MY PHOTOS
Place your photo files inside the **`assets/images/`** folder:
- **Hero Image Fallback**: Save as `assets/images/hero.jpg`
- **Portrait Photo**: Save as `assets/images/shuklay-portrait.jpg`
- **Project Covers & Stills**: Save as `assets/images/project-name-01.jpg`

> **Pro Tip**: You can also use direct image URLs from cloud CDNs (e.g. Cloudinary, AWS S3, Google Cloud, or Unsplash) directly in `projects.js`.

---

### 3. MY VIDEOS
Place your hero background video inside **`assets/videos/`**:
- Save as `assets/videos/hero.mp4`
- **Recommended format**: MP4 (H.264), 1080p or 720p, 10–30 second seamless loop, under 15MB for rapid loading.

---

### 4. MY CONTACT INFORMATION
To update your phone number, email, and social links:
1. Open `index.html`.
2. Search for `shuklay2000@gmail.com` and replace it with your active email address.
3. Search for `919999999999` in the WhatsApp link:
   ```html
   <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Shuklay..." class="whatsapp-btn">
   ```
   Replace `91XXXXXXXXXX` with your country code + WhatsApp mobile number (e.g. `919876543210`).
4. Update your Instagram and LinkedIn URLs in the footer.

---

### 5. CONTACT FORM SUBMISSIONS
The contact form currently launches the client's default email client (`mailto:`) automatically with pre-filled subject and project details.

If you prefer form submissions sent directly into your email inbox without opening an email client:
1. Sign up for a free account at [Formspree.io](https://formspree.io) or [Web3Forms.com](https://web3forms.com).
2. In `index.html`, find `<form id="portfolio-contact-form">` and add:
   ```html
   <form id="portfolio-contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```

---

## 🌐 CONNECTING A CUSTOM DOMAIN (e.g. www.shuklaywadhekar.com)

1. Buy your domain on GoDaddy, Namecheap, Google Domains / Squarespace, or Cloudflare.
2. In the project folder, open the `CNAME` file and make sure your domain is written inside (e.g. `www.shuklaywadhekar.com`).
3. In your Domain Registrar's DNS Management panel, add these DNS Records:

| Type | Host / Name | Target / Value |
| :--- | :--- | :--- |
| **CNAME** | `www` | `YOUR_GITHUB_USERNAME.github.io` |
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |

4. In your GitHub repository **Settings → Pages → Custom domain**, enter `www.shuklaywadhekar.com` and check **Enforce HTTPS**.

---

## ⚡ PERFORMANCE & TECH HIGHLIGHTS

* **Zero Bundler Required**: Runs directly in any web browser without Node.js or build steps.
* **Native Lazy Loading**: All images and videos use asynchronous decoding and viewport-based lazy loading.
* **Fluid Editorial Typography**: Scaled using modern CSS `clamp()` for perfect readability across iPhones, Android devices, iPads, and 4K displays.
* **Hardware Accelerated Motion**: 60fps smooth animations using CSS GPU transforms.
* **SEO Optimized**: Full Open Graph, Twitter Cards, Semantic HTML5 landmarks, XML Sitemap, and robots.txt.

---

© 2026 Shuklay Wadhekar. All Rights Reserved.
