# NeuroWeb Studio — Лендинг-визитка

## Concept & Vision

Futuristic-минималистичный лендинг для веб-студии нового поколения. Атмосфера: "будущее уже здесь". Визуальный язык объединяет чистоту швейцарского дизайна с неоновыми акцентами и элементами нейронных связей. Сайт сам демонстрирует возможности AI — мини-чаат с ИИ на главной странице, генерация персонализированного контента.

## Design Language

### Aesthetic Direction
Dark-mode футуризм с градиентами от deep purple к electric cyan. Нейронные связи как декоративный элемент. Геометрические формы с blur-эффектами.

### Color Palette
- **Primary Background**: #0a0a0f (almost black)
- **Secondary Background**: #12121a (card surfaces)
- **Primary Accent**: #8b5cf6 (violet)
- **Secondary Accent**: #06b6d4 (cyan)
- **Gradient**: linear-gradient(135deg, #8b5cf6, #06b6d4)
- **Text Primary**: #f8fafc
- **Text Secondary**: #94a3b8

### Typography
- **Headings**: "Space Grotesk" (Google Fonts) — geometric sans-serif
- **Body**: "Inter" — clean readability
- **Mono (code/tech elements)**: "JetBrains Mono"

### Spatial System
- Base unit: 8px
- Section padding: 120px vertical
- Container max-width: 1200px
- Card border-radius: 16px

### Motion Philosophy
- Smooth entrance animations (fade + slide up, 600ms ease-out)
- Floating gradient orbs (subtle parallax)
- Hover states: scale 1.02, glow effect
- Staggered reveal on scroll (100ms delay between elements)
- Neural connection lines animated on scroll

### Visual Assets
- Custom SVG neural network patterns as background
- Lucide icons
- Gradient blur orbs as decorative elements
- Animated particle/connection background

## Layout & Structure

### Hero Section
- Full viewport height
- Animated headline с gradient text
- AI chatbot interface (мини-демо прямо на главной)
- Floating gradient orbs
- CTA button with glow effect

### Services Section
- Grid 3 колонки
- Cards с иконками и hover-эффектами
- Услуги: AI-дизайн, автоматизация, чат-боты, генерация контента

### Benefits Section
- Alternating layout (текст + визуал)
- Статистика с animated counters
- AI-возможности в цифрах

### Portfolio Section
- Horizontal scroll gallery
- Project cards с hover preview
- AI-теги для проектов

### Contact Section
- Floating contact form
- Telegram/WhatsApp links
- Мини-карта или просто адрес

### Footer
- Minimal, с social links
- "Создано с 💜 и AI"

## Features & Interactions

### AI Chat Widget
- Floating button в правом нижнем углу
- Открывает мини-чат
- Отвечает на вопросы об услугах (predefined responses)
- Typing indicator анимация

### Smooth Scroll Navigation
- Fixed header прозрачный → solid on scroll
- Active section highlighting
- Scroll-to-top button

### Form Validation
- Real-time validation
- Success/error states
- Animated submission

## Component Inventory

### Button
- Primary: gradient background, white text, glow on hover
- Secondary: outlined, gradient text
- States: default, hover (scale + glow), active, disabled

### Card
- Dark surface (#12121a)
- Subtle border gradient on hover
- Icon + title + description

### Input/Textarea
- Dark background
- Gradient border on focus
- Floating labels

### Section Header
- Gradient text option
- Subtitle in secondary color
- Decorative line element

### Navigation
- Logo left, links right
- Mobile: hamburger menu
- Smooth scroll to sections

## Technical Approach

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Space Grotesk, Inter)
- **Language**: TypeScript
- **Deployment**: Static export for Vercel/static hosting
