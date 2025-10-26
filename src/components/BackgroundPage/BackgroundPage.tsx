import Image from "next/image"

export default function BackgroundPage() {
  return (
    <>
            <div className="lg:hidden">
          <Image
            width={137}
            height={280}
            alt="bg-bottom"
            src="/boobles-1.png"
            className="absolute top-[2422px] left-0 -z-10"
          />
        </div>
        <div className="lg:hidden">
          <Image
            width={160}
            height={498}
            alt="bg-bottom"
            src="/boobles-2.png"
            className="absolute top-[2125px] right-0 -z-10"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            width={575}
            height={561}
            alt="bg-bottom"
            src="/boobles-2-lg.png"
            className="absolute top-[3522px] left-0 -z-10"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            width={346}
            height={561}
            alt="bg-bottom"
            src="/boobles-1-lg.png"
            className="absolute top-[2505px] right-0 -z-10"
          />
        </div>
        <div className="hidden xl:block">
          <Image
            width={375}
            height={561}
            alt="bg-bottom"
            src="/boobles-2-lg.png"
            className="absolute top-[2722px] left-0 -z-10"
          />
        </div>
        <div className="hidden 2xl:block">
          <Image
            width={575}
            height={561}
            alt="bg-bottom"
            src="/boobles-2-lg.png"
            className="absolute top-[3522px] left-0 -z-10"
          />
        </div>
        <div className="hidden 2xl:block">
          <Image
            width={575}
            height={561}
            alt="bg-bottom"
            src="/boobles-1-lg.png"
            className="absolute top-[2725px] right-0 -z-10"
          />
        </div>
    </>
  )
}
