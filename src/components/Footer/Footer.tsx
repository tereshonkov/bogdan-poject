import Image from "next/image";

export default function Footer() {
  return (
    <section className="px-[15px] flex flex-col mb-[22px] relative md:flex-row md:justify-between xl:p-10 2xl:px-[220px] 2xl:mt-[150px]">
        <Image width={374} height={314} alt="logo-footer" src="/footer/bg.png" className="absolute -bottom-28 -right-17 -z-10"/>
      <div className="flex flex-col gap-4 md:order-2 xl:hidden">
        <div className="flex items-center gap-3 relative">
          <Image
            width={44}
            height={44}
            alt="youtube"
            src="/footer/youtube.png"
            className="absolute -left-2.5"
          />
          <span className="text-(--secondary) text-[16px] font-normal ml-11 lg:text-[18px]">
            Traffic Diver
          </span>
        </div>
        <div className="flex items-center gap-3 relative">
          <Image
            width={44}
            height={44}
            alt="telegram"
            src="/footer/telegram.png"
            className="absolute -left-2.5"
          />
          <span className="text-(--secondary) text-[16px] font-normal ml-11 lg:text-[18px]">
            Жёлтый Веб
          </span>
        </div>
        <div className="flex items-center gap-3 relative">
          <Image
            width={44}
            height={44}
            alt="telegram"
            src="/footer/telegram.png"
            className="absolute -left-2.5"
          />
          <span className="text-(--secondary) text-[16px] font-normal ml-11 lg:text-[18px]">
            Crazy Profits Agency
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6 md:order-3 md:mt-0 lg:gap-[15px] xl:hidden">
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary) leading-[1.15] lg:text-[16px]">
          о нас
        </span>
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary) leading-[1.15] lg:text-[16px]">
          связаться с нами
        </span>
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary) leading-[1.15] lg:text-[16px]">
          зарегистрироваться
        </span>
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary) lg:text-[16px]">
          рекламодателям
        </span>
      </div>
      <div className="mt-5 flex flex-col gap-2 md:order-1 md:mt-0 xl:order-0">
        <h2 className="[font-family:var(--soyuz)] text-[45px] text-(--whites) leading-[1.15] font-bold lg:text-[60px] xl:text-[55px]">
          ПОГРУЖЕНИЕ <span className="text-(--secondary)">1.0</span>
        </h2>
        <p className="text-[12px] font-normal text-[rgba(209,209,209,1)] w-[261px] lg:w-[382px] lg:text-[14px]">Политика конфиденциальности<br /> © 2014 - 2022. Все права защищены</p>
      </div>
      <div className="hidden xl:flex flex-col items-end gap-[39px]">
      <div className="flex gap-[65px]">
        <div className="flex items-center gap-3 relative">
          <Image
            width={44}
            height={44}
            alt="youtube"
            src="/footer/youtube.png"
            className="absolute -left-2.5"
          />
          <span className="text-(--secondary) text-[16px] font-normal ml-11 lg:text-[18px]">
            Traffic Diver
          </span>
        </div>
        <div className="flex items-center gap-3 relative">
          <Image
            width={44}
            height={44}
            alt="telegram"
            src="/footer/telegram.png"
            className="absolute -left-2.5"
          />
          <span className="text-(--secondary) text-[16px] font-normal ml-11 lg:text-[18px]">
            Жёлтый Веб
          </span>
        </div>
        <div className="flex items-center gap-3 relative">
          <Image
            width={44}
            height={44}
            alt="telegram"
            src="/footer/telegram.png"
            className="absolute -left-2.5"
          />
          <span className="text-(--secondary) text-[16px] font-normal ml-11 lg:text-[18px]">
            Crazy Profits Agency
          </span>
        </div>
      </div>
      <div className="flex gap-[38px]">
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary) leading-[1.15] lg:text-[16px]">
          о нас
        </span>
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary) leading-[1.15] lg:text-[16px]">
          связаться с нами
        </span>
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary) leading-[1.15] lg:text-[16px]">
          зарегистрироваться
        </span>
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary) leading-[1.15] lg:text-[16px]">
          рекламодателям
        </span>
      </div>
      </div>
    </section>
  );
}
