"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";

export default function Accardion() {
  const items = [
    { title: "Я никогда не занимался ни маркетингом, ни трафиком. У меня получится?", content: "Контент блока 1" },
    { title: "Как проходит процесс обучения? Возможно ли совмещать с основной работой?", content: "В процессе курса вы будете получать доступ к видеоурокам и сможете изучать их в удобное для вас время." },
    { title: "Имеет ли смысл идти на живой тариф, или там не будет дополнительной информации?", content: "На живом тарифе вы получите полную обратную связь от действующих специалистов нашей компании, и попадете в чат с единомышленниками которыми сможете делиться опытом, создавать команды и зарабатывать деньги вместе." },
    { title: "У меня есть проблемы с оплатой", content: "Напиши нашему менеджеру" },
  ];
  return (
    <div className="flex flex-col items-center gap-6 w-[335px]">
      {items.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <DisclosureButton className="flex items-center gap-[23px] w-full">
                <Image
                  width={52}
                  height={52}
                  alt="arrow"
                  src={open ? "/fiq/fiq_arrow-up.png" : "/fiq/fiq_arrow.png"}
                  className="w-[52px] h-[52px]"
                />
                <span className="font-bold text-(--secondary) text-[16px] text-left leading-[1.15]">
                  {item.title}
                </span>
              </DisclosureButton>
              <div
                className={`
                  transition-all duration-300 overflow-hidden
                  ${
                    open
                      ? "max-h-[300px] opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <DisclosurePanel static>
                  <p className="text-(--whites) text-[18px] font-normal pb-4 leading-[1.15] text-left ml-[75px]">
                    {item.content}
                  </p>
                </DisclosurePanel>
              </div>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
