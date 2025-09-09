"use client"

export default function Aulas() {
  return (
    <section className="h-screen relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Geometric Shapes */}
      {/* Left Image */}
      <img
      src="/img/mancha-1.png"
      alt="Decoración"
      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 max-w-xs pointer-events-none select-none"
      style={{ zIndex: 1 }}
      />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Esta historia no la que te contaron...
        </h1>
        </div>
        <h1 className="mt-10 text-5xl font-bold text-gray-800">
          Les robaron las aulas
        </h1>        

      <div className="flex items-center justify-center h-[60vh]">
        <div className="grid grid-cols-2 gap-20 w-full h-full">
          <div
            className="flex flex-col items-center justify-center h-full rounded-lg text-white text-xl font-semibold"
            style={{
              backgroundImage: "url('/img/sticker-izq.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h4 className="text-5xl mb-5">+26</h4>
            universidades cerradas
          </div>
          <div
            className="flex flex-col items-center justify-center h-full rounded-lg text-white text-xl font-semibold p-8"
            style={{
              backgroundImage: "url('/img/sticker-der.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h4 className="text-5xl mb-5">+18.000</h4>
            estudiantes afectados
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}