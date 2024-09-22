import Typewriter from "typewriter-effect";

export function Hero({}: {}) {
  return (
    <div className="hero relative mt-11 min-h-[700px]">
      <div className="hero-content text-center">
        <div className="absolute top-16 grid grid-cols-3 justify-items-center gap-x-[50px] gap-y-[390px] grayscale filter md:top-20 md:grid-cols-2 md:gap-x-[600px] md:gap-y-[80px]">
          <img
            alt="age-calculator-app"
            src="/age-calculator-app.jpg"
            className="max-w-[100px] -rotate-12 rounded-md md:max-w-[150px]"
          />
          <img
            alt="recipe-page"
            src="/recipe-page.jpg"
            className="max-h-[100px] max-w-[100px] rotate-12 rounded-md md:max-h-[150px] md:max-w-[150px]"
          />
          <img
            alt="mole"
            src="/mole.png"
            className="max-h-[100px] max-w-[100px] -rotate-12 rounded-md md:max-h-[150px] md:max-w-[150px]"
          />
          <img
            alt="tip-calculator-app"
            src="/tip-calculator-app.jpg"
            className="max-h-[100px] max-w-[100px] -rotate-12 rounded-md md:max-h-[150px] md:max-w-[150px]"
          />
          <img
            alt="payment-graphic"
            src="/payment-graphic.png"
            className="max-h-[100px] max-w-[100px] -rotate-12 rounded-md md:max-h-[150px] md:max-w-[150px]"
          />
          <img
            alt="cards"
            src="/cards.png"
            className="max-h-[100px] max-w-[100px] -rotate-12 rounded-md md:max-h-[150px] md:max-w-[150px]"
          />
        </div>{" "}
        <div className="flex flex-col items-center">
          <h1 className="max-w-2xl text-5xl font-bold sm:text-7xl lg:text-8xl">
            30
            <br />
            <div className="h-12 text-primary sm:h-[4.5rem] lg:h-24">
              Frontend
              {/* <Typewriter
                options={{
                  wrapperClassName: "text-primary",
                  strings: ["Web Dev", "Learning", "Exploring", "Programming"],
                  autoStart: true,
                  loop: true,
                }} */}
              {/* /> */}
            </div>
            <span className="">Projects</span>
          </h1>
          <p className="mt-2 max-w-xl py-6 sm:text-xl lg:text-2xl">
            {
              "Project-based learning is awesome, learn or test your frontend skills with these progressive challenges!"
            }
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
