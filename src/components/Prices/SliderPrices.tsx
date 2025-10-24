"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Image from "next/image";
import Button from "../Button/Button";

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
    <div className="overflow-hidden mt-8" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="w-[295px] flex flex-col rounded-[22px] overflow-hidden bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] border border-[rgba(217,217,217,0.1)]">
            <div className="h-[272px] relative">
              <Image
                width={295}
                height={272}
                alt="price-1"
                src="/prices/batiscaf.png"
              />
              <Image
                width={295}
                height={2}
                alt="line"
                src="/prices/line-prices.png"
                className="absolute bottom-0 left-0"
              />
              <h3 className="font-sans font-bold text-(--secondary) text-[32px] absolute bottom-8 left-0 text-center leading-[1.15]">
                Батискаф для погружения
              </h3>
            </div>
            <div className="px-6 py-[18px] bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_100%)]">
              <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] pl-4">
                <div className="flex items-center justify-between relative z-10">
                  <h5 className="font-sans font-bold text-[15px] uppercase text-(--whites)">
                    16 блоков обучения
                  </h5>
                  <div className="w-11 h-11 relative">
                    <Image fill alt="icon-check" src="/programs/btn-next.png" />
                  </div>
                </div>
                <div className="flex justify-center relative mt-4">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/number-1.png"
                    className="w-[34px] h-11 absolute -left-2 -top-2"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-3">
                    Подборка{" "}
                    <span className="font-bold text-(--secondary)">
                      самых полезных
                    </span>{" "}
                    статей за последние 4 года что бы все ваши пазлы в голове
                    сложились полностью
                  </p>
                </div>
                <div className="flex justify-center relative mt-3.5">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/number-2.png"
                    className="w-[34px] h-11 absolute -left-2 -top-2"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-3">
                    <span className="font-bold text-(--secondary)">
                      Табличка с ценами{" "}
                    </span>
                    рекламодателей в разных гео
                  </p>
                </div>
                <div className="flex justify-center relative mt-3.5">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/number-3.png"
                    className="w-[34px] h-11 absolute -left-2 -top-2"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-3">
                    <span className="font-bold text-(--secondary)">
                      Ускорение лендингов{" "}
                    </span>
                    и их работы
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-2 relative z-20">
                <p className="text-(--secondary) text-[18px] text-center font-light">
                  Нет лимита
                </p>
                <p className="font-sans text-(--whites) font-semibold text-center line-through text-[32px]">
                  19.000
                </p>
                <p className="font-sans text-(--whites) font-bold text-center text-[52px]">
                  35.000
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  <Button>Оплатить</Button>
                  <button className="btn">
                    <span className="btn__text uppercase">в расрочку</span>
                  </button>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[380px] rounded-full bg-[rgba(0,255,255,1)] filter blur-[250px] opacity-70 z-10"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="w-[295px] flex flex-col rounded-[22px] overflow-hidden bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] border border-[rgba(217,217,217,0.1)]">
            <div className="h-[272px] relative">
              <Image
                width={295}
                height={272}
                alt="price-1"
                src="/prices/base.png"
              />
              <Image
                width={295}
                height={2}
                alt="line"
                src="/prices/line-prices.png"
                className="absolute bottom-0 left-0"
              />
              <h3 className="font-sans font-bold text-(--secondary) text-[32px] absolute bottom-8 left-0 text-center leading-[1.15] w-full">
                База
              </h3>
            </div>
            <div className="px-6 py-[18px] bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_100%)]">
              <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] pl-4">
                <div className="flex items-center justify-between relative z-10">
                  <h5 className="font-sans font-bold text-[15px] uppercase text-(--whites)">
                    16 блоков обучения
                  </h5>
                  <div className="w-11 h-11 relative">
                    <Image fill alt="icon-check" src="/programs/btn-next.png" />
                  </div>
                </div>
                <div className="flex justify-center relative mt-4">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/number-1.png"
                    className="w-[34px] h-11 absolute -left-2 -top-2"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-3">
                    Подборка{" "}
                    <span className="font-bold text-(--secondary)">
                      самых полезных
                    </span>{" "}
                    статей за последние 4 года что бы все ваши пазлы в голове
                    сложились полностью
                  </p>
                </div>
                <div className="flex justify-center relative mt-3.5">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/number-2.png"
                    className="w-[34px] h-11 absolute -left-2 -top-2"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-3">
                    <span className="font-bold text-(--secondary)">
                      Табличка с ценами{" "}
                    </span>
                    рекламодателей в разных гео
                  </p>
                </div>
                {/* <div className="flex justify-center relative mt-3.5">
                <Image
                  width={24}
                  height={24}
                  alt="number one"
                  src="/prices/number-3.png"
                  className="w-[34px] h-11 absolute -left-2 -top-2"
                />
                <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-3">
                  <span className="font-bold text-(--secondary)">
                    Ускорение лендингов{" "}
                  </span>
                  и их работы
                </p>
              </div> */}
              </div>
              <button className="btn-gradient w-[259px] h-[50px] flex justify-center items-center rounded-[10px] relative overflow-hidden border-custom">
                <div
                  className="bg-[radial-gradient(50%_50%_at_50%_50%,#6141D4_38.65%,rgba(97,65,212,0.2)_100%)]
             blur-[50px]
             w-[394px]
             h-[124px]
             absolute
             top-1/2
             left-1/2
             -translate-x-1/2
             -translate-y-1/2
             z-10"
                ></div>
                <span className="text-[16px] text-(--whites) font-bold uppercase relative z-20">
                  + бонусный блок
                </span>
              </button>
              <div className="flex flex-col mt-2 relative z-20">
                <p className="text-(--secondary) text-[18px] text-center font-light">
                  Нет лимита
                </p>
                <p className="font-sans text-(--whites) font-semibold text-center line-through text-[32px]">
                  75.000
                </p>
                <p className="font-sans text-(--whites) font-bold text-center text-[52px]">
                  45.000
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <Button>Оплатить</Button>
                  <button className="btn">
                    <span className="btn__text uppercase">в расрочку</span>
                  </button>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[380px] rounded-full bg-[rgba(0,255,255,1)] filter blur-[250px] opacity-70 z-10"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="w-[295px] flex flex-col rounded-[22px] overflow-hidden bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] border border-[rgba(217,217,217,0.1)]">
            <div className="h-[272px] relative">
              <Image
                width={295}
                height={272}
                alt="price-1"
                src="/prices/price-3.png"
              />
              <Image
                width={295}
                height={2}
                alt="line"
                src="/prices/line-prices.png"
                className="absolute bottom-0 left-0"
              />
              <h3 className="font-sans font-bold text-(--secondary) text-[32px] absolute bottom-8 left-0 text-center leading-[1.15] w-full">
                Байкал на минималках
              </h3>
            </div>
            <div className="px-6 py-[18px] bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_100%)]">
              <div className="overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <h5 className="font-sans font-bold text-[15px] uppercase text-(--whites)">
                    16 блоков обучения
                  </h5>
                  <div className="w-11 h-11 relative">
                    <Image fill alt="icon-check" src="/programs/btn-next.png" />
                  </div>
                </div>
                <div className="flex relative mt-4">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/plus.png"
                    className="w-11 h-11 absolute -left-1 -top-3"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-[50px]">
                    Бонусный блок
                  </p>
                </div>
                <div className="flex relative mt-4.5">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/plus.png"
                    className="w-11 h-11 absolute -left-1 -top-3"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-[50px]">
                    Чат на 1 месяц
                    <br />
                    <span className="font-bold text-(--secondary)">
                      с действующими баерами{" "}
                    </span>
                    из нашего команды которые ответят на ваши вопросы
                  </p>
                </div>
                <div className="flex relative mt-3.5">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/plus.png"
                    className="w-11 h-11 absolute -left-1 -top-3"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-[50px]">
                    <span className="font-bold text-(--secondary)">
                      Увеличение заработка на 30%{" "}
                    </span>
                    (по вашему Qкоду в нашей пп для вас ставки будут выше)
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-[30px] relative z-20">
                <p className="text-(--secondary) text-[18px] text-center font-light">
                  Лимит: 30 мест
                </p>
                <p className="font-sans text-(--whites) font-semibold text-center line-through text-[32px]">
                  150.000
                </p>
                <p className="font-sans text-(--whites) font-bold text-center text-[52px]">
                  89.000
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <Button>Оплатить</Button>
                  <button className="btn">
                    <span className="btn__text uppercase">в расрочку</span>
                  </button>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[380px] rounded-full bg-[rgba(0,255,255,1)] filter blur-[250px] opacity-70 z-10"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 flex justify-center items-center">
          <div className="w-[295px] flex flex-col rounded-[22px] overflow-hidden bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] border border-[rgba(217,217,217,0.1)]">
            <div className="h-[272px] relative">
              <Image fill alt="price-1" src="/prices/price-4.png" />
              <Image
                width={295}
                height={2}
                alt="line"
                src="/prices/line-prices.png"
                className="absolute bottom-0 left-0"
              />
              <h3 className="font-sans font-bold text-(--secondary) text-[32px] absolute bottom-8 left-0 text-center leading-[1.15] w-full">
                Марианская впадина
              </h3>
            </div>
            <div className="px-6 py-[18px] bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_100%)]">
              <div className="overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <h5 className="font-sans font-bold text-[15px] uppercase text-(--whites)">
                    16 блоков обучения
                  </h5>
                  <div className="w-11 h-11 relative">
                    <Image fill alt="icon-check" src="/programs/btn-next.png" />
                  </div>
                </div>
                <div className="flex relative mt-4">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/plus.png"
                    className="w-11 h-11 absolute -left-1 -top-3"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-[50px]">
                    Бонусный блок
                  </p>
                </div>
                <div className="flex relative mt-4.5">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/plus.png"
                    className="w-11 h-11 absolute -left-1 -top-3"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-[50px]">
                    Чат на 1 месяц
                    <br />
                    <span className="font-bold text-(--secondary)">
                      с действующими баерами{" "}
                    </span>
                    из нашего команды которые ответят на ваши вопросы
                  </p>
                </div>
                <div className="flex relative mt-3.5">
                  <Image
                    width={24}
                    height={24}
                    alt="number one"
                    src="/prices/plus.png"
                    className="w-11 h-11 absolute -left-1 -top-3"
                  />
                  <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-[50px]">
                    <span className="font-bold text-(--secondary)">
                      Увеличение заработка на 30%{" "}
                    </span>
                    (по вашему Qкоду в нашей пп для вас ставки будут выше)
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-[30px] relative z-20">
                <p className="text-(--secondary) text-[18px] text-center font-light">
                  Лимит: 8 мест
                </p>
                <p className="font-sans text-(--whites) font-semibold text-center line-through text-[32px]">
                  1.000.000
                </p>
                <p className="font-sans text-(--whites) font-bold text-center text-[52px]">
                  499.000
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <Button>Оплатить</Button>
                  <button className="btn">
                    <span className="btn__text uppercase">в расрочку</span>
                  </button>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[380px] rounded-full bg-[rgba(0,255,255,1)] filter blur-[250px] opacity-70 z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
