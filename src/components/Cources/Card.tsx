import Image from "next/image";

export default function Card({
  imgWidth,
  imgHeight,
  imgPath,
  text,
  textTwo,
  boldText,
  lgWidth,
  lgHeight,
  lgSrc,
}: {
  imgWidth?: number;
  imgHeight?: number;
  imgPath: string;
  text?: string;
  textTwo?: string;
  boldText: string;
  lgWidth?: number;
  lgHeight?: number;
  lgSrc?: string;
}) {
  return (
    <div className="flex flex-col gap-3 justify-between card-gradient w-40 h-40 rounded-[10px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 px-2.5 py-4 border border-[rgba(217,217,217,0.1)] lg:w-[295px] lg:h-[281px] lg:px-6 lg:py-[42px] xl:w-[287px] 2xl:w-[360px] 2xl:h-[360px] 2xl:items-center 2xl:py-[35px] 2xl:px-8">
        <Image
          width={imgWidth}
          height={imgHeight}
          alt="icon"
          src={imgPath}
        />
      <p className="text-[14px] font-sans font-normal text-(--whites) leading-[1.15] lg:text-[20px] 2xl:text-[24px] 2xl:text-center">
        {text}{" "}
        <span className="font-sans font-bold"> {boldText} </span>
        {textTwo}
      </p>
    </div>
  );
}
