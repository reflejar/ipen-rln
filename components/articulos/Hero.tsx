import getArticleMetadata from "@/utils/getArticleMetadata";
import CardArticle from "./CardArticle";

export default function Hero() {
  const articleMetadata = getArticleMetadata("articulos");
  return (
    <section className="h-screen relative min-h-screen flex justify-center overflow-hidden pt-8">
      {/* Background Geometric Shapes */}
      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Text Content */}
          <div className="text-center lg:text-left flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl leading-tight mb-4 text-center">
              Articulos
            </h1>
            <p className="text-4xl md:text-4xl font-semibold mb-8 max-w-4xl text-center mx-auto lg:mx-0">
              Historias reales que devuelven a las personas su voz y
              complejidad.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {articleMetadata.map((article) => (
            <CardArticle key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
