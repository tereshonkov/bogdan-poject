import Image from "next/image";
import Evgen from "./Evgen";
import Danil from "./Danil";

export default function Speakers() {
  return (
    <section className="mb-[72px] md:relative 2xl:mt-[200px]">
      <h2 className="[font-family:var(--soyuz)] text-[40px] text-(--secondary) leading-[1.15] font-bold text-center md:text-[60px] lg:text-[80px] xl:text-[100px]">
        Спикеры <span className="text-(--whites)">курса:</span>{" "}
      </h2>
      <div className="flex flex-col items-center md:flex-row gap-3 md:justify-center md:mt-[274px] xl:gap-20">
        <Evgen />
        <Danil />
      </div>
    </section>
  );
}
