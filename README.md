# Second Brain Landing Page

A modern, responsive marketing website for the Second Brain iOS app built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with subtle animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14
- 🎯 Accessibility-focused with semantic HTML and ARIA attributes
- 🎬 Smooth Framer Motion animations
- 🎛️ Professional pricing tiers
- ❓ Interactive FAQ accordion
- 📧 Contact form with validation
- 🔗 Social media integration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── Hero.tsx             # Hero section with app mockup
│   ├── About.tsx            # About/features section
│   ├── UseCases.tsx         # User personas and use cases
│   ├── Pricing.tsx          # Pricing tiers comparison
│   ├── FAQ.tsx              # Accordion FAQ section
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with links and newsletter
├── public/                  # Static assets (add your images here)
└── Configuration files
```

## Customization

### Content Updates
- Replace placeholder text in each component with your actual content
- Update social media links in `Footer.tsx`
- Modify contact email addresses throughout the components
- Customize the pricing plans in `Pricing.tsx`

### Design Customization
- Update color scheme in `tailwind.config.js`
- Modify fonts by changing the Google Fonts import in `globals.css`
- Adjust spacing, animations, and layout in individual components

### Images and Assets
- Add your app screenshots to the `public/` directory
- Update image references in components (especially `Hero.tsx`)
- Add favicon and other meta images

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The site can be deployed to any static hosting provider:
```bash
npm run build
npm run start
```

## Performance Features

- Optimized images and assets
- Efficient CSS with Tailwind
- Smooth animations that respect motion preferences
- Mobile-first responsive design
- Semantic HTML for better SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is provided as-is for building marketing websites. Customize freely for your projects.