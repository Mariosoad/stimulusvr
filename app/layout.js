'use client'

import localFont from 'next/font/local'
import Script from 'next/script'
import Navigation from '@/components/Navbar/Navigation'
import Footer from '@/components/Footer/footer'

//STYLE GLOBAL
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const neuemachina = localFont({
  src: '../fonts/NeueMachina-Regular.woff2',
  variable: '--font-neuemachina',
})
const artiLight = localFont({
  src: '../fonts/englishGrotesque.woff2',
  variable: '--font-english',
})
// const mont = localFont({
//   src: '../fonts/Montserrat-LightItalic.woff',
//   variable: '--font-montserrat',
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

        {/* METATAGS */}
        <link rel="icon" href="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/e8816703-684a-45ab-8101-50f128b37c00/mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stimulus Platform</title>
        <meta name="description" content="Stimulus VR" />
        <meta name="keywords" content="Stimulus VR" />
        <link rel="canonical" href="https://stimulusvr.com/" />
        <link rel="alternate" hreflang="es" href="https://www.stimulusvr.com" />
        <link rel="alternate" hreflang="en" href="https://stimulusvr.com/" />
        <meta name="robots" content="index,follow" />
        <link rel="sitemap" type="application/xml" href="https://stimulusvr.com/sitemap.xml" />

      </head>
      <body className={`${neuemachina.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
