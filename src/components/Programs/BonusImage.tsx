import Image from "next/image";

export default function BonusImage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          width={30}
          height={30}
          alt="icon-lock"
          src="/programs/bonus.png"
        />
      </div>
      <div className="hidden md:block 2xl:hidden">
        <Image
          width={33}
          height={23}
          alt="icon-lock"
          src="/programs/bonus.png"
        />
      </div>
      <div className="hidden 2xl:block">
        <Image
          width={77}
          height={74}
          alt="icon-lock"
          src="/programs/bonus.png"
        />
      </div>
    </>
  );
}
