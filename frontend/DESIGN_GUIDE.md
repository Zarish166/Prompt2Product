# Prompt2Product - Design Guide

## Overview

Prompt2Product features a modern, professional design with a dark theme optimized for developer experience and user engagement.

## Color System

### Primary Colors
- **Background**: `#0a0e17` - Deep navy for main background
- **Card Background**: `#0f1419` - Slightly lighter navy for cards
- **Primary Blue**: `#2563eb` - Bright blue for CTAs and accents
- **Foreground**: `#e8ecf1` - Light gray text for contrast

### Secondary Colors
- **Secondary Background**: `#1a1f2e` - Medium dark for secondary elements
- **Muted Text**: `#64748b` - Subdued gray for secondary content
- **Border**: `#1a1f2e` - Subtle borders matching secondary

### Interactive States
- **Hover**: 10-15% opacity increase on hover
- **Active**: 20% opacity decrease on active
- **Focus**: Blue ring with 20% opacity

## Typography

### Font Family
- **Primary**: Inter (sans-serif) for all text
- **Monospace**: JetBrains Mono for code blocks (IDE section)

### Heading Scale
- **H1**: 36px (mobile) → 48px (desktop)
- **H2**: 30px (mobile) → 40px (desktop)
- **H3**: 24px (mobile) → 32px (desktop)
- **Body**: 14px (mobile) → 16px (desktop)

### Line Heights
- **Headings**: 1.2 for tight vertical rhythm
- **Body**: 1.6 for comfortable reading
- **Labels**: 1.4 for form clarity

## Components

### Button Variants

#### Primary Button
- **Default**: Blue background (#2563eb)
- **Hover**: 15% darker with glow effect
- **Glow**: `0 0 20px rgba(37, 99, 235, 0.3), 0 0 40px rgba(37, 99, 235, 0.15)`
- **Padding**: 10px 16px (mobile) → 12px 24px (desktop)

#### Secondary Button
- **Default**: Transparent with border
- **Hover**: 30% opacity background increase
- **Border Color**: Transitions to primary on hover

#### Icon Buttons
- **Size**: 40px × 40px default
- **Hover**: Background color shift to secondary
- **Transition**: 200ms ease-all

### Dialog Box (Auth Modal)

#### Structure
- **Width**: 100% (mobile) → 448px (desktop)
- **Max Height**: 90vh with scroll support
- **Border Radius**: 24px
- **Border**: 1px solid border/60
- **Shadow**: `shadow-2xl` for depth

#### Backdrop
- **Color**: Black with 85% opacity
- **Blur**: `blur-xl` (16px) for full background blur
- **Effect**: Covers entire viewport

#### Content
- **Padding**: 24px (mobile) → 36px (desktop)
- **Spacing**: Optimized for 90vh max height
- **Overflow**: Y-axis scroll if needed

#### Form Fields
- **Height**: 40px
- **Padding**: 12px 16px
- **Border Radius**: 8px
- **Focus Ring**: 2px primary/20

### Team Member Cards

#### Card Structure
- **Border Radius**: 16px
- **Padding**: 24px
- **Hover Glow**: Darker blue with smooth transition
- **Animation**: 300ms ease-all

#### Avatar
- **Size**: 80px × 80px
- **Border Radius**: Full circle
- **Gradient**: Unique per team member
- **Shadow**: `shadow-lg`

#### Social Links
- **Icon Size**: 16px
- **Button Size**: 40px × 40px
- **Hover**: Transitions text to primary

## Layout System

### Grid System
- **Max Width**: 1280px (max-w-7xl)
- **Padding**: 24px (mobile) → 24px (desktop)
- **Gap**: 24px (mobile) → 32px (desktop)

### Responsive Breakpoints
```
Mobile: < 640px
- Single column layouts
- Stacked navigation
- Full-width modals with padding

Tablet: 640px - 1024px
- Two column layouts
- Side navigation
- Optimized modal sizes

Desktop: > 1024px
- Multi-column layouts
- Fixed navigation
- Standard modal dimensions
```

## Animations

### Transitions
- **Duration**: 200-300ms for most interactions
- **Timing**: `ease-all` for smooth curves
- **Stagger**: 100ms between sequential elements

### Modal Animations
- **Fade In**: 300ms ease-out
- **Scale**: From 95% to 100%
- **Backdrop**: Fade in with blur

### Page Transitions
- **Slide Up**: 500ms ease-out from 20px below
- **Fade In**: 600ms ease-out
- **Staggered Children**: 100-200ms delays per element

## Dark Theme Implementation

### CSS Variables
All colors use CSS custom properties for consistency:
```css
:root {
  --background: #0a0e17;
  --foreground: #e8ecf1;
  --primary: #2563eb;
  --card: #0f1419;
  --border: #1a1f2e;
  /* ... more variables */
}
```

### Light Mode (If Future)
Simply update variables without changing HTML structure.

## Accessibility

### Contrast Ratios
- **Foreground on Background**: 13.5:1 (AAA)
- **Foreground on Card**: 11.2:1 (AAA)
- **Primary on White**: 7.4:1 (AAA)

### Focus States
- **Visible Outline**: 2px solid primary/50
- **Outline Offset**: 2px for visibility
- **Skip Links**: Implemented for keyboard navigation

### ARIA Attributes
- **Dialogs**: `role="dialog"` with `aria-modal="true"`
- **Navigation**: Proper heading hierarchy (H1, H2, H3)
- **Buttons**: Descriptive labels and `aria-label` on icon buttons
- **Forms**: Associated labels for all inputs

## Component Spacing

### Vertical Rhythm
- **Base Unit**: 4px (Tailwind default)
- **Spacing**: Multiples of 4px (8, 12, 16, 20, 24, 32, etc.)

### Form Field Spacing
- **Between Fields**: 12px gap
- **Label to Input**: 8px
- **Between Sections**: 20-24px

### Card Spacing
- **Padding**: 24px
- **Gap Between Cards**: 24-32px

## Responsive Typography

### Mobile-First Approach
- **Body Copy**: 14px on mobile → 16px on desktop
- **Headings**: Scale from 24px → 40px+
- **Labels**: 12px on mobile → 13px on desktop

## Button Size Variants

- **Small**: 32px height, 12px padding
- **Medium**: 40px height, 16px padding
- **Large**: 44px height, 20px padding

## Icon Sizes

- **Extra Small**: 16px (inline text)
- **Small**: 20px (form labels, navigation)
- **Medium**: 24px (card headers)
- **Large**: 32px+ (hero sections)

## Border Radius Scale

- **Small**: 6px (inputs, small buttons)
- **Medium**: 10px (cards, standard buttons)
- **Large**: 12px (hero sections)
- **Full**: 9999px (avatars, pills)

## Shadow System

- **None**: No shadow (flat design)
- **Small**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Medium**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **Large**: `0 20px 25px -5px rgba(0, 0, 0, 0.1)` (cards)
- **Extra Large**: `0 25px 50px -12px rgba(0, 0, 0, 0.25)` (modals)

## Brand Guidelines

### Logo
- **Icon**: Code2 icon from Lucide React
- **Color**: Primary blue (#2563eb)
- **Size**: 32px (navigation), 64px (hero)

### Typography Weight
- **Regular**: 400
- **Semibold**: 600
- **Bold**: 700

### Imagery
- Team member gradients for visual interest
- Code icons for developer focus
- Smooth animations for engagement

## Future Enhancements

1. **Light Mode Support**: CSS variable swapping
2. **Custom Themes**: User-selectable color schemes
3. **Advanced Animations**: Spring physics, morphing effects
4. **Accessibility Improvements**: Enhanced screen reader support
5. **Performance**: Image lazy loading, code splitting

## References

- Color Contrast: WCAG 2.1 AA/AAA standards
- Typography: Material Design 3 principles
- Spacing: 8px grid system
- Animations: Framer Motion best practices
