import { Quote } from "../icons"

export function Testimonial({ content: { quote, attribution, attributionTitle } } : { content: { quote: string | null, attribution: string | null, attributionTitle: string | null } }) {  
  return (
    <div className="bg-botticelli py-14 px-8 md:py-28 md:px-32 flex flex-col gap-14 relative">
      <span className="absolute left-8 md:left-32 top-0 transform -translate-y-1/2 font-title w-12 h-12 md:w-[66px] md:h-[66px]">
        <Quote className="text-ivory" />
        <Quote className="absolute -left-px -top-1 md:-left-1 md:-top-2.5 w-full h-full opacity-90 text-energyYellow" />
      </span>
      <strong className="font-title text-3xl md:text-[66px] leading-[1]">{quote}</strong>
      <div className="text-xs md:text-sm flex">
        {attribution} 
        {attributionTitle && <>
          <span className="block w-max px-4">**</span> 
          {attributionTitle}
        </>}
      </div>
    </div>
  )
}