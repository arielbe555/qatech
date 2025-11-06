import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'QATECH - Ciberseguridad, Certificación y Monitoreo Continuo | Plataforma QASOFT',
  description: 'QATECH líder en ciberseguridad integral, certificación de plataformas digitales ISO 27001/NIST y monitoreo 24/7. Auditorías técnicas, SOC, pentesting y cumplimiento normativo internacional.',
  keywords: 'ciberseguridad, ISO 27001, NIST, pentesting, OWASP, certificación plataformas, monitoreo 24/7, SOC, SIEM, auditorías técnicas, DPIA, ENS, IRAM, Ley 25.326, QATECH, QASOFT',
  authors: [{ name: 'QATECH' }],
  openGraph: {
    title: 'QATECH - Tecnología bajo control | Ciberseguridad y Certificación',
    description: 'Ciberseguridad integral, certificación de plataformas digitales y monitoreo continuo. Líderes en auditorías técnicas ISO/NIST para entornos críticos.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QATECH - Ciberseguridad y Certificación Profesional',
    description: 'Auditorías técnicas, certificación ISO 27001/NIST y monitoreo 24/7 para plataformas críticas',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-gray-900 text-gray-100 overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}