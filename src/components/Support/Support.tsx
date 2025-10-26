import Image from "next/image";
import Button from "../Button/Button";

export default function Support() {
  return (
    <section className="relative flex flex-col justify-center items-center gap-8 2xl:mt-[200px]">
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[528px] h-[222px] rounded-full bg-[linear-gradient(180deg,#465DB30%,rgba(97,65,212,0)100%)] filter blur-[50px]"></div>
      <Image
        width={263}
        height={459}
        alt="boobles-left"
        src="/support/image-left.png"
        className="absolute top-0 left-0 -z-10"
      />
      <Image
        width={263}
        height={459}
        alt="boobles-left"
        src="/support/image-right.png"
        className="absolute top-0 right-0 -z-10"
      />
      <h2 className="[font-family:var(--soyuz)] text-[40px] uppercase leading-[1.15] font-bold text-(--whites) text-center w-[295px] md:w-[678px] md:text-[50px] lg:w-[859px] lg:text-[70px] xl:w-[1003px] xl:text-[80px] 2xl:w-[1242px]">
        <span className="text-(--secondary)">
          возникли проблемы
          <br  className="2xl:hidden"/>
        </span>{" "}
        с оплатой? напиши в чат поддержки погружения.
      </h2>
      <div className="md:w-[362px] lg:w-[756px] 2xl:w-[778px]">
      <Button>ПОДДЕРЖКА</Button>
      </div>
    </section>
  );
}
