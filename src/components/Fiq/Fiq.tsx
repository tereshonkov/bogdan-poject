import Button from "../Button/Button";
import Accardion from "./Accardion";

export default function Fiq() {
  return (
    <section className="flex flex-col gap-8 items-center mb-[52px] xl:gap-14 2xl:mt-[200px]">
      <h2 className="[font-family:var(--soyuz)] text-[40px] text-(--secondary) leading-[1.15] font-bold text-center md:text-[60px] lg:text-[80px] xl:text-[100px]">
        Ответы
        <br className="2xl:hidden"/> <span className="text-(--whites)">на вопросы</span>{" "}
      </h2>
      <Accardion />
      <div className="mt-5 md:w-[580px] lg:w-[718px] xl:w-[800px] 2xl:w-[940px]">
        <Button>принять участие</Button>
      </div>
    </section>
  );
}
