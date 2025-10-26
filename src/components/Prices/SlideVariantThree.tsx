import Image from "next/image";
import Button from "../Button/Button";

export default function SlideVariantThree() {
  return (
    <div className="w-[295px] flex flex-col rounded-[22px] overflow-hidden bg-[rgba(0,2,17,0.08)] backdrop-blur-[6.35px] border border-[rgba(217,217,217,0.1)]">
      <div className="h-[272px] relative">
        <Image
          width={295}
          height={272}
          alt="price-1"
          src="/prices/price-3.png"
        />
        <Image
          width={295}
          height={2}
          alt="line"
          src="/prices/line-prices.png"
          className="absolute bottom-0 left-0"
        />
        <h3 className="font-sans font-bold text-(--secondary) text-[32px] absolute bottom-8 left-0 text-center leading-[1.15] w-full">
          Байкал на минималках
        </h3>
      </div>
      <div className="px-6 py-[18px] bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_100%)]">
        <div className="overflow-hidden">
          <div className="flex items-center justify-between relative z-10">
            <h5 className="font-sans font-bold text-[15px] uppercase text-(--whites)">
              16 блоков обучения
            </h5>
            <div className="w-11 h-11 relative">
              <Image fill alt="icon-check" src="/programs/btn-next.png" />
            </div>
          </div>
          <div className="flex relative mt-4">
            <Image
              width={24}
              height={24}
              alt="number one"
              src="/prices/plus.png"
              className="w-11 h-11 absolute -left-1 -top-3"
            />
            <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-[50px]">
              Бонусный блок
            </p>
          </div>
          <div className="flex relative mt-4.5">
            <Image
              width={24}
              height={24}
              alt="number one"
              src="/prices/plus.png"
              className="w-11 h-11 absolute -left-1 -top-3"
            />
            <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-[50px]">
              Чат на 1 месяц
              <br />
              <span className="font-bold text-(--secondary)">
                с действующими баерами{" "}
              </span>
              из нашего команды которые ответят на ваши вопросы
            </p>
          </div>
          <div className="flex relative mt-3.5">
            <Image
              width={24}
              height={24}
              alt="number one"
              src="/prices/plus.png"
              className="w-11 h-11 absolute -left-1 -top-3"
            />
            <p className="text-[14px] leading-[1.15] text-(--whites) font-normal max-w-[200px] ml-[50px]">
              <span className="font-bold text-(--secondary)">
                Увеличение заработка на 30%{" "}
              </span>
              (по вашему Qкоду в нашей пп для вас ставки будут выше)
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-[30px] relative z-20">
          <p className="text-(--secondary) text-[18px] text-center font-light">
            Лимит: 30 мест
          </p>
          <p className="font-sans text-(--whites) font-semibold text-center line-through text-[32px]">
            150.000
          </p>
          <p className="font-sans text-(--whites) font-bold text-center text-[52px]">
            89.000
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <Button>Оплатить</Button>
            <button className="btn">
              <span className="btn__text uppercase">в расрочку</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[380px] rounded-full bg-[rgba(0,255,255,1)] filter blur-[250px] opacity-70 z-10"></div>
        </div>
      </div>
    </div>
  );
}
