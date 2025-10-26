"use client";
import Image from "next/image";

export default function Countdown() {
  return (
    <div className="flex justify-center items-center w-full mt-6">
      <div className="flex justify-center items-center gap-[5px] w-60 h-20 px-7 rounded-[10px] border-custom backdrop-blur-[6px] md:w-[356px] md:h-[118px] lg:w-[433px] lg:h-[143px] 2xl:w-[568px] 2xl:h-[186px]">
        <span className="[font-family:var(--soyuz)] text-(--whites) font-bold text-[42px] md:text-[62px] lg:text-[80px] 2xl:text-[100px]">
          00
        </span>
        <span className="[font-family:var(--soyuz)] text-(--secondary) text-[42px] font-bold md:text-[62px] lg:text-[80px] 2xl:text-[100px]">
          :
        </span>
        <span className="[font-family:var(--soyuz)] text-(--whites) font-bold text-[42px] md:text-[62px] lg:text-[80px] 2xl:text-[100px]">
          00
        </span>
        <span className="[font-family:var(--soyuz)] text-(--secondary) text-[42px] font-bold md:text-[62px] lg:text-[80px] 2xl:text-[100px]">
          :
        </span>
        <span className="[font-family:var(--soyuz)]  text-(--whites) font-bold text-[42px] md:text-[62px] lg:text-[80px] 2xl:text-[100px]">
          25
        </span>
      </div>
    </div>
  );
}
