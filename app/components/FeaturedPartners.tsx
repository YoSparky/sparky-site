import { Link } from "@remix-run/react";
import { 
  ShopifyPlusLogo,
  KlaviyoLogo,
  YotpoLogo,
  ElevarLogo
} from "./icons";

const partners = [
  {
    title: 'Shopify Plus',
    logo: <ShopifyPlusLogo/>,
    link: '/partners/shopify-plus'
  },
  {
    title: 'Klaviyo',
    logo: <KlaviyoLogo/>,
    link: '/partners/klaviyo'
  },
  {
    title: 'Yotpo',
    logo: <YotpoLogo/>,
    link: '/partners/yotpo'
  },
  {
    title: 'Elevar',
    logo: <ElevarLogo/>,
    link: '/partners/elevar'
  }
];

export default function FeaturedPartners() {  
  return (
    <div className="max-md:container md:right-edge-container my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ul className="grid grid-cols-2 gap-5 md:pr-32 [&_li:first-of-type]:rounded-tl-none [&_li:nth-of-type(2)]:rounded-tr-none [&_li:nth-of-type(3)]:rounded-bl-none [&_li:nth-of-type(4)]:rounded-br-none">
          {partners.map(({ title, logo, link }, i) => (
            <li className="aspect-[337/460] bg-halfColonialWhite rounded-3xl group hover:bg-energyYellow transition duration-300" key={`${title}-${i}`}>
              <Link className="w-full h-full flex items-center justify-center relative" title={title} to={link}>
                <div className="transition duration-500 transform w-2/3 group-hover:scale-110 [&_svg]:w-full">{logo}</div>
                <span className="bottom-3 transition duration-500 right-3 opacity-0 group-hover:opacity-100 group-hover:mirror absolute flex items-center justify-center w-9 h-9 rounded-full bg bg-tuatara text-ivory"><span className="mirror">i</span></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center">
          <strong className="block font-bold text-5xl text-shadow h1 transform">Howdy, partners.</strong>
          <div className="max-w-sm mt-11 leading-loose">
            We work closely with the best ecommerce partners and platforms to help support the growth of our clients.
          </div>
        </div>
      </div>
    </div>
  )
}