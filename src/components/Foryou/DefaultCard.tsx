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
    <div className="border border-[rgba(217,217,217,0.1)] rounded-[10px] w-[304px] md:w-[320px] bg-var(--highlight) bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] relative overflow-hidden lg:w-[944px] xl:w-[1007px] 2xl:w-[1460px]">

      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full 
          bg-[rgba(3,224,255,0.03)] filter blur-[150px] z-0"
      ></div>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full 
          bg-[rgba(3,224,255,0.02)] filter blur-[100px] z-0"
      ></div>

      <div className="lg:flex">
        <div className="w-full py-4 px-5 relative mb-3.5">
          <span className="font-digits text-[32px] text-(--secondary) font-light md:text-[40px] lg:text-[56px] 2xl:text-[80px]">
            {number}
          </span>
          <div className="w-[282px] h-px bg-[url('/Foryou/line.png')] bg-no-repeat bg-contain lg:w-[165px]"></div>
          <div className="w-[126px] h-px bg-[url('/Foryou/line-2.png')] bg-no-repeat bg-cover rotate-90 lg:ml-10"></div>
          <div className="mt-3.5 ml-11 flex flex-col 2xl:mt-[54px] 2xl:ml-[190px]">
            <h3 className="text-(--secondary) font-sans font-bold text-[24px] max-w-[182px] md:text-[34px] md:leading-[1.15] lg:text-[70px]">
              {title}
            </h3>
            <p className="font-sans text-[16px] text-(--whites) font-bold md:text-[20px] lg:text-[24px] lg:max-w-[258px] 2xl:text-[40px] 2xl:max-w-[486px] 2xl:mt-12">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="h-[295px] w-full relative lg:h-[525px] lg:rounded-[22px] overflow-hidden 2xl:h-[701px]">
          <Image
            className="w-full h-full object-cover"
            fill
            src={imageUrl}
            alt="slider-image-2"
          />
        </div>
      </div>
    </div>
  );
}
