import Image from "next/image"

export default function Danil() {
  return (
    <div className="relative flex justify-center md:static">
    <div className="w-40 h-40 rounded-full bg-[rgba(0,255,255,1)] blur-[56px] absolute top-5 left-1/2 -translate-x-1/2 -z-20 md:top-90 md:left-[68%] md:w-70 md:h-50 md:blur-[100px] xl:left-[70%] xl:top- xl:w-90 2xl:w-120 2xl:left-[65%]"></div>
    <Image
      width={143}
      height={266}
      alt="boobles"
      src="/speakers/boobles-speakers.png"
      className="absolute top-1 right-0 -z-10 md:top-[270px] md:right-16 xl:right-3 xl:top-5 xl:w-[220px] xl:h-[500px] 2xl:right-80 2xl:w-[350px] 2xl:h-[600px]"
    />
    <picture>
      <source
        srcSet="/speakers/2xl/danil.png"
        media="(min-width: 1920px)"
      />
      <source
        srcSet="/speakers/lg/danil.png"
        media="(min-width: 1024px)"
      />
      <source
        srcSet="/speakers/md/danil.png"
        media="(min-width: 768px)"
      />
      <Image
        width={1800}
        height={1800}
        alt="danil"
        src="/speakers/danil.png"
        className="absolute -top-8 left-5 -z-1 md:w-[340px] md:h-[413px] md:left-[46%] md:top-[280px] lg:w-[401px] lg:h-[592px] lg:left-[51%] lg:top-[270px] xl:left-[54%] 2xl:w-[657px] 2xl:h-[770px] 2xl:top-[230px] 2xl:left-[48%]"
      />
    </picture>
    <div className="flex flex-col mt-[188px] border border-[rgba(0,255,255,0.4)] rounded-[22px] w-[284px] overflow-hidden lg:w-[396px] md:backdrop-blur-2xl xl:w-[436px] xl:h-[326px] 2xl:w-[491px]">
      <div className="py-4 bg-[rgba(0,0,0,0.6)] relative backdrop-blur-[10px]">
        <div
          className="w-[355px] h-[60px] bg-[radial-gradient(63.01%_166.3%_at_48.72%_47.97%,#6141D4_0%,rgba(3,255,255,0)_100%)] 
absolute -top-3 left-1/2 -translate-x-1/2 blur-[233px] -z-1"
        ></div>
        <h3 className="text-(--whites) text-[28px] font-bold text-center lg:text-[42px]">
          Даниил
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
          <p className="text-(--secondary) text-[15px] font-bold leading-[1.15] lg:text-[20px]">
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
            <span className="text-(--whites) font-normal">
              «Жёлтый веб»
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
