import Button from "../Button/Button";
import Card from "./Card";

export default function Cources() {
  return (
    <section className="flex flex-col items-center relative md:mb-[72px]">
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[336px] h-[142px] rounded-full bg-[rgba(217,217,217,0.15)] filter blur-[50px]"></div>
      <h2 className="[font-family:var(--soyuz)] text-(--whites) text-[40px] text-center font-bold max-w-[335px] md:hidden lg:block lg:max-w-[586px] lg:text-[80px] leading-[1.15] xl:text-[100px] xl:max-w-3xl">
        По итогу курса ты научишься:
      </h2>
      <div className="flex flex-wrap gap-[15px] mt-8 justify-center lg:justify-start lg:w-[917px] xl:w-full xl:justify-center 2xl:w-[1580px]">
        <div className="lg:hidden">
          <Card
            imgWidth={87}
            imgHeight={57}
            imgPath="/cources/icon1.png"
            text="Выбирать "
            boldText="прибыльные "
            textTwo="предложения"
          />
        </div>
        <div className="hidden lg:block xl:hidden">
          <Card
            imgWidth={160}
            imgHeight={100}
            imgPath="/cources/lg/icon1.png"
            text="Выбирать "
            boldText="прибыльные "
            textTwo="предложения"
          />
        </div>
        <div className="hidden xl:block 2xl:hidden">
          <Card
            imgWidth={155}
            imgHeight={100}
            imgPath="/cources/lg/icon1.png"
            text="Выбирать "
            boldText="прибыльные "
            textTwo="предложения"
            hoverImg="/cources/2xl/icon1-hover.png"
          />
        </div>
        <div className="hidden 2xl:block">
          <Card
            imgWidth={232}
            imgHeight={146}
            imgPath="/cources/2xl/icon1.png"
            text="Выбирать "
            boldText="прибыльные "
            textTwo="предложения"
            hoverImg="/cources/2xl/icon1-hover.png"
          />
        </div>

        <h2 className="hidden [font-family:var(--soyuz)] text-(--whites) text-[60px] text-center font-bold max-w-[459px] md:block ml-13 leading-[1.15] lg:hidden">
          По итогу курса ты научишься:
        </h2>

        <div className="lg:hidden">
          <Card
            imgWidth={67}
            imgHeight={73}
            imgPath="/cources/icon2.png"
            text="Создавать "
            boldText="яркие креативы"
          />
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <Card
            imgWidth={110}
            imgHeight={124}
            imgPath="/cources/lg/icon2.png"
            text="Создавать "
            boldText="яркие креативы"
            hoverImg="/cources/2xl/icon2-hover.png"
          />
        </div>
        <div className="hidden 2xl:block">
          <Card
            imgWidth={180}
            imgHeight={252}
            imgPath="/cources/2xl/icon2.png"
            text="Создавать "
            boldText="яркие креативы"
            hoverImg="/cources/2xl/icon2-hover.png"
          />
        </div>

        <div className="lg:hidden">
          <Card
            imgWidth={61}
            imgHeight={61}
            imgPath="/cources/icon3.png"
            boldText="Настраивать "
            textTwo="техническую часть"
          />
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <Card
            imgWidth={108}
            imgHeight={110}
            imgPath="/cources/lg/icon3.png"
            boldText="Настраивать "
            textTwo="техническую часть"
            hoverImg="/cources/2xl/icon3-hover.png"
          />
        </div>
        <div className="hidden 2xl:block">
          <Card
            imgWidth={244}
            imgHeight={190}
            imgPath="/cources/2xl/icon3.png"
            boldText="Настраивать "
            textTwo="техническую часть"
            hoverImg="/cources/2xl/icon3-hover.png"
          />
        </div>

        <div className="lg:hidden">
          <Card
            imgWidth={75}
            imgHeight={75}
            imgPath="/cources/icon4.png"
            boldText="Запускать "
            textTwo="рекламные компании"
          />
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <Card
            imgWidth={121}
            imgHeight={116}
            imgPath="/cources/lg/icon4.png"
            boldText="Запускать "
            textTwo="рекламные компании"
            hoverImg="/cources/2xl/icon4-hover.png"
          />
        </div>
        <div className="hidden 2xl:block">
          <Card
            imgWidth={140}
            imgHeight={116}
            imgPath="/cources/2xl/icon4.png"
            boldText="Запускать "
            textTwo="рекламные компании"
            hoverImg="/cources/2xl/icon4-hover.png"
          />
        </div>
        <div className="hidden md:block w-40 h-40 lg:hidden"></div>
        <div className="hidden md:block w-40 h-40 lg:hidden"></div>

        <div className="lg:hidden">
          <Card
            imgWidth={61}
            imgHeight={61}
            imgPath="/cources/icon5.png"
            text="Использовать "
            boldText="все необходимые "
            textTwo="инструменты"
          />
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <Card
            imgWidth={121}
            imgHeight={121}
            imgPath="/cources/lg/icon5.png"
            text="Использовать "
            boldText="все необходимые "
            textTwo="инструменты"
            hoverImg="/cources/2xl/icon5-hover.png"
          />
        </div>
        <div className="hidden 2xl:block">
          <Card
            imgWidth={187}
            imgHeight={208}
            imgPath="/cources/2xl/icon5.png"
            text="Использовать "
            boldText="все необходимые "
            textTwo="инструменты"
            hoverImg="/cources/2xl/icon5-hover.png"
          />
        </div>

        <div className="lg:hidden">
          <Card
            imgWidth={81}
            imgHeight={61}
            imgPath="/cources/icon6.png"
            text="Продавать товары и услуги "
            boldText="по всему миру"
          />
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <Card
            imgWidth={137}
            imgHeight={103}
            imgPath="/cources/lg/icon6.png"
            text="Продавать товары и услуги "
            boldText="по всему миру"
            hoverImg="/cources/2xl/icon6-hover.png"
          />
        </div>
        <div className="hidden 2xl:block">
          <Card
            imgWidth={257}
            imgHeight={196}
            imgPath="/cources/2xl/icon6.png"
            text="Продавать товары и услуги "
            boldText="по всему миру"
            hoverImg="/cources/2xl/icon6-hover.png"
          />
        </div>

        <div className="lg:hidden">
          <Card
            imgWidth={63}
            imgHeight={71}
            imgPath="/cources/icon7.png"
            text="Анализировать"
            boldText="правильные решения"
          />
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <Card
            imgWidth={107}
            imgHeight={121}
            imgPath="/cources/lg/icon7.png"
            text="Анализировать и принимать"
            boldText="правильные решения"
            hoverImg="/cources/2xl/icon7-hover.png"
          />
        </div>
        <div className="hidden 2xl:block">
          <Card
            imgWidth={217}
            imgHeight={157}
            imgPath="/cources/2xl/icon7.png"
            text="Анализировать и принимать"
            boldText="правильные решения"
            hoverImg="/cources/2xl/icon7-hover.png"
          />
        </div>

        <div className="hidden w-[504px] h-40 md:flex lg:hidden items-center justify-center">
          <div className="w-[362px]">
            <Button>Принять участие</Button>
          </div>
        </div>

        <div className="lg:hidden">
          <Card
            imgWidth={57}
            imgHeight={67}
            imgPath="/cources/icon8.png"
            boldText="Зарабатывать"
            textTwo="в долларах, евро и криптовалютах"
          />
        </div>
        <div className="hidden lg:block 2xl:hidden">
          <Card
            imgWidth={107}
            imgHeight={125}
            imgPath="/cources/lg/icon8.png"
            boldText="Зарабатывать"
            textTwo="в долларах, евро и криптовалютах"
            hoverImg="/cources/2xl/icon8-hover.png"
          />
        </div>
        <div className="hidden 2xl:block">
          <Card
            imgWidth={209}
            imgHeight={224}
            imgPath="/cources/2xl/icon8.png"
            boldText="Зарабатывать"
            textTwo="в долларах, евро и криптовалютах"
            hoverImg="/cources/2xl/icon8-hover.png"
          />
        </div>
      </div>
      <div className="mt-8 mb-[72px] md:hidden lg:block 2xl:mt-[99px]">
        <div className="md:h-20 lg:h-[124px] 2xl:w-[765px]">
          <Button>Принять участие</Button>
        </div>
      </div>
    </section>
  );
}
