import { Link } from '@remix-run/react';
import { useId } from 'react';
import data from '../data/case-studies';
import { ArrowSquare, Star } from '~/components/icons';
import { Footer } from '~/components/Portfolio';
import backgroundShapes from '../assets/homepage-svg-background.svg';

export default function Index() {
  const id = useId();
  return (
    <div style={{ backgroundImage: `url(${backgroundShapes})` }} className="bg-ivory bg-[length:_100%_auto] bg-no-repeat bg-top">
      <div className="container flex flex-col pt-32 gap-5">
        <span className="title">Our work</span>
        <div className="flex items-center justify-between">
          <h1 className="block leading-tight text-3xl md:text-[88px] font-bold">Case Studies</h1>
        </div>
      </div>
      <div className="container">
        <div className="w-full py-5 md:py-10">
          <div className="container py-5 md:py-10">
            <div className="md:max-w-5xl ml-auto flex flex-col gap-8">
              <ul className="flex flex-col gap-3 pb-11">
                {data.map(({ title, handle }, i) => (
                  <li key={`${id}-${i}`} className={`relative group w-full grid grid-cols-[40%_1fr_auto] md:grid-cols-[50%_1fr_auto] items-end gap-4 focus-within:highlighted hover:highlighted hover-highlight after:!duration-500`}>
                    <span className="transition duration-500 absolute bottom-1/2 -left-5 transform translate-y-1/2 -translate-x-full -rotate-45 scale-0 group-hover:rotate-90 group-hover:scale-100">
                      <Star className="w-9 h-9" />
                    </span>
                    <span className="flex w-full items-end gap-4 ">
                      <strong className="block w-max whitespace-nowrap text-lg md:text-[44px] font-title leading-[0.75]">                
                        <Link to={`/portfolio/${handle}`}>{title}</Link>
                      </strong>
                      <span className="w-full border-b border-current border-dashed"></span>
                    </span>
                    <span className="flex items-end w-full gap-4">
                      <span className="max-md:text-xs title leading-none text-center whitespace-nowrap">Shopify plus</span>
                      <span className="w-full border-b border-current border-dashed"></span>
                    </span>
                    <span className="max-md:text-xs title leading-none text-center">
                      <Link className="flex gap-2 items-center text-tuatara" to={`/portfolio/${handle}`}>
                        Read
                        <div aria-hidden="true" className="w-2">
                          <ArrowSquare />
                        </div>
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Footer 
          isFirst={true}
          prevItem={{
            title: null,
            handle: null
          }} 
          nextItem={{
            title: data[0]?.title,
            handle: data[0]?.handle
          }} 
        />
      </div>        
    </div>
  );
}
