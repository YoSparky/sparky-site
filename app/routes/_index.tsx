import type { V2_MetaFunction } from "@remix-run/node";
import Hero from "~/components/Homepage/Hero";
import FeaturedPortfolio from "~/components/Homepage/FeaturedPortfolio";
import PortfolioList from "~/components/PortfolioList";
import Footer from "~/components/Footer/Footer";
import Offerings from "~/components/Offerings";
import TextImageColumns from "~/components/Homepage/TextImageColumns";
import FeaturedPartners from "~/components/Homepage/FeaturedPartners";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Sparky | Home" },
    { name: "description", content: "We design, build, & optimize high-converting eCommerce sites that glow with brand personality." },
  ];
};

export default function Index() {
  return (
    <div className="homepage">
      <Hero />
      <FeaturedPortfolio />
      <PortfolioList />
      <Offerings />
      <TextImageColumns />
      <FeaturedPartners />
      <Footer />
    </div>
  );
}
