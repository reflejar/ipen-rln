"use client";
import { useEffect, useState } from "react";
import { BlurFade } from "../ui/blur-fade";
import Statistics2 from "./papelitos";
import Statistics from "./vidas";
import Image from "next/image";

export default function Mapa() {
  const [statisticsVisible, setStatisticsVisible] = useState(1);
  const [mapVisible, setMapVisible] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatisticsVisible((prev) => (prev === 1 ? 2 : 1));
      // setMapVisible((prev) => (prev === 1 ? 2 : 1));
      // if (mapVisible === 1) setTimeout(() => {}, 1500);
      // else setMapVisible((prev) => (prev === 1 ? 2 : 1));
    }, 8000);

    // Limpieza para evitar fugas de memoria o múltiples intervalos
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
      <div className="w-full md:w-2/5">
        {statisticsVisible === 1 ? <Statistics /> : <Statistics2 />}
      </div>
      <div className="w-full md:w-3/5" style={{ maxHeight: "100dvh" }}>
        <BlurFade inView duration={10}>
          <Image
            width={0}
            height={0}
            className="min-h-screen w-full"
            sizes="100vw"
            src="https://image.cevadev.com/xExo0/XipUsIhE19/raw.gif"
            alt="mapa Nicaragua"
          />
          {/* {statisticsVisible === 1 ? (
            <Image
              width={0}
              height={0}
              className="min-h-screen w-full"
              sizes="100vw"
              src="/img/gifs/Mapa1.gif"
              alt="mapa Nicaragua"
            />
          ) : (
            <Image
              width={0}
              height={0}
              className="min-h-screen w-full"
              sizes="100vw"
              src="/img/gifs/Mapa2.gif"
              alt="mapa Nicaragua"
            />
          )} */}
        </BlurFade>
      </div>
    </div>
  );
}
