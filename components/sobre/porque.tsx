export default function PorQue() {
  return (
    <section className="lg:bg-[url('/img/bg-porque.webp')] bg-cover bg-center min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden ">
      {/* Background Geometric Shapes */}
      {/* Content */}

      <div className="bg-[url('/img/bg-como-empezamos.webp')] lg:bg-none h-[50dvh] md:min-h-screen w-full lg:w-1/2 bg-cover bg-left flex flex-col md:pt-16">
        <div className="p-5 md:w-3/4 m-auto">
          <h1 className="text-4xl font-bold text-gray-800">
            Sobre el proyecto
          </h1>
          <h3>
            <b>¿Cómo empezamos?</b>
          </h3>
          <p className="mt-2 md:mt-10 text-sm md:text-lg text-gray-800">
            Reescribiendo la narrativa nace como{" "}
            <b>
              respuesta al deterioro en la libertad de prensa, el cierre de
              espacios cívicos, universidades y organizaciones{" "}
            </b>
            de la sociedad civil, así como al creciente desplazamiento forzado
            de jóvenes nicaragüenses hacia Costa Rica. Ante la <b>censura</b> ,
            la <b>criminalización del pensamiento </b>
            crítico y la <b>desinformación</b> que rodea la crisis sociopolítica
            de Nicaragua y los flujos migratorios, el proyecto tiene como
            objetivo <b>empoderar a jóvenes</b> desplazados brindándoles
            herramientas comunicativas y periodísticas que les permitan ejercer
            su derecho a informar, contar sus historias,{" "}
            <b>construir sus propias narrativas y combatir la desinformación</b>
            .
          </p>
        </div>
      </div>
      <div className="bg-[url('/img/bg-que-buscamos.webp')] lg:bg-none  h-[50dvh] md:min-h-screen w-full lg:w-2/3 bg-cover bg-right  flex flex-col md:pt-16">
        <div className="p-5 md:w-3/4 m-auto">
          <h3>
            <b>¿Qué buscamos?</b>
          </h3>
          <p className="mt-2 md:mt-10 text-sm md:text-lg text-gray-800">
            Se impulsa la creación de una <b>Red de Comunicadores Emergentes</b>
            , como producto estratégico con los siguientes objetivos y
            resultados esperados.{" "}
            <b>Fomentar la participación de jóvenes nicaragüenses</b> en
            actividades destinadas a difundir entre otros jóvenes inmigrantes en
            Costa Rica{" "}
            <b>
              el uso del periodismo comunitario como herramienta para combatir
              la desinformación sobre los procesos migratorios.
            </b>
          </p>
        </div>
      </div>
    </section>
  );
}
