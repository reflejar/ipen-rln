import Markdown from "markdown-to-jsx";
import getArticleMetadata from "@/utils/getArticleMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";

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
    <div className="md:pt-[calc(theme(height.nav)+1.5rem)] pt-[calc(theme(height.navMobile)+1.5rem)] bg-[url('/img/bg-papel-madera.png')] bg-cover bg-center">
      <article className="h-screen relative min-h-screen  overflow-hidden pt-8 w-10/12 mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 max-w-4xl text-center mx-auto lg:mx-0">
          {article.data.title}
        </h1>
        <Markdown className="prose lg:prose-xl">{article.content}</Markdown>
      </article>
    </div>
  );
}
