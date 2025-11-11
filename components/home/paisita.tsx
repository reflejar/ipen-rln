"use client";

import { useEffect, useRef, useState } from "react";

export default function Paisita() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Observar cuando la sección entra en pantalla
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      // Reproduce el primer video al entrar en pantalla
      videoRef.current?.play();
    } else {
      // Pausa y resetea ambos si sale de pantalla
      videoRef.current?.pause();
      // videoRef.current.currentTime = 0;
    }
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="bg-[url('/img/bg-paisita.webp')] bg-cover min-h-screen bg-center flex justify-center items-center "
    >
      <video
        ref={videoRef}
        autoPlay={false}
        muted
        playsInline
        className="w-11/12 md:w-6/12  pt-16 object-cover "
      >
        <source
          src="https://image.cevadev.com/xExo0/waRikucA33/raw.webm"
          type="video/webm"
        />
      </video>
    </section>
  );
}

//md:w-full w-auto min-h-[50vh] !md:min-h-screen

/* <Image
        src="https://image.cevadev.com/xExo0/waRikucA33/raw.webm"
        alt="paisitas"
        width={0}
        height={0}
        className="w-11/12 md:w-6/12 pt-16 object-cover left-0"
        sizes="100vw"
      ></Image> */
