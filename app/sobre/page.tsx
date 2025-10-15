import ContraNarrativa from "@/components/sobre/contra-narrativa";
import LineasTrabajo from "@/components/sobre/lineas-de-trabajo";
import Objetivos from "@/components/sobre/objetivos";
import PorQue from "@/components/sobre/porque";
import HeroAbout from "@/components/sobre/hero";

export default function Page() {
  return (
    <div>
      <HeroAbout />
      <PorQue />
      <ContraNarrativa />
      {/* <Objetivos /> */}
      <LineasTrabajo />
    </div>
  );
}
