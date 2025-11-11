import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CardArticle from "../articulos/CardArticle";
import { Button } from "../ui/button";

export default async function Articulos() {
  const data = await fetchData();

  return (
    <section className="bg-violet-300">
      {/* Background Geometric Shapes */}
      <div className="min-h-screen max-h-screen flex items-center justify-between overflow-hidden pt-32 md:py-16 ">
        {/* Background Geometric Shapes */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-full flex flex-col justify-center gap-10">
          <div className="grid gap-6 md:gap-12 items-center">
            <h1 className="mt-3 md:mt-10 text-4xl md:text-5xl font-bold text-gray-800">
              Historias reales con voz propia
            </h1>
          </div>
          <Carousel
            opts={{
              align: "center",
            }}
            // orientation="vertical"
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-mt-1 h-[500px]">
              {data.data.stories.map((article: any, idx: any) => (
                <CarouselItem key={idx} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <CardArticle article={article} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Button className="mx-auto mb-10" asChild>
            <a href="/articulos">VER TODOS LOS ARTICULOS</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const fetchData = async () => {
  const storyblokApi = getStoryblokApi();

  let sbParams: ISbStoriesParams = {
    version: "published",
    excluding_fields: "body,_editable,_uid",
    sort_by: "created_at:desc",
  };
  return await storyblokApi.get(`cdn/stories`, sbParams);
};
