import Image from "next/image";
import { Button } from "../ui/button";

const lineas = [
  {
    text: "Formación integral en comunicaciones, periodismo y liderazgo",
    image: "bg-formacion",
    rotation: "-rotate-12",
    textPosition: "pt-10 px-10",
  },
  {
    text: "Acompañamiento y comunidad de cuidado",
    image: "bg-acompaniamiento",
    rotation: "rotate-12",
    textPosition: "pb-20 md:pb-12 px-10",
  },
  {
    text: "Producción colectiva  y colaborativa de contenidos.",
    image: "bg-produccion",
    rotation: "rotate-12",
    textPosition: " pt-14 md:pt-10 px-10",
  },
  {
    text: "Gestión organizativa y planificación participativa",
    image: "bg-gestion",
    rotation: "-rotate-12",
    textPosition: "p-10",
  },
];

export default function LineasTrabajo() {
  return (
    <section className="bg-[url('/img/bg-lineas.webp')] bg-cover bg-center h-screen relative min-h-screen grid grid-cols-1 md:grid-cols-2 text-center overflow-hidden pt-16">
      <div className="min-h-full">
        <div className=" text-white relative bg-[url('/img/bg-lineas-de-trabajo.webp')] py-40 bg-cover bg-no-repeat bg-center">
          {/* <Image
            src="/img/bg-lineas-de-trabajo.webp"
            alt="ipen logo"
            width={0}
            height={0}
            className="h-full w-auto md:w-10/12 m-auto"
            sizes="100vw"
          ></Image> */}
          <div className="px-20 ">
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
      <div className="hidden bg-[url('/img/bg-produccion.webp')]"></div>
      <div className="hidden bg-[url('/img/bg-gestion.webp')]"></div>
      <div className="hidden bg-[url('/img/bg-formacion.webp')]"></div>
      <div className="hidden bg-[url('/img/bg-acompaniamiento.webp')]"></div>
      <div className="min-h-full grid grid-cols-1 md:grid-cols-2 gap-y-12 items-center">
        {lineas.map((linea, idx) => (
          <div
            className={`relative min-h-full flex p-10 items-center bg-[url('/img/${linea.image}.webp')] bg-[auto_100%] md:bg-[auto_70%] bg-no-repeat bg-center ${linea.rotation}`}
            key={idx}
          >
            {/* <Image
              src={`/img/${linea.image}.webp`}
              alt="ipen logo"
              width={0}
              height={0}
              className="h-full w-10/12 m-auto"
              sizes="100vw"
            ></Image> */}
            <div className={`text-lg ${linea.textPosition}`}>{linea.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
