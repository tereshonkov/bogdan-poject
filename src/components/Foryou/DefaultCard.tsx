import Image from "next/image";

export default function DefaultCard({
  imageUrl,
  number,
  title,
  subtitle,
}: {
  imageUrl: string;
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border border-[rgba(217,217,217,0.1)] rounded-[10px] w-[304px] md:w-[320px] bg-var(--highlight) bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] relative overflow-hidden">

      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full 
          bg-[rgba(3,224,255,0.03)] filter blur-[150px] z-0"
      ></div>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full 
          bg-[rgba(3,224,255,0.02)] filter blur-[100px] z-0"
      ></div>

      <div>
        <div className="w-full py-4 px-5 relative mb-3.5">
          <span className="font-digits text-[32px] text-(--secondary) font-light md:text-[40px]">
            {number}
          </span>
          <div className="w-[282px] h-px bg-[url('/Foryou/line.png')] bg-no-repeat bg-contain"></div>
          <div className="w-[126px] h-px bg-[url('/Foryou/line-2.png')] bg-no-repeat bg-cover rotate-90"></div>
          <div className="mt-3.5 ml-11 flex flex-col">
            <h3 className="text-(--secondary) font-sans font-bold text-[24px] max-w-[182px] md:text-[34px] leading-[1.15]">
              {title}
            </h3>
            <p className="font-sans text-[16px] text-(--whites) font-bold md:text-[20px]">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="h-[295px] w-full relative">
          <Image
            className="w-full h-full object-cover"
            fill
            //   src="/Foryou/card-2.png"
            src={imageUrl}
            alt="slider-image-2"
          />
        </div>
      </div>
    </div>
  );
}
