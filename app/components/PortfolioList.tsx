import { useId } from "react";
import { Star } from "./icons";

const portfolioListItems = [
  {
    title: 'Orthofeet',
    status: 'In progress',
    platform: 'Shopify plus',
    link: 'https://www.orthofeet.com/'
  },
  {
    title: 'Wink',
    status: null,
    platform: 'Shopify plus',
    link: 'https://winkscrubs.com/'
  },
  {
    title: 'Legends',
    status: null,
    platform: 'Shopify plus',
    link: 'https://www.legends.com/'
  },
  {
    title: 'Heydude',
    status: null,
    platform: 'Shopify plus',
    link: 'https://www.heydude.com/'
  },
  {
    title: 'Ghost',
    status: null,
    platform: 'Shopify plus',
    link: 'https://www.ghostlifestyle.com/'
  },
  {
    title: '\'47 Brand',
    status: null,
    platform: 'Shopify plus',
    link: 'https://www.47brand.com/'
  },
  {
    title: 'Speidel',
    status: null,
    platform: 'Shopify plus',
    link: 'https://speidel.com/'
  }
];

export default function PortfolioList() {  
  return (
    <div className="relative w-full">
      <div className="container py-12">
        <div className="max-w-5xl ml-auto flex flex-col gap-8">
          <span className="uppercase">Work in the wild</span>
          <ul className="flex flex-col gap-8 pb-11 border-b border-current">
            {portfolioListItems.map(({ title, status, platform, link }, i) => (
              <li className="relative group w-full grid grid-cols-[40%_1fr_auto] md:grid-cols-[50%_1fr_auto] items-end gap-4 hover:highlighted hover-highlight" key={`${useId()}`}>
                <span className="transition duration-300 absolute bottom-1/2 left-0 transform translate-y-1/2 -translate-x-[200%] scale-0 group-focus-within:scale-[175%] group-hover:scale-[175%]">
                  <Star className="w-8 h-8" />
                </span>
                <span className="flex w-full items-end leading-[0.75] gap-4 text-2xl md:text-[44px] font-title">
                  <span className="block w-max whitespace-nowrap">                
                    {status ? title : <a target="_blank" href={link}>{title}</a>}
                  </span>
                  <span className="w-full border-b border-current border-dashed"></span>
                </span>
                <span className="flex items-end w-full gap-4">
                  <span className="leading-none uppercase text-xs whitespace-nowrap">{platform}</span>
                  <span className="w-full border-b border-current border-dashed"></span>
                </span>
                <span className="leading-none uppercase text-xs text-center">
                  {status ? 'In progress' : <a target="_blank" href={link}>Visit</a>}
                </span>
              </li>
            ))}
          </ul>
          <strong className="ml-auto text-right uppercase">More examples on request</strong>
        </div>
      </div>
    </div>
  )
}