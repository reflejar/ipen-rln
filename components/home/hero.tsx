import Image from "next/image";
import { Highlighter } from "../ui/highlighter";

export default function Hero() {
  return (
    <section className="bg-[url('/img/bg-hero_mobile.webp')] md:bg-[url('/img/bg-hero.webp')] bg-cover bg-center h-screen relative min-h-screen flex md:items-center justify-center overflow-hidden pt-16">
      {/* Background Geometric Shapes */}
      {/* Content */}

      <div className="relative z-10 w-full xl:w-10/12 max-w-7xl mx-auto px-3 sm:px-6 xl:px-0">
        <div className="flex my-10 xl:my-0 min-h-full md:min-h-0">
          <div className="bg-[url('/img/papel-hero-home_mobile.webp')] xl:bg-[url('/img/papel-hero-home.webp')] w-full md:w-7/12 bg-contain bg-no-repeat pt-20 pb-28 md:pt-32 pl-4 xl:pl-10 xl:pt-32 xl:pb-48">
            <div className="text-2xl sm:text-2xl xl:text-4xl w-10/12 ">
              <h1 className="leading-tight mb-2">
                Jóvenes <span className="text-violet-600"></span>
              </h1>
              <h2 className="text-blue-500 mb-2">
                Combatiendo <br />
                la desinformación
              </h2>

              <h3 className=" mb-6">
                <span className="highlight highlight-[#F9F90E]">
                  Con periodismo
                </span>
                <br />
                <span className="highlight highlight-[#F9F90E]">
                  comunitario
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/img/hero_Image.webp"
        alt="ipen logo"
        width={0}
        height={0}
        className="absolute z-10 h-[50vh] md:h-[auto] w-auto max-w-[200%] md:w-10/12 xl:w-9/12 right-1/2 translate-x-1/2 bottom-0 translate-y-1/3 md:right-0 md:translate-x-0 md:bottom-0 md:translate-y-0"
        sizes="100vw"
      ></Image>
    </section>
  );
}
