import data from '../data/case-studies';
import { useParams } from "@remix-run/react";
import { ArrowSquare } from '~/components/icons';
import { 
  Carousel, 
  Overview, 
  PortfolioBanner, 
  Results, 
  SparkyMagic, 
  Stack, 
  Testimonial
} from '~/components/Portfolio';

export default function Index() {
  const params = useParams();
  const caseStudy = data.find((item) => item.handle === params.client);
    
  if (!caseStudy) {
    return (
      <div className="bg-ivory">
        <div className="container text-center flex items-center justify-center min-h-screen text-5xl font-bold">
          <h1>Whoops! Nothing here.</h1>
        </div>
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
    <>
      <div className="container flex flex-col pt-32 gap-5 pb-5 md:pb-10">
        <span className="uppercase">case study /</span>
        <div className="flex items-center justify-between">
          <h1 className="block leading-tight text-3xl md:text-[88px] font-bold">{title}</h1>
          <a target="_blank" rel="noopener" href={siteLink} className="relative z-[0] group px-2 font-title text-xl font-bold md:text-[44px] flex items-end gap-8">
            <span className="py-3 block w-max">Visit</span>
            <div aria-hidden="true" className="w-6 text-energyYellow transition-all duration-300 origin-bottom transform group-hover:translate-x-3 group-hover:scale-150">
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
      
      {overview && 
        <div className="container max-w-5xl py-5 md:py-10">
          <Overview content={overview} />
        </div>
      }
      
      {carousel && 
        <Carousel content={carousel} />
      }
      
      {vimeoLinkSecondary && 
        <div className="container py-5 md:py-10">
          <iframe className="aspect-video w-full" src={vimeoLinkSecondary} />
        </div>
      }
    </>
  );
}
