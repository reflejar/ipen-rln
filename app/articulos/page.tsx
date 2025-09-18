import Hero from "@/components/articulos/Hero";

export default function Articulos() {
  return (
    <div className="md:pt-[calc(theme(height.nav)+1.5rem)] pt-[calc(theme(height.navMobile)+1.5rem)] bg-[url('/img/bg-papel-madera.png')] bg-cover bg-center">
      <Hero />
    </div>
  );
}
