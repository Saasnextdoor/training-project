import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeuroWeb Studio — AI-веб студия нового поколения',
  description: 'Создаём сайты и приложения с использованием нейросетей. AI-дизайн, автоматизация, чат-боты и генерация контента.',
  keywords: 'веб-студия, AI, нейросети, создание сайтов, дизайн',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
