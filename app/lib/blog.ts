import blogData from "./blog-data.json"

export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  tags: string[]
  excerpt: string
  content?: string
}

export function getAllPosts(): BlogPost[] {
  return blogData as BlogPost[]
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = blogData.find((p: BlogPost) => p.slug === slug)
  return post ? (post as BlogPost) : null
}

