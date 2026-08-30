import type { Metadata } from 'next'
import Script from 'next/script'
import {
  Fira_Code,
  Literata,
  Newsreader,
  Space_Grotesk,
} from 'next/font/google'
import './globals.css'

const literata = Literata({
  variable: '--font-literata',
  subsets: ['latin'],
})

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Andre Ponce's Blog",
  description: 'Thoughts on software development, AI agents, and books that shaped how I think. Exploring code, learning, and innovation.',
  openGraph: {
    title: "Andre Ponce's Blog",
    description: 'Thoughts on software development, AI agents, and books that shaped how I think.',
    type: 'website',
    url: 'https://andre.zot.so',
    siteName: "Andre Ponce's Blog",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Andre Ponce's Blog",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Andre Ponce's Blog",
    description: 'Thoughts on software development, AI agents, and books that shaped how I think.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${literata.variable} ${newsreader.variable} ${spaceGrotesk.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <Script
          id='theme-init'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}`,
          }}
        />
        <main className='mx-auto w-full max-w-2xl px-4 sm:px-6 py-24 text-xl'>
          {children}
        </main>
      </body>
    </html>
  )
}
