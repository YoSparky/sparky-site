export function Video({ vimeoLink } : { vimeoLink: string }) {  
  return (
    <iframe className="aspect-video w-full" src={vimeoLink}></iframe>
  )
}