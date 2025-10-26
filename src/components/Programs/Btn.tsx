export default function Btn() {
  return (
    <div className="relative md:w-[542px] lg:w-[740px]">
      <div className="bg-[radial-gradient(147.35%_497.44%_at_0%_58.13%,#00FFFF_20.71%,#6141D4_100%)] blur-[120px] absolute top-1/2 left-1/2 -translate-1/2 w-[200px] h-[100px] rounded-full -z-10"></div>
      <button className="main-button">
        <div className="main-button__glow"></div>
        <span className="main-button__text">
          ОТКРЫТЬ ВСЮ
          <br className="lg:hidden"/> ПРОГРАММУ КУРСА
        </span>
      </button>
    </div>
  );
}
