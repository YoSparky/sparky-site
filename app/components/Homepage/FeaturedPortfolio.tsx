// @ts-nocheck
import { Link } from "@remix-run/react";
import { useId, useRef, useEffect, useState } from "react";
import caseStudies from '../../data/case-studies';
import { register } from 'swiper/element/bundle';

register();

export default function FeaturedPortfolio() {  
  const swiperRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    // Register Swiper web component
    register();
    
    // Object with parameters
    const params = {
      injectStyles: [
        `
        .swiper {
          overflow: visible;
        }
        `,
      ],
      on: {
        slideChange(s) {
          setIsEnd(s.isEnd);
          setIsBeginning(s.isBeginning);
        },
      },
      spaceBetween: 8,
      slidesPerView: 3.1,
      breakpoints: {
        768: {
          slidesPerView: 2.1,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  const buttonStyles = `
    z-[1]
    h-16 
    w-16
    transform 
    -translate-y-1/2 
    items-center 
    justify-center 
    absolute 
    top-1/2 
    rounded-full 
    transition 
    duration-200
    flex
    bg-white
    p-5
    hover:bg-black
    hover:text-white
  `;
  
  return (
    <div className="overflow-hidden">
      <div className="pt-5 pb-10 md:py-10 [&_.swiper-button-disabled]:!hidden relative container overflow-visible">
        <swiper-container init="false" ref={swiperRef}>
        {caseStudies.map((caseStudy) => {
            const caseStudyKey = useId();
            if (!caseStudy?.portfolioBanner) return;
            return (
              <swiper-slide key={caseStudyKey}>
                <div className="block relative rounded-md overflow-hidden">
                  <img 
                    className="block aspect-[432/540] object-cover object-center" 
                    src={caseStudy.portfolioBanner.image} 
                    alt={caseStudy.portfolioBanner.caption ?? ''} 
                  />
                </div>
              </swiper-slide>
            )
          })}
        </swiper-container>
        <button 
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className={`left-0 [&_svg]:transform [&_svg]:rotate-180 ${buttonStyles} ${isBeginning ? 'hidden' : 'flex'}`}
        >
          <svg viewBox="0 0 16 16" height="100%" width="100%" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-sc-ea9ulj-0 hRnJPC"><title>ChevronRight icon</title><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
        </button>
        <button 
          onClick={() => swiperRef.current.swiper.slideNext()}
          className={`right-0 ${buttonStyles} ${isEnd ? 'hidden' : 'flex'}`}
        >
          <svg viewBox="0 0 16 16" height="100%" width="100%" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-sc-ea9ulj-0 hRnJPC"><title>ChevronRight icon</title><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
        </button>
      </div>
    </div>
  )
}