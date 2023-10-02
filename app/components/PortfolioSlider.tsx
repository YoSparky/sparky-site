import { useRef, useEffect, useState, useId } from 'react';
import LegendsImage from '../assets/legends-slider.jpeg';
import HeydudeImage from '../assets/heydude-slider.jpeg';
import GhostImage from '../assets/ghost-slider.jpeg';
import SliderBackground from '../assets/slider-bg-bottom.png';
import { register } from 'swiper/element/bundle';
import { Arrow } from './icons';
import { Link } from '@remix-run/react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const sliderItems = [
  {
    title: 'Legends',
    image: LegendsImage,
    copy: 'Legends saw a <strong>24% lift in cart conversions</strong> after our Shopify Plus replatforming.',
    link: '/portfolio/legends'
  },
  {
    title: 'HEYDUDE',
    image: HeydudeImage,
    copy: 'HEYDUDE experienced a <strong>51% increase in “Checkouts Reached”</strong> YOY as of seven months post-launch.',
    link: '/portfolio/heydude'
  },
  {
    title: 'Ghost',
    image: GhostImage,
    copy: '<strong>2,210 supplement subscription orders in 30 days</strong> after launching functionality on new Ghost site with no marketing.',
    link: '/portfolio/ghost'
  }
];

register();

export default function PortfolioSlider() {  
  const swiperElRef = useRef(null);
  const [currentIndex, setIndex] = useState(0);
  const [isSliding, setSlidingState] = useState(false);

  useEffect(() => {
    // @ts-expect-error
    swiperElRef.current.addEventListener('slidechange', (e) => {
      setIndex(e.detail[0].realIndex);
    });
    
     // @ts-expect-error
     swiperElRef.current.addEventListener('slidechangetransitionstart', () => {
      setSlidingState(true);
    });
    // @ts-expect-error
    swiperElRef.current.addEventListener('slidechangetransitionend', () => {
      setSlidingState(false);
    });
  }, []);
  
  return (
    <div className="transform lg:translate-y-1/3 py-10 lg:py-12 container relative before:absolute before:bg-botticelli before:top-0 before:-left-4 before:w-4 before:h-2/3 after:absolute after:left-0 after:top-0 after:w-full after:h-full lg:after:h-[80%] after:bg-botticelli z-[1]">
      <div 
        className="
          w-full
          lg:w-[calc(100%-80px)] 
          z-[1] 
          px-4
          lg:px-4
          before:absolute
          before:h-2 
          before:-right-2 
          before:left-0 
          before:-top-2 
          before:bg-ivory 
          after:absolute 
          after:w-2 
          after:top-0 
          after:-right-2 
          after:h-[80%]
        after:bg-ivory
        "
      >
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          // @ts-expect-error
          loop="true"
        >
          {sliderItems.map(({ title, copy, link, image }, i) => 
            <swiper-slide key={useId()}>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 items-center pb-1/3 pr-16">
                <div className="bg-botticelli min-w-[319px] w-[319px]">
                  <img className="block w-full mix-blend-multiply" width="319" height="329" src={image} alt={title} />
                </div>
                <div className="flex flex-col gap-8 pb-8 lg:pl-32">
                  <p className="text-xl lg:text-[28px] tracking-wide font-title [&_strong]:font-black" dangerouslySetInnerHTML={{ __html: copy }}></p>
                  <Link className="hover-highlight hover:highlighted button--link" to={link}>
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </swiper-slide>
          )}
        </swiper-container>
        <div className={`${isSliding ? 'md:opacity-0' : 'duration-500'} flex md:flex-col relative md:absolute md:left-[450px] text-xs gap-4 md:top-[40%] md:transform md:-translate-y-1/2 items-center w-max z-10`}>
          <span>{currentIndex + 1}</span>
          <span className="text-[8px]">/</span>
          <span>{sliderItems.length}</span>
        </div>
        <button 
          // @ts-expect-error
          onClick={() => swiperElRef.current.swiper.slideNext()} 
          className="
            border-8 
            z-[1]
            border-botticelli 
            h-16 
            w-16
            bg-tuatara
            text-energyYellow 
            transform lg:translate-x-1/2 
            -translate-y-1/2 
            flex 
            items-center 
            justify-center 
            absolute 
            absolute-container-right
            top-[40%] 
            rounded-full 
            transition 
            duration-200
            hover:bg-energyYellow
            hover:text-tuatara
          "
        >
          <Arrow className="w-5 h-5" />
        </button>
        <div
          aria-hidden="true"
          className="
            before:border-8 
            before:z-[0]
            before:border-ivory 
            before:h-20 
            before:w-20
            before:transform 
            before:lg:translate-x-1/2 
            before:-translate-y-1/2 
            before:absolute 
            before:absolute-container-right 
            before:top-[40%] 
            before:rounded-full 
          "
        ></div>
      </div>
    </div>
  )
}