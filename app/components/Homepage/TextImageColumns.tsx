import Image from '../../assets/TextImageAsset.png';

export default function TextImageColumns() {  
  return (
    <section className="right-edge-container grid grid-cols-2 py-28 gap-16">
      <div className="flex flex-col text-center justify-center gap-12">
        <h1 className="text-[54px] font-semibold leading-[1.37]">
          50% Agency,<br></br>
          50% Platform,<br></br>
          100% EComm
        </h1>
        <p className="text-xl leading-normal">
          Our proprietary software, Sparky OS, enables us to maximize<br></br> 
          our investments in senior eCommerce talent and avoid<br></br> 
          administrative bloat commonly experienced with agencies; this<br></br> 
          leads to the most growth-minded, merchant-friendly service<br></br> 
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