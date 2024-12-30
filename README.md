# LegalTech Site Generator & AI Integration Platform

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-4.x-orange.svg)](https://astro.build)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

> 🚀 **Quick Start**: `npx create-legal-site@latest my-law-firm`

[Live Demo](your-demo-url) | [Documentation](your-docs-url) | [Contributing](CONTRIBUTING.md) | [Report Bug](issues)

A next-generation platform for law firms to establish their digital presence and leverage AI capabilities in minutes. Built with modern web technologies and AI integration capabilities, this platform revolutionizes how legal professionals connect with their clients and manage their online presence.

<p align="center">
  <img src="docs/preview.gif" alt="LegalTech Platform Preview" width="600">
</p>

### Why This Matters

The legal industry is undergoing a digital transformation, but many firms lack the resources or technical expertise to keep up. This platform bridges that gap by providing:

- 🎯 Instant professional web presence
- 🤖 Built-in AI capabilities
- 📱 Mobile-first design
- 🔒 Compliance-ready architecture
- ⚡ Performance-optimized structure

## 🚀 Vision

This platform represents the future of legal tech, offering an all-in-one solution for law firms to:

- Generate modern, professional websites in minutes
- Integrate AI-powered client interactions
- Automate client pre-screening
- Deploy personalized AI phone agents
- Implement secure document handling
- Enable smart scheduling and client management

The goal is to democratize access to advanced legal tech tools, allowing firms of all sizes to leverage enterprise-grade technology without the enterprise-grade cost.

## 🛠️ Technical Stack

### Current Implementation
- **Frontend**: Astro.js with Tailwind CSS for modern, responsive designs
- **Backend**: Netlify Functions for serverless operations
- **Deployment**: Automated deployment through Netlify
- **Content Management**: Built-in content management through Astro's content collections

### AI Integration Ready
- LangChain for advanced LLM orchestration
- Gemini Pro for state-of-the-art language processing
- CrewAI for automated workflow management
- Custom AI phone agents using latest speech-to-text and text-to-speech technologies
- Compliance-focused data handling and storage

## 🎯 Current Features

✅ **Working Features**
- Modern, responsive website generation
- Mobile-first design approach
- Case study and blog support
- Contact form integration
- Call button functionality
- Netlify deployment pipeline
- **Site Request Form** (/request-site):
  - Multi-step form process
  - Basic information collection
  - Service selection
  - Content section customization
  - Color scheme selection
  - Automated URL generation
  - Serverless form processing

🔄 **In Progress**
- AI phone agent integration
- Client pre-screening automation
- Document automation system
- Multi-language support
- Advanced analytics dashboard

## ✨ Latest Feature: Site Request Form

We've just added a new feature that allows law firms to request their custom website through a user-friendly form:

🔗 **Access the form at**: `/request-site`

### Form Features:
- 📝 Multi-step form process for better UX
- 🎨 Customizable design preferences
- 📋 Service selection
- 🏗️ Content section customization
- 🎯 Instant URL generation
- ⚡ Serverless form processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- Git

### Windows Setup
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd legal-tech-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### macOS Setup
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd legal-tech-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### Environment Variables Setup

Create a `.env` file in the root directory with the following variables:

```env
# Required for development
SITE_URL=http://localhost:4321

# Netlify Function URLs (update after deployment)
NETLIFY_FUNCTION_URL=/.netlify/functions

# Optional: AI Integration (if using AI features)
OPENAI_API_KEY=your_openai_api_key
GEMINI_API_KEY=your_gemini_api_key

# Optional: Analytics (if using analytics)
GOOGLE_ANALYTICS_ID=your_ga_id

# Example values for local development:
# SITE_URL=http://localhost:4321
# NETLIFY_FUNCTION_URL=/.netlify/functions
# OPENAI_API_KEY=sk-xxxxx...
# GEMINI_API_KEY=AI-xxxx...
```

> **Note**: Never commit your `.env` file to version control. The above values are examples only.

For production deployment on Netlify:
1. Go to your site's dashboard
2. Navigate to Site Settings > Environment Variables
3. Add each variable from your `.env` file
4. Update `SITE_URL` to your production URL
5. Deploy your site to apply the changes

### Using the Site Request Form

1. Visit `/request-site` on your deployed site
2. Complete the three-step form:
   - **Step 1**: Enter your firm's basic information
   - **Step 2**: Select your services and content sections
   - **Step 3**: Choose your design preferences
3. Submit the form
4. Receive confirmation with your site details

### Local Development of Form

To test the form locally:

1. Install dependencies:
```bash
npm install
```

2. Start the Netlify dev server:
```bash
netlify dev
```

3. Visit `http://localhost:8888/request-site`

### Form Technical Details

The form submission is handled by Netlify Functions:
- Function location: `netlify/functions/create-site.js`
- Endpoint: `/.netlify/functions/create-site`
- Method: `POST`
- Response: JSON with site creation details

## 🔧 Customization

The platform is designed for easy customization:

- **Colors**: Modify `tailwind.config.js`
- **Content**: Update content in `src/content`
- **Layout**: Adjust components in `src/components`
- **AI Settings**: Configure in `.env` file (template provided)

## 🔜 Roadmap

- Enhanced AI integration with GPT-4 and Claude
- Automated legal document generation
- Client portal with secure document sharing
- Integration with popular legal practice management software
- Advanced analytics and insights dashboard
- Multi-language AI support

## 🤝 Contributing

This project is open source and welcomes contributions. Whether you're fixing bugs, adding new features, or improving documentation, your contributions are welcome.

## 📞 Contact

For professional inquiries or collaboration opportunities, connect with me on LinkedIn:
[Areeb Mianoor](https://www.linkedin.com/in/areebmianoor)

## 🌟 Vision for the Future

This platform is more than just a website generator - it's a movement towards democratizing legal tech. By making sophisticated AI tools and modern web presence accessible to all legal professionals, we're helping bridge the technology gap in the legal industry.

The platform is designed to grow with the rapidly evolving AI landscape, ready to integrate new technologies as they emerge. From automated client intake to AI-powered legal research assistance, the possibilities are limitless.

## 📄 License

This project is open source and available under the MIT License.

## 📁 Project Structure

```
/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── CaseStudies.astro
│   │   └── ContactForm.astro
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro
│   │   ├── case-studies/
│   │   └── request-site.astro
│   └── content/           # Content collections
│       ├── case-studies/
│       └── services/
├── public/                # Static assets
│   ├── images/
│   └── fonts/
├── netlify/              # Serverless functions
│   └── functions/
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Project dependencies
```

### Key Technical Features
- **Content Management**: MDX-based content collections
- **Dynamic Routing**: Automatic route generation for case studies
- **Form Handling**: Serverless function integration
- **SEO Optimization**: Built-in meta tags and structured data
- **Asset Optimization**: Automatic image optimization
- **CSS Utilities**: Tailwind CSS for styling
- **Type Safety**: TypeScript support
- **Build Optimization**: Automatic code splitting and bundling

### Performance Features
- Optimized asset loading
- Minimal JavaScript footprint
- Static site generation
- Efficient caching strategies
- Lazy-loaded images
- Minified CSS and JS

---

Built with ❤️ for the legal tech community 

### Testing the Site Request Form

1. Navigate to `/request-site` on your deployed site
2. Fill out the three-step form:
   - Step 1: Basic firm information
   - Step 2: Select services and content sections
   - Step 3: Choose design preferences
3. Submit the form to receive your site configuration

### Deployment Notes

The site request form uses Netlify Functions for processing. Ensure your Netlify deployment has:
- Functions directory set to `netlify/functions`
- Environment variables properly configured
- Build command set to `npm run build`
- Publish directory set to `dist` 