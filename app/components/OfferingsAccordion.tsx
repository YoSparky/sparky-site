import { useId, useState } from 'react';
import backgroundImage from '../assets/offerings-accordion-background.jpeg';
import { Accordion } from './Accordion';
import { offerings } from '~/data/homepage';

export default function OfferingsAccordion() {
  const [currentlyActive, setCurrentlyActive] = useState(null);
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-no-repeat bg-top bg-cover md:bg-[length:_100%_auto] py-16 max-md:pb-32 md:py-52 mix-blend-multiply">
      <div className="container text-wattle grid grid-cols-1 md:grid-cols-2 gap-16 text-[#f9df5e1a]">
        <div className="md:sticky md:top-[50vh] transform md:-translate-y-1/2 h-max text-ivory uppercase">
          We work with <br/> fast-growing brands with <br/> diverse eComm needs.
        </div>
        <div className="flex flex-col [&_.accordion-heading:hover]:text-wattle [&_.accordion-heading.isOpen]:text-wattle [&_.accordion-heading.isClosed]:stroke [&_.accordion-heading.isClosed]:text-[#f9df5e1a]">
          {offerings.map(({ title, listItems }) => {
            const accordionKey = useId();
            return (
              <Accordion toggleAccordion={setCurrentlyActive} id={accordionKey} isOpen={accordionKey === currentlyActive} key={accordionKey} label={title}>
                <ul className="flex gap-4 flex-wrap py-6">
                  {listItems.map((item, i) => (
                    <li className="px-8 py-4 block bg-logCabin text-ivory text-sm" key={`${accordionKey}-${i}`}>{item}</li>
                  ))}
                </ul>
              </Accordion>
            )}
          )}
        </div>
      </div>
    </div>
  );
}
