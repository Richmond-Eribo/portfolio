import { ProfileCard } from "../components/profile-card"
import { Bio } from "@/components/bio"
import { SocialLinks } from "../components/social-links"
import { ArrowUpRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card"
import { cn } from "../lib/utils"
import { SkillsCarousel } from "../components/skills-carousel"

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
} from "../components/svgs"
import { Link } from "react-router"
import { HomeVideo } from "../components/home-video"
import { getAllPostsMeta } from "../lib/posts"
import type { Route } from "./+types/index"
import { SITE_URL } from "@/lib/data"

export async function loader() {
  const posts = getAllPostsMeta()
  return {
    posts,
  }
}

export const meta: Route.MetaFunction = () => {
  const title = "Richmond Eribo | Frontend Engineer"
  const description =
    "Frontend Engineer building high-performance, user-centric web applications for startups, government agencies, and global brands. Passionate about modern web technologies, AI, and digital innovation."

  return [
    { title: `${title} | Richmond Eribo` },
    { name: "title", content: title },
    { name: "description", content: description },

    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: `${SITE_URL}/thoughts` },

    {
      property: "og:image",
      content: "https://richmonderibo.dev/richmond.webp",
    },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://richmonderibo.dev/" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ]
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
            <Card className="max-md:col-span-2 " key={index}>
              <CardHeader>
                <div className="w-full flex justify-between">
                  <h3 className="font-medium  text-lg">{per.title} </h3>
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
                {post.percept && (
                  <p className="text-sm text-zinc-500 max-w-92 lg:max-w-[550px] line-clamp-2">
                    {post.percept}
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
  // {
  //   title: "Graphics Designer",
  //   subtext:
  //     "Dabbling in the art of visual storytelling, where colors, shapes, and creativity converge to bring ideas to life.",
  //   linkTo: "projects/graphic-design",
  //   badge: "Explored",
  //   icons: [
  //     FigmaIcon,
  //     PhotoshopIcon,
  //     IndesignIcon,
  //     IllustratorIcon,
  //     AfterEffectIcon,
  //     CanvaIcon,
  //     // AffinityPhoto,
  //   ],
  // },
]
