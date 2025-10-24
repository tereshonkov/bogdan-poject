import Image from "next/image";

export default function Credit() {
  return (
    <section className="flex justify-center py-[72px] relative">
      <div className="border border-[rgba(217,217,217,0.1)] w-[335px] relative rounded-[22px] overflow-hidden z-10">
        <div className="relative">
          <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#03FFFF_38.65%,rgba(3,255,255,0)_100%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[165px] w-[1376px] h-[246px] -z-10"></div>
          <h2 className="[font-family:var(--soyuz)] text-[56px] text-(--whites) py-6 px-8 leading-[1.15]">
            Можно платить частями
          </h2>
        </div>
        <div className="py-[21px] px-[31px] flex flex-col gap-4 bg-[rgba(0,255,255,0.2)]">
          <div className="flex gap-4">
            <Image
              width={24}
              height={24}
              alt="number"
              src="/credit/num-1.png"
              className="w-[34px] h-[34px]"
            />
            <p className="text-[16px] leading-[1.15] font-bold text-(--whites)">
              <span className="text-(--secondary)">Без процентов</span> на 3,6 и
              12 месяцев
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <Image
              width={24}
              height={24}
              alt="number"
              src="/credit/num-2.png"
              className="w-[34px] h-[34px]"
            />
            <p className="text-[16px] leading-[1.15] font-bold text-(--whites)">
              Первый взнос только через месяц{" "}
              <span className="text-(--secondary)">
                сейчас не чего не платите
              </span>
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <Image
              width={24}
              height={24}
              alt="number"
              src="/credit/num-3.png"
              className="w-[34px] h-[34px]"
            />
            <p className="text-[16px] leading-[1.15] font-bold text-(--whites)">
              Возможно{" "}
              <span className="text-(--secondary)">
                только для граждан России
              </span>
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <Image
              width={24}
              height={24}
              alt="number"
              src="/credit/num-4.png"
              className="w-[34px] h-[34px]"
            />
            <p className="text-[16px] leading-[1.15] font-bold text-(--whites)">
              По паспорту, 18+{" "}
              <span className="text-(--secondary)">
                с Снг и Крымом Банк не работает
              </span>
            </p>
          </div>
        </div>
        <div className="py-8 px-4 flex justify-center items-center bg-(--background)">
          <button className="btn">
            <span className="btn__text uppercase">Оформить рассрочку</span>
          </button>
        </div>
        <Image
          width={335}
          height={8}
          src="/credit/line-credit.png"
          alt="card"
          className="object-contain h-2 absolute -bottom-1 left-0"
        />
      </div>
      <Image
        width={454}
        height={164}
        alt="boobles"
        src="/credit/boobles-credit.png"
        className="absolute -bottom-12 right-0 -z-10"
      />
    </section>
  );
}
