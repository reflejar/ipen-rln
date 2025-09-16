import Hero from "@/components/articulos/Hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getArticleMetadata from "@/utils/getArticleMetadata";

export default function Articulos() {
  return (
    <div className="md:pt-[calc(theme(height.nav)+1.5rem)] pt-[calc(theme(height.navMobile)+1.5rem)] bg-[url('/ipen-rln/img/bg-papel-madera.png')] bg-cover bg-center">
      <Hero />
    </div>
  );
}
