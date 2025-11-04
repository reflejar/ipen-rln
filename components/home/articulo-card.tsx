// components/ArticleCard.jsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Article = {
  content: any;
  slug: string;
  title: string;
  description: string;
  image: string;
};

interface ArticleCardProps {
  article: Article;
  idx: number;
}

export default function ArticleCard({ article, idx }: ArticleCardProps) {
  return (
    <Card
      className="w-full p-0 flex flex-col-reverse md:flex-row overflow-hidden  hover:z-10 opacity-80 scale-90 hover:scale-100 hover:opacity-100"
      key={article.slug}
    >
      <CardHeader className="md:w-1/2 justify-center items-start">
        <CardTitle className="text-start">{article.content.Title}</CardTitle>
        <CardDescription className="text-start">
          {article.content.Brief}
        </CardDescription>
        <Button variant="blue" asChild>
          <Link href={`articulos/${article.slug}`}>LEER ARTICULO</Link>
        </Button>
      </CardHeader>
      <CardContent className="p-0 md:w-1/2">
        <div className="rounded-t-md">
          <Image
            width={0}
            height={0}
            className="w-full"
            sizes="100vw"
            src={article.content.Header?.filename || "/img/noFoundImage.webp"}
            alt={article.slug}
          />
        </div>
      </CardContent>
    </Card>
  );
}
