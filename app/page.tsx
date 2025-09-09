import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Paisita from '@/components/paisita'
import Historia from '@/components/historia'
import Aulas from '@/components/aulas'

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
      backgroundImage: "url('/img/bg-fondo.png')",
      backgroundRepeat: "repeat",
      backgroundColor: "white",
      }}
    >
      <Navbar />
      <Hero />
      <Paisita />
      <Historia />
      <Aulas />
    </div>
  )
}