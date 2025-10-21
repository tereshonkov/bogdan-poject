import Button from "../Button/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative flex flex-col items-center overflow-hidden">
      <Image
        width={733}
        height={181}
        src="/header/header-top.png"
        alt="header-top"
        className="absolute top-0 left-0 -z-10"
      />
      <Image
        width={115}
        height={452}
        src="/header/header-left-top.png"
        alt="header-top"
        className="absolute top-0 left-0 -z-10"
      />
      <Image
        width={115}
        height={452}
        src="/header/header-right-top.png"
        alt="header-top"
        className="absolute top-0 right-0 -z-10"
      />
      <Image
        width={335}
        height={269}
        src="/header/header-center.png"
        alt="header-top"
        className="absolute top-[150px] right-1/2 transform translate-x-1/2 w-full -z-10"
      />
      <div className="bg-[rgba(245,249,255,1)] p-[10px] rounded-b-lg max-h-[32px] flex justify-center items-center">
        <span className="uppercase text-center font-bold text-[10px] font-sans">
          старт 20 января
        </span>
      </div>
      <button className="absolute top-[8px] right-[20px] rounded-[3px] border border-[rgba(0,255,255,1)] backdrop-blur-[2.54px] bg-[rgba(0,255,255,0.15)] text-[rgba(0,255,255,1)] text-[11px] px-[10px] py-[3px] z-10 max-w-[89px] font-sans">
        Поддержка
      </button>
      <h1 className="[font-family:var(--soyuz)] text-(--whites) text-[57px] text-center font-bold mt-[44px] leading-none">
        погружение
        <br />
        <span className="text-[rgba(0,255,255,1)] [font-family:var(--soyuz)] font-bold">
          1.0
        </span>
      </h1>
      <div className="px-[14px] py-[16px] flex flex-col items-center mt-[210px] w-[303px] backdrop-blur-[5.18px] gradient-container border-[0.35px] border-solid border-transparent rounded-lg">
        <h2 className="text-(--whites) text-[24px] leading-[1.15] tracking-[0%] text-center font-extrabold max-w-[271px] font-sans">
          Как зарабатывать
          <br /> от 2000 $ в месяц
        </h2>
        <p className="text-(--whites) mt-[10px] mb-[24px] text-[14px] font-sans max-w-[271px] text-center">
          на арбитраже трафика в соц сетях из любой точки мира.{" "}
        </p>
        <Button>принять участие</Button>
      </div>
    </header>
  );
}
