import { useId } from "react";

export function Stack({ content } : { content: { title: string | null, link: string | null }[] }) {  
  return (
    <div className="flex flex-col gap-10">
      <span className="uppercase text-sm">Tech stack</span>
      <ul className="flex flex-wrap [&_li]:bg-ivory [&_li]:border [&_li]:border-current [&_li]:py-2 [&_li]:px-4 [&_li]:md:py-4 [&_li]:md:px-8 md:text-xl">
        {content.map(({ title, link }) => link ?  
          <li key={useId()}>
            <a href={link}>{title}</a>
          </li>
        : 
          <li key={useId()}>
            {title}
          </li>
        )
        }
      </ul>
    </div>
  )
}