import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'RoPhim - Phim hay cả rổ - Xem phim',
  description: 'Website này được xây dựng nhầm mục đích học tập'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
