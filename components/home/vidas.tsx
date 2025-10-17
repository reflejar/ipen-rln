import { BlurFade } from "../ui/blur-fade";
import { HyperText } from "../ui/hyper-text";

export default function Statistics() {
  return (
    <div className=" flex flex-col justify-between gap-4 px-10">
      <div className="">
        <BlurFade
          inView
          duration={1}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          <h2>Les robaron las aulas</h2>
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
                    duration={4000}
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
                    + 18000
                  </HyperText>
                </h4>
                estudiantes <br /> afectados
              </div>
            </div>
          </BlurFade>
          <BlurFade inView duration={1} delay={2}>
            <div className="flex flex-col  min-h-full rounded-lg text-xl font-semibold p-8">
              <div className="text-2xl md:text-5xl font-extralight ">
                <h4 className="font-bold text-blue-500">
                  <HyperText
                    // animateOnHover={false}
                    duration={4000}
                    startOnView
                    delay={2000}
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
                    +26
                  </HyperText>
                </h4>
                universidades <br /> cerradas
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
