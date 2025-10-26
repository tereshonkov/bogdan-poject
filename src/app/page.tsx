import Foryou from "@/components/Foryou/Foryou";
import Header from "@/components/Header/Header";
import Cources from "@/components/Cources/Cources";
import BackgroundPage from "@/components/BackgroundPage/BackgroundPage";
import Programs from "@/components/Programs/Programs";
import Prices from "@/components/Prices/Prices";
import Support from "@/components/Support/Support";
import Credit from "@/components/Credit/Credit";
import Howit from "@/components/Howit/Howit";
import Whywe from "@/components/Whywe/Whywe";
import History from "@/components/History/History";
import Speakers from "@/components/Speakers/Speakers";
import Fiq from "@/components/Fiq/Fiq";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ПОГРУЖЕНИЕ - арбитраж трафика в соц сетях",
    description:
      "Курс по арбитражу трафика в социальных сетях — погружение в практические кейсы и стратегии.",
    openGraph: {
      title: "ПОГРУЖЕНИЕ - арбитраж трафика в соц сетях",
      description:
        "Курс по арбитражу трафика в социальных сетях — погружение в практические кейсы и стратегии.",
      siteName: "ПОГРУЖЕНИЕ",
    },
  };
}

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden">
      <Header />
      <main>
        <Foryou />
        <Cources />
        <BackgroundPage />
        <Programs />
        <Prices />
        <Support />
        <Credit />
        <Howit />
        <Whywe />
        <History />
        <Speakers />
        <Fiq />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
