import Foryou from '@/components/Foryou/Foryou';
import Header from '../components/Header/Header';
import Cources from '@/components/Cources/Cources';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container relative">
      <Header/>
      <main>
        <Foryou />
        <Cources />
        <Image width={137} height={280} alt="bg-bottom" src="/boobles-1.png" className="absolute top-[2422px] left-0 -z-10"/>
        <Image width={160} height={498} alt="bg-bottom" src="/boobles-2.png" className="absolute top-[2125px] right-0 -z-10"/>
      </main>
    </div>
  );
}
