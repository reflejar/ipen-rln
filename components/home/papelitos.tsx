import { BlurFade } from "../ui/blur-fade";
import { HyperText } from "../ui/hyper-text";

export default function Statistics2() {
  return (
    <div className=" flex flex-col justify-between gap-4  px-10">
      <div className="">
        <BlurFade
          inView
          duration={1}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          <h2>Miles de vidas interrumpidas</h2>
        </BlurFade>
      </div>

      <div className="flex items-center justify-center h-[50dvh]">
        <div className="grid grid-cols-1 w-full">
          <BlurFade inView duration={1} delay={1}>
            <div className="flex flex-col  min-h-full rounded-lg text-xl font-semibold p-8">
              <div className="text-2xl md:text-5xl font-extralight ">
                <h4 className="font-bold text-yellow-500">
                  <HyperText
                    // animateOnHover={false}
                    duration={6000}
                    startOnView
                    delay={1000}
                    characterSet={[
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "0",
                    ]}
                    className="inline text-2xl md:text-5xl "
                  >
                    + 20000
                  </HyperText>
                </h4>
                Nicaragüenses buscando
                <br /> refugio y protección
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
