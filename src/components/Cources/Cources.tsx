import Image from "next/image";
import Button from "../Button/Button";

export default function Cources() {
  return (
    <section className="flex flex-col items-center relative">
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[336px] h-[142px] rounded-full bg-[rgba(217,217,217,0.15)] filter blur-[50px]"></div>
      <h2 className="[font-family:var(--soyuz)] text-(--whites) text-[40px] text-center font-bold max-w-[335px]">
        По итогу курса ты научишься:
      </h2>
      <div className="flex flex-wrap gap-[15px] mt-8 justify-center">
        <div className="flex flex-col gap-4 card-gradient w-40 h-40 rounded-[10px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 px-2.5 py-4 border border-[rgba(217,217,217,0.1)]">
          <Image width={87} height={57} alt="icon1" src="/cources/icon1.png" />
          <p className="text-[14px] font-sans font-normal text-(--whites) leading-[1.15]">Выбирать <span className="text-[14px] font-sans font-bold">прибыльные </span>предложения</p>
        </div>
        <div className="flex flex-col gap-2.5 card-gradient w-40 h-40 rounded-[10px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 px-2.5 py-4 border border-[rgba(217,217,217,0.1)]">
          <Image width={67} height={73} alt="icon1" src="/cources/icon2.png" />
          <p className="text-[14px] font-sans font-normal text-(--whites) leading-[1.15]">Создавать <span className="text-[14px] font-sans font-bold">яркие креативы</span></p>
        </div>
        <div className="flex flex-col gap-4 card-gradient w-40 h-40 rounded-[10px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 px-2.5 py-4 border border-[rgba(217,217,217,0.1)]">
          <Image width={61} height={61} alt="icon3" src="/cources/icon3.png" />
          <p className="text-[14px] font-sans font-normal text-(--whites) leading-[1.15]"><span className="text-[14px] font-sans font-bold">Настраивать</span> техническую часть</p>
        </div>
        <div className="flex flex-col gap-1.5 card-gradient w-40 h-40 rounded-[10px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 px-2.5 py-4 border border-[rgba(217,217,217,0.1)]">
          <Image width={75} height={75} alt="icon4" src="/cources/icon4.png" />
          <p className="text-[14px] font-sans font-normal text-(--whites) leading-[1.15]"><span className="text-[14px] font-sans font-bold">Запускать </span>рекламные компании</p>
        </div>
        <div className="flex flex-col gap-4 card-gradient w-40 h-40 rounded-[10px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 px-2.5 py-4 border border-[rgba(217,217,217,0.1)]">
          <Image width={61} height={61} alt="icon5" src="/cources/icon5.png" />
          <p className="text-[14px] font-sans font-normal text-(--whites) leading-[1.15]">Использовать <span className="text-[14px] font-sans font-bold">все необходимые </span>инструменты</p>
        </div>
        <div className="flex flex-col gap-4 card-gradient w-40 h-40 rounded-[10px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 px-2.5 py-4 border border-[rgba(217,217,217,0.1)]">
          <Image width={81} height={61} alt="icon6" src="/cources/icon6.png" />
          <p className="text-[14px] font-sans font-normal text-(--whites) leading-[1.15]">Продавать товары и услуги <span className="text-[14px] font-sans font-bold">по всему миру</span></p>
        </div>
        <div className="flex flex-col gap-4 card-gradient w-40 h-40 rounded-[10px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 px-2.5 py-4 border border-[rgba(217,217,217,0.1)]">
          <Image width={63} height={71} alt="icon7" src="/cources/icon7.png" />
          <p className="text-[12px] font-sans font-normal text-(--whites) leading-[1.15]">Анализировать<br/> данные и принимать <span className="text-[12px] font-sans font-bold">правильные решения</span></p>
        </div>
        <div className="flex flex-col gap-4 card-gradient w-40 h-40 rounded-[10px] transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 px-2.5 py-4 border border-[rgba(217,217,217,0.1)]">
          <Image width={57} height={67} alt="icon8" src="/cources/icon8.png" />
          <p className="text-[14px] font-sans font-normal text-(--whites) leading-[1.15]"><span className="text-[14px] font-sans font-bold">Зарабатывать</span> в долларах, евро и криптовалютах</p>
        </div>
      </div>
      <div className="mt-8 mb-[72px]">
      <Button>Принять участие</Button>
      </div>
    </section>
  );
}
