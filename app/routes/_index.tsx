import type { V2_MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import FeaturedPortfolio from "~/components/FeaturedPortfolio";
import FeaturedPartners from "~/components/FeaturedPartners";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Sparky | Home" },
    { name: "description", content: "We design, build, & optimize high-converting eCommerce sites that glow with brand personality." },
  ];
};

export default function Index() {
  return (
    <div className="bg-ivory">
      <Header />
      <Hero />
      <FeaturedPortfolio />
      <FeaturedPartners />
    </div>
  );
}
