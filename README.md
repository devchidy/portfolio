# Portfolio V2 - Personal Developer Portfolio

## Created and maintained by:
- **Oladele David Temitope** - Software Engineer & Engineering Lead

## 🚀 About This Project

A modern, responsive portfolio website built with React and TypeScript to showcase my professional experience, projects, and technical skills. The portfolio features a dark/light mode toggle, smooth animations, and a clean, professional design.

## ✨ Features

- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Responsive Design** - Optimized for all device sizes
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Loading Screen** - Custom animated loader with progress tracking
- **Professional Sections**:
  - Hero section with animated introduction
  - Work experience timeline with growth metrics
  - Project showcase with detailed tech stacks
  - Skills and technologies display
  - About page with personal information

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library for building interactive components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Animation library for smooth transitions
- **React Router DOM** - Client-side routing
- **React Icons** - Comprehensive icon library

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🎨 Design System

### Colors
- **Primary Palette**: Custom green/yellow gradient (`#c8d627` to `#5e6110`)
- **Slate Palette**: Neutral grays for text and backgrounds
- **Dark Mode**: Slate-900 background with white text
- **Light Mode**: Gradient background from slate-50 to white

### Typography
- **Font Family**: Inter (system-ui fallback)
- **Font Weights**: Light, Regular, Medium, Bold
- **Responsive Text**: Scales from mobile to desktop

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up**: Gentle upward movements
- **Bounce Gentle**: Subtle hover effects
- **Stagger**: Sequential element animations

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Navbar, Footer, Loader)
│   ├── home/           # Home page specific components
│   ├── about/          # About page components
│   └── project/        # Project showcase components
├── pages/              # Main page components
├── data/               # Static data (projects, work, tech stack)
├── assets/             # Images, fonts, and other static files
├── hooks/              # Custom React hooks
└── layouts/            # Page layout components
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio-v2

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## 📱 Pages & Sections

### Home Page (`/`)
- Animated hero section with professional introduction
- Work experience timeline with growth metrics
- Available for opportunities badge
- Social media links

### About Page (`/about-me`)
- Personal background and information
- Professional photo and bio
- Skills and expertise overview

### Projects Page (`/projects`)
- Interactive project showcase
- Detailed project descriptions
- Technology stack for each project
- Live demo and GitHub links

## 🎯 Key Projects Showcased

- **Your Work Buddy** - Next.js, TypeScript, Socket.io, MongoDB
- **Wfunded.io** - Node.js, Express, MongoDB, TypeScript
- **Plugin Entertainment** - Next.js, TypeScript, Tailwind CSS
- **My Subby App** - Vue.js, TypeScript, Node.js
- **Shiga.io** - Next.js, TypeScript, Shadcn UI
- **Global Asset University** - Next.js, TypeScript, Ether.js
- **Portfolio V3** - React, TypeScript, Tailwind CSS

## 🔧 Customization

### Adding New Projects
Edit `src/data/webprojects.js` to add new projects with:
- Project name and description
- Technology stack
- Live URL and GitHub link
- Project image

### Updating Work Experience
Edit `src/data/work.js` to update work history with:
- Company information
- Role and duration
- Growth metrics
- Detailed descriptions

### Modifying Tech Stack
Edit `src/data/tech.js` to update skills and technologies.

## 🌟 Performance Features

- **Code Splitting** - Lazy loading for optimal performance
- **Image Optimization** - Optimized images for fast loading
- **Responsive Images** - Different sizes for different devices
- **Smooth Scrolling** - Enhanced user experience
- **Progressive Enhancement** - Works without JavaScript

## 📄 License

This project is private and maintained by Oladele David Temitope.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**



