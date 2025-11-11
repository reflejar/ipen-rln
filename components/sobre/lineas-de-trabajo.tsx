import Image from "next/image";
import { Button } from "../ui/button";

const lineas = [
  {
    text: "Formación integral <br/>en comunicaciones, <br/>periodismo y liderazgo",
    image: "bg-formacion",
    rotation: "-rotate-12",
    textPosition: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-10",
  },
  {
    text: "Acompañamiento <br/>y comunidad <br/>de cuidado",
    image: "bg-acompaniamiento",
    rotation: "rotate-12",
    textPosition: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  pb-10",
  },
  {
    text: "Producción <br/> colectiva <br/>y colaborativa <br/>de contenidos.",
    image: "bg-produccion",
    rotation: "rotate-12",
    textPosition: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-14",
  },
  {
    text: "Gestión <br/>organizativa y <br/>planificación <br/>participativa",
    image: "bg-gestion",
    rotation: "-rotate-12",
    textPosition: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ",
  },
];

export default function LineasTrabajo() {
  return (

    <section className="bg-[url('/img/bg-lineas-mobile.png')] md:bg-[url('/img/bg-lineas.png')] bg-cover bg-center h-screen relative min-h-screen grid grid-cols-1 md:grid-cols-12 text-center overflow-hidden pt-16">
      <div className="min-h-full flex items-center justify-center col-span-5">
        <div className=" text-white relative bg-[url('/img/bg-lineas-de-trabajo.png')] py-40 bg-cover bg-no-repeat bg-center">

          <div className="px-20 ">
            <h6 className="text-5xl font-extrabold text-shadow-lg/30 ">
              <span className="text-3xl">Nuestras</span>
              <br />
              Líneas de <br /> trabajo
            </h6>
            <div className=" mt-4 flex flex-col gap-5">
              <Button>Quiero ser parte</Button>
              <Button>Recursos para escritores</Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="hidden bg-[url('/img/bg-produccion.png')]"></div>
      <div className="hidden bg-[url('/img/bg-gestion.png')]"></div>
      <div className="hidden bg-[url('/img/bg-formacion.png')]"></div>
      <div className="hidden bg-[url('/img/bg-acompaniamiento.png')]"></div>
      <div className="min-h-full grid grid-cols-1 md:grid-cols-2 gap-y-12 items-center col-span-7">
        {lineas.map((linea, idx) => (
          <div
            className={`relative min-h-full flex p-32 md:p-0 items-center bg-[url('/img/${linea.image}.png')] bg-[auto_100%] md:bg-[auto_60%] bg-no-repeat bg-center ${linea.rotation}`}
            key={idx}
          >
            <div
              className={`absolute text-lg font-bold ${linea.textPosition} `}
              dangerouslySetInnerHTML={{ __html: linea.text }}
            ></div>

          </div>
        ))}
      </div>
    </section>
  );
}
