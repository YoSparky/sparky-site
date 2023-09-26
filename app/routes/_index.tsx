import type { V2_MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import FeaturedPortfolio from "~/components/FeaturedPortfolio";
import FeaturedPartners from "~/components/FeaturedPartners";
import PortfolioList from "~/components/PortfolioList";
import PortfolioSlider from "~/components/PortfolioSlider";
import OfferingsAccordion from "~/components/OfferingsAccordion";
import Marquee from "~/components/Marquee";
import Footer from "~/components/Footer/Footer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Sparky | Home" },
    { name: "description", content: "We design, build, & optimize high-converting eCommerce sites that glow with brand personality." },
  ];
};

type PageProps = {
  toggleModal: Function
}

export default function Index({ toggleModal } : PageProps) {
  return (
    <>
      <div className="bg-ivory">
        <div className="w-screen max-md:overflow-x-hidden">
          <Hero />
          <FeaturedPortfolio />
          <FeaturedPartners />
          <PortfolioList />
          <PortfolioSlider />
          <OfferingsAccordion />
          <Marquee />
          <Footer />
        </div>
      </div>
    </>
  );
}
