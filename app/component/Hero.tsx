import Typewriter from "typewriter-effect";

export function Hero({}: {}) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="flex flex-col items-center">
          <h1 className="max-w-2xl text-5xl font-bold sm:text-7xl lg:text-8xl">
            My
            <br />
            <div className="h-12 sm:h-[4.5rem] lg:h-24">
              <Typewriter
                options={{
                  wrapperClassName: "text-primary",
                  strings: ["Web Dev", "Learning", "Exploring", "Programming"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <span>Adventure</span>
          </h1>
          <p className="mt-2 max-w-xl py-6 sm:text-xl lg:text-2xl">
            {
              "Let's create awesome websites together! I'll share the courses and projects I'm working on. I hope it inspires other beginners while showing my growth. Let's explore web development together!"
            }
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
