import { Link } from "@remix-run/react";
import HeydudePortfolioImage from '../assets/HeyDude-Portfolio.png';
import LegendsPortfolioImage from '../assets/Legends-Portfolio.png';

export default function FeaturedPortfolio() {  
  return (
    <div className="relative w-full max-md:overflow-hidden">
      <div className="right-edge-container flex flex-col justify-center relative gap-4 md:gap-7 z-[1]">
        <span>Latest Work</span>
        <div className="grid gap-16 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col max-md:pr-4">
            <Link className="flex flex-col" to="/portfolio/heydude">
              <img className="block bg-mix-blend-multiply" src={HeydudePortfolioImage} />
              <strong className="block font-bold text-5xl md:text-6xl text-shadow h1 transform -translate-y-[65%] -ml-1 leading-none">Hey Dude</strong>
            </Link>
            <ul className="flex flex-wrap md:border border-current md:w-max max-md:text-center max-md:gap-1 [&_li]:max-md:border [&_li:not(:last-of-type)]:md:border-r [&_li]:border-current [&_li]:p-4 text-sm">
              <li>Shopify Plus Migration</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
            <div className="pt-96 mt-auto hidden md:block">
              <Link className="button w-max" to="/portfolio">View More Work</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link className="flex flex-col" to="/portfolio/heydude">
              <img className="block md:mt-[70%]" src={LegendsPortfolioImage} />
              <strong className="block font-bold text-5xl md:text-6xl text-shadow h1 -ml-1 transform -translate-y-[65%] leading-none">Legends</strong>
            </Link>
            <ul className="flex flex-wrap md:border border-current md:w-max max-md:text-center max-md:gap-1 [&_li]:max-md:border [&_li:not(:last-of-type)]:md:border-r [&_li]:border-current [&_li]:p-4 text-sm">
              <li>Shopify Plus Migration</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
          </div>
          <Link className="md:hidden button w-max" to="/portfolio">View More Work</Link>
        </div>
      </div>
      <div className="absolute left-0 top-0 bottom-0 aspect-[2/1] max-w-[100vw] w-full z-[0]">
        <div className="-z-[1] relative bottom-0 left-0 transform -translate-x-[70%] rotate-[65deg] h-[100vh] w-full bg-energyYellow mix-blend-multiply" aria-hidden="true"></div>
      </div>
    </div>
  )
}