export default function PorQue() {
  return (
    <section className="bg-[url('/ipen-rln/img/bg-papel.png')] bg-cover bg-center bg-no-repeat  -my-20 z-10 h-screen relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="relative z-10 w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center">
          <div className="flex  justify-center h-[60vh] w-10/12 mx-auto">
            <div className="h-full w-1/2 bg-cover bg-center rounded-lg p-8 flex flex-col ">
              <h1 className="text-4xl font-bold text-gray-800">
                Reescribiendo la Narrativa
              </h1>
              <p className="mt-10 text-lg text-gray-800">
                En el contexto actual de Nicaragua, la persecución contra la
                prensa independiente y el cierre de más de 25 universidades han
                dejado a cientos de jóvenes sin posibilidades de completar sus
                estudios y sin un futuro profesional claro. Ante este escenario,
                Reescribiendo la Narrativa surge como una iniciativa para
                empoderar a la juventud nicaragüense migrante, especialmente en
                Costa Rica, brindándoles formación práctica en periodismo
                comunitario, producción colaborativa y redes de apoyo.
              </p>
            </div>
            <div className="h-full w-1/2 bg-cover bg-center rounded-lg p-8 flex flex-col ">
              <h1 className="text-4xl font-bold text-gray-800">Por que</h1>
              <p className="mt-10 text-lg text-gray-800">
                Porque creemos que el periodismo es una herramienta para
                recuperar voz, oficio y oportunidades. Queremos que las
                historias de jóvenes nicaragüenses circulen con rigor, cuidado y
                veracidad, combatiendo la desinformación y fortaleciendo el
                derecho a la libertad de expresión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
