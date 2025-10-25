import Button from "../Button/Button";

export default function HeaderCTA() {
  return (
    <div className="px-3.5 py-4 flex flex-col justify-center mt-[210px] w-[303px] backdrop-blur-[5.18px] gradient-container border border-[rgba(217,217,217,0.1)] rounded-lg md:mt-[299px] md:w-[720px] md:px-15 md:py-6 md:rounded-3xl lg:w-[863px] lg:mt-[280px] lg:px-10 xl:w-[949px] xl:flex-row xl:items-center xl:mt-80 xl:gap-[30px] relative overflow-hidden lg:py-[19px] 2xl:w-[1478px] xl:px-8 2xl:mt-[575px]">
      <div className="hidden md:block w-[1177px] h-[175px] bg-[rgba(0,255,255,0.2)] blur-[100px] absolute -top-[200px] left-0 -z-50"></div>
      <div className="flex flex-col 2xl:w-full">
      <h2 className="text-(--whites) text-[24px] leading-[1.15] tracking-[0%] text-center font-extrabold max-w-[271px] font-sans md:max-w-[629px] md:w-full md:text-[30px] md:[text-shadow:0_0_4px_rgba(0,255,255,0.8)] lg:text-left lg:text-[38px] lg:max-w-full xl:text-[34px] 2xl:text-[40px] 2xl:max-w-[848px] 2xl:w-full">
        Как зарабатывать
        <br className="md:hidden" /> от 2000 $ в месяц
      </h2>
      <p className="text-(--whites) mt-2.5 mb-6 text-[14px] font-sans max-w-[271px] text-center md:max-w-[628px] md:text-[18px] md:text-left lg:text-[24px] lg:max-w-full xl:mb-0 xl:text-[20px] 2xl:text-[26px] 2xl:max-w-[848px] 2xl:w-full">
        на арбитраже трафика в соц сетях из любой точки мира.{" "}
      </p>
      </div>
      <Button>принять участие</Button>
    </div>
  );
}
