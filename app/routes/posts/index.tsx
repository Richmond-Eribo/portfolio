import { Calendar, Clock, Tag } from "lucide-react"
import { Link } from "react-router"
import { getAllPosts } from "@/lib/blog"

export default function Posts() {
  const posts = getAllPosts()

  return (
    <main>
      <h1 className="text-3xl font-bold text-white mb-8">Blog Posts</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <Link to={`/posts/${post.slug}`} className="block">
              <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
                {post.tags.length > 0 && (
                  <div className="flex items-center gap-1">
                    <Tag size={14} />
                    <span>{post.tags[0]}</span>
                  </div>
                )}
              </div>
              <p className="text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="text-blue-400 text-sm">Read more →</div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const
}
