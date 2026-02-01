import { Calendar, Clock } from "lucide-react"
import { Link } from "react-router"
import type { Route } from "./+types/index"
import { getAllPostsMeta } from "@/lib/posts"

const SITE_URL = "https://richmonderibo.dev"

export const meta: Route.MetaFunction = () => {
  const title = "Thoughts"
  const description =
    "Writing on AI, engineering, and the ideas shaping modern products."

  return [
    { title: `${title} | Richmond Eribo` },
    { name: "title", content: title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: `${SITE_URL}/thoughts` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ]
}

export async function loader() {
  const posts = getAllPostsMeta()
  // console.log("Posts loaded:", posts)
  return {
    posts,
  }
}

export default function Thoughts({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData

  return (
    <main>
      <h1 className="text-3xl font-bold text-white mb-8">My Thoughts</h1>

      <ul className="space-y-8">
        {posts.map(p => (
          <li
            key={p.slug}
            className="bg-zinc-900 p-6 space-y-3 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <h2 className="text-xl font-medium text-white hover:text-blue-400 transition-colors">
              <Link to={`/thoughts/${p.slug}`}>{p.title}</Link>
            </h2>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(p.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>8 min read</span>
              </div>
            </div>

            {p.description && <p className="text-gray-300">{p.description}</p>}
          </li>
        ))}
      </ul>
    </main>
  )
}

// {/* <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
//   <Link to="/#" className="block">
//     <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
//       Building Scalable Microservices with Node.js
//     </h2>
//     <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
//       <div className="flex items-center gap-1">
//         <Calendar size={14} />
//         <span>March 22, 2023</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Clock size={14} />
//         <span>12 min read</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Tag size={14} />
//         <span>Node.js</span>
//       </div>
//     </div>
//     <p className="text-sm leading-relaxed mb-4">
//       Microservices architecture has become increasingly popular for
//       building complex applications. In this comprehensive guide, I'll
//       share my experience building and scaling microservices with
//       Node.js, including best practices, common pitfalls, and real-world
//       examples.
//     </p>
//     <div className="text-blue-400 text-sm">Read more →</div>
//   </Link>
// </div>

// <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
//   <Link to="/#" className="block">
//     <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
//       React Performance Optimization Techniques
//     </h2>
//     <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
//       <div className="flex items-center gap-1">
//         <Calendar size={14} />
//         <span>February 10, 2023</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Clock size={14} />
//         <span>10 min read</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Tag size={14} />
//         <span>React</span>
//       </div>
//     </div>
//     <p className="text-sm leading-relaxed mb-4">
//       Is your React application feeling sluggish? In this post, I'll
//       share advanced techniques for optimizing React performance,
//       including component memoization, code splitting, virtualization,
//       and effective state management strategies that have helped me
//       build lightning-fast applications.
//     </p>
//     <div className="text-blue-400 text-sm">Read more →</div>
//   </Link>
// </div>

// <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
//   <Link to="/#" className="block">
//     <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
//       The Complete Guide to TypeScript Generics
//     </h2>
//     <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
//       <div className="flex items-center gap-1">
//         <Calendar size={14} />
//         <span>January 5, 2023</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Clock size={14} />
//         <span>15 min read</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Tag size={14} />
//         <span>TypeScript</span>
//       </div>
//     </div>
//     <p className="text-sm leading-relaxed mb-4">
//       TypeScript generics are a powerful feature that can help you write
//       more reusable and type-safe code. In this comprehensive guide,
//       I'll explain everything from basic generic functions to advanced
//       patterns like conditional types, mapped types, and practical
//       real-world examples.
//     </p>
//     <div className="text-blue-400 text-sm">Read more →</div>
//   </Link>
// </div>

// <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
//   <Link to="/#" className="block">
//     <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
//       Building a Career in Software Engineering: Lessons Learned
//     </h2>
//     <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
//       <div className="flex items-center gap-1">
//         <Calendar size={14} />
//         <span>December 12, 2022</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Clock size={14} />
//         <span>18 min read</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Tag size={14} />
//         <span>Career</span>
//       </div>
//     </div>
//     <p className="text-sm leading-relaxed mb-4">
//       After more than a decade in the software industry, I've learned
//       valuable lessons about career growth, technical leadership, and
//       personal development. In this reflective post, I share insights on
//       navigating the tech industry, avoiding burnout, and continuously
//       evolving as a developer.
//     </p>
//     <div className="text-blue-400 text-sm">Read more →</div>
//   </Link>
// </div> */

// const getData = async () => {
//   const data = {
//     title: "Waku",
//     headline: "Waku",
//     body: "Hello world!",
//   }

//   return data
// }

// export const getConfig = async () => {
//   return {
//     render: "static",
//   } as const
// }
