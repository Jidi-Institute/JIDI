# JIDI Institute Website

A production-ready, responsive one-page website for JIDI Institute (nonprofit AI education & research in Ghana).

## 🚀 Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom JIDI color palette
- **Responsive Design** (mobile-first approach)
- **Accessibility** (WCAG 2.2 AA compliant)

## 🎨 Design System

### Color Palette
- **Primary Deep Charcoal**: `#1B1B1B` (text, headings, footer background)
- **Mint**: `#AEFBD0` (primary accent, badges, subtle backgrounds)
- **Teal**: `#087B66` (CTA buttons, links, key highlights)
- **Aqua**: `#44C5AC` (secondary accent, dividers, icon accents)
- **White**: `#FFFFFF` (default backgrounds, cards)

### Typography
- **Font**: Inter (Google Fonts)
- **Style**: Modern, airy, ethical-tech vibe
- **Focus**: Confident typography with generous white space

### Components
- Rounded corners: `rounded-2xl`
- Shadows: Soft, subtle
- Focus rings: `ring-2 ring-jidi-aqua` for interactive elements

## 📱 Features

### ✅ Implemented
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Accessibility**: WCAG 2.2 AA compliant with proper focus states, color contrast, and keyboard navigation
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards
- **Smooth Scrolling**: In-page navigation with smooth scroll behavior
- **Interactive Components**: Hover states, focus rings, and transitions
- **Modern UI**: Clean, airy design with ethical-tech aesthetic

### 📄 Page Sections
1. **Header/Navigation**: Sticky header with mobile hamburger menu
2. **Hero**: Tagline with call-to-action buttons
3. **About**: Mission and vision cards
4. **Focus**: AI Education & Training grid
5. **Initiatives**: Women & Underserved Communities programs
6. **News**: Latest news and updates
7. **Events**: Upcoming events and bootcamps
8. **Future**: JIDI AI Summit teaser with email signup
9. **Courses**: Future learning pathways
10. **Impact**: Statistics and metrics
11. **Contact**: Join us section with social links
12. **Footer**: Quick links and contact information

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
```bash
# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Section.tsx         # Reusable section wrapper
│   ├── Button.tsx          # Button component with variants
│   ├── Card.tsx            # Card component
│   ├── Stat.tsx            # Statistics display
│   ├── EventCard.tsx       # Event card component
│   ├── NewsCard.tsx        # News card component
│   ├── ProgramCard.tsx     # Program card component
│   └── EmailSignup.tsx     # Email signup form
└── public/
    └── images/             # Placeholder images
```

## 🎯 Customization Guide

### Replacing Content
1. **Text Content**: Update text in `src/app/page.tsx` and component files
2. **Images**: Replace placeholder Unsplash URLs with actual images
3. **Colors**: Modify `tailwind.config.ts` for color adjustments
4. **Fonts**: Update font imports in `src/app/layout.tsx`

### Adding New Sections
1. Create new section in `src/app/page.tsx`
2. Add navigation link in `src/components/Header.tsx`
3. Update footer links in `src/components/Footer.tsx`

### Styling Modifications
- **Global Styles**: Edit `src/app/globals.css`
- **Component Styles**: Modify individual component files
- **Tailwind Config**: Update `tailwind.config.ts` for theme changes

## 🔧 Configuration Files

### Tailwind Config (`tailwind.config.ts`)
- Custom JIDI color palette
- Inter font family
- Custom border radius and shadows
- Focus ring utilities

### Next.js Config (`next.config.ts`)
- Image optimization settings
- Performance optimizations

### TypeScript Config (`tsconfig.json`)
- Strict type checking
- Path aliases (@/*)

## 📊 Performance & SEO

### Performance Features
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with display=swap
- **Code Splitting**: Automatic code splitting by Next.js
- **Bundle Analysis**: Built-in bundle analyzer

### SEO Features
- **Meta Tags**: Complete meta description, keywords, authors
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: Ready for schema.org markup
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling instructions

## ♿ Accessibility Features

### WCAG 2.2 AA Compliance
- **Color Contrast**: All text meets 4.5:1 contrast ratio
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Screen Reader**: Semantic HTML and ARIA labels
- **Alt Text**: Descriptive alt text for all images

### Accessibility Testing
- **Lighthouse**: Run `npm run lighthouse` for accessibility audit
- **axe-core**: Automated accessibility testing
- **Manual Testing**: Keyboard-only navigation testing

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from Git
- **Docker**: Use provided Dockerfile

## 📝 Content Management

### Placeholder Content
- **News Articles**: Replace with actual news content
- **Event Information**: Update with real event details
- **Statistics**: Replace with actual impact metrics
- **Images**: Replace Unsplash URLs with branded images

### Future Enhancements
- **CMS Integration**: Add headless CMS for content management
- **Blog Section**: Add blog functionality
- **Event Management**: Integrate event booking system
- **Newsletter**: Add newsletter subscription
- **Multi-language**: Add internationalization support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support, please contact:
- **Email**: info@jidi-institute.org
- **LinkedIn**: [JIDI Institute](https://linkedin.com/company/jidi-institute)
- **Location**: Burma Camp, Accra, Ghana

---

**JIDI Institute** — Empowering Africa through Ethical AI