# Blog Posts

This directory contains markdown blog posts that are automatically converted to HTML and displayed on the portfolio website.

## Adding a New Blog Post

1. Create a new `.md` file in this directory with a descriptive filename (e.g., `my-awesome-post.md`)
2. Add frontmatter at the top of the file with metadata:

```markdown
---
title: "Your Post Title"
date: "2023-MM-DD"
readTime: "X min read"
tags: ["tag1", "tag2"]
excerpt: "A brief description of your post that appears in the blog list"
---

# Your Post Title

Your markdown content goes here...
```

3. Write your blog post content in markdown below the frontmatter
4. Run `npm run build` to process the new post

## Frontmatter Fields

- `title` (required): The title of your blog post
- `date` (required): Publication date in YYYY-MM-DD format
- `readTime` (required): Estimated reading time (e.g., "5 min read")
- `tags` (required): Array of tags for categorization
- `excerpt` (required): Brief description shown on the blog list page

## Markdown Support

You can use standard markdown syntax including:
- Headings (`#`, `##`, `###`)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Links and images
- Bold and italic text
- Blockquotes

## Build Process

When you run `npm run build`:
1. The `scripts/build-blog-data.js` script reads all `.md` files from this directory
2. It parses the frontmatter and converts the markdown content to HTML
3. All posts are compiled into `app/lib/blog-data.json`
4. The JSON file is imported by the application at build time
5. Posts are displayed on the `/posts` route

## Sample Posts

This directory includes 5 sample blog posts demonstrating the markdown blog system:
- `javascript-event-loop.md` - Understanding the JavaScript Event Loop
- `nodejs-microservices.md` - Building Scalable Microservices with Node.js
- `react-performance.md` - React Performance Optimization Techniques
- `typescript-generics.md` - The Complete Guide to TypeScript Generics
- `career-lessons.md` - Building a Career in Software Engineering

Feel free to delete these sample posts and replace them with your own content!
