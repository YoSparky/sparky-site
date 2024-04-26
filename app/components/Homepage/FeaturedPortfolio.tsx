// @ts-nocheck
import { useId, useRef, useEffect, useState } from "react";
import { portfolioSlider } from '../../data/homepage';
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
      slidesPerView: 1.2,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
    setIsEnd(swiperRef.current.swiper.isEnd);
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
      <div className="pt-5 pb-16 md:py-10 [&_.swiper-button-disabled]:!hidden relative container overflow-visible">
        <swiper-container init="false" ref={swiperRef}>
        {portfolioSlider.map((caseStudy) => {
            const caseStudyKey = useId();
            if (!caseStudy?.image) return;
            return (
              <swiper-slide key={caseStudyKey}>
                <div className="block relative rounded-md overflow-hidden group">
                  <img 
                    className="block aspect-[432/540] object-cover object-center scale-100 group-hover:scale-105 origin-center transition-all duration-500" 
                    src={caseStudy.image} 
                    loading="lazy"
                    alt={caseStudy.title ?? ''} 
                  />
                  <a
                    href={caseStudy.link} 
                    target="_blank"
                    style={{ backgroundImage: 'linear-gradient(to bottom, rgba(63, 73, 73, 0) -12%, #3f494a 92%)' }} 
                    className="absolute top-0 left-0 flex items-end h-full w-full p-7"
                  >
                    <strong className="text-2xl md:text-[40px] text-white">{caseStudy.title}</strong>
                  </a>
                </div>
              </swiper-slide>
            )
          })}
        </swiper-container>
        <button 
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className={`left-4 -translate-x-1/2 [&_svg]:transform [&_svg]:rotate-180 max-md:hidden ${buttonStyles} ${isBeginning ? 'hidden' : 'md:flex'}`}
        >
          <svg viewBox="0 0 16 16" height="100%" width="100%" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-sc-ea9ulj-0 hRnJPC"><title>ChevronRight icon</title><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
        </button>
        <button 
          onClick={() => swiperRef.current.swiper.slideNext()}
          className={`right-[calc(10%+32px)] md:right-4 translate-x-1/2 ${buttonStyles} ${isEnd ? 'hidden' : 'flex'}`}
        >
          <svg viewBox="0 0 16 16" height="100%" width="100%" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-sc-ea9ulj-0 hRnJPC"><title>ChevronRight icon</title><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
        </button>
      </div>
    </div>
  )
}