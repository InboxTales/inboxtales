# InboxTales Website

A modern, SEO-optimized website for InboxTales - Digital Transformation & Custom Solutions.

## 🚀 Features

- **Next.js 14 App Router** - Modern React framework with server-side rendering
- **SEO Optimized** - Complete metadata, structured data, and sitemap generation
- **Responsive Design** - Bootstrap-based responsive layout
- **Dynamic Routes** - Blog and case studies with dynamic content
- **Performance Optimized** - Fast loading and optimized images

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── services/          # Services pages
│   │   └── whatsapp-automation/
│   ├── industries/        # Industries page
│   ├── engagement-models/ # Engagement models page
│   ├── blog/              # Blog pages
│   │   └── [slug]/        # Dynamic blog posts
│   ├── case-studies/      # Case studies pages
│   │   └── [slug]/        # Dynamic case studies
│   ├── sitemap.xml/       # Dynamic XML sitemap
│   ├── robots.txt/        # Robots.txt file
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   └── ui/               # UI components
└── utils/                # Utility functions
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.inboxtales.com

# SEO Configuration
GOOGLE_SITE_VERIFICATION=your_google_site_verification_code

# Social Media URLs (for JSON-LD structured data)
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/inboxtales
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/inboxtales
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/inboxtales

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@inboxtales.com
```

### 3. Development

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
npm start
```

## 🔍 SEO Features

### Metadata
- Complete Open Graph and Twitter Card metadata
- Dynamic page titles and descriptions
- Structured data (JSON-LD) for organization
- Canonical URLs

### Sitemap & Robots
- Dynamic XML sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Proper crawl directives

### URL Structure
- SEO-friendly URLs with hyphens
- Nested routes for services and content
- Dynamic routes for blog and case studies

### Performance
- Next.js Image optimization
- Server-side rendering
- Optimized bundle sizes

## 📄 Pages

### Static Pages
- **Home** (`/`) - Main landing page
- **About** (`/about`) - Company information
- **Services** (`/services`) - Service offerings
- **Industries** (`/industries`) - Industry solutions
- **Engagement Models** (`/engagement-models`) - Collaboration options

### Service Pages
- **WhatsApp Automation** (`/services/whatsapp-automation`) - Specific service

### Dynamic Content
- **Blog** (`/blog`) - Blog index
- **Blog Posts** (`/blog/[slug]`) - Individual blog posts
- **Case Studies** (`/case-studies`) - Case studies index
- **Case Study** (`/case-studies/[slug]`) - Individual case studies

## 🎨 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add `page.tsx` with proper metadata
3. Update sitemap in `src/app/sitemap.xml/route.ts`

### Adding New Services
1. Create folder in `src/app/services/[service-name]/`
2. Add `page.tsx` with service-specific content
3. Update navigation and sitemap

### Blog/Case Studies Content
- Currently using static data
- Can be integrated with CMS (Strapi, Contentful, etc.)
- MDX support can be added for markdown content

## 📊 Analytics & Monitoring

### Google Analytics
Add your Google Analytics tracking code to `src/app/layout.tsx`

### Search Console
1. Add your site to Google Search Console
2. Verify ownership using the `GOOGLE_SITE_VERIFICATION` environment variable
3. Submit your sitemap URL

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Content Management

For dynamic content management, consider integrating:
- **Strapi** - Headless CMS
- **Contentful** - Content management
- **Sanity** - Structured content
- **MDX** - Markdown with React components

## 🔧 Development

### TypeScript
- Full TypeScript support
- Type definitions for all components
- Strict type checking enabled

### Styling
- Bootstrap 5 for responsive design
- Custom CSS in `src/assets/css/`
- Component-specific styling

### Components
- Modular component architecture
- Reusable UI components
- Section-based page composition

## 📞 Support

For questions or support, contact:
- Email: info@inboxtales.com
- Website: https://www.inboxtales.com

## 📄 License

This project is proprietary to InboxTales.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.