import { Link } from "@remix-run/react";
import { LiquidDropHover } from "./LiquidDropHover";

export default function Hero() {  
  return (
    <div className="relative w-full">
      <div className="container py-36 flex flex-col justify-center relative gap-28 z-[1]">
        <h1 className="font-bold text-5xl md:text-8xl text-shadow">We design, build, & optimize magical ecommerce sites that glow with personality.</h1>
          <LiquidDropHover> 
            <Link to="/portfolio">
            See the sites.
            </Link>
          </LiquidDropHover>
      </div>
      <div className="absolute left-0 top-0 min-h-max max-w-[100vw] w-full overflow-hidden z-[0]">
        <div className="-z-[1] relative bottom-0 left-0 transform translate-x-1/2 -translate-y-1/4 aspect-square w-full bg-energyYellow mix-blend-multiply rounded-[20vw]" aria-hidden="true"></div>
      </div>
    </div>
  )
}