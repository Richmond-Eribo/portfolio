import { advertisingProjects } from "./app/lib/data"
import { getAllPosts } from "./app/lib/blog"
import type { Config } from "@react-router/dev/config"

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  future: {
    unstable_viteEnvironmentApi: true,
  },

  async prerender() {
    const posts = getAllPosts()
    
    return [
      "/",
      "/posts",
      // prerendering the advertising projects
      ...advertisingProjects.projects.map(
        (project, index) => `/projects/graphic-design/${index}-${project.id}`
      ),
      // prerendering the blog posts
      ...posts.map((post) => `/posts/${post.slug}`),
    ]
  },
} satisfies Config
