import Image from "next/image";
import Button from "../Button/Button";

export default function Whywe() {
  return (
    <section className="relative flex flex-col items-center justify-center">
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[586px] h-[591px] rounded-full bg-[linear-gradient(180deg,#00FFFF_0%,#6141D4_100%)] blur-[300px] opacity-40"></div>
      <Image
        width={279}
        height={326}
        alt="boobles-left"
        src="/whywe/boobles-whywe.png"
        className="absolute -top-6 -left-3 -z-10"
      />
      <Image
        width={100}
        height={345}
        alt="boobles-right"
        src="/whywe/boobles-whywe-2.png"
        className="absolute -top-20 right-0 -z-10"
      />
      <h2 className="[font-family:var(--soyuz)] text-[40px] text-(--whites) leading-[1.15] font-bold text-center">
        Какие{" "}
        <span className="text-(--secondary)">
          плюсы
          <br />
        </span>{" "}
        быть
        <br /> на обученние:
      </h2>
      <div className="flex flex-col gap-9 mt-8 w-[317px]">
        <div className="flex relative">
          <Image
            width={24}
            height={24}
            alt="number one"
            src="/prices/plus.png"
            className="w-11 h-11 absolute -left-2 -top-3"
          />
          <p className="text-[18px] font-bold leading-[1.15] text-(--secondary) ml-11">
            Лучший на рынке
            <br />
            <span className="font-normal text-(--whites)">
              обучающий материал по арбитражу от экспертов
            </span>
          </p>
        </div>
        <div className="flex relative">
          <Image
            width={24}
            height={24}
            alt="number one"
            src="/prices/plus.png"
            className="w-11 h-11 absolute -left-2 -top-3"
          />
          <p className="text-[18px] font-bold leading-[1.15] text-(--secondary) ml-11">
            Доступ в нашу партнерскую программу где ставки на товары выше на
            100%.
            <span className="font-normal text-(--whites)">
              {" "}
              Ставка если вы не были на
            </span>
            обучение Италия-20$
            <span className="font-normal text-(--whites)">
              {" "}
              Ставка
              <br /> если вы были на обучение и имеете куколд Италия-40$
            </span>
          </p>
        </div>
        <div className="flex relative">
          <Image
            width={24}
            height={24}
            alt="number one"
            src="/prices/plus.png"
            className="w-11 h-11 absolute -left-2 -top-3"
          />
          <p className="text-[18px] font-bold leading-[1.15] text-(--secondary) ml-11">
            Доступ ко всем платным инстурментам на 1-2 месяца
            <span className="font-normal text-(--whites)">
              {" "}
              (Трекер, Автозалив, Антидетект браузер) (Стоимость 500$ в месяц)
              Стоимость для участников курса 0$ (1-2 месяца)
            </span>
          </p>
        </div>
        <div className="flex relative">
          <Image
            width={24}
            height={24}
            alt="number one"
            src="/prices/plus.png"
            className="w-11 h-11 absolute -left-2 -top-3"
          />
          <p className="text-[18px] font-bold leading-[1.15] text-(--secondary) ml-11">
            Возможность попасть в нашу команду,
            <span className="font-normal text-(--whites)">
              {" "}
              так как по этому материалу мы обучаем своих сотрудников
            </span>
          </p>
        </div>
      </div>
      <div className="mt-[52px]">
      <Button>Принять участие</Button>
      </div>
    </section>
  );
}
