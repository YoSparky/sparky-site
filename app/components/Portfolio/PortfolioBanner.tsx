export function PortfolioBanner({ content } : { content: { image: string, caption: string | null } | null }) {  
  if (!content) return;
  const { image, caption } = content;
  
  return (
    <div className="py-5 md:py-10">
      <div className="flex flex-col gap-4">
        <img className="block" src={image} alt={caption ?? ''} />
        {caption && 
          <div className="container">
            <span className="uppercase text-sm">{caption}</span>
          </div>
        }
      </div>
    </div>
  )
}