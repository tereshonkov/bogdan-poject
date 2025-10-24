import Button from "../Button/Button";
import Accardion from "./Accardion";

export default function Fiq() {
  return (
    <section className="flex flex-col gap-8 items-center mb-[52px]">
      <h2 className="[font-family:var(--soyuz)] text-[40px] text-(--secondary) leading-[1.15] font-bold text-center">
        Ответы
        <br /> <span className="text-(--whites)">на вопросы</span>{" "}
      </h2>
      <Accardion />
      <div className="mt-5">
        <Button>принять участие</Button>
      </div>
    </section>
  );
}
