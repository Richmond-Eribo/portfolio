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
import { HomeVideo } from "@/components/home-video"
import { getAllPostsMeta } from "@/lib/posts"
import type { Route } from "./+types/index"

export async function loader() {
  const posts = getAllPostsMeta()
  return {
    posts,
  }
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData

  const latestPosts = posts.slice(0, 3)

  return (
    <div className="space-y-20">
      <div>
        <ProfileCard />

        <Bio />
      </div>
      <SocialLinks />

      <HomeVideo />

      {/* experience */}
      <div className="">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>

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

      {/* Thoughts */}
      <div className="">
        <div>
          <h2 className="text-2xl font-bold mb-6">Thoughts</h2>
        </div>

        <div className="space-y-6">
          {latestPosts.length === 0 ? (
            <p className="text-sm text-zinc-500">No thoughts yet.</p>
          ) : (
            latestPosts.map(post => (
              <Link
                key={post.slug}
                to={`/thoughts/${post.slug}`}
                className="space-y-2 block"
              >
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-medium">{post.title}</h4>
                  <span className="text-sm text-zinc-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                {post.description && (
                  <p className="text-sm text-zinc-500 max-w-92 lg:max-w-[550px] line-clamp-2">
                    {post.description}
                  </p>
                )}
              </Link>
            ))
          )}
          <div>
            <Link
              to="/thoughts"
              className="text-sm text-zinc-300 hover:text-white"
            >
              View all thoughts →
            </Link>
          </div>
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
