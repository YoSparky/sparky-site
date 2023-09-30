import { 
  ShopifyPlusLogo,
  KlaviyoLogo,
  YotpoLogo,
  ElevarLogo
} from "../icons";
import { useId } from "react";

const partners = [
  {
    title: 'Shopify Plus',
    logo: <ShopifyPlusLogo/>,
    link: null,
    tagline: `The Global Commerce Platform`
  },
  {
    title: 'Klaviyo',
    logo: <KlaviyoLogo/>,
    link: null,
    tagline: `Email & SMS Marketing`
  },
  {
    title: 'Yotpo',
    logo: <YotpoLogo/>,
    link: null,
    tagline: `Reviews, Loyalty & Referrals`
  },
  {
    title: 'Elevar',
    logo: <ElevarLogo/>,
    link: null,
    tagline: `Accurate Conversion Tracking`
  }
];

export default function FeaturedPartners() {  
  return (
    <div className="max-md:container md:right-edge-container py-5 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ul className="grid grid-cols-2 gap-2.5 md:gap-5 md:pr-32 [&_li:first-of-type]:rounded-tl-none [&_li:nth-of-type(2)]:rounded-tr-none [&_li:nth-of-type(3)]:rounded-bl-none [&_li:nth-of-type(4)]:rounded-br-none">
          {partners.map(({ title, logo, link, tagline }) => (
            <li className="aspect-[337/460] bg-halfColonialWhite rounded-3xl group hover:bg-energyYellow transition duration-500" key={useId()}>
              {link ? 
                <a target="_blank" rel="noopener" className="w-full h-full flex items-center justify-center relative" href={link}>
                  <div title={title} className="transition duration-500 transform w-2/3 group-hover:scale-110 [&_svg]:w-full">{logo}</div>
                  <div className="absolute bottom-3 left-3 right-3 pr-12 flex items-center">
                    <span>{tagline}</span>
                    <span className="bottom-0 transition duration-500 right-0 opacity-0 group-hover:opacity-100 group-hover:mirror absolute flex items-center justify-center w-9 h-9 rounded-full bg bg-tuatara text-ivory"><span className="mirror">i</span></span>
                  </div>
                </a>
              : 
                <div className="w-full h-full flex items-center justify-center relative">
                  <div title={title} className="transition duration-500 transform w-2/3 group-hover:scale-110 [&_svg]:w-full">{logo}</div>
                  <div className="absolute bottom-3 left-3 right-3 p-4 flex items-center">
                    <span className="text-xs opacity-0 transition duration-500 group-hover:opacity-100">{tagline}</span>
                    <span className="ml-auto transition duration-500 right-0 opacity-0 group-hover:opacity-100 group-hover:mirror flex items-center justify-center min-h-[36px] min-w-[36px] w-9 h-9 rounded-full bg bg-tuatara text-ivory"><span className="mirror">i</span></span>
                  </div>
                </div>
              }
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-5 py-5 md:gap-10 md:py-10 justify-center">
          <strong className="block h2 leading-[1]">Howdy, partners.</strong>
          <div className="max-w-sm leading-loose text-sm">
            We work closely with the best ecommerce partners and platforms to help support the growth of our clients.
          </div>
        </div>
      </div>
    </div>
  )
}