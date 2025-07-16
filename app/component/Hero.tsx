import Image from "next/image";
import ageCalculatorApp from "../../public/age-calculator-app.jpg";
import qr from "../../public/qr-code-component.jpg";
import mole from "../../public/mole.png";
import tipCalculator from "../../public/tip-calculator-app.jpg";
import paymentGraphic from "../../public/payment-graphic.png";
import cards from "../../public/cards.png";

export function Hero({}: {}) {
  return (
    <div className="hero relative mt-11 min-h-[560px] sm:min-h-[650px] md:min-h-[700px]">
      <div className="hero-content text-center">
        <div className="absolute top-10 -z-10 grid h-full w-full grid-cols-3 justify-items-center gap-x-[20px] gap-y-[200px] filter sm:gap-y-[300px] md:top-20 md:h-auto md:w-auto md:grid-cols-2 md:gap-x-[600px] md:gap-y-[80px]">
          <Image
            alt="age-calculator-app"
            src={ageCalculatorApp}
            className="mt-5 max-w-[100px] -rotate-12 rounded-md grayscale transition hover:scale-110 hover:grayscale-0 md:mt-0 md:max-w-[150px]"
          />
          <Image
            alt="qr-app"
            src={qr}
            className="max-w-[70px] rotate-12 rounded-md grayscale transition hover:scale-110 hover:grayscale-0 md:max-w-[100px]"
          />
          <Image
            alt="mole"
            src={mole}
            className="mt-5 max-h-[100px] max-w-[100px] rotate-12 rounded-md grayscale transition hover:scale-110 hover:grayscale-0 md:mt-0 md:max-h-[150px] md:max-w-[150px]"
          />
          <Image
            alt="tip-calculator-app"
            src={tipCalculator}
            className="max-h-[100px] max-w-[100px] -rotate-12 rounded-md grayscale transition hover:scale-110 hover:grayscale-0 md:max-h-[150px] md:max-w-[150px]"
          />
          <Image
            alt="payment-graphic"
            src={paymentGraphic}
            className="max-h-[100px] max-w-[100px] -rotate-12 rounded-md grayscale transition hover:scale-110 hover:grayscale-0 md:max-h-[150px] md:max-w-[150px]"
          />
          <Image
            alt="cards"
            src={cards}
            className="max-h-[100px] max-w-[100px] rotate-12 rounded-md grayscale transition hover:scale-110 hover:grayscale-0 md:max-h-[150px] md:max-w-[150px]"
          />
        </div>
        <div className="relative z-0 flex flex-col items-center">
          <h1 className="max-w-2xl text-5xl font-bold sm:text-7xl lg:text-8xl">
            30
            <br />
            <div className="h-12 text-primary sm:h-[4.5rem] lg:h-24">
              Frontend
            </div>
            <span className="">Challenges</span>
          </h1>
          <p className="mt-2 max-w-xl py-6 sm:text-xl lg:text-2xl">
            {
              "Project-based learning is awesome, learn or test your frontend skills with these challenges!"
            }
          </p>
        </div>
      </div>
    </div>
  );
}
