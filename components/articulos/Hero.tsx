import CardArticle from "./CardArticle";

import { ISbStoryData } from "@storyblok/react/rsc";

export default async function Hero({ articles }: { articles: ISbStoryData[] }) {
  const rowsOnThreeCols = Math.ceil(articles.length / 3);
  const rowsOnTwoCols = Math.ceil(articles.length / 2);

  const eventsArray = (rows: number, cols: number) => {
    let evArray: ISbStoryData[][] = [];
    let articlesAcc = 0;
    for (let i = 0; i < cols; i++) {
      evArray.push([]);
    }

    for (let r = 0; r < rows; r++) {
      for (let i = 0; i < cols; i++) {
        if (articles[articlesAcc]) {
          evArray[i].push(articles[articlesAcc]);
          articlesAcc++;
        } else break;
      }
    }
    return evArray;
  };

  return (
    <section className="h-screen relative min-h-screen flex justify-center overflow-hidden pt-16">
      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Text Content */}
          <div className="text-center lg:text-left flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-4xl font-semibold mb-8 max-w-4xl text-center mx-auto lg:mx-0">
              Historias reales que devuelven a las personas su voz y complejidad
            </h1>
          </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 max-w-[1152px] mx-auto justify-items-center">
          {eventsArray(rowsOnThreeCols, 3).map((col, i) => {
            return (
              <div key={"col" + i} className="grid gap-4 h-min max-w-sm">
                {col.map((article) => (
                  <CardArticle key={article.slug} article={article} />
                ))}
              </div>
            );
          })}
        </div>
        <div className="hidden lg:hidden md:grid md:grid-cols-2 gap-4 max-w-[768px] mx-auto">
          {eventsArray(rowsOnTwoCols, 2).map((col, i) => {
            return (
              <div key={"col" + i} className="grid gap-4 h-min max-w-sm">
                {col.map((article) => (
                  <CardArticle key={article.slug} article={article} />
                ))}
              </div>
            );
          })}
        </div>
        <div className="md:hidden grid gap-4 max-w-sm mx-auto">
          {articles.map((article) => (
            <CardArticle key={article.slug} article={article} />
          ))}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {articles.map((article) => (
            <CardArticle key={article.slug} article={article} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
