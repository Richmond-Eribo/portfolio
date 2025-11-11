import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDirectory = path.join(__dirname, '..', 'content', 'posts');
const outputFile = path.join(__dirname, '..', 'app', 'lib', 'blog-data.json');

async function buildBlogData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = [];

  for (const fileName of fileNames) {
    // Skip README and non-markdown files
    if (!fileName.endsWith('.md') || fileName === 'README.md') continue;

    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(content);

    const contentHtml = processedContent.toString();

    posts.push({
      slug,
      title: data.title || '',
      date: data.date || '',
      readTime: data.readTime || '',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      content: contentHtml,
    });
  }

  // Sort posts by date (newest first)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  // Write to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  console.log(`✅ Built blog data: ${posts.length} posts`);
}

buildBlogData().catch((error) => {
  console.error('Error building blog data:', error);
  process.exit(1);
});
