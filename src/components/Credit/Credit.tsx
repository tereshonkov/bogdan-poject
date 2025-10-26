import Image from "next/image";

export default function Credit() {
  return (
    <section className="flex justify-center py-[72px] relative 2xl:mt-[200px]">
      <div className="border border-[rgba(217,217,217,0.1)] w-[335px] relative rounded-[22px] overflow-hidden z-10 md:w-[720px] lg:flex lg:w-[980px] xl:w-[1199px] 2xl:w-[1480px]">
        <div className="relative lg:flex flex-col gap-[26px] lg:px-9 lg:py-10 2xl:gap-[76px]">
          <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#03FFFF_38.65%,rgba(3,255,255,0)_100%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[165px] w-[1376px] h-[246px] -z-10 lg:left-[90%] lg:blur-[200px] 2xl:left-[70%]"></div>
          <h2 className="[font-family:var(--soyuz)] text-[56px] text-(--whites) py-6 px-8 leading-[1.15] md:py-[15px] md:px-6 lg:text-[99px] lg:p-0">
            Можно платить частями
          </h2>
          <Image
            width={1000}
            height={1000}
            alt="line"
            src={"/credit/line-credit-lg.png"}
            className="w-[592px] h-px lg:absolute left-0 bottom-47 xl:bottom-6 2xl:bottom-57"
          />
          <div className="hidden py-8 px-4 justify-center items-center lg:flex lg:w-[520px] lg:h-[124px] lg:p-0 xl:w-[585px] xl:mb-[15px] 2xl:w-[733px] 2xl:mr-[25px]">
            <button
              className="w-full h-[58px] lg:h-[124px] relative overflow-hidden rounded-[10px] lg:rounded-[22px] cursor-pointer z-10
    bg-transparent border-none box-border shadow-[0_4px_10px_rgba(0,0,0,0.3)]
    before:absolute before:inset-0 before:rounded-[10px] lg:before:rounded-[22px] before:z-[-1]
    before:bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.19)_100%)]
    before:shadow-[inset_0_0_0_0.3px_white]"
            >
              <span className="font-sans text-[16px] font-bold text-(--whites) leading-[1.15] uppercase lg:text-[32px]">
                Оформить рассрочку
              </span>
            </button>
          </div>
        </div>
        <div className="py-[21px] px-[31px] flex flex-col bg-[rgba(0,255,255,0.2)] lg:rounded-tl-[22px] lg:justify-center lg:items-center gap-11 xl:justify-start xl:px-[60xp] xl:py-14 xl:gap-16 2xl:p-[76px] 2xl:gap-8">
          <div className="flex gap-4 md:items-center lg:gap-2">
            <Image
              width={100}
              height={100}
              alt="number"
              src="/credit/num-1.png"
              className="w-[34px] h-[34px] lg:w-10 lg:h-10"
            />
            <p className="text-[16px] leading-[1.15] font-bold text-(--whites) md:text-[20px] lg:text-[24px] 2xl:text-[26px]">
              <span className="text-(--secondary)">Без процентов</span> на 3, 6 и
              12 месяцев
            </p>
          </div>
          <div className="flex gap-4 mt-2 md:items-center lg:mt-0 lg:gap-2">
            <Image
              width={100}
              height={100}
              alt="number"
              src="/credit/num-2.png"
              className="w-[34px] h-[34px] lg:w-10 lg:h-10"
            />
            <p className="text-[16px] leading-[1.15] font-bold text-(--whites) md:text-[20px] lg:text-[24px] 2xl:text-[26px]">
              Первый взнос только через месяц{" "}
              <span className="text-(--secondary)">
                сейчас не чего не платите
              </span>
            </p>
          </div>
          <div className="flex gap-4 mt-2 md:items-center lg:mt-0 lg:gap-2">
            <Image
              width={100}
              height={100}
              alt="number"
              src="/credit/num-3.png"
              className="w-[34px] h-[34px] lg:w-10 lg:h-10"
            />
            <p className="text-[16px] leading-[1.15] font-bold text-(--whites) md:text-[20px] lg:text-[24px] 2xl:text-[26px]">
              Возможно{" "}
              <span className="text-(--secondary)">
                только для граждан России
              </span>
            </p>
          </div>
          <div className="flex gap-4 mt-2 md:items-center lg:mt-0 lg:gap-2">
            <Image
              width={24}
              height={24}
              alt="number"
              src="/credit/num-4.png"
              className="w-[34px] h-[34px] lg:w-10 lg:h-10"
            />
            <p className="text-[16px] leading-[1.15] font-bold text-(--whites) md:text-[20px] lg:text-[24px] 2xl:text-[26px]">
              По паспорту, 18+{" "}
              <span className="text-(--secondary)">
                с Снг и Крымом Банк не работает
              </span>
            </p>
          </div>
        </div>
        <div className="py-8 px-4 flex justify-center items-center bg-(--background) lg:hidden">
          <button className="btn">
            <span className="btn__text uppercase">Оформить рассрочку</span>
          </button>
        </div>
        <Image
          width={335}
          height={8}
          src="/credit/line-credit.png"
          alt="card"
          className="object-contain h-2 absolute -bottom-1 left-0 md:left-1/2 md:-translate-x-1/2"
        />
      </div>
      <Image
        width={454}
        height={164}
        alt="boobles"
        src="/credit/boobles-credit.png"
        className="absolute -bottom-12 right-0 -z-10 lg:-bottom-18 lg:right-1/2 lg:translate-x-1/2"
      />
    </section>
  );
}
