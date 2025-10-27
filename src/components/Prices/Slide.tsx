"use client";
import Image from "next/image";
import Button from "../Button/Button";
import * as React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ButtonGray from "../Button/ButtonGray";

export default function Slide({
  title, // Заголовок у верхньому блоці із зображенням
  imgPath, // Шлях до зображення у верхньому блоці
  accardionTitle, // Заголовок акордеону
  children,
  limit, // Текст під акордеоном (наприклад, "Без ліміту")
  oldPrice, // Стара ціна
  newPrice, // Нова ціна
  accardionItems, // Кількість елементів акордеону, які можна розгорнути
  bonus, // Додати кнопку +Бонус
}: {
  title?: string;
  imgPath?: string;
  accardionTitle?: string;
  children?: React.ReactNode;
  limit?: string;
  oldPrice?: string;
  newPrice?: string;
  accardionItems?: number;
  bonus?: boolean;
}) {
  const items = React.Children.toArray(children);
  return (
    <div className="w-[295px] flex flex-col rounded-[22px] overflow-hidden bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] border border-[rgba(217,217,217,0.1)] lg:w-[324px] lg:h-[945px] xl:h-auto xl:w-[546px] 2xl:w-[514px]">
      <div className="h-[272px] relative 2xl:h-[365px]">
        <Image
          width={295}
          height={272}
          alt="price-1"
          src={imgPath || "/prices/batiscaf.png"}
          className="w-full h-full object-cover"
        />
        <Image
          width={295}
          height={2}
          alt="line"
          src="/prices/line-prices.png"
          className="absolute bottom-0 left-0 w-full"
        />
        <h3 className="font-sans font-bold text-(--secondary) text-[32px] absolute bottom-8 left-0 text-center leading-[1.15] w-full xl:text-[52px]">
          {title || "Батискаф для погружения"}
        </h3>
      </div>
      <div className="py-6 px-[18px] bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_100%)]">
        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] pl-4 lg:pl-0">
          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton className="flex items-center justify-between relative z-10 lg:justify-start xl:justify-center xl:w-full">
                  <h5 className="font-sans font-bold text-[15px] uppercase text-(--whites) lg:text-[19px] xl:text-[28px] 2xl:text-[32px]">
                    {accardionTitle || "16 блоков обучения"}
                  </h5>
                  <div className="w-11 h-11 relative">
                    <picture>
                      {/* <source srcSet="/prices/btn-next-lg.png" media="(min-width: 1024px)" /> */}
                      <Image
                        fill
                        alt="icon-check"
                        src={
                          open
                            ? "/programs/btn-down.png"
                            : "/programs/btn-next.png"
                        }
                        className="2xl:w-15 2xl:h-15 object-contain cursor-pointer"
                      />
                    </picture>
                  </div>
                </DisclosureButton>
                <DisclosurePanel static className="mt-4 flex flex-col gap-4">
                  {bonus ? items?.slice(0, 1) : items?.slice(0, 3)}
                  {open && items?.slice(3, accardionItems)}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
        {bonus && (
          <button
            className="
    relative w-[259px] h-[50px] xl:h-[94px] md:w-full flex justify-center items-center
    rounded-[10px] xl:rounded-[22px] overflow-hidden border border-[rgba(217,217,217,0.1)]
    cursor-pointer mb-12 lg:mb-21 xl:mb-0 xl:mt-1 2xl:mt-12
    before:absolute before:inset-0 before:z-10 before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100
    before:bg-[linear-gradient(0deg,rgba(0,255,255,0.3),rgba(0,255,255,0.3)),linear-gradient(180deg,rgba(97,65,212,0.208)_0%,rgba(97,65,212,0.4)_60.52%,rgba(97,65,212,0.4)_100%),linear-gradient(0deg,rgba(15,18,47,0),rgba(15,18,47,0))]
  ">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,#0F122F,#0F122F),linear-gradient(180deg,rgba(0,255,255,0.4)_0%,rgba(0,255,255,0.16)_100%),linear-gradient(180deg,rgba(58,107,255,0.1)_0%,rgba(58,107,255,0.25)_60.52%,rgba(58,107,255,0.25)_100%)]"></div>
            <div
              className="
      absolute w-[794px] h-[124px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[50px] z-0
      bg-[radial-gradient(50%_50%_at_50%_50%,#6141D4_38.65%,rgba(97,65,212,0)_100%)]
    "
            ></div>
            <div className="w-[394px] h-[124px] bg-[radial-gradient(50%_50%_at_50%_50%,#6141D4_38.65%,rgba(97,65,212,0)_100%)] blur-[100px] absolute top-1/2 left-1/2 -translate-1/2"></div>
            <span className="relative z-20 text-[16px] text-(--whites) font-bold uppercase xl:text-[32px]">
              + бонусный блок
            </span>
          </button>
        )}
        <div className="flex flex-col mt-2 relative z-20">
          <p className="text-(--secondary) text-[18px] text-center font-light lg:text-[20px] xl:text-[24px] 2xl:text-[26px]">
            {limit || "Нет лимита"}
          </p>
          <p className="font-sans text-(--whites) font-semibold text-center line-through text-[32px] xl:text-[40px]">
            {oldPrice || "19.000"}
          </p>
          <p className="font-sans text-(--whites) font-bold text-center text-[52px] xl:text-[70px]">
            {newPrice || "35.000"}
          </p>
          <div className="flex flex-col gap-2 mt-2 xl:gap-4 2xl:mt-8">
            <button className="flex justify-center items-center uppercase font-bold text-[rgba(0,2,17,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] py-5 px-10 rounded-lg button-gradient cursor-pointer font-sans h-[58px] relative md:w-full md:h-[58px] text-[16px] xl:h-[124px] xl:max-w-[509px] xl:rounded-[22px] xl:text-[32px] 2xl:max-w-full 2xl:w-full hover:shadow-[0_0_20px_rgba(3,255,255,0.6)] transition-shadow duration-300">
              Оплатить
            </button>
            <button className="btn">
              <span className="btn__text uppercase cursor-pointer">
                в расрочку
              </span>
            </button>
            <div className="xl:max-w-[509px]">
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[380px] rounded-full bg-[rgba(0,255,255,1)] filter blur-[250px] opacity-70 -z-10"></div>
        </div>
      </div>
    </div>
  );
}
