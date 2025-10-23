"use client";
import Image from "next/image";

export default function Countdown() {
  return (
    <div className="flex justify-center items-center w-full mt-[24px]">
      <div className="flex justify-center items-center gap-[5px] w-[240px] h-[80px] px-[28px] rounded-[10px] border-custom backdrop-blur-[6px]">
        <span className="[font-family:var(--soyuz)] text-(--whites) font-bold text-[42px]">
          00
        </span>
        <span className="[font-family:var(--soyuz)] text-(--secondary) text-[42px] font-bold">
          :
        </span>
        <span className="[font-family:var(--soyuz)] text-(--whites) font-bold text-[42px]">
          00
        </span>
        <span className="[font-family:var(--soyuz)] text-(--secondary) text-[42px] font-bold">
          :
        </span>
        <span className="[font-family:var(--soyuz)]  text-(--whites) font-bold text-[42px]">
          25
        </span>
      </div>
    </div>
  );
}
