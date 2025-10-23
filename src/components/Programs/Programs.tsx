import Image from "next/image";

export default function Programs() {
  return (
    <section className="flex flex-col items-center relative">
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[336px] h-[142px] rounded-full bg-[rgba(217,217,217,0.15)] filter blur-[50px]"></div>
      <h2 className="[font-family:var(--soyuz)] text-(--whites) text-[40px] text-center font-bold max-w-[335px] leading-[1.15]">
        Программа
        <br /> курса:
      </h2>
      <div className="mt-[32px] flex flex-col items-center gap-[32px] w-[335px]">
        <div className="w-[313px] rounded-[22px] relative overflow-hidden border border-[rgba(217,217,217,0.1)]">
          <div
            className="
    absolute -top-24 left-[50%]
    w-[500px] h-[300px] blur-[140px] pointer-events-none
    bg-[radial-gradient(50%_50%_at_50%_50%,rgba(3,255,255,0.9)_0%,rgba(3,255,255,0.45)_35%,rgba(3,255,255,0.5)_100%)]
  ]"
          ></div>
          <div className="w-full flex flex-col gap-[16px] p-[24px]">
            <span className="font-digits text-[24px] text-(--secondary) font-light">
              01.
            </span>
            <h4 className="font-sans font-bold text-(--secondary) text-[24px]">
              Что такое арбитраж трафика?
            </h4>
            <Image
              width={313}
              height={1}
              alt="line"
              src="/programs/line-card.png"
            />
            <div className="flex items-center gap-2 mb-[13px]">
              <p className="text-(--text-green) font-extrabold tetx-[16px]">
                В этом уроке вы узнаете:
              </p>
              <Image
                width={44}
                height={44}
                alt="icon-check"
                src="/programs/btn-next.png"
              />
            </div>
          </div>
          <div
            className="
 w-full h-full p-[24px] flex flex-col gap-[16px] relative bg-[url('/programs/bg-card.png')] bg-cover bg-center"
          >
            <h3 className="font-bold font-sans text-[24px] text-(--whites)">
              Результат
            </h3>
            <p className="text-[16px] font-normal text-(--whites) font-sans leading-[1.15]">
              Узнаешь что такое арбитраж трафика и сможешь выбрать страны, c
              которыми будешь работать исходя из своего бюджета.
            </p>
          </div>
        </div>

        <button className="main-button">
          <div className="main-button__glow"></div>
          <span className="main-button__text">
            ОТКРЫТЬ ВСЮ
            <br /> ПРОГРАММУ КУРСА
          </span>
        </button>

      </div>
      <div className="mt-[52px] flex flex-col items-center gap-[32px] w-[335px]">
        <div className="w-[313px] rounded-[22px] relative overflow-hidden border border-[rgba(217,217,217,0.1)]">
          <div
            className="
    absolute -top-24 left-[50%]
    w-[500px] h-[300px] blur-[140px] pointer-events-none
    bg-[radial-gradient(50%_50%_at_50%_50%,rgba(3,255,255,0.9)_0%,rgba(3,255,255,0.45)_35%,rgba(3,255,255,0.5)_100%)]
  ]"
          ></div>
          <div className="w-full flex flex-col gap-[16px] p-[24px]">
            <Image width={30} height={30} alt="icon-lock" src="/programs/bonus.png" />
            <h4 className="font-sans font-bold text-(--pirple) text-[24px]">
            Бонусный блок
            </h4>
            <Image
              width={313}
              height={1}
              alt="line"
              src="/programs/line-card.png"
            />
            <div className="flex items-center gap-2 mb-[13px]">
              <p className="text-(--text-green) font-extrabold tetx-[16px]">
              Уроки
              </p>
              <Image
                width={44}
                height={44}
                alt="icon-check"
                src="/programs/btn-next.png"
              />
            </div>
          </div>
          <div
            className="
 w-full h-full p-[24px] flex flex-col gap-[16px] relative bg-[url('/programs/bg-card.png')] bg-cover bg-center"
          >
            <h3 className="font-bold font-sans text-[24px] text-(--whites)">
              Результат
            </h3>
            <p className="text-[16px] font-normal text-(--whites) font-sans leading-[1.15]">
            Научишься искать чужие связки и зарабатывать вместе с китами рынка
            </p>
          </div>
        </div>

        <button className="main-button">
          <span className="main-button__text uppercase">
          подробнее 
            <br /> о бонусном блоке
          </span>
        </button>

      </div>
    </section>
  );
}
