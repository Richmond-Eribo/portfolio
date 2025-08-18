import { advertisingProjects } from "./app/lib/data"
import type { Config } from "@react-router/dev/config"
import { ad } from "node_modules/react-router/dist/development/route-data-C12CLHiN.mjs"

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  future: {
    unstable_viteEnvironmentApi: true,
  },

  async prerender() {
    return [
      // prerendering the advertising projects
      ...advertisingProjects.projects.map(
        (project, index) => `/projects/graphic-design/${index}-${project.id}`
      ),
    ]
  },
} satisfies Config
