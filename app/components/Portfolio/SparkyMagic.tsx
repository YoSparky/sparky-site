import { useId } from "react";
import { Star } from "../icons"

export function SparkyMagic({ content } : { content: string[] | null }) {  
  const id = useId();
  if (!content?.length) return;
  return (
    <div className="container md:max-w-5xl py-5 md:py-10">
      <div className="flex flex-col border border-current">
        <div className="flex gap-8 items-center border-b border-current px-11 py-8">
          <Star className="h-5 w-5" />
          <span className="uppercase">Sparky Magic</span>
        </div>
        <ul className={`grid grid-cols-1 [&>li:nth-child(n+3)]:border-t [&>li:not(only-child):not(last-child):nth-child(odd)]:max-md:border-b [&>li:not(only-child):not(last-child):nth-child(odd)]:md:border-r ${content?.length > 1 && `md:grid-cols-2`}`}>
          {content.map((item, i) => (
            <li className="p-12 md:min-h-[400px] md:only:min-h-max flex flex-col gap-8 justify-end border-current" key={id}>
              {content.length > 1 && 
                <span className="mb-auto">{i < 9 && '0'}{i+1}</span>
              }
              <div dangerouslySetInnerHTML={{ __html: item }} className="font-title text-2xl"></div>
            </li>
          ))}
          {((content.length % 2) !== 0 && content.length > 1) && <li aria-hidden className="border-current"></li>}
        </ul>
      </div>
    </div>
  )
}