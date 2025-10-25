import Slider from "./Slider";
import Image from "next/image";

export default function Foryou() {
  return (
    <section className="relative py-[72px] flex flex-col items-center gap-8">
      <picture className="absolute top-20 left-[15px] -z-10 md:top-30 md:left-0">
        <source
          srcSet="/Foryou/md/foryou-bables.png"
          media="(min-width: 768px)"
        />
        <Image
          width={335}
          height={137}
          src="/Foryou/foryou-bables.png"
          alt="bables"
          className="w-[335px] h-[137px] object-cover md:w-[720px] md:h-[295px]"
        />
      </picture>
      <h2 className="[font-family:var(--soyuz)] text-(--whites) text-[40px] text-center font-bold w-[335px] md:text-[60px] md:w-[630px]">
        Это для тебя, если ты:
      </h2>
      <div className="absolute top-[110px] left-1/2 -translate-x-1/2 w-[295px] h-[280px] rounded-full bg-[rgba(217,217,217,0.15)] filter blur-[50px] md:w-[624px] md:h-[325px] md:blur-[150px] md:bg-[rgba(217,217,217,0.08)] md:top-[200px]"></div>
      <Slider />
    </section>
  );
}
