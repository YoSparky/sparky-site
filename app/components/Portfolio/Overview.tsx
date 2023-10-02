import { useId } from "react";

export function Overview({ content } : { content: string[] | null }) {  
  const id = useId();
  if (!content) return;
  
  return (
    <div className="container md:max-w-5xl py-5 md:py-10">
      <div className="flex flex-col">
        <strong className="text-sm font-normal uppercase pb-16">PROJECT OVERVIEW</strong>
        <ul className="flex flex-col gap-8">
          {content?.map((item, i) => (
            <li key={`${id}-${i}`} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 items-start">
              <div className="flex items-end w-full gap-3 pt-4">
                <span className="leading-none text-xs">{i < 9 ? '0' : ''}{i + 1}</span>
                <div className="hidden md:block border-b border-dashed border-current w-full"></div>
              </div>
              <span className="font-title text-2xl opacity-80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}