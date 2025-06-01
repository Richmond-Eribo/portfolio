import { Calendar, Clock, Tag } from "lucide-react"
import { Link } from "react-router"

export default async function Posts() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-white mb-8">Blog Posts</h1>

      <div className="space-y-8">
        {/* Post 1 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <Link to="/#" className="block">
            <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
              Understanding the JavaScript Event Loop
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>April 15, 2023</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={14} />
                <span>JavaScript</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              The event loop is one of the most important aspects of JavaScript,
              yet it's often misunderstood. In this post, we'll dive deep into
              how the event loop works, how it handles asynchronous operations,
              and how you can leverage this knowledge to write more efficient
              code.
            </p>
            <div className="text-blue-400 text-sm">Read more →</div>
          </Link>
        </div>

        {/* Post 2 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <Link to="/#" className="block">
            <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
              Building Scalable Microservices with Node.js
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>March 22, 2023</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={14} />
                <span>Node.js</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Microservices architecture has become increasingly popular for
              building complex applications. In this comprehensive guide, I'll
              share my experience building and scaling microservices with
              Node.js, including best practices, common pitfalls, and real-world
              examples.
            </p>
            <div className="text-blue-400 text-sm">Read more →</div>
          </Link>
        </div>

        {/* Post 3 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <Link to="/#" className="block">
            <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
              React Performance Optimization Techniques
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>February 10, 2023</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={14} />
                <span>React</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Is your React application feeling sluggish? In this post, I'll
              share advanced techniques for optimizing React performance,
              including component memoization, code splitting, virtualization,
              and effective state management strategies that have helped me
              build lightning-fast applications.
            </p>
            <div className="text-blue-400 text-sm">Read more →</div>
          </Link>
        </div>

        {/* Post 4 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <Link to="/#" className="block">
            <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
              The Complete Guide to TypeScript Generics
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>January 5, 2023</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={14} />
                <span>TypeScript</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              TypeScript generics are a powerful feature that can help you write
              more reusable and type-safe code. In this comprehensive guide,
              I'll explain everything from basic generic functions to advanced
              patterns like conditional types, mapped types, and practical
              real-world examples.
            </p>
            <div className="text-blue-400 text-sm">Read more →</div>
          </Link>
        </div>

        {/* Post 5 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <Link to="/#" className="block">
            <h2 className="text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors">
              Building a Career in Software Engineering: Lessons Learned
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>December 12, 2022</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>18 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={14} />
                <span>Career</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              After more than a decade in the software industry, I've learned
              valuable lessons about career growth, technical leadership, and
              personal development. In this reflective post, I share insights on
              navigating the tech industry, avoiding burnout, and continuously
              evolving as a developer.
            </p>
            <div className="text-blue-400 text-sm">Read more →</div>
          </Link>
        </div>
      </div>
    </main>
  )
}

const getData = async () => {
  const data = {
    title: "Waku",
    headline: "Waku",
    body: "Hello world!",
  }

  return data
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const
}
