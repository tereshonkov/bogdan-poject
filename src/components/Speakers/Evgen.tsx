import Image from "next/image";

export default function Evgen() {
  return (
    <div className="relative flex justify-center mb-14 md:mb-0 md:static">
      <div className="w-40 h-40 rounded-full bg-[rgba(0,255,255,1)] blur-[56px] absolute top-5 left-1/2 -translate-x-1/2 -z-20 md:top-90 md:left-[36%] md:w-70 md:h-50 md:blur-[100px] xl:left-[30%] xl:w-90 2xl:left-[35%] 2xl:w-120"></div>
      <Image
        width={143}
        height={266}
        alt="boobles"
        src="/speakers/boobles-speakers.png"
        className="absolute top-10 left-0 -z-10 scale-x-[-1] md:top-[270px] md:left-76 lg:left-100 lg:w-[200px] xl:left-110 xl:w-[220px] 2xl:left-[37%]"
      />
      <picture>
        <source srcSet="/speakers/2xl/evgen.png" media="(min-width: 1920px)" />
        <source srcSet="/speakers/lg/evgen.png" media="(min-width: 1024px)" />
        <source srcSet="/speakers/md/evgen.png" media="(min-width: 768px)" />
        <Image
          width={1800}
          height={1800}
          alt="evgen"
          src="/speakers/evgen.png"
          className="absolute -top-8 -left-6 -z-1 md:w-[417px] md:h-[428px] md:top-[290px] md:left-4 lg:w-[500px] lg:h-[611px] lg:left-7 lg:top-[270px] xl:left-26 2xl:w-[901px] 2xl:h-[892px] 2xl:top-[100px] 2xl:left-49"
        />
      </picture>
      <div className="flex flex-col mt-[188px] border border-[rgba(0,255,255,0.4)] rounded-[22px] w-[294px] overflow-hidden lg:w-[396px] md:backdrop-blur-2xl xl:w-[436px] xl:h-[326px] 2xl:w-[491px]">
        <div className="py-4 bg-[rgba(0,0,0,0.6)] relative backdrop-blur-[10px]">
          <div
            className="w-[355px] h-[60px] bg-[radial-gradient(63.01%_166.3%_at_48.72%_47.97%,#6141D4_0%,rgba(3,255,255,0)_100%)] 
absolute -top-3 left-1/2 -translate-x-1/2 blur-[233px] -z-1"
          ></div>
          <h3 className="text-(--whites) text-[28px] font-bold text-center lg:text-[42px]">
            Евгений
          </h3>
        </div>
        <div className="w-full relative px-[22px] py-4 lg:p-8">
          <div className="absolute w-[312px] h-[170px] bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[150px] -z-10"></div>
          <div className="flex gap-[7px]">
            <Image
              width={16}
              height={16}
              alt="dot"
              src="/speakers/dot.png"
              className="w-[26px] h-[26px]"
            />
            <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] lg:text-[20px] xl:text-[19px]">
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
            <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] lg:text-[20px]">
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
            <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] lg:text-[20px]">
              Создатель паблика
              <br />
              <span className="text-(--whites) font-normal">«Жёлтый веб»</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
