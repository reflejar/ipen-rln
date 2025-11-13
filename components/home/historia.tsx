import Image from "next/image";
import { Highlighter } from "../ui/highlighter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Historia() {
  return (
    <section className="bg-[url('/img/bg-fondo-verde.webp')] min-h-screen bg-cover bg-center cursor-grab active:cursor-grabbing">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="pl-0">
            <Image
              src="/img/home-carousel.webp"
              alt="ipen logo"
              width={0}
              height={0}
              className="hidden lg:block w-full min-h-screen left-0 "
              sizes="100vw"
            ></Image>
            <Image
              src="/img/home-carousel-mobile.webp"
              alt="ipen logo"
              width={0}
              height={0}
              className="w-full min-h-screen left-0 lg:hidden"
              sizes="100vw"
            ></Image>
          </CarouselItem>
          <CarouselItem className="pl-0">
            <Image
              src="/img/home-carousel-text-mobile.webp"
              alt="ipen logo"
              width={0}
              height={0}
              className="w-full min-h-screen left-0 lg:hidden"
              sizes="100vw"
            ></Image>
            <Image
              src="/img/home-carousel-text.webp"
              alt="ipen logo"
              width={0}
              height={0}
              className="hidden lg:block w-full min-h-screen left-0 "
              sizes="100vw"
            ></Image>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-5" />
        <CarouselNext className="right-5" />
      </Carousel>
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center">
          <div className="flex items-center justify-center h-[60vh] md:w-[60vw]">
            <div className="h-full bg-cover bg-center rounded-lg p-8 flex flex-col font-medium">
              <p className="mt-20 text-lg text-gray-800">
                En 2018, una crisis socioeconómica en Nicaragua <br />
                obligó a miles de jóvenes a abandonar sus estudios, <br />
                sus hogares y su país.
              </p>
              <p className="mt-4 text-lg text-gray-800">
                Desde entonces, enfrentan un desafío doble: <br />
                <b className="font-extrabold">
                  reconstruir sus vidas mientras lidian con los{" "}
                </b>{" "}
                <br />
                <b className="font-extrabold">
                  <Highlighter action="highlight" color="#F9F90E">
                    prejuicios
                  </Highlighter>{" "}
                  y narrativas negativas
                  <Highlighter action="highlight" color="#F9F90E">
                    alimentadas por
                  </Highlighter>
                </b>{" "}
                <b className="font-extrabold">
                  <Highlighter action="highlight" color="#F9F90E">
                    la desinformación.
                  </Highlighter>
                </b>
              </p>
              <p className="mt-4 text-lg text-gray-800">
                En medio de esas dificultades, sus historias resisten <br />
                y se convierten en testimonio vivo de dignidad y <br />
                perseverancia.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
