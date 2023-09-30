import { useRef, useEffect, useState, useId } from 'react';
import LegendsImage from '../assets/legends-slider.jpeg';
import HeydudeImage from '../assets/heydude-slider.jpeg';
import GhostImage from '../assets/ghost-slider.jpeg';
import SliderBackground from '../assets/slider-bg-bottom.png';
import { register } from 'swiper/element/bundle';
import { Arrow } from './icons';

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

  useEffect(() => {
    // @ts-expect-error
    swiperElRef.current.addEventListener('slidechange', (e) => {
      setIndex(e.detail[0].realIndex);
    });
  }, []);
  
  return (
    <div 
      style={{ backgroundImage: `url(${SliderBackground})` }} 
      className="bg-botticelli bg-[length:0_0] xl:bg-[length:100%_106px] bg-bottom bg-no-repeat container relative p-8 lg:p-11 w-[calc(100%-80px)] z-[1] -mb-24 before:absolute before:h-2 before:-right-2 before:left-0 before:-top-2 before:bg-ivory after:absolute after:w-2 after:top-0 after:-right-2 after:bottom-[96px] after:bg-ivory">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        // @ts-expect-error
        loop="true"
      >
        {sliderItems.map(({ title, copy, link, image }, i) => 
          <swiper-slide key={useId()}>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 items-center pr-16">
              <div className="bg-botticelli min-w-[319px] w-[319px]">
                <img className="block w-full mix-blend-multiply" width="319" height="329" src={image} alt={title} />
              </div>
              <div className="hidden lg:flex flex-col text-xs gap-4 top-0 h-full justify-center">
                <span>{currentIndex + 1}</span>
                <span className="text-[8px]">/</span>
                <span>{sliderItems.length}</span>
              </div>
              <div className="flex flex-col gap-8 lg:pl-32">
                <p className="text-xl lg:text-3xl tracking-wide font-title [&_strong]:font-black" dangerouslySetInnerHTML={{ __html: copy }}></p>
                <a className="uppercase underline text-sm tracking-wide hover-highlight hover:highlighted" href={link}>
                  <span>Learn More</span>
                </a>
              </div>
              <div className="flex lg:hidden text-xs gap-4 top-0 items-center w-full">
                <span>{currentIndex + 1}</span>
                <span className="text-[8px]">/</span>
                <span>{sliderItems.length}</span>
              </div>
            </div>
          </swiper-slide>
        )}
      </swiper-container>
      <button 
        // @ts-expect-error
        onClick={() => swiperElRef.current.swiper.slideNext()} 
        className="border-8 z-[1] border-botticelli h-16 w-16 bg-tuatara text-energyYellow transform md:translate-x-1/2 -translate-y-1/2 flex items-center justify-center absolute right-0 top-1/2 rounded-full transition duration-200 hover:bg-energyYellow hover:text-tuatara"
      >
        <Arrow className="w-5 h-5" />
      </button>
    </div>
  )
}