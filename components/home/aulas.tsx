export default function Aulas() {
  return (
    <section className="bg-[url('/img/bg-fondo.png')] h-screen bg-cover bg-center ">
      {/* Background Geometric Shapes */}
      <div className="bg-[url('/img/mancha-1.png')] bg-no-repeat bg-left bg-[length:50%] relative min-h-screen flex items-center justify-between overflow-hidden pt-16">
        {/* Background Geometric Shapes */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-full flex flex-col justify-between gap-4">
          <div className="grid gap-6 md:gap-12 items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Esta historia no la que te contaron...
            </h1>
            <h1 className="mt-3 md:mt-10 text-4xl md:text-5xl font-bold text-gray-800">
              Les robaron las aulas
            </h1>
          </div>

          <div className="flex items-center justify-center h-[50dvh]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 w-full">
              <div
                className="flex flex-col items-center justify-center min-h-full rounded-lg text-white text-xl font-semibold p-8"
                style={{
                  backgroundImage: "url('/img/sticker-izq.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="p-10 md:p-20 text-center ">
                  <h4 className="text-2xl md:text-5xl  mb-5">+26</h4>
                  universidades <br /> cerradas
                </div>
              </div>
              <div
                className="flex flex-col items-center justify-center min-h-full rounded-lg text-white text-xl font-semibold p-8"
                style={{
                  backgroundImage: "url('/img/sticker-izq.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="p-10 md:p-20 text-center ">
                  <h4 className="text-2xl md:text-5xl  mb-5">+18.000</h4>
                  estudiantes <br /> afectados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
