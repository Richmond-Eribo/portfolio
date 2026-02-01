import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes"

export default [
  layout("./routes/_layout.tsx", [
    index("./routes/index.tsx"),
    route("work", "./routes/work/index.tsx"),

    // Projects
    ...prefix("projects", [
      index("./routes/projects/index.tsx"),

      ...prefix("graphic-design", [
        index("./routes/projects/graphic-design.tsx"),
        route(":id", "./routes/projects/detail-graphic-design.tsx"),
      ]),
    ]),

    // Thoughts
    ...prefix("thoughts", [
      index("./routes/thoughts/index.tsx"),
      route(":slug", "./routes/thoughts/slug.tsx"),
    ]),
  ]),

  // route("about", "./about.tsx"),
] satisfies RouteConfig
