import Hero from "@/components/home/hero";
import Paisita from "@/components/home/paisita";
import Historia from "@/components/home/historia";
import Aulas from "@/components/home/aulas";
import Vidas from "@/components/home/vidas";
import Papelitos from "@/components/home/papelitos";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Paisita />
      <Historia />
      <Aulas />
      <Vidas />
      <Papelitos />
    </div>
  );
}
