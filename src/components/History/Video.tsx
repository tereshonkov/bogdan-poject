"use client";
import { useState } from "react";
import Image from "next/image";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="flex flex-wrap justify-center gap-[15px] mt-8 2xl:max-w-[1169px]">
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden md:w-52 md:h-[212px] lg:w-[294px] lg:h-[279px] md:rounded-[15px] lg:rounded-[22px] xl:w-[376px] xl:h-[356px]">
        <div className="relative">
          <Image
            width={1}
            height={280}
            src="/students/line-right.png"
            alt="line right"
            className="absolute top-0 right-5 z-10"
          />
          <Image
            width={32}
            height={32}
            src="/students/play.png"
            alt="Play icon"
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-[70px] xl:h-[70px]"
          />
          <picture>
            <source srcSet="/students/xl/1.png" media="(min-width: 1280px)" />
            <source srcSet="/students/lg/1.png" media="(min-width: 1024px)" />
            <source srcSet="/students/md/1.png" media="(min-width: 768px)" />
            <Image
              width={160}
              height={120}
              src="/students/semkiv.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
            />
          </picture>
        </div>
        <div className="relative h-full md:h-14 md:w-full md:flex justify-center items-center lg:h-[63px]">
          <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
            <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) lg:text-[28px] xl:text-[32px]">
              Семкив
            </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden md:w-52 md:h-[212px] lg:w-[294px] lg:h-[279px] md:rounded-[15px] lg:rounded-[22px] xl:w-[376px] xl:h-[356px]">
        <div className="relative ">
          <Image
            width={1}
            height={280}
            src="/students/line-right.png"
            alt="line right"
            className="absolute top-0 right-5 z-10"
          />
          <Image
            width={32}
            height={32}
            src="/students/play.png"
            alt="Play icon"
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-[70px] xl:h-[70px]"
          />
          <picture>
            <source srcSet="/students/xl/2.png" media="(min-width: 1280px)" />
            <source srcSet="/students/lg/2.png" media="(min-width: 1024px)" />
            <source srcSet="/students/md/2.png" media="(min-width: 768px)" />
            <Image
              width={160}
              height={120}
              src="/students/usupov.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
            />
          </picture>
        </div>
        <div className="relative h-full md:h-14 md:w-full md:flex justify-center items-center lg:h-[63px]">
          <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) lg:text-[28px] xl:text-[32px]">
            Юсупов
          </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden md:w-52 md:h-[212px] lg:w-[294px] lg:h-[279px] md:rounded-[15px] lg:rounded-[22px] xl:w-[376px] xl:h-[356px]">
        <div className="relative ">
          <Image
            width={1}
            height={280}
            src="/students/line-right.png"
            alt="line right"
            className="absolute top-0 right-5 z-10"
          />
          <Image
            width={32}
            height={32}
            src="/students/play.png"
            alt="Play icon"
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-[70px] xl:h-[70px]"
          />
          <picture>
            <source srcSet="/students/xl/3.png" media="(min-width: 1280px)" />
            <source srcSet="/students/lg/3.png" media="(min-width: 1024px)" />
            <source srcSet="/students/md/3.png" media="(min-width: 768px)" />
            <Image
              width={160}
              height={120}
              src="/students/arsen.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
            />
          </picture>
        </div>
        <div className="relative h-full md:h-14 md:w-full md:flex justify-center items-center lg:h-[63px]">
          <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) lg:text-[28px] xl:text-[32px]">
            Арсений
          </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden md:w-52 md:h-[212px] lg:w-[294px] lg:h-[279px] md:rounded-[15px] lg:rounded-[22px] xl:w-[376px] xl:h-[356px]">
        <div className="relative ">
          <Image
            width={1}
            height={280}
            src="/students/line-right.png"
            alt="line right"
            className="absolute top-0 right-5 z-10"
          />
          <Image
            width={32}
            height={32}
            src="/students/play.png"
            alt="Play icon"
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-[70px] xl:h-[70px]"
          />
          <picture>
            <source srcSet="/students/xl/4.png" media="(min-width: 1280px)" />
            <source srcSet="/students/lg/4.png" media="(min-width: 1024px)" />
            <source srcSet="/students/md/4.png" media="(min-width: 768px)" />
            <Image
              width={160}
              height={120}
              src="/students/lera.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
            />
          </picture>
        </div>
        <div className="relative h-full md:h-14 md:w-full md:flex justify-center items-center lg:h-[63px]">
          <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) lg:text-[28px] xl:text-[32px]">
            Лерка
          </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden md:w-52 md:h-[212px] lg:w-[294px] lg:h-[279px] md:rounded-[15px] lg:rounded-[22px] xl:w-[376px] xl:h-[356px]">
        <div className="relative ">
          <Image
            width={1}
            height={280}
            src="/students/line-right.png"
            alt="line right"
            className="absolute top-0 right-5 z-10"
          />
          <Image
            width={32}
            height={32}
            src="/students/play.png"
            alt="Play icon"
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-[70px] xl:h-[70px]"
          />
          <picture>
            <source srcSet="/students/xl/5.png" media="(min-width: 1280px)" />
            <source srcSet="/students/lg/5.png" media="(min-width: 1024px)" />
            <source srcSet="/students/md/5.png" media="(min-width: 768px)" />
            <Image
              width={160}
              height={120}
              src="/students/srgey.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
            />
          </picture>
        </div>
        <div className="relative h-full md:h-14 md:w-full md:flex justify-center items-center lg:h-[63px] xl:text-[32px]">
          <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) lg:text-[28px]">
            Серега
          </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden md:w-52 md:h-[212px] lg:w-[294px] lg:h-[279px] md:rounded-[15px] lg:rounded-[22px] xl:w-[376px] xl:h-[356px]">
        <div className="relative ">
          <Image
            width={1}
            height={280}
            src="/students/line-right.png"
            alt="line right"
            className="absolute top-0 right-5 z-10"
          />
          <Image
            width={32}
            height={32}
            src="/students/play.png"
            alt="Play icon"
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-[70px] xl:h-[70px]"
          />
          <picture>
            <source srcSet="/students/xl/6.png" media="(min-width: 1280px)" />
            <source srcSet="/students/lg/6.png" media="(min-width: 1024px)" />
            <source srcSet="/students/md/6.png" media="(min-width: 768px)" />
            <Image
              width={160}
              height={120}
              src="/students/sanya.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
            />
          </picture>
        </div>
        <div className="relative h-full md:h-14 md:w-full md:flex justify-center items-center lg:h-[63px]">
          <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) lg:text-[28px] xl:text-[32px]">
            Саня Тай
          </h4>
        </div>
      </div>
    </div>
  );
}
