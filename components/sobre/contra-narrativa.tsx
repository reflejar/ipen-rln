import Image from "next/image";

export default function ContraNarrativa() {
  return (
    <section
      className="bg-[url('/ipen-rln/img/bg-contra-narrativa.png')] bg-contain bg-left bg-no-repeat  -my-20 z-10 h-screen relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ backgroundSize: "40%" }}
    >
      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="relative z-10 w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center">
          <div className="grid grid-cols-12">
            <div className="col-span-4 flex flex-col items-end justify-center ">
              <h1 className="text-6xl font-bold w-min">Contra Narrativa</h1>
              <Image
                width={0}
                height={0}
                className="w-1/3"
                sizes="100vw"
                src="/ipen-rln/img/subrayado.png"
                alt="subrayado"
              />
            </div>
            <div className="flex flex-col col-span-8 justify-center h-[60vh] w-10/12 mx-auto">
              <div className="h-full w-full bg-cover bg-center rounded-lg p-8 flex flex-col ">
                <h1 className="text-3xl font-bold text-gray-800">Misión </h1>
                <p className="text-base text-gray-800">
                  Somos un espacio seguro, empático y colaborativo donde jóvenes
                  en movilidad humana y exilio pueden formarse, compartir
                  experiencias, generar contenidos éticos, veraces y diversos,
                  contribuyendo activamente a transformar las narrativas
                  impuestas sobre la migración y las juventudes en la región.
                </p>
              </div>
              <div className="h-full w-full bg-cover bg-center rounded-lg p-8 flex flex-col ">
                <h1 className="text-3xl font-bold text-gray-800">Visión</h1>
                <p className="text-base text-gray-800">
                  Convertirnos en una comunidad sólida de comunicadores
                  emergentes que, desde el exilio, impulsa narrativas inclusivas
                  y veraces, posicionándose como referente en la defensa del
                  derecho a la información y la libertad de expresión juvenil en
                  la región.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
