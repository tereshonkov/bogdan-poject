import Image from "next/image";
import MobileCards from "./MobileCards";

export default function Howit() {
  return (
    <section className="flex flex-col items-center relative mb-[72px]">
      <Image
        width={123}
        height={267}
        alt="boobles-left"
        src="/howit/boobles-howit.png"
        className="absolute -top-10 right-0 -z-10"
      />
      <h2 className="[font-family:var(--soyuz)] text-[40px] text-(--secondary) leading-[1.15] font-bold text-center md:text-[60px] lg:text-[80px] xl:text-[100px]">
        Как проходит <span className="text-(--whites) md:block">обучение:</span>
      </h2>
      <MobileCards />
      <div className="relative flex flex-col items-center gap-8 md:mt-12 w-full">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56">
            <Image
              width={2}
              height={134}
              alt="line"
              src="/howit/line-top.png"
              className="absolute top-0 left-5 z-10"
            />
            <Image
              width={143}
              height={2}
              alt="line"
              src="/howit/line-center.png"
              className="absolute top-1/2 translate-y-1/2 right-0 z-10"
            />
            <Image
              width={100}
              height={100}
              alt="arrow"
              src="/howit/md/arrow-howit.png"
              className="md:w-[27px] absolute md:top-[35px] md:-right-3.5"
            />
            <Image
              width={67}
              height={63}
              alt="step1"
              src="/howit/01.png"
              className="md:w-[94px] md:h-[88px]"
            />
            <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:max-w-full">
              Получаете{" "}
              <span className="text-(--whites)">обучающий материал</span>
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56">
            <Image
              width={2}
              height={134}
              alt="line"
              src="/howit/line-top.png"
              className="absolute top-0 left-5 z-10"
            />
            <Image
              width={143}
              height={2}
              alt="line"
              src="/howit/line-center.png"
              className="absolute top-1/2 translate-y-1/2 right-0 z-10"
            />
            <Image
              width={100}
              height={100}
              alt="arrow"
              src="/howit/md/arrow-howit.png"
              className="md:w-[27px] absolute md:top-[35px] md:-right-3.5"
            />
            <Image
              width={74}
              height={56}
              alt="step2"
              src="/howit/02.png"
              className="md:w-[103px] md:h-[76px]"
            />
            <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full">
              Регистрируйтесь{" "}
              <span className="text-(--whites) md:block">
                на нужных для работы ресурсах
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56">
            <Image
              width={2}
              height={134}
              alt="line"
              src="/howit/line-top.png"
              className="absolute top-0 left-5 z-10"
            />
            <Image
              width={143}
              height={2}
              alt="line"
              src="/howit/line-center.png"
              className="absolute top-1/2 translate-y-1/2 right-0 z-10"
            />
            <Image
              width={58}
              height={62}
              alt="step3"
              src="/howit/03.png"
              className="md:w-[81px] md:h-[84px] md:mt-2"
            />
            <h3 className="text-[12px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full">
              Получаете
              <br /> все платные инструменты
              <br /> <span className="text-(--whites)">для работы</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] w-40 h-[162px] relative md:w-[222px] md:h-56">
            <Image
              width={2}
              height={134}
              alt="line"
              src="/howit/line-top.png"
              className="absolute top-0 left-5 z-10"
            />
            <Image
              width={143}
              height={2}
              alt="line"
              src="/howit/line-center.png"
              className="absolute top-1/2 translate-y-1/2 right-0 z-10"
            />
            <Image
              width={100}
              height={100}
              alt="arrow"
              src="/howit/md/arrow-howit.png"
              className="md:w-[27px] absolute md:top-[35px] md:-right-3.5"
            />
            <Image
              width={50}
              height={62}
              alt="step4"
              src="/howit/04.png"
              className="md:w-[69px] md:h-[86px]"
            />
            <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full">
              Начинайте тестировать{" "}
              <span className="text-(--whites)">свои первые офферы</span>
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56">
            <Image
              width={2}
              height={134}
              alt="line"
              src="/howit/line-top.png"
              className="absolute top-0 left-5 z-10"
            />
            <Image
              width={143}
              height={2}
              alt="line"
              src="/howit/line-center.png"
              className="absolute top-1/2 translate-y-1/2 right-0 z-10"
            />
            <Image
              width={100}
              height={100}
              alt="arrow"
              src="/howit/md/arrow-howit.png"
              className="md:w-[27px] absolute md:top-[35px] md:-right-3.5"
            />
            <Image
              width={71}
              height={53}
              alt="step5"
              src="/howit/05.png"
              className="md:w-[98px] md:h-[74px]"
            />
            <h3 className="text-[12px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full">
              Задаете вопросы{" "}
              <span className="text-(--whites)">нашим специалитсам</span>
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56">
            <Image
              width={2}
              height={134}
              alt="line"
              src="/howit/line-top.png"
              className="absolute top-0 left-5 z-10"
            />
            <Image
              width={143}
              height={2}
              alt="line"
              src="/howit/line-center.png"
              className="absolute top-1/2 translate-y-1/2 right-0 z-10"
            />
            <Image
              width={77}
              height={53}
              alt="step6"
              src="/howit/06.png"
              className="md:w-[106px] md:h-[73px]"
            />
            <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full">
              Зарабатываете <span className="text-(--whites)">деньги</span>
            </h3>
          </div>
        </div>
        <Image width={1020} height={365} alt="linees" src="/howit/md/line-howit-md.png" className="absolute top-10 right-7 -z-10 w-[720px]" />
      </div>
    </section>
  );
}
