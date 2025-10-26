import Card from "./Card";
import Btn from "./Btn";
import BonusCard from "./BonusCard";

export default function Programs() {
  return (
    <section className="flex flex-col items-center relative 2xl:mt-[100px]">
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[336px] h-[142px] rounded-full bg-[rgba(217,217,217,0.15)] filter blur-[50px]"></div>
      <h2 className="[font-family:var(--soyuz)] text-(--whites) text-[40px] text-center font-bold max-w-[335px] leading-[1.15] md:text-[60px] md:max-w-[499px] xl:max-w-[852px] xl:text-[100px]">
        Программа
        <br className="md:hidden"/> курса:
      </h2>
      <div className="mt-8 flex flex-col items-center gap-8 w-[335px] md:w-full lg:gap-14 2xl:mt-[82px]">
        <Card />
        <Btn />
      </div>
      <div className="mt-[52px] flex flex-col items-center gap-8 w-[335px] md:w-full lg:gap-14">
        <BonusCard />

        <button className="main-button">
          <span className="main-button__text uppercase">
            подробнее
            <br className="lg:hidden"/> о бонусном блоке
          </span>
        </button>
      </div>
    </section>
  );
}
