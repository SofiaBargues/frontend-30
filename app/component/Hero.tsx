import Typewriter from "typewriter-effect";

export function Hero({}: {}) {
  return (
    <div className="hero mt-11 min-h-[700px]">
      <div className="hero-content text-center">
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
