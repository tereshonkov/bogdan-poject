"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import Image from "next/image";

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
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="border border-[rgba(217,217,217,0.1)] rounded-[10px] max-w-[304px] bg-var(--highlight) bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] relative overflow-hidden">
            {/* Нижнее мягкое синее свечение */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full 
                  bg-[rgba(3,224,255,0.03)] filter blur-[150px] z-0"
            ></div>

            {/* Верхнее мягкое свечение */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full 
                  bg-[rgba(3,224,255,0.02)] filter blur-[100px] z-0"
            ></div>
            <div>
              <div className="w-full h-[210px] py-4 px-5 relative mb-3.5">
                <span className="font-digits text-[32px] text-(--secondary) font-light">
                  0.1
                </span>
                <div className="w-[282px] h-px bg-[url('/Foryou/line.png')] bg-no-repeat bg-contain"></div>
                <div className="w-[126px] h-px bg-[url('/Foryou/line-2.png')] bg-no-repeat bg-cover rotate-90"></div>
                <div className="mt-3.5 ml-11 flex flex-col">
                  <h3 className="text-(--whites) font-sans font-bold text-[32px]">
                    Настя
                  </h3>
                  <p className="text-(--secondary) font-sans font-bold text-[18px]">
                    До курса
                  </p>
                  <p className="max-w-[168px] font-sans text-[16px] text-(--whites) font-normal">
                    работала мастером по маникюру
                  </p>
                </div>
              </div>
              <div className="h-[295px] w-full relative">
                <Image
                  className="w-full h-auto object-cover"
                  fill
                  src="/Foryou/nastya.png"
                  alt="slider-image-1"
                />
                <div className="absolute bottom-8 left-[61px]">
                  <p className="text-(--secondary) font-sans font-bold text-[18px]">После</p>
                  <p className="max-w-[168px] font-sans text-[16px] text-(--whites) font-normal">обучения в первый месяц заработала</p>
                  <p className="text-(--whites) font-sans font-bold text-[23px]">40.000 рублей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="border border-[rgba(217,217,217,0.1)] rounded-[10px] max-w-[304px] bg-var(--highlight) bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] relative overflow-hidden">
            {/* <div className="absolute -top-12 right-1 w-[340px] h-[340px] rounded-full bg-[rgba(217,217,217,0.3)] filter blur-[280px] z-0"></div> */}
            {/* Нижнее мягкое синее свечение */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full 
                  bg-[rgba(3,224,255,0.03)] filter blur-[150px] z-0"
            ></div>

            {/* Верхнее мягкое свечение */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full 
                  bg-[rgba(3,224,255,0.02)] filter blur-[100px] z-0"
            ></div>
            <div>
              <div className="w-full h-[210px] py-[16px] px-[20px] relative mb-[14px]">
                <span className="font-digits text-[32px] text-(--secondary) font-light">
                  0.2
                </span>
                <div className="w-[282px] h-px bg-[url('/Foryou/line.png')] bg-no-repeat bg-contain"></div>
                <div className="w-[126px] h-px bg-[url('/Foryou/line-2.png')] bg-no-repeat bg-cover rotate-90"></div>
                <div className="mt-[14px] ml-[44px] flex flex-col">
                  <h3 className="text-(--secondary) font-sans font-bold text-[24px] max-w-[182px]">
                    Обычный человек
                  </h3>
                  <p className="font-sans text-[16px] text-(--whites) font-bold">
                    который хочет освоить онлайн профессию
                  </p>
                </div>
              </div>
              <div className="h-[295px] w-full relative">
                <Image
                  className="w-full h-full object-cover"
                  fill
                  src="/Foryou/card-2.png"
                  alt="slider-image-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="border border-[rgba(217,217,217,0.1)] rounded-[10px] max-w-[304px] bg-var(--highlight) bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] relative overflow-hidden">
            {/* <div className="absolute -top-12 right-1 w-[340px] h-[340px] rounded-full bg-[rgba(217,217,217,0.3)] filter blur-[280px] z-0"></div> */}
            {/* Нижнее мягкое синее свечение */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full 
                  bg-[rgba(3,224,255,0.03)] filter blur-[150px] z-0"
            ></div>

            {/* Верхнее мягкое свечение */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full 
                  bg-[rgba(3,224,255,0.02)] filter blur-[100px] z-0"
            ></div>
            <div>
              <div className="w-full h-[210px] py-4 px-5 relative mb-3.5">
                <span className="font-digits text-[32px] text-(--secondary) font-light">
                  0.3
                </span>
                <div className="w-[282px] h-px bg-[url('/Foryou/line.png')] bg-no-repeat bg-contain"></div>
                <div className="w-[126px] h-px bg-[url('/Foryou/line-2.png')] bg-no-repeat bg-cover rotate-90"></div>
                <div className="mt-3.5 ml-11 flex flex-col">
                  <h3 className="text-(--secondary) font-sans font-bold text-[24px] max-w-[182px]">
                    Обычный человек
                  </h3>
                  <p className="font-sans text-[16px] text-(--whites) font-bold">
                    который хочет освоить онлайн профессию
                  </p>
                </div>
              </div>
              <div className="h-[295px] w-full relative">
                <Image
                  className="w-full h-full object-cover"
                  fill
                  src="/Foryou/card-3.png"
                  alt="slider-image-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="border border-[rgba(217,217,217,0.1)] rounded-[10px] max-w-[304px] bg-var(--highlight) bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] relative overflow-hidden">
            {/* <div className="absolute -top-12 right-1 w-[340px] h-[340px] rounded-full bg-[rgba(217,217,217,0.3)] filter blur-[280px] z-0"></div> */}
            {/* Нижнее мягкое синее свечение */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full 
                  bg-[rgba(3,224,255,0.03)] filter blur-[150px] z-0"
            ></div>

            {/* Верхнее мягкое свечение */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full 
                  bg-[rgba(3,224,255,0.02)] filter blur-[100px] z-0"
            ></div>
            <div>
              <div className="w-full h-[210px] py-4 px-5 relative mb-3.5">
                <span className="font-digits text-[32px] text-(--secondary) font-light">
                  0.4
                </span>
                <div className="w-[282px] h-px bg-[url('/Foryou/line.png')] bg-no-repeat bg-contain"></div>
                <div className="w-[126px] h-px bg-[url('/Foryou/line-2.png')] bg-no-repeat bg-cover rotate-90"></div>
                <div className="mt-3.5 ml-11 flex flex-col">
                  <h3 className="text-(--secondary) font-sans font-bold text-[24px] max-w-[182px]">
                    Обычный человек
                  </h3>
                  <p className="font-sans text-[16px] text-(--whites) font-bold">
                    который хочет освоить онлайн профессию
                  </p>
                </div>
              </div>
              <div className="h-[295px] w-full relative">
                <Image
                  className="w-full h-full object-cover"
                  fill
                  src="/Foryou/card-4.jpg"
                  alt="slider-image-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="border border-[rgba(217,217,217,0.1)] rounded-[10px] max-w-[304px] bg-var(--highlight) bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] relative overflow-hidden">
            {/* <div className="absolute -top-12 right-1 w-[340px] h-[340px] rounded-full bg-[rgba(217,217,217,0.3)] filter blur-[280px] z-0"></div> */}
            {/* Нижнее мягкое синее свечение */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full 
                  bg-[rgba(3,224,255,0.03)] filter blur-[150px] z-0"
            ></div>

            {/* Верхнее мягкое свечение */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full 
                  bg-[rgba(3,224,255,0.02)] filter blur-[100px] z-0"
            ></div>
            <div>
              <div className="w-full h-[210px] py-4 px-5 relative mb-3.5">
                <span className="font-digits text-[32px] text-(--secondary) font-light">
                  0.5
                </span>
                <div className="w-[282px] h-px bg-[url('/Foryou/line.png')] bg-no-repeat bg-contain"></div>
                <div className="w-[126px] h-px bg-[url('/Foryou/line-2.png')] bg-no-repeat bg-cover rotate-90"></div>
                <div className="mt-3.5 ml-11 flex flex-col">
                  <h3 className="text-(--secondary) font-sans font-bold text-[24px] max-w-[182px]">
                    Обычный человек
                  </h3>
                  <p className="font-sans text-[16px] text-(--whites) font-bold">
                    который хочет освоить онлайн профессию
                  </p>
                </div>
              </div>
              <div className="h-[295px] w-full relative">
                <Image
                  className="w-full h-full object-cover"
                  fill
                  src="/Foryou/card-5.jpg"
                  alt="slider-image-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="border border-[rgba(217,217,217,0.1)] rounded-[10px] max-w-[304px] bg-var(--highlight) bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] relative overflow-hidden">
            {/* <div className="absolute -top-12 right-1 w-[340px] h-[340px] rounded-full bg-[rgba(217,217,217,0.3)] filter blur-[280px] z-0"></div> */}
            {/* Нижнее мягкое синее свечение */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full 
                  bg-[rgba(3,224,255,0.03)] filter blur-[150px] z-0"
            ></div>

            {/* Верхнее мягкое свечение */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full 
                  bg-[rgba(3,224,255,0.02)] filter blur-[100px] z-0"
            ></div>
            <div>
              <div className="w-full h-[210px] py-4 px-5 relative mb-3.5">
                <span className="font-digits text-[32px] text-(--secondary) font-light">
                  0.6
                </span>
                <div className="w-[282px] h-px bg-[url('/Foryou/line.png')] bg-no-repeat bg-contain"></div>
                <div className="w-[126px] h-px bg-[url('/Foryou/line-2.png')] bg-no-repeat bg-cover rotate-90"></div>
                <div className="mt-3.5 ml-11 flex flex-col">
                  <h3 className="text-(--secondary) font-sans font-bold text-[24px] max-w-[182px]">
                    Обычный человек
                  </h3>
                  <p className="font-sans text-[16px] text-(--whites) font-bold">
                    который хочет освоить онлайн профессию
                  </p>
                </div>
              </div>
              <div className="h-[295px] w-full relative">
                <Image
                  className="w-full h-full object-cover"
                  fill
                  src="/Foryou/card-4.jpg"
                  alt="slider-image-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between absolute top-[435px] left-0 w-full px-4">
        <button
          onClick={scrollPrev}
          className="w-8 h-8 rounded-full border border-[rgba(3,255,255,1)] flex justify-center items-center bg-[radial-gradient(50%_50%_at_50%_50%,rgba(3,255,255,0)_0%,rgba(3,255,255,0.2)_100%)]"
        >
          <Image
            src="/Foryou/vector-left.png"
            width={6}
            height={6}
            alt="left"
          />
        </button>
        <button
          onClick={scrollNext}
          className="w-8 h-8 rounded-full border border-[rgba(3,255,255,1)] flex justify-center items-center bg-[radial-gradient(50%_50%_at_50%_50%,rgba(3,255,255,0)_0%,rgba(3,255,255,0.2)_100%)]"
        >
          <Image
            src="/Foryou/vector-right.png"
            width={6}
            height={6}
            alt="right"
          />
        </button>
      </div>
    </div>
  );
}
