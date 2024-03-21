import Image from '../../assets/sparkyos.png';

export default function TextImageColumns() {  
  return (
    <section className="md:right-edge-container grid md:grid-cols-2 pt-14 gap-9 md:py-28 md:gap-16">
      <div className="flex flex-col text-center items-center justify-center gap-6 md:gap-12 max-md:container">
        <div className="inline-flex flex-col gap-4">
          <h1 className="text-3xl md:text-[54px] font-semibold leading-[1.37]">
            Service as a Software™
          </h1>
          <span className="md:text-2xl font-body">50% Agency, 50% Platform, 100% Ecomm</span>
        </div>
        <p className="text-xl leading-normal max-w-[577px]">
          Our proprietary software, Sparky OS, enables us to maximize
          our investments in senior eCommerce talent and avoid 
          administrative bloat commonly experienced with agencies; this 
          leads to the most growth-minded, merchant-friendly service
          model without any hourly rates, scope creep, or fluff.
        </p>
      </div>
      <img 
        loading="lazy"
        className="block" 
        src={Image} 
        alt="" 
      />
    </section>
  );
}