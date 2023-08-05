import ActiveFrames from '@/components/ActiveFrame'

// COMPONENTS WEB //
import Hero from './web/hero/hero'
import Features from './web/features/features'
import About from './web/about/about'

export default function Homepage() {
  return (
    <main className="main">
      <ActiveFrames />
      <Hero />
      <Features />
      <About />

    </main>
  )
}
