import HeaderBackground from "./HeaderBackground";
import HeaderCTA from "./HeaderCTA";
import HeaderInfoBanner from "./HeaderInfoBanner";

export default function Header() {
  return (
    <header className="relative flex flex-col items-center overflow-hidden xl:min-h-screen">
      <HeaderBackground />
      <HeaderInfoBanner />
      <h1 className="[font-family:var(--soyuz)] text-(--whites) text-[57px] text-center font-bold mt-11 leading-[1.15] md:text-[120px] md:mt-16 lg:text-[140px] xl:text-[146px] 2xl:text-[188px] lg:mt-[18px]">
        погружение{" "}
        <span className="text-[rgba(0,255,255,1)] [font-family:var(--soyuz)] font-bold block -mt-5 md:mt-[-50px] lg:inline">
          1.0
        </span>
      </h1>
      <HeaderCTA />
    </header>
  );
}
