"use client";
import Image from "next/image";
import Button from "../Button/Button";
import * as React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function SlideVariantOne({
  title,
  imgPath,
  accardionTitle,
  children,
  limit,
  oldPrice,
  newPrice,
  accardionItems,
}: {
  title?: string;
  imgPath?: string;
  accardionTitle?: string;
  children?: React.ReactNode;
  limit?: string;
  oldPrice?: string;
  newPrice?: string;
  accardionItems?: number;
}) {
  const items = React.Children.toArray(children);
  return (
    <div className="w-[295px] flex flex-col rounded-[22px] overflow-hidden bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] border border-[rgba(217,217,217,0.1)] lg:w-[324px] xl:w-[546px] 2xl:w-[514px]">
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
                      <source srcSet="/prices/btn-next-lg.png" media="(min-width: 1024px)" />
                      <Image
                        fill
                        alt="icon-check"
                        src={
                          open
                            ? "/programs/btn-down.png"
                            : "/programs/btn-next.png"
                        }
                        className="2xl:w-15 2xl:h-15 object-contain"
                      />
                    </picture>
                  </div>
                </DisclosureButton>
                <DisclosurePanel static className="mt-4 flex flex-col gap-4">
                  {items?.slice(0, 3)}
                  {open && items?.slice(3, accardionItems)}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
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
            <button className="flex justify-center items-center uppercase font-bold text-[rgba(0,2,17,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] py-5 px-10 rounded-lg button-gradient cursor-pointer font-sans h-[58px] relative md:w-full md:h-[58px] text-[16px] xl:h-[124px] xl:max-w-[509px] xl:rounded-[22px] xl:text-[32px] 2xl:max-w-full 2xl:w-full">
              Оплатить
            </button>
            <button className="btn">
              <span className="btn__text uppercase">в расрочку</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[380px] rounded-full bg-[rgba(0,255,255,1)] filter blur-[250px] opacity-70 z-10"></div>
        </div>
      </div>
    </div>
  );
}
