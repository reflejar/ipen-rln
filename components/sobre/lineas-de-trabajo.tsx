import { Button } from "../ui/button";

const lineas = [
  {
    text: "Formación integral en comunicaciones, periodismo y liderazgo",
    color: "text-amber-600",
  },
  {
    text: "Producción colectiva y colaborativa de contenidos.",
    color: "text-blue-600",
  },
  { text: "Acompañamiento y comunidad de cuidado", color: "text-violet-300" },
  {
    text: "Gestión organizativa y planificación participativa",
    color: "text-yellow-300",
  },
];

export default function LineasTrabajo() {
  return (
    <section className="bg-[url('/img/bg-lineas.png')] bg-cover bg-center h-screen relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-4 text-center">
          Líneas de trabajo
        </h1>
        <div className="w-10/12 mx-auto grid lg:grid-cols-4 gap-12 items-center mb-20">
          {/* Text Content */}
          {lineas.map((linea, idx) => (
            <div className="text-center lg:text-left ">
              <p
                className={`bg-[url('/img/frame.png')] px-10 py-16 text-5xl md:text-6xl text-center mb-8 max-w-2xl mx-auto lg:mx-0 font-extrabold ${linea.color}`}
                style={{ backgroundSize: "100% 100%" }}
              >
                {idx + 1}
              </p>
              <p>{linea.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 w-3/6 mx-auto">
          <Button className="w-full" variant="blue">
            Quiero ser parte
          </Button>
          <Button className="w-full" variant="outline">
            Recursos para escritores
          </Button>
        </div>
      </div>
    </section>
  );
}
