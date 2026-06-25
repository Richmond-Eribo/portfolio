import { readdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { advertisingProjects } from "./app/lib/data"
import type { Config } from "@react-router/dev/config"

const currentDir = dirname(fileURLToPath(import.meta.url))
const postsDir = join(currentDir, "app", "contents", "posts")

function getPostSlugs() {
  return readdirSync(postsDir)
    .filter(fileName => fileName.toLowerCase().endsWith(".mdx"))
    .map(fileName => fileName.replace(/\.mdx$/i, ""))
}

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  future: {
    unstable_viteEnvironmentApi: true,
  },

  async prerender() {
    return [
      "/",
      "/thoughts",
      // prerendering the advertising projects
      ...advertisingProjects.projects.map(
        (project, index) => `/projects/graphic-design/${index}-${project.id}`
      ),
      ...getPostSlugs().map(slug => `/thoughts/${slug}`),
    ]
  },
} satisfies Config
