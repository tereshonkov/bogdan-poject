import Image from "next/image";
import MobileCards from "./MobileCards";

export default function Howit() {
  return (
    <section className="flex flex-col items-center relative mb-[72px] 2xl:mt-[200px]">
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
      <div className="hidden relative md:flex flex-col items-center gap-8 md:mt-12 w-full">
        <div className="flex items-center gap-3 2xl:gap-14">
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56 lg:w-[278px] lg:h-[299px] xl:w-[376px] xl:h-[292px] 2xl:w-[419px] 2xl:h-[393px] lg:rounded-[22px]">
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
            <picture>
            <source srcSet="/howit/xl/arrow-howit-xl.png" media="(min-width: 1280px)" />
              <source srcSet="/howit/lg/arrow-howit-lg.png" media="(min-width: 1024px)" />
            <Image
              width={100}
              height={100}
              alt="arrow"
              src="/howit/md/arrow-howit.png"
              className="md:w-[27px] absolute md:top-[42px] md:-right-3.5 lg:top-12 lg:w-12 lg:-right-8 xl:top-12 2xl:top-37"
            />
            </picture>
            <Image
              width={67}
              height={63}
              alt="step1"
              src="/howit/01.png"
              className="md:w-[94px] md:h-[88px] lg:w-28 lg:h-28 xl:w-[131px] xl:h-[123px] 2xl:w-[156px] 2xl:h-[146px]"
            />
            <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:max-w-full xl:text-[24px]">
              Получаете{" "}
              <span className="text-(--whites)">обучающий материал</span>
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56 lg:w-[278px] lg:h-[299px] xl:w-[376px] xl:h-[292px] 2xl:w-[419px] 2xl:h-[393px] lg:rounded-[22px]">
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
            <picture>
            <source srcSet="/howit/xl/arrow-howit-xl.png" media="(min-width: 1280px)" />
              <source srcSet="/howit/lg/arrow-howit-lg.png" media="(min-width: 1024px)" />
            <Image
              width={100}
              height={100}
              alt="arrow"
              src="/howit/md/arrow-howit.png"
              className="md:w-[27px] absolute md:top-[42px] md:-right-3.5 lg:top-12 lg:w-12 lg:-right-8 2xl:top-37"
            />
            </picture>
            <Image
              width={74}
              height={56}
              alt="step2"
              src="/howit/02.png"
              className="md:w-[103px] md:h-[76px] lg:w-[131px] lg:h-[99px] xl:w-[172px] xl:h-[130px]"
            />
            <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full xl:text-[24px]">
              Регистрируйтесь{" "}
              <span className="text-(--whites) md:block">
                на нужных для работы ресурсах
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56 lg:w-[278px] lg:h-[299px] xl:w-[376px] xl:h-[292px] 2xl:w-[419px] 2xl:h-[393px] lg:rounded-[22px]">
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
              className="md:w-[81px] md:h-[84px] md:mt-2 lg:w-[104px] lg:h-[111px] xl:w-[137px] xl:h-[146px]"
            />
            <h3 className="text-[12px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full xl:text-[24px]">
              Получаете
              <br /> все платные инструменты
              <br /> <span className="text-(--whites)">для работы</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:ml-8 xl:ml-[39px] 2xl:gap-14 2xl:ml-[101px] 2xl:mt-[93px]">
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] w-40 h-[162px] relative md:w-[222px] md:h-56 lg:w-[278px] lg:h-[299px] xl:w-[376px] xl:h-[292px] 2xl:w-[419px] 2xl:h-[393px] lg:rounded-[22px]">
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
            <picture>
            <source srcSet="/howit/xl/arrow-howit-xl.png" media="(min-width: 1280px)" />
              <source srcSet="/howit/lg/arrow-howit-lg.png" media="(min-width: 1024px)" />
            <Image
              width={100}
              height={100}
              alt="arrow"
              src="/howit/md/arrow-howit.png"
              className="md:w-[27px] absolute md:top-[42px] md:-right-3.5 lg:top-17 lg:w-12 lg:-right-8 xl:top-10 2xl:top-37"
            />
            </picture>
            <Image
              width={50}
              height={62}
              alt="step4"
              src="/howit/04.png"
              className="md:w-[69px] md:h-[86px] lg:w-[90px] lg:h-[110px] xl:w-[118px] xl:h-[145px]"
            />
            <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full xl:text-[24px]">
              Начинайте тестировать{" "}
              <span className="text-(--whites)">свои первые офферы</span>
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56 lg:w-[278px] lg:h-[299px] xl:w-[376px] xl:h-[292px] 2xl:w-[419px] 2xl:h-[393px] lg:rounded-[22px]">
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
            <picture>
            <source srcSet="/howit/xl/arrow-howit-xl.png" media="(min-width: 1280px)" />
              <source srcSet="/howit/lg/arrow-howit-lg.png" media="(min-width: 1024px)" />
            <Image
              width={100}
              height={100}
              alt="arrow"
              src="/howit/md/arrow-howit.png"
              className="md:w-[27px] absolute md:top-[42px] md:-right-3.5 lg:top-17 lg:w-12 lg:-right-8 xl:top-10 2xl:top-37"
            />
            </picture>
            <Image
              width={71}
              height={53}
              alt="step5"
              src="/howit/05.png"
              className="md:w-[98px] md:h-[74px] lg:w-[127px] lg:h-[94px] xl:w-[168px] xl:h-[124px]"
            />
            <h3 className="text-[12px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full xl:text-[24px]">
              Задаете вопросы{" "}
              <span className="text-(--whites)">нашим специалитсам</span>
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative md:w-[222px] md:h-56 lg:w-[278px] lg:h-[299px] xl:w-[376px] xl:h-[292px] 2xl:w-[419px] 2xl:h-[393px] lg:rounded-[22px]">
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
              className="md:w-[106px] md:h-[73px] lg:w-[135px] lg:h-[87px] xl:w-[181px] xl:h-[124px]"
            />
            <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px] md:text-[18px] md:w-full xl:text-[24px]">
              Зарабатываете <span className="text-(--whites)">деньги</span>
            </h3>
          </div>
        </div>
        <picture>
          <source
            srcSet="/howit/2xl/line-howit-2xl.png"
            media="(min-width: 1920px)"
          />
          <source
            srcSet="/howit/xl/line-howit-xl.png"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="/howit/lg/line-howit-lg.png"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="/howit/md/line-howit-md.png"
            media="(min-width: 768px)"
          />
          <Image
            width={1020}
            height={1365}
            alt="linees"
            src="/howit/md/line-howit-md.png"
            className="absolute top-10 right-7 -z-10 md:w-[720px] md:h-[275px] lg:right-12 lg:top-12 xl:top-14 lg:w-[898px] lg:h-[373px] xl:w-[1167px] xl:h-[327px] 2xl:h-[539px] 2xl:w-[1456px] 2xl:top-38 2xl:right-57"
          />
        </picture>
      </div>
    </section>
  );
}
