import { DisclosurePanel } from "@headlessui/react";
import Image from "next/image";

export default function AccardionContent() {
  return (
    <DisclosurePanel className="bg-[rgba(0,0,0,0.1)] -mx-6 lg:mx-0 lg:w-[920px] 2xl:w-[1480px]">
      <div className="flex justify-end">
        <Image
          width={391}
          height={1}
          alt="line"
          src="/programs/line-program.png"
        />
      </div>
      <div className="px-6 py-7 flex justify-center items-cneter lg:py-24 lg:flex-none">
        <ul className="w-[300px] md:w-lg 2xl:w-[838px]">
          <h6 className="md:text-[18px] font-semibold text-(--text-green) lg:text-[20px] 2xl:text-[24px]">
            Продолжительность:{" "}
            <span className="font-normal text-(--whites)"> 40 мин</span>
          </h6>
          <div className="w-px h-[21px] bg-[rgba(178,255,81,1)] my-2 ml-3"></div>
          <li className="flex gap-2">
            <Image
              width={22}
              height={6}
              alt="dot"
              src="/programs/dot.png"
              className="w-6 h-6 md:h-6"
            />
            <span className="text-(--whites) font-medium text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[26px]">
              Что такое арбитраж трафика в социальных сетях;
            </span>
          </li>
          <li className="flex gap-2 mt-3">
            <Image
              width={22}
              height={6}
              alt="dot"
              src="/programs/dot.png"
              className="w-6 h-6 md:h-6"
            />
            <span className="text-(--whites) font-medium text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[26px]">
              Механика работы простыми словам;
            </span>
          </li>
          <li className="flex gap-2 mt-3">
            <Image
              width={22}
              height={6}
              alt="dot"
              src="/programs/dot.png"
              className="w-6 h-6 md:h-6"
            />
            <span className="text-(--whites) font-medium text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[26px]">
              Участники рынка;
            </span>
          </li>
          <li className="flex gap-2 mt-3">
            <Image
              width={22}
              height={6}
              alt="dot"
              src="/programs/dot.png"
              className="w-6 h-6 md:h-6"
            />
            <span className="text-(--whites) font-medium text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[26px]">
              Модели продаж{" "}
              <span className="text-(--text-green) font-bold">
                (CPL, CPA, CPS, Revshare)
              </span>
              ;
            </span>
          </li>
          <li className="flex gap-2 mt-3">
            <Image
              width={22}
              height={6}
              alt="dot"
              src="/programs/dot.png"
              className="w-6 h-6 md:h-6"
            />
            <span className="text-(--whites) font-medium text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[26px]">
              Навыки и принципы мышления нужные для получения результата;
            </span>
          </li>
          <li className="flex gap-2 mt-3">
            <Image
              width={22}
              height={6}
              alt="dot"
              src="/programs/dot.png"
              className="w-6 h-6 md:h-6"
            />
            <span className="text-(--whites) font-medium text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[26px]">
              Актуальный бюджет для рекламы в разных странах.
            </span>
          </li>
        </ul>
      </div>
    </DisclosurePanel>
  );
}
