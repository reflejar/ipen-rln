import Markdown from "markdown-to-jsx";
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
import {
  getStoryblokApi,
  ISbStoriesParams,
  ISbStory,
  ISbStoryParams,
  renderRichText,
} from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Content from "@/components/articulos/Content";
import ContentStoryblok from "@/components/articulos/Contentstoryblok";

export async function generateStaticParams() {
  const articles = await fetchData();
  return articles.data.stories.map((article: any) => {
    return { slug: article.slug };
  });
}

export default async function Articulo({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchArticleBySlug(params.slug);
  const { name, slug, content, first_published_at, tag_list } = data.data.story;

  return (
    <div className="md:pt-[calc(theme(height.nav)+3rem)] pt-[calc(theme(height.navMobile)+1.5rem)] bg-[url('/img/bg-articulo.png')] bg-contain bg-no-repeat bg-top">
      <div className="w-10/12 mx-auto mt-5 mb-6">
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
        src={content.Header.filename}
        alt={slug}
      />
      <article className="h-screen relative min-h-screen  overflow-hidden pt-8 w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-between">
        <div className="w-9/12">
          <h1 className="text-2xl md:text-3xl font-semibold mb-8 max-w-4xl mx-auto lg:mx-0">
            {content.Title}
          </h1>
          <Content document={content.Body} />
          {/* <ContentStoryblok content={content} /> */}
        </div>
        <div className="md:text-right flex flex-col gap-4">
          <div className="mb-3">
            <p className="uppercase font-bold mb-2">author</p>
            <p className="bg-violet-300 px-3 py-1 rounded-full text-center">
              {content.authors}
            </p>
          </div>
          <div className="mb-3">
            <p className="uppercase font-bold mb-2">fecha</p>
            <p>
              {first_published_at
                ? new Intl.DateTimeFormat("es-ES", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(first_published_at))
                : "Fecha desconocida"}
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
                )}&text=${encodeURIComponent(content.Title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition "
              >
                <Twitter className="w-6 h-6" color="transpatent" fill="white" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  `https://reescribiendonarrativas.org/articulos/${slug}`
                )}&title=${encodeURIComponent(content.Title)}`}
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

const fetchArticleBySlug = async (slug: string): Promise<ISbStory> => {
  const storyblokApi = getStoryblokApi();

  let sbParams: ISbStoryParams = { version: "published" };
  const article = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  if (!article) notFound();
  return article;
};

const fetchData = async () => {
  const storyblokApi = getStoryblokApi();

  let sbParams: ISbStoriesParams = {
    version: "published",
    excluding_fields: "body,_editable,_uid",
    sort_by: "created_at:desc",
  };
  return await storyblokApi.get(`cdn/stories`, sbParams);
};

// const mapAuthors = (authors: any) => {
//     let authorsString = ''
//     authors.forEach((author: { name: string }, i: number) => {
//         if (authors.length > 1 && i + 2 < authors.length) authorsString = `${authorsString}${author.name}, `
//         else if (authors.length > 1 && i + 1 < authors.length) authorsString = `${authorsString}${author.name} `
//         else if (authors.length > 1) authorsString = `${authorsString}y ${author.name}`
//         else authorsString = `${authorsString}${author.name}`
//     })
//     return authorsString
// }

const formatDate = (date: string) => format(new Date(date), "dd/MM/yyyy");
