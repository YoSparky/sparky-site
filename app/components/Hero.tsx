import { Link } from "@remix-run/react";
import { LiquidDropHover } from "./LiquidDropHover";

export default function Hero() {  
  return (
    <div className="relative w-full">
      <div className="container py-36 flex flex-col justify-center relative gap-28 z-[1]">
        <h1 className="font-bold text-5xl md:text-8xl text-shadow">We design, build, & optimize magical ecommerce sites that glow with personality.</h1>
        <Link to="/portfolio">
          <LiquidDropHover> 
            See the sites.
          </LiquidDropHover>
        </Link>
      </div>
    </div>
  )
}