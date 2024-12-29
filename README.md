# Legal Practice Website Template

A modern, responsive website template designed for law firms and legal practices, built with Astro.js and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [Astro.js](https://astro.build/) v4.15.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.1
- **Integrations**:
  - @astrojs/mdx (v2.1.1) - For content management
  - @astrojs/netlify (v5.1.2) - For Netlify deployment
  - @astrojs/tailwind (v5.1.0) - For Tailwind CSS integration
  - @iconify-json/mdi (v1.1.64) - For Material Design icons

## 📁 Project Structure

```
/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── services/
│   │   └── footer/
│   ├── content/        # Content collections
│   │   ├── case-studies/
│   │   └── testimonials/
│   ├── layouts/        # Page layouts
│   └── pages/          # Route pages
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json        # Project dependencies
```

## 🛠️ Key Features

1. **Responsive Design**: Mobile-first approach with full responsiveness across devices
2. **Content Management**: MDX-based content collections for case studies and testimonials
3. **Modern UI Components**:
   - Hero section
   - Services showcase
   - Case studies grid
   - Testimonials carousel
   - Team member profiles
   - Contact form
4. **Performance Optimized**: Static site generation for fast loading times
5. **SEO Ready**: Built-in meta tags and structured data

## 🚀 Deployment

The site is deployed on Netlify. Here's how to deploy your own instance:

1. **Prerequisites**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and Deploy**:
   ```bash
   # Install dependencies
   npm install

   # Build the site
   npm run build

   # Deploy to Netlify
   netlify deploy
   ```

3. **Configuration**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18.x or higher

## 💻 Development

1. **Clone and Setup**:
   ```bash
   # Clone the repository
   git clone [repository-url]

   # Install dependencies
   npm install
   ```

2. **Local Development**:
   ```bash
   # Start development server
   npm run dev
   ```
   Access the site at `http://localhost:4321`

3. **Build**:
   ```bash
   # Create production build
   npm run build

   # Preview production build
   npm run preview
   ```

## 🔧 Customization

### Content Modification

1. **Case Studies**:
   - Add new case studies in `src/content/case-studies/`
   - Follow the schema defined in `src/content/config.ts`

2. **Testimonials**:
   - Modify testimonials in `src/content/testimonials/`
   - Each testimonial requires: name, role, content, and optional image

3. **Services**:
   - Edit services in `src/components/Services.astro`
   - Each service needs: title, description, and icon

### Styling

1. **Colors**:
   - Primary colors can be modified in `tailwind.config.mjs`
   - Current theme uses red-800 as primary color

2. **Layout**:
   - Page layouts are in `src/layouts/`
   - Component-specific styles are within each component

### Images and Assets

- Place all static assets in the `public/` directory
- Reference them in components using absolute paths (e.g., `/images/logo.png`)

## 📱 Mobile Responsiveness

The template uses Tailwind's responsive classes:
- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up

## 🔄 Using This Template

To use this template for other legal practices:

1. **Fork or Clone**:
   - Create a new repository from this template
   - Clone it locally

2. **Customize Content**:
   - Update `src/content/` with your case studies and testimonials
   - Modify team members in `src/components/Team.astro`
   - Update services in `src/components/Services.astro`

3. **Brand Updates**:
   - Replace logos and images in `public/`
   - Update colors in `tailwind.config.mjs`
   - Modify contact information in components

4. **Deploy**:
   - Follow the deployment steps above
   - Configure your domain in Netlify

## 📝 License

This template is available under the MIT License. See LICENSE file for details.

## 🤝 Support

For support, please:
1. Check the [Astro.js documentation](https://docs.astro.build)
2. Review [Tailwind CSS guides](https://tailwindcss.com/docs)
3. Open an issue in the repository

## 🔄 Updates and Maintenance

To keep the template updated:
1. Regularly check for dependency updates
2. Run `npm update` for minor updates
3. Test thoroughly after updates
4. Review Astro.js and Tailwind CSS changelogs for breaking changes 