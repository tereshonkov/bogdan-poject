import Slider from "./Slider";
import Image from "next/image";

export default function Foryou() {
  return (
    <section className="relative py-[72px] flex flex-col items-center gap-8">
      <Image
        width={335}
        height={137}
        src="/Foryou/foryou-bables.png"
        alt="bables"
        className="absolute top-[80px] left-[15px] -z-10"
      />
      <h2 className="[font-family:var(--soyuz)] text-(--whites) text-[40px] text-center font-bold max-w-[335px]">
        Это для тебя, если ты:
      </h2>
      <div className="absolute top-[110px] left-1/2 -translate-x-1/2 w-[295px] h-[280px] rounded-full bg-[rgba(217,217,217,0.15)] filter blur-[50px]"></div>
      <Slider />
    </section>
  );
}
