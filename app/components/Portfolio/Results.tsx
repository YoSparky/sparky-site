export function Results({ content } : { content: string | null }) { 
  if (!content) return;
   
  return (
    <div className="container py-5 md:py-10">
      <div className="flex flex-col gap-10 max-w-5xl">
        <span className="uppercase text-sm">Results</span>
        <div className="font-title text-xl md:text-4xl" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  )
}