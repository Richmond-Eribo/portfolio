declare module "*.mdx" {
  import { ComponentType } from "react"
  export const meta: {
    title: string
    date: string
    percept?: string
    tags?: string[]
    draft?: boolean
    thumbnail?: string
  }
  const MDXComponent: ComponentType<any>
  export default MDXComponent
}
