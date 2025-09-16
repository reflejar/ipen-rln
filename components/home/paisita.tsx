export default function Paisita() {
  return (
    <section className="bg-[url('/ipen-rln/img/bg-fondo.png')] bg-cover bg-center ">
      {/* Background Geometric Shapes */}
      <div className="bg-[url('/ipen-rln/img/bg-paisitas.png')] bg-cover bg-center h-screen relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-16 bg-[url('/ipen-rln/img/papel1.png')] h-full bg-contain bg-no-repeat bg-center ">
          <div className="grid gap-12 items-center ">
            <div className="flex items-center justify-center h-[60vh]">
              <div className="rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-gray-800">Paisita</h1>
                <p className="mt-4 text-lg text-gray-700">
                  Los nicas solo sirven para la construcción y el campo
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Si le va bien, fijo es porque anda en cosas raras
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
