import { Link } from "@remix-run/react";
import { LiquidDropHover } from "../LiquidDropHover";

export default function Hero() {  
  return (
    <section className="hero">
      <div className="relative w-full pt-16 z-[0]">
        <div className="container py-16 md:pt-24 md:pb-36 flex flex-col justify-center gap-16">
          <h1 className="text-shadow">We design, build, and optimize high-converting eCommerce sites that glow with brand personality.</h1>
          <p>As proud Shopify Plus partners, we help fast-growing DTC businesses squeeze more out of their websites and future-proof their tech stacks.</p>
          <Link to="/portfolio">
            <LiquidDropHover> 
              See the sites.
            </LiquidDropHover>
          </Link>
        </div>
      </div>
    </section>
  );
}