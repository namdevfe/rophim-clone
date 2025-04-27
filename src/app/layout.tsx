import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import { Roboto } from 'next/font/google'
import '@/app/globals.css'

const roboto = Roboto({
  subsets: ['vietnamese'],
  weight: ['300', '400', '500', '700', '900']
})

export const metadata: Metadata = {
  title: 'RoPhim - Phim hay cả rổ - Xem phim Mới HD Online Vietsub',
  description: 'Website này được xây dựng nhầm mục đích học tập'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={roboto.className}>
      <body suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
