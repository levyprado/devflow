import type { Metadata } from 'next'
import { Inter_Tight, Space_Grotesk } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  variable: '--font-inter',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'Programming community',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${interTight.variable} ${spaceGrotesk.variable} relative isolate antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
