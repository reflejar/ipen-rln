import Image from "next/image";
import { Button } from "../ui/button";

const lineas = [
  {
    text: "Formación integral en comunicaciones, periodismo y liderazgo",
    image: "bg-formacion",
    rotation: "-rotate-12",
    textPosition: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 ",
  },
  {
    text: "Acompañamiento y comunidad de cuidado",
    image: "bg-acompaniamiento",
    rotation: "rotate-12",
    textPosition: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 ",
  },
  {
    text: "Producción colectiva  y colaborativa de contenidos.",
    image: "bg-produccion",
    rotation: "rotate-12",
    textPosition: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ",
  },
  {
    text: "Gestión organizativa y planificación participativa",
    image: "bg-gestion",
    rotation: "-rotate-12",
    textPosition: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ",
  },
];

export default function LineasTrabajo() {
  return (
    <section className="bg-[url('/img/bg-lineas.png')] bg-cover bg-center h-screen relative min-h-screen grid grid-cols-1 md:grid-cols-2 text-center overflow-hidden pt-16">
      <div className="min-h-full">
        <div className=" text-white relative">
          <Image
            src="/img/bg-lineas-de-trabajo.png"
            alt="ipen logo"
            width={0}
            height={0}
            className="h-full w-auto md:w-10/12 m-auto"
            sizes="100vw"
          ></Image>
          <div className="absolute px-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h6 className="text-5xl font-extrabold text-shadow-lg/30">
              <span className="text-3xl">Nuestras</span>
              <br />
              Líneas de trabajo
            </h6>
            <div className=" mt-4 flex flex-col gap-5">
              <Button>Quiero ser parte</Button>
              <Button>Recursos para escritores</Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="min-h-full grid grid-cols-1 md:grid-cols-2 gap-y-12 items-center">
        {lineas.map((linea, idx) => (
          <div className={`relative ${linea.rotation}`} key={idx}>
            <Image
              src={`/img/${linea.image}.png`}
              alt="ipen logo"
              width={0}
              height={0}
              className="h-full w-10/12 m-auto"
              sizes="100vw"
            ></Image>
            <div className={`absolute text-lg ${linea.textPosition}`}>
              {linea.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
