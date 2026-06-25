import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI First 行政思维转型专题课',
  description: '面向集团行政部门的 AI First 思考模式转型培训材料',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
