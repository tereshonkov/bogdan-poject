"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Slide from "./Slide";
import AccardionItem from "./AccardionItem";

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
    <div className="max-w-screen ml-[15px] 2xl:ml-[220px] 2xl:mt-[57px]">
      <div className="overflow-hidden mt-8" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_295px] min-w-0 flex justify-center items-center mr-3 lg:flex-[0_0_324px] lg:mr-[30px] xl:flex-[0_0_546px] xl:mr-4 2xl:flex-[0_0_546px] 2xl:mr-[30px]">
            <Slide accardionItems={16} bonus>
              <AccardionItem
                text="Подборка"
                textBold="самых полезных"
                textTwo="статей за последние 4 года что бы все ваши пазлы в голове
                сложились полностью"
                imagePath="/prices/number-1.png"
              />
              <AccardionItem
                textBold="Табличка с ценами"
                textTwo="рекламодателей в разных гео"
                imagePath="/prices/number-2.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
            </Slide>
          </div>
          <div className="flex-[0_0_295px] min-w-0 flex justify-center items-center mr-3 lg:flex-[0_0_324px] lg:mr-[30px] xl:flex-[0_0_546px] xl:mr-4 2xl:flex-[0_0_546px] 2xl:mr-[30px]">
            <Slide
              accardionItems={16}
              title="База"
              imgPath="/prices/base.png"
              oldPrice="75.000"
              newPrice="45.000"
            >
              <AccardionItem
                text="Подборка"
                textBold="самых полезных"
                textTwo="статей за последние 4 года что бы все ваши пазлы в голове
                сложились полностью"
                imagePath="/prices/number-1.png"
              />
              <AccardionItem
                textBold="Табличка с ценами"
                textTwo="рекламодателей в разных гео"
                imagePath="/prices/number-2.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
            </Slide>
          </div>
          <div className="flex-[0_0_295px] min-w-0 flex justify-center items-center mr-3 lg:flex-[0_0_324px] lg:mr-[30px] xl:flex-[0_0_546px] xl:mr-4 2xl:flex-[0_0_546px] 2xl:mr-[30px]">
          <Slide
              accardionItems={16}
              title="Байкал на минималках"
              imgPath="/prices/price-3.png"
              limit="Лимит: 30 мест"
              oldPrice="150.000"
              newPrice="89.000"
            >
              <AccardionItem
                text="Подборка"
                textBold="самых полезных"
                textTwo="статей за последние 4 года что бы все ваши пазлы в голове
                сложились полностью"
                imagePath="/prices/number-1.png"
              />
              <AccardionItem
                textBold="Табличка с ценами"
                textTwo="рекламодателей в разных гео"
                imagePath="/prices/number-2.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
            </Slide>
          </div>
          <div className="flex-[0_0_295px] min-w-0 flex justify-center items-center mr-3 lg:flex-[0_0_324px] lg:mr-[30px] xl:flex-[0_0_546px] xl:mr-4 2xl:flex-[0_0_546px] 2xl:mr-[30px]">
          <Slide
              accardionItems={16}
              title="Марианская впадина"
              imgPath="/prices/price-4.png"
              limit="Лимит: 8 мест"
              oldPrice="1.000.000"
              newPrice="499.000"
            >
              <AccardionItem
                text="Подборка"
                textBold="самых полезных"
                textTwo="статей за последние 4 года что бы все ваши пазлы в голове
                сложились полностью"
                imagePath="/prices/number-1.png"
              />
              <AccardionItem
                textBold="Табличка с ценами"
                textTwo="рекламодателей в разных гео"
                imagePath="/prices/number-2.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
              <AccardionItem
                textBold="Ускорение лендингов"
                textTwo="и их работы"
                imagePath="/prices/number-3.png"
              />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
