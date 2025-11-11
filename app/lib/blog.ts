import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkHtml from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/posts")

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
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title || "",
          date: data.date || "",
          readTime: data.readTime || "",
          tags: data.tags || [],
          excerpt: data.excerpt || "",
        }
      })

    // Sort posts by date (newest first)
    return allPosts.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error("Error reading posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(content)

    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      readTime: data.readTime || "",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      content: contentHtml,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}
