export default function Objetivos() {
  return (
    <section className="bg-[url('/img/bg-objetivo-gral.png')] bg-cover bg-center  z-10 h-screen relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="relative z-10 w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center">
          <div className="grid grid-cols-12">
            <div className="col-span-8 flex flex-col items-end justify-center gap-5">
              <div className="h-full w-full bg-cover bg-center rounded-lg p-8 flex flex-col ">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Objetivo General{" "}
                </h1>
                <p className="text-base text-gray-800">
                  <strong>Crear una comunidad juvenil</strong> que impulse el
                  surgimiento de comunicadores comprometidos con el periodismo
                  independiente, la verdad, la libertad de expresión y los
                  derechos humanos, mediante{" "}
                  <strong>
                    espacios de formación, apoyo y creación de narrativas
                    transformadoras.
                  </strong>
                </p>
              </div>
              <div className="h-full w-full bg-cover bg-center rounded-lg p-8 flex flex-col ">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Objetivos especificos:
                </h1>
                <div className="text-base text-gray-800">
                  <ul className="list-disc ml-5 space-y-4">
                    <li>
                      Fortalecer habilidades técnicas y comunicativas para
                      combatir la desinformación desde una mirada joven.
                    </li>
                    <li>
                      Promover la producción colaborativa de contenidos que
                      visibilicen experiencias migrantes y juventudes en
                      resistencia.
                    </li>
                    <li>
                      Construir una red solidaria que brinde apoyo emocional,
                      formativo y profesional.
                    </li>
                    <li>
                      Desarrollar una estructura organizativa participativa y
                      estrategias de sostenibilidad.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col col-span-4 justify-center h-[60vh] w-10/12 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
