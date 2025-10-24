import Image from "next/image";

export default function Speakers() {
  return (
    <section className="mb-[72px]">
      <h2 className="[font-family:var(--soyuz)] text-[40px] text-(--secondary) leading-[1.15] font-bold text-center">
        Спикеры <span className="text-(--whites)">курса:</span>{" "}
      </h2>
      <div className="flex flex-col items-center">
        <div className="relative flex justify-center w-[294px] mb-14">
          <div className="w-40 h-40 rounded-full bg-[rgba(0,255,255,1)] blur-[56px] absolute top-5 left-1/2 -translate-x-1/2 -z-20"></div>
          <Image
            width={143}
            height={266}
            alt="boobles"
            src="/speakers/boobles-speakers.png"
            className="absolute top-10 left-0 -z-10 scale-x-[-1]"
          />
          <Image
            width={294}
            height={364}
            alt="evgen"
            src="/speakers/evgen.png"
            className="absolute -top-8 -left-6 -z-1"
          />
          <div className="flex flex-col mt-[188px] border border-[rgba(0,255,255,0.4)] rounded-[22px] w-[284px] overflow-hidden">
            <div className="py-4 bg-[rgba(0,0,0,0.6)] relative backdrop-blur-[10px]">
              <div
                className="w-[355px] h-[60px] bg-[radial-gradient(63.01%_166.3%_at_48.72%_47.97%,#6141D4_0%,rgba(3,255,255,0)_100%)] 
  absolute -top-3 left-1/2 -translate-x-1/2 blur-[233px] -z-1"
              ></div>
                <h3 className="text-(--whites) text-[28px] font-bold text-center">
                Евгений
              </h3>
            </div>
            <div className="w-full relative px-[22px] py-4">
            <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
              <div className="flex gap-[7px]">
                <Image
                  width={16}
                  height={16}
                  alt="dot"
                  src="/speakers/dot.png"
                  className="w-[26px] h-[26px]"
                />
                <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] mx-w-[218px]">
                  В арбитраже с 2019 года,{" "}
                  <span className="text-(--whites) font-normal">
                    был тимлидом в 2-х крупных командах
                  </span>
                </p>
              </div>
              <div className="flex gap-[7px] mt-4">
                <Image
                  width={16}
                  height={16}
                  alt="dot"
                  src="/speakers/dot.png"
                  className="w-[26px] h-[26px]"
                />
                <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] mx-w-[218px]">
                  Cовладелец{" "}
                  <span className="text-(--whites) font-normal">
                    Crazy Profits Agency
                  </span>
                </p>
              </div>
              <div className="flex gap-[7px] mt-4">
                <Image
                  width={16}
                  height={16}
                  alt="dot"
                  src="/speakers/dot.png"
                  className="w-[26px] h-[26px]"
                />
                <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] mx-w-[218px]">
                Создатель паблика<br/>
                  <span className="text-(--whites) font-normal">
                  «Жёлтый веб»
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center w-[294px]">
          <div className="w-40 h-40 rounded-full bg-[rgba(0,255,255,1)] blur-[56px] absolute top-5 left-1/2 -translate-x-1/2 -z-20"></div>
          <Image
            width={143}
            height={266}
            alt="boobles"
            src="/speakers/boobles-speakers.png"
            className="absolute top-1 right-0 -z-10"
          />
          <Image
            width={243}
            height={336}
            alt="evgen"
            src="/speakers/danil.png"
            className="absolute -top-8 left-5 -z-1"
          />
          <div className="flex flex-col mt-[188px] border border-[rgba(0,255,255,0.4)] rounded-[22px] w-[284px] overflow-hidden">
            <div className="py-4 bg-[rgba(0,0,0,0.6)] relative backdrop-blur-[10px]">
              <div
                className="w-[355px] h-[60px] bg-[radial-gradient(63.01%_166.3%_at_48.72%_47.97%,#6141D4_0%,rgba(3,255,255,0)_100%)] 
  absolute -top-3 left-1/2 -translate-x-1/2 blur-[233px] -z-1"
              ></div>
                <h3 className="text-(--whites) text-[28px] font-bold text-center">
                Даниил
              </h3>
            </div>
            <div className="w-full relative px-[22px] py-4">
            <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
              <div className="flex gap-[7px]">
                <Image
                  width={16}
                  height={16}
                  alt="dot"
                  src="/speakers/dot.png"
                  className="w-[26px] h-[26px]"
                />
                <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] mx-w-[218px]">
                Разработчик с 15 годами стажа,{" "}
                  <span className="text-(--whites) font-normal">
                  в арбитраже с 2019 года
                  </span>
                </p>
              </div>
              <div className="flex gap-[7px] mt-4">
                <Image
                  width={16}
                  height={16}
                  alt="dot"
                  src="/speakers/dot.png"
                  className="w-[26px] h-[26px]"
                />
                <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] mx-w-[218px]">
                  Cовладелец{" "}
                  <span className="text-(--whites) font-normal">
                    Crazy Profits Agency
                  </span>
                </p>
              </div>
              <div className="flex gap-[7px] mt-4">
                <Image
                  width={16}
                  height={16}
                  alt="dot"
                  src="/speakers/dot.png"
                  className="w-[26px] h-[26px]"
                />
                <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] mx-w-[218px]">
                Создатель паблика<br/>
                  <span className="text-(--whites) font-normal">
                  «Жёлтый веб»
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
