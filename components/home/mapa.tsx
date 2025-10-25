"use client";
import { useEffect, useRef, useState } from "react";

export default function FullscreenVideoSection() {
  const [visible, setVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(1);
  const [sectionHeight, setSectionHeight] = useState(800);
  const sectionRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video1MobileRef = useRef(null);
  const video2MobileRef = useRef(null);

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
    setSectionHeight(video1Ref.current?.offsetHeight);
    if (window.innerWidth < 1024)
      setSectionHeight(video1MobileRef.current?.offsetHeight);
    if (visible) {
      video1Ref.current?.play();
      video1MobileRef.current?.play();
    } else {
      video1Ref.current?.pause();
      video1MobileRef.current?.pause();

      video2Ref.current?.pause();
      video2MobileRef.current?.pause();
      setCurrentVideo(1);
    }
  }, [visible]);

  const handleVideoEnd = () => {
    setCurrentVideo(2);
    setTimeout(() => {
      video2Ref.current?.play();
      video2MobileRef.current?.play();
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full  overflow-hidden"
      style={{ height: sectionHeight + "px" }}
    >
      <video
        ref={video1Ref}
        autoPlay={false}
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className={`hidden lg:block ${
          currentVideo === 1
            ? "w-full opacity-100 max-h-[5000px]"
            : "opacity-0 max-h-0"
        }`}
      >
        <source src="/img/gifs/mapa1.webm" type="video/webm" />
      </video>
      <video
        ref={video1MobileRef}
        autoPlay={false}
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className={` lg:hidden mx-auto ${
          currentVideo === 1
            ? "min-h-sreen opacity-100 max-h-[5000px]"
            : "opacity-0 max-h-0"
        }`}
      >
        <source src="/img/gifs/mapa1-mobile.webm" type="video/webm" />
      </video>

      <video
        ref={video2Ref}
        autoPlay={false}
        muted
        playsInline
        preload="auto"
        className={` hidden lg:block  ${
          currentVideo === 2
            ? "w-full opacity-100 max-h-[5000px]"
            : "opacity-0 max-h-0"
        }`}
      >
        <source src="/img/gifs/mapa2.webm" type="video/webm" />
      </video>
      <video
        ref={video2MobileRef}
        autoPlay={false}
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className={` lg:hidden mx-auto ${
          currentVideo === 2
            ? "min-h-sreen opacity-100 max-h-[5000px]"
            : "opacity-0 max-h-0"
        }`}
      >
        <source src="/img/gifs/mapa2-mobile.webm" type="video/webm" />
      </video>
    </section>
  );
}
