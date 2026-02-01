import type { ComponentType } from "react"

export type PostMeta = {
  title: string
  date: string
  description?: string | undefined
  tags?: string[] | undefined
  draft?: boolean | undefined
  hero?: string | undefined
}

export type PostEntry = {
  slug: string
  meta: PostMeta
  Component: ComponentType<any>
}

export type PostListItem = {
  slug: string
  title: string
  date: string
  description?: string | undefined
  tags: string[]
}

const isProd = import.meta.env.PROD

const modules = import.meta.glob("../contents/posts/**/*.mdx", {
  eager: true,
}) as Record<string, { default: ComponentType<any>; meta?: PostMeta }>

function pathToSlug(path: string) {
  const file = path.split("/").pop() || path
  return file.replace(/\.mdx$/i, "")
}

const allPosts: PostEntry[] = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: pathToSlug(path),
    meta: {
      title: mod.meta?.title ?? pathToSlug(path),
      date: mod.meta?.date ?? "",
      description: mod.meta?.description,
      tags: mod.meta?.tags ?? [],
      draft: mod.meta?.draft ?? false,
      hero: mod.meta?.hero,
    },
    Component: mod.default,
  }))
  .filter(p => (isProd ? !p.meta.draft : true))
  .sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date))

export function getAllPostsMeta(): PostListItem[] {
  return allPosts.map(p => ({
    slug: p.slug,
    title: p.meta.title,
    date: p.meta.date,
    description: p.meta.description,
    tags: p.meta.tags ?? [],
  }))
}

export function getPostBySlug(slug: string) {
  return allPosts.find(p => p.slug === slug)
}
