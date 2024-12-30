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

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AreebMianoor/legal-template-generator.git
   cd legal-template-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

### Environment Variables

Required environment variables:

```env
# Required for development
SITE_URL=http://localhost:4321
NETLIFY_FUNCTION_URL=/.netlify/functions

# MongoDB connection (for site generation)
MONGODB_URI=your_mongodb_uri

# Netlify deployment
NETLIFY_AUTH_TOKEN=your_netlify_token
TEMPLATE_REPO=your_template_repo
```

### Deployment

The project is configured for seamless deployment on Netlify:

1. Connect your repository to Netlify
2. Configure environment variables in Netlify dashboard
3. Deploy using the following build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18.x

## 📁 Project Structure

```
/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── CaseStudies.astro
│   │   └── footer/
│   │       ├── ContactInfo.astro
│   │       └── SocialLinks.astro
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro
│   │   ├── case-studies/
│   │   └── request-site.astro
│   └── content/           # Content collections
├── public/                # Static assets
├── netlify/              # Serverless functions
│   └── functions/
│       └── create-site.js
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
└── package.json          # Project dependencies
```

### Key Files

- `src/pages/request-site.astro`: Multi-step form for website generation
- `netlify/functions/create-site.js`: Serverless function for site creation
- `astro.config.mjs`: Astro and Netlify adapter configuration
- `tailwind.config.mjs`: Tailwind CSS customization

## 🔧 Customization

The platform is designed for easy customization:

- **Colors**: Modify `tailwind.config.mjs`
- **Content**: Update content in `src/content`
- **Layout**: Adjust components in `src/components`
- **AI Settings**: Configure in `.env` file

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

For professional inquiries or collaboration opportunities, connect with me on LinkedIn:
[Areeb Mianoor](https://www.linkedin.com/in/areebmianoor) 