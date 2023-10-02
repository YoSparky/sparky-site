import { useId } from "react";

export function Stack({ content } : { content: { title: string | null, link: string | null }[] | null }) {  
  const id = useId();
  if (!content) return;
  
  return (
    <div className="container md:max-w-5xl py-5 md:py-10">
      <div className="flex flex-col gap-10">
        <span className="uppercase text-sm">Tech stack</span>
        <ul className="flex flex-wrap [&_li]:bg-ivory [&_li]:border [&_li]:border-current [&_li]:py-2 [&_li]:px-4 [&_li]:md:py-4 [&_li]:md:px-8 md:text-xl">
          {content.map(({ title, link }, i) => link ?  
            <li key={`${id}-${i}`}>
              <a rel="noopener" href={link}>{title}</a>
            </li>
          : 
            <li key={`${id}-${i}`}>
              {title}
            </li>
          )
          }
        </ul>
      </div>
    </div>
  )
}