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
    <section className="bg-[url('/img/bg-articulos-home.png')] bg-cover bg-center">
      {/* Background Geometric Shapes */}
      <div className="min-h-screen max-h-screen flex items-center justify-between overflow-hidden pt-32 md:py-16 ">
        {/* Background Geometric Shapes */}

        {/* Content */}
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-full flex flex-col justify-center gap-10">
          <h1 className="w-full mt-3 md:mt-10 text-4xl md:text-5xl font-bold text-gray-800 ">
            Historias reales con voz propia
          </h1>
          <Carousel
            opts={{
              align: "center",
            }}
            // orientation="vertical"
            className="w-full md:w-9/12 mx-auto cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-mt-1 h-[500px]">
              {data.data.stories.map((article: any, idx: any) => (
                <CarouselItem
                  key={idx}
                  className=" basis-10/12 md:basis-1/3 flex items-center"
                >
                  <CardArticle article={article} className="" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-5 " />
            <CarouselNext className="right-5 " />
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
