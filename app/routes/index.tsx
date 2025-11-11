import { ProfileCard } from "../components/profile-card"
import { Bio } from "../components/bio"
import { SocialLinks } from "../components/social-links"
import { ArrowUpRight } from "lucide-react"
import { roles } from "../lib/data"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { SkillsCarousel } from "@/components/skills-carousel"

import {
  // AffinityPhoto,
  AfterEffectIcon,
  CanvaIcon,
  CssIcon,
  FigmaIcon,
  IllustratorIcon,
  IndesignIcon,
  NextjsIcon,
  PhotoshopIcon,
  ReactIcon,
  SqlIcon,
  SvelteIcon,
  TailwindCssIcon,
  VuejsIcon,
  WorldpressIcon,
} from "@/components/svgs"
import { Link } from "react-router"
import { ContactMe } from "@/components/contact-me"

export default function HomePage() {
  return (
    <div className="space-y-20">
      <div>
        <ProfileCard />

        <Bio />
      </div>
      <SocialLinks />

      {/* experience */}
      <div className="">
        <div>
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {experience.map((per, index) => (
            <Card className="last:col-span-2 max-md:col-span-2 " key={index}>
              <CardHeader>
                <div className="w-full flex justify-between">
                  <h3 className="font-medium  text-lg">{per.title} </h3>
                  {per?.badge && (
                    <Badge variant={"destructive"} className="rounded-full">
                      {per?.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="h-full">
                <p className=" leading-relaxed mb-4 ">{per.subtext}</p>
              </CardContent>

              <CardFooter className="relative w-full flex justify-between gap-5">
                <SkillsCarousel
                  icons={per.icons as any[]}
                  className={cn(index == 2 ? "max-w-[30%]" : "max-w-[70%]")}
                />

                {per.icons && (
                  <Link
                    to={per.linkTo}
                    className="border border-zinc-800 rounded-full p-2 hover:rotate-12 duration-200 cursor-pointer transition-transform"
                  >
                    <ArrowUpRight />
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="">
        <div>
          <h2 className="text-2xl font-bold mb-6">My Thoughts</h2>
          <Link to="/posts" className="text-blue-400 hover:text-blue-300 text-sm ml-2">
            View all →
          </Link>
        </div>

        <div className="space-y-4">
          <Link
            to={
              "https://medium.com/@uyiosaeribo344/undergraduate-ecosystem-in-nigeria-d3069231e235"
            }
            target="_blank"
            className="block space-y-2 p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-medium">Undergraduate Ecosystem In Nigeria</h4>
              <span className="text-sm text-zinc-500">Oct 8, 2019</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-92 lg:max-w-[550px] line-clamp-2">
              The first thing that any city trying to create a start-up
              community or an entrepreneurial ecosystem that’s vibrant should
              do, is to get rid of the ideal that; they’re trying to be like
              Silicon valley. 
            </p>
          </Link>
        </div>
      </div>

      {/* <div>
        <ContactMe />
      </div> */}
    </div>
  )
}

const experience = [
  {
    title: "AI & ML Engineer",
    subtext:
      "This is all about documenting my journey into AI & ML engineering as an Msc Student in Artificial Intelligence (Teeside University).",
    linkTo: "#",
    // icons: [],
  },
  {
    title: "Frontend  Engineering",
    subtext:
      "Crafting engaging interfaces, one line of code at a time, learning and growing with every click.",
    linkTo: "#",
    icons: [
      NextjsIcon,
      SvelteIcon,
      ReactIcon,
      CssIcon,
      VuejsIcon,
      TailwindCssIcon,
      SqlIcon,
      WorldpressIcon,
    ],
  },
  {
    title: "Graphics Designer",
    subtext:
      "Dabbling in the art of visual storytelling, where colors, shapes, and creativity converge to bring ideas to life.",
    linkTo: "projects/graphic-design",
    badge: "Explored",
    icons: [
      FigmaIcon,
      PhotoshopIcon,
      IndesignIcon,
      IllustratorIcon,
      AfterEffectIcon,
      CanvaIcon,
      // AffinityPhoto,
    ],
  },
]
