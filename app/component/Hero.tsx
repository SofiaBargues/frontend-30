import Typewriter from "typewriter-effect";

export function Hero({}: {}) {
  return (
    <div className="hero mt-11 min-h-[700px]">
      <div className="hero-content text-center">
        <div className="flex flex-col items-center">
          <h1 className="max-w-2xl text-5xl font-bold sm:text-7xl lg:text-8xl">
            30
            <br />
            <img
              alt="/age-calculator-app.jpg"
              src="/age-calculator-app.jpg"
              // style={{ opacity: 0.4 }}
              className={
                "absolute left-[10px] z-0 ml-6 flex max-h-[200px] max-w-[200px] -rotate-12 rounded-md"
              }
            ></img>
            <img
              alt="/recipe-page.jpg"
              src="/recipe-page.jpg"
              // style={{ opacity: 0.4 }}
              className={
                "absolute left-[10px] z-0 ml-6 mt-40 max-h-[200px] max-w-[200px] -rotate-12 rounded-md"
              }
            ></img>
            <img
              alt="/tip-calculator-app.jpg"
              src="/tip-calculator-app.jpg"
              // style={{ opacity: 0.4 }}
              className={
                "absolute left-[10px] z-0 ml-6 mt-80 max-h-[200px] max-w-[200px] -rotate-12 rounded-md"
              }
            ></img>
            <img
              alt="/mole.png"
              src="/mole.png"
              // style={{ opacity: 0.4 }}
              className={
                "absolute left-[10px] z-0 ml-6 mt-40 max-h-[200px] max-w-[200px] -rotate-12 rounded-md"
              }
            ></img>
            <img
              alt="/payment-graphic.png"
              src="/payment-graphic.png"
              // style={{ opacity: 0.4 }}
              className={
                "absolute right-44 z-0 ml-6 mt-80 max-h-[200px] max-w-[200px] -rotate-12 rounded-md"
              }
            ></img>
            <img
              alt="/cards.png"
              src="/cards.png"
              // style={{ opacity: 0.4 }}
              className={
                "absolute right-20 z-0 ml-6 mt-80 max-h-[200px] max-w-[200px] -rotate-12 rounded-md"
              }
            ></img>
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
