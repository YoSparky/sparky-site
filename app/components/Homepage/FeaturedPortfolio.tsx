import { Link } from "@remix-run/react";
import HeydudePortfolioImage from '../../assets/HeyDude-Portfolio.png';
import LegendsPortfolioImage from '../../assets/Legends-Portfolio.png';

export default function FeaturedPortfolio() {  
  return (
    <div className="pt-5 pb-10 md:py-10">
      <div className="right-edge-container flex flex-col justify-center gap-5 lg:gap-7 py-5 md:py-10">
        <span className="text-sm">Latest Work</span>
        <div className="grid gap-10 md:gap-16 lg:grid-cols-2 lg:gap-5">
          <div className="flex flex-col max-lg:pr-4">
            <Link className="flex flex-col" to="/portfolio/heydude">
              <img className="block bg-mix-blend-multiply" src={HeydudePortfolioImage} />
              <strong className="block text-shadow h2 transform -translate-y-[65%] -ml-1 leading-none">Hey Dude</strong>
            </Link>
            <ul className="flex flex-wrap lg:border border-current lg:w-max max-lg:text-center max-lg:gap-1 [&_li]:max-lg:border [&_li:not(:last-of-type)]:lg:border-r [&_li]:border-current [&_li]:p-4 text-sm">
              <li>Shopify Plus Migration</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
            <div className="pt-96 mt-auto hidden lg:block">
              <Link className="block button w-max" to="/portfolio">View More Work</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link className="flex flex-col" to="/portfolio/heydude">
              <img className="block lg:mt-[70%]" src={LegendsPortfolioImage} />
              <strong className="block text-shadow h2 transform -translate-y-[65%] -ml-1 leading-none">Legends</strong>
            </Link>
            <ul className="flex flex-wrap lg:border border-current lg:w-max max-lg:text-center max-lg:gap-1 [&_li]:max-lg:border [&_li:not(:last-of-type)]:lg:border-r [&_li]:border-current [&_li]:p-4 text-sm">
              <li>Shopify Plus Migration</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
          </div>
          <Link className="block lg:hidden button w-max" to="/portfolio">View More Work</Link>
        </div>
      </div>
    </div>
  )
}