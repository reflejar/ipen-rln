import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function ContraNarrativa() {
  return (
    <section
      id="contranarrativa"
      className="bg-[url('/img/bg-contra-narrativa.png')]  h-screen min-h-screen flex items-center justify-center overflow-hidden "
    >
      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="md:hidden">
        <div className="bg-[url('/img/carousel-contranarrativa1-mobile.png')] bg-cover bg-bottom min-h-screen flex items-start pt-5">
          <div className="w-10/12 mx-auto">
            <h2 className="text-4xl font-extrabold mb-12">Contra Narrativa</h2>
            <h4 className="text-1xl font-bold mt-10">Misión</h4>
            <p className="text-base">
              Ser un espacio seguro, empático y colaborativo donde jóvenes en
              movilidad humana y el exilio puedan formarse, compartir
              experiencias, generar contenidos éticos, veraces y diversos
              contribuyendo activamente a transformar las narrativas impuestas
              sobre la migración y otras temáticas que afectan a las juventudes
              en la región.
            </p>
            <h4 className="text-1xl font-bold mt-10">Visión</h4>
            <p className="text-base">
              Generar una comunidad sólida de comunicadores emergentes que,
              desde el exilio, impulsa narrativas inclusivas y veraces,
              posicionándose como un referente en la defensa del derecho a la
              información y la libertad de expresión de las juventudes en la
              región.
            </p>
          </div>
        </div>
        <div className="bg-[url('/img/carousel-contranarrativa2-mobile.png')] bg-cover bg-top min-h-screen flex pt-16 items-end pb-4">
          <div className="w-10/12 mx-auto">
            <h4 className="text-1xl font-bold mt-10">Objetivo general</h4>
            <p className="text-base">
              <b>Empoderar a los jóvenes nicaragüenses</b> en condición de
              desplazamiento forzado brindándoles herramientas para poder
              <b>enfrentar</b> de manera estratégica
              <b>la desinformación</b> sobre la crisis sociopolítica en
              Nicaragua y la migración en Costa Rica, mientras se
              <b>promueve la defensa de la libertad de expresión y de prensa</b>
              .
            </p>
            <h4 className="text-1xl font-bold mt-10">Objetivos especificos</h4>
            <div className="text-base">
              <ul className="list-disc list-inside space-y-4">
                <li>
                  Fortalecer habilidades técnicas y comunicativas para combatir
                  la desinformación y la información errónea desde una mirada
                  joven.
                </li>
                <li>
                  Promover la producción colaborativa de contenidos que
                  visibilicen experiencias migrantes y juventudes en
                  resistencia.
                </li>
                <li>
                  Construir una red solidaria que brinde apoyo emocional,
                  formativo y profesional entre sus miembros.
                </li>
                <li>
                  Desarrollar una estructura organizativa participativa y
                  estrategias de sostenibilidad de la red.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Carousel className="hidden md:block w-full">
        <CarouselContent>
          <CarouselItem className="pl-0">
            <div className="bg-[url('/img/carousel-contranarrativa1.png')] bg-cover bg-right min-h-screen flex pt-16 items-center">
              <div className="w-8/12 ml-36 mr-auto">
                <h2 className="text-7xl font-extrabold mb-24">
                  Contra Narrativa
                </h2>
                <h4 className="text-3xl font-bold mt-10">Misión</h4>
                <p className="text-2xl">
                  Ser un espacio seguro, empático y colaborativo donde jóvenes
                  en movilidad humana y el exilio puedan formarse, compartir
                  experiencias, generar contenidos éticos, veraces y diversos
                  contribuyendo activamente a transformar las narrativas
                  impuestas sobre la migración y otras temáticas que afectan a
                  las juventudes en la región.
                </p>
                <h4 className="text-3xl font-bold mt-10">Visión</h4>
                <p className="text-2xl">
                  Generar una comunidad sólida de comunicadores emergentes que,
                  desde el exilio, impulsa narrativas inclusivas y veraces,
                  posicionándose como un referente en la defensa del derecho a
                  la información y la libertad de expresión de las juventudes en
                  la región.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-0">
            <div className="bg-[url('/img/carousel-contranarrativa2.png')] bg-cover bg-left min-h-screen flex pt-16 items-center">
              <div className="w-8/12 mr-10 ml-auto">
                <h4 className="text-3xl font-bold mt-10">Objetivo general</h4>
                <p className="text-2xl">
                  <b>Empoderar a los jóvenes nicaragüenses</b> en condición de
                  desplazamiento forzado brindándoles herramientas para poder
                  <b>enfrentar</b> de manera estratégica
                  <b>la desinformación</b> sobre la crisis sociopolítica en
                  Nicaragua y la migración en Costa Rica, mientras se
                  <b>
                    promueve la defensa de la libertad de expresión y de prensa
                  </b>
                  .
                </p>
                <h4 className="text-3xl font-bold mt-10">
                  Objetivos especificos
                </h4>
                <div className="text-2xl">
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      Fortalecer habilidades técnicas y comunicativas para
                      combatir la desinformación y la información errónea desde
                      una mirada joven. 
                    </li>
                    <li>
                      Promover la producción colaborativa de contenidos que
                      visibilicen experiencias migrantes y juventudes en
                      resistencia.
                    </li>
                    <li>
                      Construir una red solidaria que brinde apoyo emocional,
                      formativo y profesional entre sus miembros.
                    </li>
                    <li>
                      Desarrollar una estructura organizativa participativa y
                      estrategias de sostenibilidad de la red.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
