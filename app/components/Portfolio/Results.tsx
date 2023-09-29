export function Results({ content } : { content: string }) {  
  return (
    <div className="flex flex-col gap-10 max-w-5xl">
      <span className="uppercase text-sm">Results</span>
      <div className="font-title text-xl md:text-4xl" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}