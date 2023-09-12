import type { V2_MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";

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
      <div className="container min-h-screen">
        <h1 className="font-bold text-8xl">We design, build, & optimize magical ecommerce sites that glow with personality.</h1>
      </div>
    </div>
  );
}
