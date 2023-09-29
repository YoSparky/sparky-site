export function PortfolioBanner({ content: { image, caption } } : {content: { image: string, caption: string | null }}) {  
  return (
    <div className="flex flex-col gap-4">
      <img className="block" src={image} alt={caption ?? ''} />
      {caption && 
        <div className="container">
          <span className="uppercase text-sm">{caption}</span>
        </div>
      }
    </div>
  )
}