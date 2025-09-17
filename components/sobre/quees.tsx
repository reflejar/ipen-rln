import { Button } from "../ui/button";

export default function QueEs() {
  return (
    <section
      className="bg-[url('/img/logo-papel.png')] bg-no-repeat bg-right"
      style={{ backgroundSize: "40%" }}
    >
      {/* Background Geometric Shapes */}
      <div className="bg-[url('/img/circulos.png')] bg-cover bg-opa bg-center h-screen relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Geometric Shapes */}
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left col-span-2">
              <h1 className="text-1xl md:text-2xl lg:text-2xl font-bold leading-tight mb-4">
                ¿Qué es?
              </h1>
              <p className="text-3xl md:text-4xl mb-8 max-w-2xl mx-auto lg:mx-0">
                Reescribiendo la Narrativa es un espacio seguro donde jóvenes
                nicaragüenses en movilidad humana ejercen el periodismo como
                herramienta de cambio, combatiendo la desinformación y
                construyendo narrativas propias.
              </p>
              <div className="flex gap-3 w-5/6">
                <Button className="w-full" variant="blue">
                  ¿Porque “Reescribir la narrativa?”
                </Button>
                <Button className="w-full" variant="outline">
                  Recursos para escritores
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
