import Markdown from "markdown-to-jsx";
import getArticleMetadata from "@/utils/getArticleMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import {
  ArrowLeft,
  Facebook,
  FacebookIcon,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function getArticleContent(slug: string) {
  const folder = "articulos/";
  const file = folder + slug + ".md";
  const content = fs.readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const articles = getArticleMetadata("articulos");
  return articles.map((article) => ({
    slug: article.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const id = params?.slug ? " · " + params?.slug : "";
  return {
    title: " Reescribiendo Narrativas " + id.replace("_", " "),
  };
}

export default function Articulo(props: { params: { slug: string } }) {
  const slug = props.params.slug;
  const article = getArticleContent(slug);

  return (
    <div className="md:pt-[calc(theme(height.nav)+1.5rem)] pt-[calc(theme(height.navMobile)+1.5rem)] bg-[url('/img/bg-articulo.png')] bg-contain bg-no-repeat bg-top">
      <div className="w-10/12 mx-auto my-3">
        <Button
          variant="outline"
          className="top-20 left-4 z-20 rounded-full"
          asChild
        >
          <Link href="/articulos">
            <ArrowLeft size={15} className="mr-2" /> Volver a Artículos
          </Link>
        </Button>
      </div>
      <Image
        width={0}
        height={0}
        className="w-10/12 mx-auto rounded-3xl max-h-64 object-cover"
        sizes="100vw"
        src={article.data.image}
        alt={article.data.slug}
      />
      <article className="h-screen relative min-h-screen  overflow-hidden pt-8 w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-between">
        <div className="w-9/12">
          <h1 className="text-2xl md:text-3xl font-semibold mb-8 max-w-4xl mx-auto lg:mx-0">
            {article.data.title}
          </h1>
          <Markdown className="prose text-black text-justify">
            {article.content}
          </Markdown>
        </div>
        <div className="md:text-right flex flex-col gap-4">
          <div className="mb-3">
            <p className="uppercase font-bold mb-2">author</p>
            <p className="bg-violet-300 px-3 py-1 rounded-full text-center">
              {article.data.author}
            </p>
          </div>
          <div className="mb-3">
            <p className="uppercase font-bold mb-2">fecha</p>
            <p>
              {new Intl.DateTimeFormat("es-ES", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(article.data.date))}
            </p>
          </div>
          <div className="mb-3">
            <p className="uppercase font-bold mb-2">compartir</p>
            <div className="flex gap-4 justify-start md:justify-end">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://reescribiendonarrativas.org/articulos/${slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition "
              >
                <Facebook
                  className="w-6 h-6"
                  color="transpatent"
                  fill="white"
                />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `https://reescribiendonarrativas.org/articulos/${slug}`
                )}&text=${encodeURIComponent(article.data.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition "
              >
                <Twitter className="w-6 h-6" color="transpatent" fill="white" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  `https://reescribiendonarrativas.org/articulos/${slug}`
                )}&title=${encodeURIComponent(article.data.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition "
              >
                <Linkedin
                  className="w-6 h-6"
                  color="transpatent"
                  fill="white"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
