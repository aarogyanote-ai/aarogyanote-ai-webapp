# Aarogya Note AI - Website

This is the official website for Aarogya Note AI, an AI-powered medical documentation platform designed for healthcare professionals in India.

## Features

- **Landing Page**: Modern, responsive landing page showcasing the platform's features
- **Privacy Policy**: Comprehensive privacy policy page compliant with Indian data protection laws
- **SEO Optimized**: Built with Next.js 16 and optimized for search engines
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations

## Pages

- `/` - Landing page with hero section, features, and app download links
- `/privacy-policy` - Privacy policy page with detailed information about data handling
- `/terms` - Terms & Conditions page with service terms and user responsibilities

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono
- **SEO**: Built-in Next.js SEO features with custom metadata

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx           # Landing page
│   ├── privacy-policy/
│   │   └── page.tsx       # Privacy policy page
│   ├── sitemap.ts         # SEO sitemap
│   ├── robots.ts          # SEO robots.txt
│   └── globals.css        # Global styles
├── components/
│   └── Navigation.tsx     # Navigation component
└── public/
    └── logo.png          # Company logo
```

## SEO Features

- Custom metadata for each page
- Open Graph tags for social media sharing
- Sitemap.xml generation
- Robots.txt configuration
- Structured data ready
- Mobile-optimized design

## Deployment

The website is ready for deployment on platforms like:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Any hosting platform that supports Next.js

## Customization

To customize the website:

1. **Logo**: The actual logo is already integrated from the MobileApp assets
2. **Colors**: Update Tailwind CSS classes in components
3. **Content**: Modify text content in page components
4. **SEO**: Update metadata in layout.tsx and page components

## License

© 2024 Aarogya Note AI. All rights reserved.
