import { redirect } from "react-router"
import { getPostBySlug } from "../../lib/posts"
import type { Route } from "./+types/slug"
import { SITE_URL } from "../../lib/data"

export function loader({ params }: Route.LoaderArgs) {
  const slug = params.slug || ""
  const entry = getPostBySlug(slug)
  if (!entry) throw redirect("/thoughts")
  return { slug }
}

export const meta: Route.MetaFunction = ({ data }) => {
  const slug = data?.slug
  const entry = slug ? getPostBySlug(slug) : undefined
  const title = entry?.meta.title ?? "Thought"
  const description =
    entry?.meta.percept ?? "Thoughts on AI, engineering, and product."
  const url = slug ? `${SITE_URL}/thoughts/${slug}` : `${SITE_URL}/thoughts`
  const image = entry?.meta.thumbnail ?? `${SITE_URL}/richmond.webp`

  return [
    { title: `${title} | Richmond Eribo` },
    { name: "title", content: title },
    { name: "description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ]
}

export default function SingleThought({ loaderData }: Route.ComponentProps) {
  const { slug } = loaderData
  const entry = getPostBySlug(slug)

  if (!entry) {
    return (
      <main>
        <p className="text-sm">Thought not found.</p>
      </main>
    )
  }

  const PostContent = entry.Component

  return (
    <main className="space-y-6 text-zinc-300">
      <header className="space-y-2">
        <h1 className="text-4xl font-medium text-white">{entry.meta.title}</h1>
        {entry.meta.date && (
          <p className="text-sm text-zinc-400">
            {new Date(entry.meta.date).toLocaleDateString()}
          </p>
        )}
        {/* {entry.meta.percept && <p className="">{entry.meta.percept}</p>} */}
      </header>

      {entry.meta.thumbnail && (
        <img
          src={entry.meta.thumbnail}
          height={"auto"}
          width={"100%"}
          alt="thumbnail image"
        />
      )}

      <article className="prose prose-invert max-w-none space-y-4 font-inter font-light leading-relaxed prose-a:text-accent-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline">
        <PostContent />
      </article>
    </main>
  )
}
