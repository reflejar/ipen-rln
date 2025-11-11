import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4">
        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          <Link href="#" className="hover:text-gray-300">
            Inicio
          </Link>
          <Link href="/articulos" className="hover:text-gray-300">
            Artículos
          </Link>
          <Link href="/sobre" className="hover:text-gray-300">
            Sobre nosotros
          </Link>
          <Link
            href="https://form.jotform.com/252871988769079"
            target="_blank"
            className="hover:text-gray-300"
          >
            SUMATE
          </Link>
        </nav>

        {/* Proyecto */}
        <div className="text-center max-w-lg">
          <p className="mb-3 text-sm sm:text-base">
            Reescribiendo la Narrativa es un proyecto de
          </p>

          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex gap-4">
              <a href="https://www.ipuentes.org/" target="_blank">
                <Image
                  src="/img/ipen_logo.png"
                  alt="ipen logo"
                  width={0}
                  height={0}
                  className="w-auto max-h-20 left-0"
                  sizes="100vw"
                ></Image>
              </a>
              <Image
                src="/img/puentes_logo.png"
                alt="puzzle logo"
                width={0}
                height={0}
                className="w-auto max-h-20 left-0"
                sizes="100vw"
              />
            </div>
            <div className="border-t-2 pt-6 md:border-t-0 md:border-l-2 md:pl-6 md:pt-0 text-center">
              <p className=" text-sm text-gray-300">En colaboración con</p>

              <Image
                src="/img/pidc_logo.png"
                alt="ipdc logo"
                width={0}
                height={0}
                className="w-auto mx-auto max-h-32 left-0"
                sizes="100vw"
              ></Image>
            </div>
          </div>
        </div>

        {/* Derechos */}
        <p className="text-xs text-gray-400">
          Todos los derechos reservados 2025
        </p>

        <Link href="#">Política de privacidad</Link>
        <Link href="#">Términos y condiciones</Link>
      </div>
    </footer>
  );
}
