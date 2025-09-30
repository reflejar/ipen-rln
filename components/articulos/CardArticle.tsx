import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function CardArticle({ article }: { article: any }) {
  return (
    <Card
      className="flex flex-col overflow-hidden border-black rounded-xl shadow-[5px_5px_0px_rgba(0,0,0,0.9)] hover:shadow-lg transition-shadow bg-white"
      key={article.slug}
    >
      <CardHeader className="flex-1  p-0">
        <Link href={`articulos/${article.slug}`}>
          <div className="rounded-t-md mb-2">
            <Image
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              src={article.image}
              alt={article.slug}
            />
          </div>
          <div className="p-6 pt-1">
            <p className="text-right font-light text-sm">
              {" "}
              {new Intl.DateTimeFormat("es-AR").format(new Date(article.date))}
            </p>
            <CardTitle className="mt-3">{article.title}</CardTitle>
            <CardDescription>{article.description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      <CardFooter>
        <Badge variant="secondary">{article.author}</Badge>
      </CardFooter>
    </Card>
  );
}
