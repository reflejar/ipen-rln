import ContraNarrativa from "@/components/sobre/contra-narrativa";
import LineasTrabajo from "@/components/sobre/lineas-de-trabajo";
import Objetivos from "@/components/sobre/objetivos";
import PorQue from "@/components/sobre/porque";
import QueEs from "@/components/sobre/quees";

export default function Page() {
  return (
    <div>
      <QueEs />
      <PorQue />
      <ContraNarrativa />
      <Objetivos />
      <LineasTrabajo />
    </div>
  );
}
