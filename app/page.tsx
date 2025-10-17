import Hero from "@/components/home/hero";
import Paisita from "@/components/home/paisita";
import Historia from "@/components/home/historia";
import Aulas from "@/components/home/aulas";

import Papelitos from "@/components/home/papelitos";
import Articulos from "@/components/home/articulos";

export default function Home() {
  return (
    <div>
      <Hero />
      <Paisita />
      <Historia />
      <Aulas />
      {/* <Papelitos /> */}
      <Articulos />
    </div>
  );
}
