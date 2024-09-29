import { Prompt } from 'next/font/google'
import { Aside } from '@/components/Aside'
import './globals.css'
import { SearchForm } from '@/components/SearchForm'

export const metadata = {
  title: 'Blog Next',
  description: 'Blog Next',
}

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

// imports omitidos

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>{children}</body>
    </html>
  )
}
