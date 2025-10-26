"use client";
import Image from "next/image";
import BonusImage from "./BonusImage";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import AccardionContent from "./AccardionContent";

export default function BonusCard() {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="w-[313px] md:w-[704px] lg:w-[920px] xl:w-[1199px] 2xl:w-[1480px] mx-auto rounded-[22px] relative overflow-hidden border border-[rgba(217,217,217,0.1)]">
          <div className="w-full flex flex-col lg:flex-row lg:items-stretch">
            <div className="w-full lg:w-full flex flex-col gap-4 p-6 -mb-6 lg:mb-0 2xl:px-[50px] 2xl:py-[39px]">
              <div className="md:flex gap-4 items-center 2xl:gap-[62px]">
                <BonusImage />
                <h4 className="font-sans font-bold text-(--pirple) text-[24px] md:text-[32px] lg:text-[40px] leading-[1.15]">
                  Бонусный блок
                </h4>
              </div>

              <Image
                width={313}
                height={1}
                alt="line"
                src="/programs/line-card.png"
              />
              <div className="bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] w-[635px] h-[182px] rounded-full absolute top-1/2 -translate-y-1/2 blur-[350px] -z-10"></div>

              <DisclosureButton className="flex items-center gap-2 mb-[13px]">
                <p className="text-(--text-green) font-extrabold text-[16px] md:text-[20px] lg:text-[28px] xl:ml-36">
                  Уроки
                </p>
                <Image
                  width={44}
                  height={44}
                  alt="icon-check"
                  src={
                    open ? "/programs/btn-down.png" : "/programs/btn-next.png"
                  }
                />
              </DisclosureButton>

              <div
                className={`
                  lg:hidden transition-all duration-300 overflow-hidden -mx-6
                  ${
                    open
                      ? "max-h-[700px] opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <DisclosurePanel>
                  <AccardionContent />
                </DisclosurePanel>
              </div>
            </div>

            <div className="w-full p-6 flex flex-col gap-4 relative bg-[url('/programs/bg-card.png')] bg-cover bg-center lg:w-[337px] xl:w-[616px] 2xl:w-[725px] 2xl:h-[304px] lg:rounded-tl-xl 2xl:px-[50px] 2xl:py-[39px]">
              <h3 className="font-bold font-sans text-[24px] text-(--whites) md:text-[32px] lg:text-[40px]">
                Результат
              </h3>
              <p className="text-[16px] font-normal text-(--whites) font-sans leading-[1.15] md:text-[18px]">
                Научишься искать чужие связки и зарабатывать вместе с китами
                рынка
              </p>
            </div>
          </div>

          <div
            className={`
              hidden lg:block w-full transition-all duration-300 overflow-hidden
              ${open ? "max-h-[700px] opacity-100 mt-4" : "max-h-0 opacity-0"}
            `}
          >
            <DisclosurePanel>
              <AccardionContent />
            </DisclosurePanel>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
