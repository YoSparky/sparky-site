import { Link } from "@remix-run/react";
import HeydudePortfolioImage from '../assets/HeyDude-Portfolio.png';
import LegendsPortfolioImage from '../assets/Legends-Portfolio.png';

export default function FeaturedPortfolio() {  
  return (
    <div className="relative w-full max-lg:overflow-hidden">
      <div className="right-edge-container flex flex-col justify-center relative gap-4 lg:gap-7 z-[1]">
        <span>Latest Work</span>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-5">
          <div className="flex flex-col max-lg:pr-4">
            <Link className="flex flex-col" to="/portfolio/heydude">
              <img className="block bg-mix-blend-multiply" src={HeydudePortfolioImage} />
              <strong className="block font-bold text-5xl lg:text-6xl text-shadow h1 transform -translate-y-[65%] -ml-1 leading-none">Hey Dude</strong>
            </Link>
            <ul className="flex flex-wrap lg:border border-current lg:w-max max-lg:text-center max-lg:gap-1 [&_li]:max-lg:border [&_li:not(:last-of-type)]:lg:border-r [&_li]:border-current [&_li]:p-4 text-sm">
              <li>Shopify Plus Migration</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
            <div className="pt-96 mt-auto hidden lg:block">
              <Link className="button w-max" to="/portfolio">View More Work</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link className="flex flex-col" to="/portfolio/heydude">
              <img className="block lg:mt-[70%]" src={LegendsPortfolioImage} />
              <strong className="block font-bold text-5xl lg:text-6xl text-shadow h1 -ml-1 transform -translate-y-[65%] leading-none">Legends</strong>
            </Link>
            <ul className="flex flex-wrap lg:border border-current lg:w-max max-lg:text-center max-lg:gap-1 [&_li]:max-lg:border [&_li:not(:last-of-type)]:lg:border-r [&_li]:border-current [&_li]:p-4 text-sm">
              <li>Shopify Plus Migration</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
          </div>
          <Link className="lg:hidden button w-max" to="/portfolio">View More Work</Link>
        </div>
      </div>
    </div>
  )
}