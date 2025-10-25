import Image from "next/image";

export default function HeaderBackground() {
  return (
    <>
      <picture className="absolute top-0 left-0 -z-10 w-full">
        <source
          srcSet="/header/xl/header-top.png"
          media="(min-width: 1280px)"
        />
        <source
          srcSet="/header/lg/header-top.png"
          media="(min-width: 1024px)"
        />
        <source srcSet="/header/md/header-top.png" media="(min-width: 768px)" />

        <Image
          width={733}
          height={181}
          src="/header/header-top.png"
          alt="header-top-adaptive"
          className="w-full h-full object-cover"
          priority
        />
      </picture>

      <picture className="absolute top-0 left-0 -z-10 md:h-[556px] lg:h-[854px] xl:w-[]">
        <source
          srcSet="/header/xl/header-left-top.png"
          media="(min-width: 1280px)"
        />
        <source
          srcSet="/header/lg/header-left-top.png"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/header/md/header-left-top.png"
          media="(min-width: 768px)"
        />

        <Image
          width={733}
          height={181}
          src="/header/header-left-top.png"
          alt="header-top-adaptive"
          className="w-full h-full object-cover"
          priority
        />
      </picture>

      <picture className="absolute top-0 right-0 -z-10 xl:hidden">
        <source
          srcSet="/header/lg/header-right-top.png"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/header/md/header-right-top.png"
          media="(min-width: 768px)"
        />

        <Image
          width={733}
          height={181}
          src="/header/header-right-top.png"
          alt="header-top-adaptive"
          className="w-full h-full object-cover"
          priority
        />
      </picture>

      <picture className="absolute top-[150px] right-1/2 transform translate-x-1/2 w-full -z-10 md:top-[290px] md:w-[708px] lg:w-full lg:top-[175px] lg:z-0 xl:top-[120px] 2xl:w-full 2xl:h-[794px] 2xl:top-[260px]">
      <source
          srcSet="/header/2xl/header-center.png"
          media="(min-width: 1920px)"
        />
        <source
          srcSet="/header/xl/header-center.png"
          media="(min-width: 1280px)"
        />
        <source
          srcSet="/header/lg/header-center.png"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/header/md/header-center.png"
          media="(min-width: 768px)"
        />

        <Image
          width={733}
          height={181}
          src="/header/header-center.png"
          alt="header-top-adaptive"
          className="w-full h-full object-cover"
          priority
        />
      </picture>

      <Image
        width={733}
        height={181}
        src="/header/md/bg-md.png"
        alt="header-top-adaptive"
        className="hidden md:block absolute top-[300px] right-1/2 transform translate-x-1/2 w-full -z-20 xl:hidden"
        priority
      />
      <Image
        width={467}
        height={325}
        src="/header/md/bg-md-left.png"
        alt="header-top-adaptive"
        className="hidden md:block absolute top-[460px] -left-10 -z-20"
        priority
      />
      <Image
        width={349}
        height={406}
        src="/header/md/bg-md-right.png"
        alt="header-top-adaptive"
        className="hidden md:block absolute top-[415px] -right-10 -z-20 2xl:z-10"
        priority
      />
      <Image
        width={349}
        height={406}
        src="/header/header-bloomb.png"
        alt="header-top-adaptive"
        className="hidden xl:block absolute top-[203px] left-[172px] -z-20 2xl:hidden"
        priority
      />
    </>
  );
}
