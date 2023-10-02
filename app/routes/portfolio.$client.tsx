import data from '../data/case-studies';
import { Link, useParams } from "@remix-run/react";
import { ArrowSquare, Star } from '~/components/icons';
import { 
  Carousel, 
  Overview, 
  PortfolioBanner, 
  Results, 
  SparkyMagic, 
  Stack, 
  Testimonial,
  Footer,
} from '~/components/Portfolio';
import backgroundShapes from '../assets/portfolio-svg-background.svg';
import { useId } from 'react';

export default function Index() {
  const params = useParams();
  const currentIndex = data.findIndex((item) => item.handle === params.client);
  const caseStudy = data[currentIndex];
  const id = useId();
  
  if (!caseStudy) {
    return (
      <div className="bg-ivory">
        <div className="container pt-32 flex flex-col gap-5">
          <h1 className="h2">Whoops! Nothing here.</h1>
          <hr className="border-0 border-b border-dashed mt-11 mb-5 block border-current" />
        </div>
        <div className="w-full py-5 md:py-10">
          <div className="container title">case studies</div>
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
    );
  }
  
  const {
    title,
    description,
    vimeoLinkPrimary,
    overview,
    carousel,
    sparkyMagic,
    portfolioBanner,
    vimeoLinkSecondary,
    siteLink,
    testimonial,
    stack,
    results
  } = caseStudy;
  
  return (
    <div className="bg-[length:_100%_auto] bg-no-repeat bg-top bg-ivory" style={{ backgroundImage: `url(${backgroundShapes})` }}>
      <div className="container flex flex-col pt-32 gap-5 pb-5 md:pb-10">
        <Link to="/portfolio" className="title">case study /</Link>
        <div className="flex items-center justify-between">
          <h1 className="block leading-tight text-3xl md:text-[88px] font-bold">{title}</h1>
          <a target="_blank" rel="noopener" href={siteLink} className="relative z-[0] group px-2 font-title text-xl font-bold md:text-[44px] flex items-end gap-8">
            <span className="py-3 block w-max">Visit</span>
            <div aria-hidden="true" className="w-6 text-energyYellow transition-all duration-300 group-hover:text-tuatara">
              <ArrowSquare />
            </div>
            <div aria-hidden="true" className="absolute bottom-0 left-0 h-6 w-[calc(100%-44px)] bg-energyYellow -z-[1]"></div>
          </a>
        </div>
      </div>
      
      <div 
        className="container py-5 md:py-10 font-title text-2xl md:text-4xl font-medium leading-normal"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      
      {vimeoLinkPrimary && 
        <div className="container py-5 md:py-10">
          <iframe className="aspect-video w-full" src={vimeoLinkPrimary} />
        </div>
      }
      
      <Overview content={overview} />      
      <Carousel content={carousel} />
      <SparkyMagic content={sparkyMagic} />

      {vimeoLinkSecondary && 
        <div className="container py-5 md:py-10">
          <iframe className="aspect-video w-full" src={vimeoLinkSecondary} />
        </div>
      }
      
      <PortfolioBanner content={portfolioBanner} />
      <Testimonial content={testimonial} /> 
      <Stack content={stack} />
      <Results content={results} />
      
      <div className="bg-ivory pt-20">
        <Footer 
          isFirst={false}
          prevItem={{
            title: data[currentIndex - 1]?.title,
            handle: data[currentIndex - 1]?.handle
          }} 
          nextItem={{
            title: data[currentIndex + 1]?.title,
            handle: data[currentIndex + 1]?.handle
          }} 
        />
      </div>
    </div>
  );
}
