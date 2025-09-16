export default function Historia() {
  return (
    <section className="bg-[url('/ipen-rln/img/bg-fondo.png')] bg-cover bg-center ">
      {/* Background Geometric Shapes */}
      <div className="bg-[url('/ipen-rln/img/bg-historia.png')] bg-cover bg-center h-screen relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center">
            <div className="flex items-center justify-center h-[60vh] w-[60vw]">
              <div className="h-full bg-cover bg-center rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <h1 className="text-xl font-bold text-gray-800">
                  Esta historia no la que te contaron...
                </h1>
                <p className="mt-20 text-lg text-gray-800">
                  En 2018, una crisis en Nicaragua obligó a miles de jóvenes a
                  abandonar sus estudios, sus hogares y su país.
                </p>
                <p className="mt-4 text-lg text-gray-800">
                  Desde entonces, enfrentan un desafío doble:{" "}
                  <b>reconstruir sus vidas</b> mientras lidian con los{" "}
                  <b>prejuicios</b> y narrativas negativas{" "}
                  <b>alimentadas por la desinformación.</b>
                </p>
                <p className="mt-4 text-lg text-gray-800">
                  En medio de esas dificultades, sus historias resisten y se
                  convierten en testimonio vivo de dignidad y perseverancia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
