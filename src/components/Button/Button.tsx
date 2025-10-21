"use client";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex justify-center uppercase font-bold text-[rgba(0,2,17,1)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] py-[20px] px-[40px] rounded-lg bg-[linear-gradient(to_bottom,rgba(255,255,255,0.3),rgba(255,255,255,0)),linear-gradient(to_bottom,rgba(3,255,255,1),rgba(3,255,255,0.88),rgba(3,255,255,0.6))] cursor-pointer">
      {children}
    </button>
  );
}
