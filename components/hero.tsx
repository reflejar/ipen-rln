"use client"

export default function Hero() {
  return (
    <section className="bg-[url('/img/bg-hero.png')] bg-cover bg-center h-screen relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-6xl leading-tight mb-4">
              Jóvenes <span className="font-black text-black">combatiendo la desinformación</span>
              <span className="text-violet-600"></span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 mb-6">
              con periodismo comunitario
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Jóvenes combatiendo la desinformación con periodismo comunitario
            </p>
            
          </div>

        </div>
      </div>
    </section>
  )
}