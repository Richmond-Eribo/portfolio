import { useParams } from "react-router"
import { getPostBySlug } from "@/lib/blog"
import { Calendar, Clock, Tag } from "lucide-react"

export default function SinglePost() {
  const params = useParams()
  const slug = params.slug as string
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <main>
        <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
        <p className="text-gray-400">
          The blog post you're looking for doesn't exist.
        </p>
      </main>
    )
  }

  return (
    <main>
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
          {post.tags.length > 0 && (
            <div className="flex items-center gap-1">
              <Tag size={14} />
              <span>{post.tags.join(", ")}</span>
            </div>
          )}
        </div>

        <div
          className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-code:text-blue-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </article>
    </main>
  )
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const
}
