import { Link } from "@remix-run/react";
import { LiquidDropHover } from "../LiquidDropHover";

export default function Hero() {  
  return (
    <div className="relative w-full pt-16 z-[0]">
      <div className="container py-16 md:pt-24 md:pb-36 flex flex-col justify-center gap-28">
        <h1 className="text-shadow">We design, build, & optimize magical ecommerce sites that glow with personality.</h1>
        <Link to="/portfolio">
          <LiquidDropHover> 
            See the sites.
          </LiquidDropHover>
        </Link>
      </div>
    </div>
  )
}