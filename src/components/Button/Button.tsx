"use client";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex justify-center items-center uppercase font-bold text-[rgba(0,2,17,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] py-[20px] px-[40px] rounded-lg button-gradient cursor-pointer font-sans h-[58px]">
      {children}
    </button>
  );
}
