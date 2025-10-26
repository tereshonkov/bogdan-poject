import Image from "next/image";
// Аргумент plus вказує, чи слід відображати значок плюса замість зображення номера.

export default function AccardionItem({
  text,
  textBold,
  textTwo,
  imagePath,
  plus,
}: {
  text?: string;
  textBold?: string;
  textTwo?: string;
  imagePath: string;
  plus?: boolean;
}) {
  return (
    <div className="flex justify-center gap-4 relative lg:justify-between xl:justify-start">
      {plus && (
        <Image
          width={24}
          height={24}
          alt="number one"
          src="/prices/plus.png"
          className="w-6 h-6 lg:w-7 lg:h-7 mt-1 lg:mt-0 lg:ml-1"
        />
      )}
      {!plus && (
        <Image
          width={100}
          height={100}
          alt="number"
          src={imagePath}
          className="w-6 h-6 lg:w-6 lg:h-7 mt-1 lg:mt-0 lg:ml-1"
        />
      )}
      <p className="text-[12px] leading-[1.15] text-(--whites) font-light max-w-[205px] lg:max-w-[254px] lg:text-[16px] xl:max-w-[476px] xl:text-[18px] 2xl:text-[24px] 2xl:max-w-[396px]">
        {text} <span className="font-bold text-(--secondary)">{textBold}</span>{" "}
        {textTwo}
      </p>
    </div>
  );
}
