import { Github, Linkedin, Mail, Twitter, Youtube } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      <a
        href="https://github.com/Richmond-Eribo"
        target="_blank"
        className="flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors"
      >
        <Github size={18} />
        <span>GitHub</span>
      </a>
      {/* <Link
          to="#"
          className="flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </Link> */}
      <a
        href="https://x.com/_Rixchy"
        target="_blank"
        className="flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors"
      >
        <Twitter size={18} />
        <span>Twitter</span>
      </a>
      {/* <Link
        to="/#"
        className="flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors"
      >
        <Youtube size={18} />
        <span>YouTube</span>
      </Link> */}
      <a
        href="mailto:uyiosaeribo344@gmail.com"
        className="flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors"
      >
        <Mail size={18} />
        <span>Email</span>
      </a>
    </div>
  )
}
