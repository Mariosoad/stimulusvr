'use client'

import localFont from 'next/font/local'
import Script from 'next/script'
import Navigation from '@/components/Navbar/Navigation'

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
        <link rel="icon" href="./icon-briptravel.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stimulus VR</title>
        <meta name="description" content="Descubre destinos increíbles y reserva tus vuelos y tours con la Agencia de viajes Briptravel. Tenemos los mejores precios y opciones para hacer de tus viajes una experiencia inolvidable" />
        <meta name="keywords" content="Agencia de viajes, pasajes de avión, tours, destinos, viajes, vuelos" />
        <link rel="canonical" href="https://stimulusvr.com/" />
        <link rel="alternate" hreflang="es" href="https://www.stimulusvr.com" />
        <link rel="alternate" hreflang="en" href="https://stimulusvr.com/" />
        <meta name="robots" content="index,follow" />
        <link rel="sitemap" type="application/xml" href="https://stimulusvr.com/sitemap.xml" />

      </head>
      <body className={`${neuemachina.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
