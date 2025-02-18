import { ClientProviders } from '../lib/providers'
import './globals.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}