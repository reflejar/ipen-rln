"use client";
import Image from "next/image";
import { BlurFade } from "../components/ui/blur-fade";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingProvider({
  children,
  minLoadingTime = 3000,
}: {
  children: React.ReactNode;
  minLoadingTime?: number;
}) {
  const [loading, setLoading] = useState(true);
  const [loadingChildrens, setLoadingChildrens] = useState(false);
  const [loadingCookie, setLoadingCookie] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const setCookie = (
      name: string,
      value: string | number | boolean,
      days: number
    ) => {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + days);
      document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    };

    const getCookie = (name: string) => {
      if (typeof document === "undefined") return null;
      const cookies = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`));
      return cookies ? cookies.split("=")[1] : null;
    };

    const timeout = setTimeout(() => {
      setLoading(false);
      setCookie("loading", true, 1);
    }, minLoadingTime);

    const timeoutChildrens = setTimeout(() => {
      setLoadingChildrens(true);
    }, minLoadingTime - 50);

    setLoadingCookie(getCookie("loading"));

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeoutChildrens);
    };
  }, [minLoadingTime]);

  // 🔒 No se intenta acceder a cookies hasta que el useEffect corra en el cliente
  if (pathname === "/" && !loadingCookie) {
    return (
      <>
        <BlurFade
          direction="down"
          duration={1}
          className={`fixed top-0 transition-all ${
            loading ? "z-50 w-full" : "-z-50"
          }`}
        >
          <section
            className={`bg-[url('/img/bg-paisita.webp')] min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden relative transition-all duration-700 ${
              loading ? "opacity-100" : "opacity-0 blur-3xl"
            }`}
          >
            <Image
              src="/img/slashergif.webp"
              width={0}
              height={0}
              className="w-auto h-[100dvh]"
              sizes="100vw"
              alt="logo reescribiendo la narrativa"
            />
          </section>
        </BlurFade>
        {loadingChildrens && children}
      </>
    );
  }

  return <>{children}</>;
}
