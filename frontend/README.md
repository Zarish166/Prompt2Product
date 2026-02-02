# Prompt2Product - AI Code Generation Platform

A revolutionary platform that transforms natural language descriptions into production-ready code using advanced AI.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000` in your web browser.

The application will automatically reload when you make changes to the code.

### Build for Production

```bash
npm run build
npm start
```

## Features

### Core Functionality
- **Natural Language Processing** - Describe your project in plain English
- **Auto-Detection** - Automatically detects programming language and project type
- **Multi-language Support** - Python, JavaScript, TypeScript, and more
- **Real-time Generation** - Watch your code being generated with live logs
- **Refinement Loop** - Request changes and regenerate until perfect

### User Interface
- **Professional Dark Theme** - Sleek, modern design with blue accents
- **Responsive Design** - Seamless experience on desktop, tablet, and mobile
- **Smooth Animations** - Engaging transitions and effects throughout
- **Accessible Dialogs** - Full-page blur effect for focused interactions
- **Team Showcase** - Meet the developers behind the platform

### Authentication
- **Multi-Provider Support** - Sign in with Google, Apple, or Email
- **Secure Sessions** - Local storage-based authentication
- **User Profiles** - Personalized experience with user identification

## Architecture

### Frontend Stack
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4 with custom animations
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form

### Key Pages
- `/` - Landing page with hero section and team showcase
- `/about` - Company information and team member details
- `/describe` - Project description and configuration
- `/generating` - Real-time code generation progress
- `/preview` - Generated code preview and refinement
- `/ide` - Advanced code editor interface

### Components
- `auth-modal.tsx` - Authentication dialog with blur backdrop
- `navigation.tsx` - Responsive header with mobile menu
- `team-member-card.tsx` - Team member profile cards
- `team-member-detail.tsx` - Detailed team member pages

## Design System

### Color Palette
- **Background**: #0a0e17 (Deep navy)
- **Card**: #0f1419 (Dark blue)
- **Primary**: #2563eb (Bright blue)
- **Secondary**: #1a1f2e (Medium dark)
- **Foreground**: #e8ecf1 (Light text)

### Typography
- **Font Family**: Inter (sans-serif)
- **Heading Scales**: Responsive from 1.5rem to 4rem
- **Line Heights**: 1.4-1.6 for optimal readability

### Effects
- **Button Glow**: Neon blue glow on hover with smooth transitions
- **Background Blur**: 4px blur applied to page content when modals are open
- **Animations**: Slide-up and fade-in effects with staggered delays

## Responsive Breakpoints

- **Mobile**: < 640px (Single column layouts)
- **Tablet**: 640px - 1024px (Two column layouts)
- **Desktop**: > 1024px (Multi-column layouts)

## Environment Variables

The application uses Vercel's environment variables system. No `.env` file is required for local development.

## Deployment

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Import the repository in Vercel dashboard
3. Vercel will automatically detect Next.js and configure build settings
4. Click "Deploy"

The site will be live at `https://your-project.vercel.app`

## Performance Optimizations

- **Lazy Loading**: Components and pages load on-demand
- **Image Optimization**: Next.js Image component for responsive images
- **CSS Optimization**: Tailwind CSS v4 with tree-shaking
- **Code Splitting**: Automatic route-based code splitting

## Accessibility

- **ARIA Attributes**: Proper semantic HTML and ARIA labels
- **Keyboard Navigation**: Full keyboard support throughout
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Clear focus indicators on interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Support

For issues, suggestions, or feedback, please contact the development team.
