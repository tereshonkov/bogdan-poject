"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Image from "next/image";

export default function SliderPrices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });
  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);
  return (
    <div className="overflow-hidden mt-[32px]" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="w-[295px] flex flex-col rounded-[22px] overflow-hidden bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px]">
            <div className="h-[272px] relative">
                <Image width={295} height={272} alt="price-1" src="/prices/batiscaf.png" />
                <h3 className="font-sans font-bold text-(--secondary) text-[32px] absolute bottom-[32px] left-0 text-center leading-[1.15]">Батискаф для погружения</h3>
            </div>
            <div className="px-[24px] py-[18px]">
                <div className="flex items-center justify-between">
                    <h5 className="font-sans font-bold text-[15px] uppercase text-(--whites)">16 блоков обучения</h5>
                    <div className="w-[44px] h-[44px] relative">
                    <Image fill alt="icon-check" src="/programs/btn-next.png" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
