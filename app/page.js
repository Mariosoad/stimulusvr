import ActiveFrames from '@/components/ActiveFrame'

// COMPONENTS WEB //
import Hero from './web/hero/hero'
import Info from './web/info/info'

export default function Homepage() {
  return (
    <main className="main">
      <ActiveFrames />
      <Hero />
      <Info />

    </main>
  )
}
