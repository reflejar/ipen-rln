import Hero from "@/components/articulos/Hero";
import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";

export default async function Articulos() {
  const data = await fetchData();

  return (
    <div className="md:pt-[calc(theme(height.nav)+1.5rem)] pt-[calc(theme(height.navMobile)+1.5rem)] bg-[url('/img/bg-articulos.png')] bg-contain bg-no-repeat bg-top">
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
