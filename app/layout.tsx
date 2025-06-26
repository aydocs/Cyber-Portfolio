import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'web App',
  description: 'Created with web',
  generator: 'Aydocs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
