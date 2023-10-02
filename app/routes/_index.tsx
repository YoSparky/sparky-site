import type { V2_MetaFunction } from "@remix-run/node";
import Hero from "~/components/Homepage/Hero";
import FeaturedPortfolio from "~/components/Homepage/FeaturedPortfolio";
import FeaturedPartners from "~/components/Homepage/FeaturedPartners";
import PortfolioList from "~/components/PortfolioList";
import PortfolioSlider from "~/components/PortfolioSlider";
import OfferingsAccordion from "~/components/OfferingsAccordion";
import Marquee from "~/components/Marquee";
import Footer from "~/components/Footer/Footer";
import backgroundShapes from '../assets/homepage-svg-background.svg';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Sparky | Home" },
    { name: "description", content: "We design, build, & optimize high-converting eCommerce sites that glow with brand personality." },
  ];
};

export default function Index() {
  return (
    <div style={{ backgroundImage: `url(${backgroundShapes})` }} className="bg-ivory bg-[length:_100%_auto] bg-no-repeat bg-top">
      <Hero />
      <FeaturedPortfolio />
      <FeaturedPartners />
      <PortfolioList />
      <PortfolioSlider />
      <OfferingsAccordion />
      <Marquee />
      <Footer />
    </div>
  );
}
