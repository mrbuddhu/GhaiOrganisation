# Ghai Organisation - NGO Website

A modern, responsive NGO website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark mode support
- 📱 Mobile-first approach
- ♿ Accessibility focused
- 🚀 Fast loading with CDN images
- 💳 Donation system UI
- 👥 Volunteer registration
- 📧 Contact forms
- 📊 Impact statistics

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   \`\`\`bash
   # If you have the code, navigate to the project directory
   cd ghai-ngo-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
ghai-ngo-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # Reusable UI components
│   ├── hero.tsx      # Hero section
│   ├── about.tsx     # About section
│   ├── programs.tsx  # Programs section
│   ├── donation.tsx  # Donation section
│   ├── volunteer.tsx # Volunteer section
│   └── ...
├── lib/
│   └── utils.ts      # Utility functions
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
\`\`\`

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

\`\`\`js
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
\`\`\`

### Content
- Update organization details in components
- Replace images with your own
- Modify program information
- Update contact details

### Deployment

#### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically

#### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **next-themes** - Dark mode

## Support

Built with ❤️ by [Sanganak - #1 Premium IT Boutique](https://sanganak.org)

For support, contact: info@ghaiorganisation.org
