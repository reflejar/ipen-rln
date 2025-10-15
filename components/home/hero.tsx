import { Highlighter } from "../ui/highlighter";

export default function Hero() {
  return (
    <section className="bg-[url('/img/bg-hero_mobile.png')] md:bg-[url('/img/bg-hero.png')] bg-cover bg-center h-screen relative min-h-screen flex md:items-center justify-center overflow-hidden pt-16">
      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Text Content */}
          <div className="bg-[url('/img/papel-hero-home_mobile.png')] md:bg-[url('/img/papel-hero-home.png')] bg-cover py-24 pl-4 md:pl-10 md:py-48">
            <div className="text-3xl md:text-5xl font-light">
              <h1 className="leading-tight mb-2">
                Jóvenes <span className="text-violet-600"></span>
              </h1>
              <h2 className="text-blue-500 mb-2">
                Combatiendo la desinformación
              </h2>

              <h3 className=" mb-6">
                <Highlighter action="highlight" color="#F9F90E">
                  Con periodismo
                </Highlighter>
                <Highlighter action="highlight" color="#F9F90E">
                  comunitario
                </Highlighter>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
