import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";
import { cn } from "@/app/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/isai7710",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/isaisanzy",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/isai-sanchez-5a0178245/",
    icon: Linkedin,
  },
];

export default function Socials({
  className,
  iconSize = 25,
  linkClass,
}: {
  className?: string;
  iconSize?: number;
  linkClass?: string;
}) {
  return (
    <div className={cn(className)}>
      {socialLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${link.name}`}
            className={cn(linkClass)}
          >
            <LinkIcon size={iconSize} aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
