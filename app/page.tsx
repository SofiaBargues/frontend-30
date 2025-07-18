import { data } from "./data";
import { Hero } from "./component/Hero";
import { NavBar } from "./component/NavBar";
import { Footer } from "./component/Footer";
import { Challenges } from "./component/Challenges";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-base-200 text-base-content">
      <NavBar />
      <main className="container flex w-full flex-col items-center pb-24">
        <Hero />
        <Challenges challenges={data} />
      </main>
      <Footer />
    </div>
  );
}
