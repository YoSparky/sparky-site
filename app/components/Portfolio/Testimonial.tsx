import { Quote } from "../icons"

export function Testimonial({ content } : { content: { quote: string | null, attribution: string | null, attributionTitle: string | null } | null }) { 
  if (!content) return;
  const { quote, attribution, attributionTitle } = content;
   
  return (
    <div className="container md:max-w-5xl py-5 md:py-10">
      <div className="py-14 px-8 md:py-28 md:px-32 flex flex-col gap-14 relative bg-white">
        <span className="absolute left-8 md:left-32 top-0 transform -translate-y-1/2 font-title w-8 h-8 md:w-[66px] md:h-[66px] z-[1]">
          <Quote className="text-ivory" />
          <Quote className="absolute -left-px -top-1 md:-left-1 md:-top-2.5 w-full h-full opacity-90 text-energyYellow" />
        </span>
        <strong className="font-title text-3xl md:text-[66px] leading-[1]">{quote}</strong>
        <div className="text-sm flex">
          {attribution} 
          {attributionTitle && <>
            <span className="block w-max px-4">**</span> 
            {attributionTitle}
          </>}
        </div>
        <div className="absolute left-0 top-0 w-full h-full bg-botticelli mix-blend-multiply transform -translate-x-2 -translate-y-2"></div>
      </div>
    </div>
  )
}