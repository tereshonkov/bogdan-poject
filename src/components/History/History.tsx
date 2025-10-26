import Video from "./Video";

export default function History() {
  return (
    <section className="py-[72px] relative flex flex-col items-center">
      <div className="absolute top-[150px] -left-10 w-[70%] h-[196px] rounded-full bg-[linear-gradient(180deg,#465DB3_0%,rgba(97,65,212,0)_100%)] blur-[50px] opacity-40"></div>
      <h2 className="[font-family:var(--soyuz)] text-[40px] text-(--whites) leading-[1.15] font-bold text-center md:text-[60px] md:w-[437px] lg:text-[80px] lg:w-[583px] xl:text-[100px] xl:w-[728px] 2xl:w-[1169px]">
        Истории <span className="text-(--secondary)">наших учеников</span>{" "}
      </h2>
      <Video />
      <div className="absolute bottom-0 right-0 w-[248px] h-[248px] rounded-full bg-[rgba(97,65,212,1)] blur-[180px] opacity-40"></div>
    </section>
  );
}
