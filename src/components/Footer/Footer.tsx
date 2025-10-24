import Image from "next/image";

export default function Footer() {
  return (
    <section className="px-[15px] flex flex-col mb-[22px] relative">
        <Image width={374} height={314} alt="logo-footer" src="/footer/bg.png" className="absolute -bottom-28 -right-17 -z-10"/>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 relative">
          <Image
            width={44}
            height={44}
            alt="youtube"
            src="/footer/youtube.png"
            className="absolute -left-2.5"
          />
          <span className="text-(--secondary) text-[16px] font-normal ml-11">
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
          <span className="text-(--secondary) text-[16px] font-normal ml-11">
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
          <span className="text-(--secondary) text-[16px] font-normal ml-11">
            Crazy Profits Agency
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary)">
          о нас
        </span>
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary)">
          связаться с нами
        </span>
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary)">
          зарегистрироваться
        </span>
        <span className="text-(--whites) text-[16px] font-normal hover:text-(--secondary)">
          рекламодателям
        </span>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="[font-family:var(--soyuz)] text-[45px] text-(--whites) leading-[1.15] font-bold">
          ПОГРУЖЕНИЕ <span className="text-(--secondary)">1.0</span>
        </h2>
        <p className="text-[12px] font-normal text-[rgba(209,209,209,1)] w-[261px]">Политика конфиденциальности<br /> © 2014 - 2022. Все права защищены</p>
      </div>
    </section>
  );
}
