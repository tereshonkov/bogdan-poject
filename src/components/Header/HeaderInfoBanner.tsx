export default function HeaderInfoBanner() {
  return (
    <>
      <div className="bg-[rgba(245,249,255,1)] p-2.5 rounded-b-lg h-8 flex justify-center items-center md:h-[55px] lg:h-16 xl:h-[67px] 2xl:h-[85px] md:w-[238px] lg:w-[232px] xl:w-[244px] 2xl:w-[315px] lg:rounded-b-2xl">
        <span className="uppercase text-center font-bold text-[10px] font-sans md:text-[20px] xl:text-[21px] 2xl:text-[28px]">
          старт 20 января
        </span>
      </div>
      <button className="absolute top-2 right-5 rounded-[3px] border border-[rgba(0,255,255,1)] backdrop-blur-[2.54px] bg-[rgba(0,255,255,0.15)] text-[rgba(0,255,255,1)] text-[11px] px-2.5 py-[3px] z-10   w-[89px] font-sans md:w-[142px] md:text-[16px] md:top-5 md:right-6 lg:w-[140px] xl:right-7">
        Поддержка
      </button>
    </>
  );
}
