"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import Image from "next/image";
import UserCaseCard from "./UserCaseCard";
import DefaultCard from "./DefaultCard";
import { data } from "./defaultSlidesData";
import type { SliderForYouProps } from "@/types/sliderForYou";

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);
  return (
    <div className="max-w-screen md:px-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_304px] min-w-0 mr-3 md:flex-[0_0_320px]">
            <UserCaseCard />
          </div>
          {data.map((item: SliderForYouProps, index) => (
            <div
              key={index}
              className="flex-[0_0_304px] min-w-0 mr-2 md:flex-[0_0_320px]"
            >
              <DefaultCard
                number={item.number}
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between absolute top-[435px] left-0 w-full px-4 md:top-[480px]">
          <button
            onClick={scrollPrev}
            className="w-8 h-8 rounded-full border border-[rgba(3,255,255,1)] flex justify-center items-center bg-[radial-gradient(50%_50%_at_50%_50%,rgba(3,255,255,0)_0%,rgba(3,255,255,0.2)_100%)] md:w-16 md:h-16"
          >
            <picture>
              <source
                srcSet="/Foryou/md/vector-left.png"
                media="(min-width: 768px)"
              />
              <Image
                src="/Foryou/vector-left.png"
                width={6}
                height={6}
                alt="left"
              />
            </picture>
          </button>
          <button
            onClick={scrollNext}
            className="w-8 h-8 rounded-full border border-[rgba(3,255,255,1)] flex justify-center items-center bg-[radial-gradient(50%_50%_at_50%_50%,rgba(3,255,255,0)_0%,rgba(3,255,255,0.2)_100%)] md:w-16 md:h-16"
          >
            <picture>
              <source
                srcSet="/Foryou/md/vector-right.png"
                media="(min-width: 768px)"
              />
              <Image
                src="/Foryou/vector-right.png"
                width={6}
                height={6}
                alt="left"
              />
            </picture>
          </button>
        </div>
      </div>
    </div>
  );
}
