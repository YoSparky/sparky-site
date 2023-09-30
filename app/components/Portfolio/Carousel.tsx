import { useEffect, useId, useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { Arrow } from '../icons';

register();

export function Carousel({ content } : { content: { image: string | null, caption: string | null }[] } ) {  
  const swiperElRef = useRef(null);
  const [currentIndex, setIndex] = useState(0);
  const [isSliding, setSlidingState] = useState(false);

  useEffect(() => {
    const swiper = swiperElRef.current;
    if (!swiper) return;
    
     // swiper parameters
    const swiperParams = {
      initialSlide: content.length > 1 ? 1 : 0,
      slidesPerView: 2,
      slidesPerGroup: 1,	
      centeredSlides: true,
      centerInsufficientSlides: true,
      spaceBetween: "16",
      breakpoints: {
        768: {
          spaceBetween: "80",
        }
      },
      on: {
        init() {
          // @ts-expect-error
          swiper.addEventListener('slidechange', (e) => {
            setIndex(e.detail[0].realIndex);
          });
          // @ts-expect-error
          swiper.addEventListener('slidechangetransitionstart', () => {
            setSlidingState(true);
          });
          // @ts-expect-error
          swiper.addEventListener('slidechangetransitionend', () => {
            setSlidingState(false);
          });
        },
      },
    };

    Object.assign(swiper, swiperParams);
    // @ts-expect-error
    swiper.initialize();
  }, []);
  
  return (
    <div className="relative mix-blend-multiply">
       <swiper-container
        // @ts-expect-error
        init="false"
        ref={swiperElRef}
        className="mix-blend-multiply"
      >
      {content.map(({ image, caption }) => {
        if (!image) return;
        
        return (
          <swiper-slide key={useId()}>
            <img className="block max-h-[80vh] object-contain object-center mx-auto w-auto mix-blend-multiply" width="319" height="329" src={image} alt={caption || ''} />
            {caption && <span className="block text-sm uppercase pt-4">* {caption}</span>}
          </swiper-slide>
        );
      })}
      </swiper-container>
      {content.length > 1 && 
        <>
          <div className={`${isSliding ? 'md:opacity-0' : 'duration-500'} transition-opacity duration-200 flex max-md:container max-md:py-4 md:flex-col gap-3 items-center md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:pl-[24%] md:w-[1%]`}>
            <span>{currentIndex + 1}</span>
            <span className="text-xs">/</span>
            <span>{content.length}</span>
          </div>
          {currentIndex > 0  && 
            <button 
              // @ts-expect-error
              onClick={() => swiperElRef.current.swiper.slidePrev()} 
              className="z-[1] h-16 w-16 text-ivory transform rotate-180 origin-top translate-y-1/2 hidden md:flex items-center justify-center absolute absolute-container-left top-1/2 transition duration-200 opacity-90"
            >
              <Arrow className="w-16 h-16" />
            </button>
          }
          {(currentIndex + 1) < content.length && 
          <button 
              // @ts-expect-error
              onClick={() => swiperElRef.current.swiper.slideNext()} 
              className="z-[1] h-16 w-16 text-ivory transform -translate-y-1/2 hidden md:flex items-center justify-center absolute absolute-container-right top-1/2 transition duration-200 opacity-90"
            >
              <Arrow className="w-16 h-16" />
            </button>
          }
        </>
      }
    </div>
  )
}