import Image from "next/image";

export default function Paisita() {
  return (
    <section className="bg-cover bg-center ">
      <Image
        src="https://image.cevadev.com/xExo0/HaXaJuYe61/raw.gif"
        alt="ipen logo"
        width={0}
        height={0}
        className="md:w-full w-auto object-cover min-h-[50vh] !md:min-h-screen left-0"
        sizes="100vw"
      ></Image>
    </section>
  );
}
