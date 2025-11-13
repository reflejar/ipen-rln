import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroAbout() {
  return (
    <section className="md:bg-[url('/img/bg-fondo-verde.webp')] bg-cover bg-center bg-no-repeat relative min-h-screen flex items-end md:items-center justify-center overflow-hidden ">
      {/* Background Geometric Shapes */}

      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="min-h-screen w-full flex">
        <div className="w-full md:w-4/12 flex items-center absolute md:relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:left-auto md:translate-x-0 md:translate-y-0  ">
          <Image
            src="/img/logo3_transparent.png"
            alt="ipen logo"
            width={0}
            height={0}
            className=" w-full left-0 "
            sizes="100vw"
          ></Image>
        </div>
        <div className="w-full md:w-8/12 flex items-center">
          <Image
            src="/img/image_hero_about.webp"
            alt="ipen logo"
            width={0}
            height={0}
            className="hidden md:block w-full min-h-screen right-0"
            sizes="100vw"
          ></Image>
          <Image
            src="/img/image_hero_about_mobile.webp"
            alt="ipen logo"
            width={0}
            height={0}
            className="w-full min-h-screen right-0"
            sizes="100vw"
          ></Image>
        </div>
      </div>
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          <div className="text-center md:text-left col-span-2">
            <h1 className="text-2xl font-bold leading-tight mb-4">¿Qué es?</h1>
            <p className="text-1xl md:text-4xl mb-8 max-w-2xl mx-auto md:mx-0">
              Reescribiendo la Narrativa es un espacio seguro donde jóvenes
              nicaragüenses en movilidad humana ejercen el periodismo como
              herramienta de cambio, combatiendo la desinformación y
              construyendo narrativas propias.
            </p>
            <div className="flex flex-col md:flex-row mx-auto md:mx-0 gap-3 w-5/6">
              <Button className="w-full" variant="blue">
                ¿Porque “Reescribir la narrativa?”
              </Button>
              <Button className="w-full" variant="outline">
                Recursos para escritores
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
