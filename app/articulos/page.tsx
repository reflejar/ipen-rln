import Hero from "@/components/articulos/Hero";
import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";

export default async function Articulos() {
  const data = await fetchData();

  if (data.data?.stories.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">
          No hay artículos cargados
        </h2>
        <p className="text-lg text-gray-600 max-w-md">
          Todavía no se publicaron historias. Volvé pronto para ver las
          novedades.
        </p>
      </section>
    );
  }

  return (
    <div className="md:pt-[calc(theme(height.nav)+1.5rem)] pt-[calc(theme(height.navMobile)+1.5rem)] bg-[url('/img/bg-articulos.webp')] bg-contain bg-no-repeat bg-[center_top_-2rem] md:bg-[center_top_-11rem] lg:bg-[center_top_-16rem] xl:bg-[center_top_-25rem] 2xl:bg-[center_top_-30rem]">
      <Hero articles={data.data.stories} />
    </div>
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
