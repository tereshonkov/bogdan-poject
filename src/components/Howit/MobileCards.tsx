import Image from "next/image";

export default function MobileCards() {
  return (
    <div className="w-[335px] mt-8 flex flex-col relative md:hidden">
      <Image
        width={335}
        height={193}
        alt="arrows"
        src="/howit/group-1.png"
        className="absolute top-[50px] right-0"
      />
      <Image
        width={335}
        height={193}
        alt="arrows"
        src="/howit/group-2.png"
        className="absolute top-[244px] right-0"
      />
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative">
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
          <Image width={67} height={63} alt="step1" src="/howit/01.png" />
          <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px]">
            Получаете{" "}
            <span className="text-(--whites)">обучающий материал</span>
          </h3>
        </div>
        <Image
          width={32}
          height={0}
          alt="arrow"
          src="/howit/arrow-howit.png"
          className="absolute top-[50px] left-[147px]"
        />
        <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative">
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
          <Image width={74} height={56} alt="step2" src="/howit/02.png" />
          <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px]">
            Регистрируйтесь{" "}
            <span className="text-(--whites)">
              на нужных для работы ресурсах
            </span>
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-[31px] ml-[7px]">
        <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative">
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
          <Image width={58} height={62} alt="step3" src="/howit/03.png" />
          <h3 className="text-[12px] font-semibold text-(--secondary) text-center w-[140px]">
            Получаете
            <br /> все платные инструменты
            <br /> <span className="text-(--whites)">для работы</span>
          </h3>
        </div>
        <Image
          width={32}
          height={0}
          alt="arrow"
          src="/howit/arrow-howit.png"
          className="absolute top-[243px] left-[153px]"
        />
        <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] w-40 h-[162px] relative">
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
          <Image width={50} height={62} alt="step4" src="/howit/04.png" />
          <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px]">
            Начинайте тестировать{" "}
            <span className="text-(--whites)">свои первые офферы</span>
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-[31px] ml-[7px]">
        <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative">
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
          <Image width={71} height={53} alt="step5" src="/howit/05.png" />
          <h3 className="text-[12px] font-semibold text-(--secondary) text-center w-[140px]">
            Задаете вопросы{" "}
            <span className="text-(--whites)">нашим специалитсам</span>
          </h3>
        </div>
        <Image
          width={32}
          height={0}
          alt="arrow"
          src="/howit/arrow-howit.png"
          className="absolute top-[436px] left-[153px]"
        />
        <div className="flex flex-col gap-2 justify-center items-center bg-[rgba(217,217,217,0.11)] rounded-xl border border-[rgba(255,255,255,0.5)] py-[18px] px-2.5 w-40 h-[162px] relative">
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
          <Image width={77} height={53} alt="step6" src="/howit/06.png" />
          <h3 className="text-[14px] font-semibold text-(--secondary) text-center w-[140px]">
            Зарабатываете <span className="text-(--whites)">деньги</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
