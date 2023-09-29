import { useId } from "react";
import { Star } from "../icons"

export function SparkyMagic({ content } : { content: string[] | null }) {  
  if (!content?.length) return;
  return (
    <div className="flex flex-col border border-current">
      <div className="flex gap-8 items-center border-b border-current px-11 py-8">
        <Star className="h-5 w-5" />
        <span className="uppercase">Sparky Magic</span>
      </div>
      <div className={`grid grid-cols-1 [&>div:not(only-child):not(last-child):nth-child(odd)]:max-md:border-b [&>div:not(only-child):not(last-child):nth-child(odd)]:md:border-r ${content?.length > 1 && `md:grid-cols-2`}`}>
        {content.map((item, i) => (
          <div className="p-12 md:min-h-[400px] md:only:min-h-max flex flex-col gap-8 justify-end border-current" key={useId()}>
            {content.length > 1 && 
              <span className="mb-auto">{i < 9 && '0'}{i+1}</span>
            }
            <div dangerouslySetInnerHTML={{ __html: item }} className="font-title text-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  )
}