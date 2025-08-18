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

    ...prefix("projects", [
      index("./routes/projects/index.tsx"),

      ...prefix("graphic-design", [
        index("./routes/projects/graphic-design.tsx"),
        route(":id", "./routes/projects/detail-graphic-design.tsx"),
      ]),
    ]),
  ]),

  // route("about", "./about.tsx"),
] satisfies RouteConfig
