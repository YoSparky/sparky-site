import { Link } from "@remix-run/react";

export default function Hero() {  
  return (
    <div className="relative w-full z-[1]">
      <div className="container min-h-screen flex flex-col justify-center z-10 relative gap-28">
        <h1 className="font-bold text-8xl text-shadow">We design, build, & optimize magical ecommerce sites that glow with personality.</h1>
        <Link className="button button--liquid-drop w-max" to="/portfolio">See the sites.</Link>
      </div>
      <div className="z-[0] absolute bottom-0 left-0 transform translate-x-1/2 h-[200vh] w-full bg-energyYellow mix-blend-multiply rounded-[20vw]" aria-hidden="true"></div>
    </div>
  )
}