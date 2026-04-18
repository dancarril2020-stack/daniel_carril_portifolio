# John Doe — Portfolio Website

A clean, modern, SEO-optimised personal portfolio landing page for a freelance full-stack developer.

## 🌐 Live Site

[johndoe.dev](https://www.johndoe.dev) _(update this link once deployed)_

---

## 📸 Preview

![Portfolio Preview](assets/images/og-preview.jpg)

---

## ✨ Features

- **Responsive design** — works on mobile, tablet, and desktop
- **Sticky header** with active section highlighting as you scroll
- **Hero section** with profile card and animated availability badge
- **Brands carousel** — infinite auto-scrolling strip (pauses on hover)
- **Portfolio carousel** — keyboard and touch/swipe navigable
- **Contact section** with inline form and social links
- **SEO ready** — meta tags, Open Graph, Twitter Card, Schema.org JSON-LD
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Fast** — single HTML file, no frameworks, vanilla JS

---

## 🗂️ Project Structure

```
my-portfolio/
│
├── index.html                  # Main HTML — clean, no inline styles or scripts
│
├── assets/
│   ├── css/
│   │   └── style.css           # All styles
│   ├── js/
│   │   └── main.js             # All scripts
│   ├── images/
│   │   ├── og-preview.jpg      # Open Graph / social preview (1200×630px)
│   │   ├── avatar.jpg          # Profile photo
│   │   └── projects/           # Project screenshots
│   │       ├── ecommerce.jpg
│   │       ├── fitness-app.jpg
│   │       ├── saas-dashboard.jpg
│   │       ├── delivery-app.jpg
│   │       └── corporate-site.jpg
│   └── brands/                 # Brand/client logos (SVG preferred)
│
├── sitemap.xml                 # Sitemap for search engines
├── robots.txt                  # Search engine crawl instructions
├── .gitignore
└── README.md
```

---

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/johndoe/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in your browser — or use a local server:

   ```bash
   # With VS Code — install the Live Server extension and click "Go Live"

   # With Python
   python -m http.server 8000

   # With Node.js
   npx serve .
   ```

---

## 🛠️ Customisation Checklist

Before going live, replace all sample content:

- [ ] Update your name, title, and bio in `index.html`
- [ ] Replace `JD` initials with `<img>` tag pointing to `assets/images/avatar.jpg`
- [ ] Update your skills tags in the profile card
- [ ] Add your real project cards (title, stack, description, live URL, GitHub URL)
- [ ] Add project screenshots to `assets/images/projects/`
- [ ] Replace placeholder brand chips with real client logos in `assets/brands/`
- [ ] Update contact info (email, LinkedIn, GitHub) throughout `index.html`
- [ ] Update all `johndoe.dev` URLs to your real domain
- [ ] Update `sitemap.xml` with your domain
- [ ] Update `robots.txt` with your domain
- [ ] Update the Schema.org JSON-LD in `<head>` with your real social links
- [ ] Create and add `assets/images/og-preview.jpg` (1200×630px) for social sharing
- [ ] Add your `cv.pdf` to the root or update the CV download link

---

## 📬 Contact Form

The contact form currently shows a client-side success message only. To make it functional, connect it to a form service. Recommended options:

- **[Formspree](https://formspree.io)** — free tier available, just change `action="#"` to your Formspree endpoint
- **[EmailJS](https://emailjs.com)** — send email directly from JS, no backend needed
- **[Netlify Forms](https://docs.netlify.com/forms/setup/)** — works automatically if deployed on Netlify

---

## 🌍 Deployment

This site can be deployed for free on any static hosting platform:

| Platform             | Notes                                   |
| -------------------- | --------------------------------------- |
| **GitHub Pages**     | Free, easy, auto-deploys from this repo |
| **Netlify**          | Free, great CDN, form handling included |
| **Vercel**           | Free, very fast global CDN              |
| **Cloudflare Pages** | Free, excellent performance             |

---

## 🎨 Tech Stack

| Layer   | Choice                                                                                                                 |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |
| Markup  | Semantic HTML5                                                                                                         |
| Styles  | Vanilla CSS with custom properties                                                                                     |
| Scripts | Vanilla JavaScript (ES6+)                                                                                              |
| Fonts   | [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts |
| Icons   | Inline SVG                                                                                                             |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

_Built with care. No frameworks harmed in the making of this page._
