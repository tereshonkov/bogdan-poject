"use client";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex justify-center items-center uppercase font-bold text-[rgba(0,2,17,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] py-5 px-10 rounded-lg button-gradient cursor-pointer font-sans h-[58px] relative md:w-full md:h-20 lg:h-[124px] xl:rounded-[22px] lg:text-[37px] xl:max-w-full xl:text-[32px] 2xl:max-w-full 2xl:w-full">
      {children}
    </button>
  );
}
