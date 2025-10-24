"use client";
import { useState } from "react";
import Image from "next/image";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="flex flex-wrap justify-center gap-[15px] mt-8">
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden">
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
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          {!isPlaying ? (
            <Image
              width={160}
              height={120}
              src="/students/semkiv.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsPlaying(true)}
            />
          ) : (
            <video className="w-full h-full object-cover" controls autoPlay>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        <div className="relative h-full">
        <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) h-full">
            Семкив
          </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden">
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
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          {!isPlaying ? (
            <Image
              width={160}
              height={120}
              src="/students/usupov.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsPlaying(true)}
            />
          ) : (
            <video className="w-full h-full object-cover" controls autoPlay>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        <div className="relative h-full">
        <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) h-full">
            Юсупов
          </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden">
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
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          {!isPlaying ? (
            <Image
              width={160}
              height={120}
              src="/students/arsen.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsPlaying(true)}
            />
          ) : (
            <video className="w-full h-full object-cover" controls autoPlay>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        <div className="relative h-full">
        <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) h-full">
            Арсений
          </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden">
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
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          {!isPlaying ? (
            <Image
              width={160}
              height={120}
              src="/students/lera.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsPlaying(true)}
            />
          ) : (
            <video className="w-full h-full object-cover" controls autoPlay>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        <div className="relative h-full">
        <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) h-full">
            Лерка
          </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden">
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
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          {!isPlaying ? (
            <Image
              width={160}
              height={120}
              src="/students/srgey.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsPlaying(true)}
            />
          ) : (
            <video className="w-full h-full object-cover" controls autoPlay>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        <div className="relative h-full">
        <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) h-full">
            Серега
          </h4>
        </div>
      </div>
      <div className="w-40 h-[152px] border border-[rgba(0,255,255,0.4)] rounded-xl overflow-hidden">
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
            className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          {!isPlaying ? (
            <Image
              width={160}
              height={120}
              src="/students/sanya.png"
              alt="Video preview"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsPlaying(true)}
            />
          ) : (
            <video className="w-full h-full object-cover" controls autoPlay>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        <div className="relative h-full">
        <Image
            width={294}
            height={1}
            src="/students/line-left.png"
            alt="line left"
            className="absolute top-0 left-0 -z-10"
          />
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <h4 className="text-[18px] font-bold text-center font-sans text-(--whites) h-full">
            Саня Тай
          </h4>
        </div>
      </div>
    </div>
  );
}
