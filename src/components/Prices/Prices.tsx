import Image from "next/image";
import Countdown from "./Countdown";
import SliderPrices from "./SliderPrices";

export default function Prices() {
    const targetTime = Date.now() + 4 * 60 * 60 * 1000;
  return (
    <section className="py-[72px] relative">
        <Image width={70} height={237} alt="boobles-left" src="/prices/boobles-1-price.png" className="absolute top-[165px] left-0"/>
        <Image width={96} height={293} alt="boobles-left" src="/prices/boobles-2-price.png" className="absolute top-[30px] right-0"/>
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[336px] h-[142px] rounded-full bg-[rgba(0,255,255,1)] filter blur-[100px] opacity-40"></div>
      <h2 className="[font-family:var(--soyuz)] text-(--whites) text-[40px] text-center font-bold leading-[1.15] md:text-[60px] lg:text-[80px] xl:text-[100px]">
      ТАРИФЫ
      </h2>
      <Countdown />
      <SliderPrices />
    </section>
  );
}
