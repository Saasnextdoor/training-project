# NeuroWeb Studio

Лендинг-визитка для AI-веб студии. Главная особенность — использование нейросетей для создания сайтов.

## Tech Stack

- **Next.js 14** — React-фреймворк
- **TypeScript** — типизация
- **Tailwind CSS** — стилизация
- **Framer Motion** — анимации
- **Lucide React** — иконки

## Возможности

- Адаптивный дизайн (desktop/mobile)
- AI-чат виджет для ответов на вопросы
- Анимированные секции с scroll-triggered анимациями
- Glass morphism эффекты
- Gradient border карточки

## Структура проекта

```
src/
├── app/
│   ├── globals.css      # Глобальные стили
│   ├── layout.tsx       # Корневой layout
│   └── page.tsx         # Главная страница
└── components/
    ├── Header.tsx       # Навигация
    ├── Hero.tsx         # Первый экран
    ├── Services.tsx     # Услуги
    ├── Benefits.tsx     # Преимущества
    ├── Portfolio.tsx    # Портфолио
    ├── Contact.tsx      # Контактная форма
    ├── Footer.tsx        # Подвал
    ├── FloatingOrbs.tsx  # Декоративные орбы
    └── AIChatWidget.tsx  # AI-чат виджет
```

## Запуск

```bash
# Установка зависимостей
npm install

# Development режим
npm run dev

# Production сборка
npm run build
```

## Команда

**NeuroWeb Studio** — создаём сайты с интеллектом нейросетей.

- Telegram: @neuroweb
- Email: hello@neuroweb.studio
