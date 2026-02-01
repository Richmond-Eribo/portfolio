declare module "*.mdx" {
  import { ComponentType } from "react"
  export const meta: {
    title: string
    date: string
    description?: string
    tags?: string[]
    draft?: boolean
    hero?: string
  }
  const MDXComponent: ComponentType<any>
  export default MDXComponent
}
