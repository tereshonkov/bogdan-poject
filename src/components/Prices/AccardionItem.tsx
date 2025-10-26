import Image from "next/image";

export default function AccardionItem({
  text,
  textBold,
  textTwo,
  imagePath,
}: {
  text?: string;
  textBold?: string;
  textTwo?: string;
  imagePath: string;
}) {
  return (
    <div className="flex justify-center gap-4 relative lg:justify-between xl:justify-start">
      <Image
        width={4}
        height={4}
        alt="number"
        src={imagePath}
        className="w-6 h-6 lg:w-9 lg:h-9 mt-1 lg:mt-0"
      />
      <p className="text-[12px] leading-[1.15] text-(--whites) font-light max-w-[205px] lg:max-w-[254px] lg:text-[16px] xl:max-w-[476px] xl:text-[18px] 2xl:text-[24px] 2xl:max-w-[396px]">
        {text} <span className="font-bold text-(--secondary)">{textBold}</span>{" "}
        {textTwo}
      </p>
    </div>
  );
}
