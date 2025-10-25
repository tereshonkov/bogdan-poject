import Image from "next/image";

export default function CardNastya({
  imageUrl,
  number,
  title,
  subtitle,
  beforeTitle,
  afterTitle,
  afterSubtitle,
  afterPrice,
}: {
  imageUrl?: string;
  number?: string;
  title?: string;
  subtitle?: string;
  beforeTitle?: string;
  afterTitle?: string;
  afterSubtitle?: string;
  afterPrice?: string;
}) {
  return (
    <div className="border border-[rgba(217,217,217,0.1)] rounded-[10px] w-[304px] md:w-[320px] bg-var(--highlight) bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] relative overflow-hidden">
      {/* Нижнее мягкое синее свечение */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full 
          bg-[rgba(3,224,255,0.03)] filter blur-[150px] z-0"
      ></div>

      {/* Верхнее мягкое свечение */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full 
          bg-[rgba(3,224,255,0.02)] filter blur-[100px] z-0"
      ></div>
      <div>
        <div className="w-full  py-4 px-5 relative mb-3.5">
          <span className="font-digits text-[32px] text-(--secondary) font-light md:text-[40px]">
            {number || "0.1"}
          </span>
          <div className="w-[282px] h-px bg-[url('/Foryou/line.png')] bg-no-repeat bg-contain"></div>
          <div className="w-[126px] h-px bg-[url('/Foryou/line-2.png')] bg-no-repeat bg-cover rotate-90"></div>
          <div className="mt-3.5 ml-11 flex flex-col">
            <h3 className="text-(--whites) font-sans font-bold text-[32px] md:text-[48px]">
              {title || "Настя"}
            </h3>
            <p className="text-(--secondary) font-sans font-bold text-[18px] md:text-[24px]">
              {beforeTitle || "До курса"}
            </p>
            <p className="max-w-[168px] font-sans text-[16px] text-(--whites) font-normal md:mt-3">
              {subtitle || "работала мастером по маникюру"}
            </p>
          </div>
        </div>
        <div className="h-[295px] w-full relative">
          <Image
            className="w-full h-auto object-cover"
            fill
            src={imageUrl || "/Foryou/nastya.png"}
            alt="slider-image-1"
          />
          <div className="absolute bottom-8 left-[61px]">
            <p className="text-(--secondary) font-sans font-bold text-[18px] md:text-[24px]">
              {afterTitle || "После"}
            </p>
            <p className="max-w-[168px] font-sans text-[16px] text-(--whites) font-normal">
              {afterSubtitle || "обучения в первый месяц заработала"}
            </p>
            <p className="text-(--whites) font-sans font-bold text-[23px] md:text-[20px]">
              {afterPrice || "40.000 рублей"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
