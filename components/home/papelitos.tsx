import Image from "next/image";

const papeles = [
  {
    text: "sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  },
  {
    text: "m Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable En",
  },
  {
    text: "model text, and a search for 'lorem ipsum' will uncover many web sites still in their i",
  },
  {
    text: "of text. All the Lorem Ipsum generators on the Internet tend to repeat predefin",
  },
];

export default function Papelitos() {
  return (
    <section className="bg-[url('/img/bg-fondo.png')]   bg-cover bg-center">
      {/* Background Geometric Shapes */}
      <div className="bg-[url('/img/mancha-1.png')] bg-no-repeat bg-left bg-[length:50%] relative h-[100dvh] flex items-center justify-between overflow-hidden pt-16">
        {/* Content */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center h-[100%] w-full pt-16 flex flex-col justify-between gap-4">
          <div className="grid gap-6 md:gap-12 items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Esta historia no la que te contaron...
            </h1>
          </div>

          <div className="flex items-center justify-center h-[50dvh] relative">
            {papeles.map((papel, idx) => (
              <div
                className="absolute -bottom-56 transition hover:-translate-y-60 hover:z-30"
                style={{
                  left: `${(idx / 7) * 100}%`, // distribuye entre 0% y 100%
                }}
              >
                <div className="relative w-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl w-9/12">
                    {papel.text}
                  </div>
                  <Image
                    src={`/img/papel${idx + 1}.png`}
                    alt="papel"
                    width={0}
                    height={0}
                    className="w-full top-0 left-0"
                    sizes="100vw"
                  ></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
