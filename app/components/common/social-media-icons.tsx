
import { siteConfig } from "@/config/site"

export function SocialMediaIcons() {
  return (   
    <>
      <div className="flex gap-2">
        <a
          target="_blank"
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          aria-label="Github"
          className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
        >
        
        </a>
        <a
          target="_blank"
          href={siteConfig.links.linkedin}
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
        >
         
        </a>
        <a
          target="_blank"
          href={siteConfig.links.resume}
          rel="noopener noreferrer"
          aria-label="Resume"
          className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
        >
          <div className="flex">
             <div className="align-middle font-light text-sm font-extrabold pl-2 pt-px">Download my CV</div>
          </div>
        </a>
      </div>
    </>
  )
}
