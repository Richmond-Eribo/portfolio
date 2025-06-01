import { Link } from "react-router"

export default async function Projects() {
  const data = await getData()

  return (
    <main>
      <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>

      <div className="space-y-8">
        {/* Project 1 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-medium text-white text-xl">roadmap.sh</h3>
              <p className="text-gray-400">
                Community-driven roadmaps for developers
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                Open Source
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                210k+ Stars
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            A collection of community-driven roadmaps, articles, guides, and
            resources for developers. Helping guide the learning path for
            millions of developers worldwide. The platform includes interactive
            roadmaps for various tech roles, best practices, and learning
            resources.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              TypeScript
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              React
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Node.js
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              MongoDB
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              AWS
            </span>
          </div>
          <div className="flex gap-3">
            <Link
              to="/#"
              className="text-blue-400 hover:underline text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Visit Site
            </Link>
            <Link
              to="/#"
              className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Source Code
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-medium text-white text-xl">
                Design Patterns for Humans
              </h3>
              <p className="text-gray-400">
                Simplified explanations of design patterns
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                Open Source
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                37k+ Stars
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            An ultra-simplified explanation of design patterns implemented in
            modern programming languages. Helps developers understand complex
            design patterns in simple, human terms. The project breaks down
            creational, structural, and behavioral patterns with practical
            examples and clear explanations.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Software Architecture
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Design Patterns
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              JavaScript
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              PHP
            </span>
          </div>
          <div className="flex gap-3">
            <Link
              to="/#"
              className="text-blue-400 hover:underline text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Project
            </Link>
            <Link
              to="/#"
              className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Source Code
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-medium text-white text-xl">
                Developer Handbook
              </h3>
              <p className="text-gray-400">
                Essential guide for modern developers
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                E-Book
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                200k+ Downloads
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            A comprehensive handbook covering everything from programming basics
            to advanced concepts, best practices, and career advice for
            developers at all levels. The book includes practical examples,
            coding standards, and insights from industry experts.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Web Development
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Career Guidance
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Best Practices
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              System Design
            </span>
          </div>
          <div className="flex gap-3">
            <Link
              to="/#"
              className="text-blue-400 hover:underline text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Download E-Book
            </Link>
            <Link
              to="/#"
              className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Sample
            </Link>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-medium text-white text-xl">
                Developer Tools
              </h3>
              <p className="text-gray-400">
                Collection of utilities for developers
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                Open Source
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">
                15k+ Stars
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            A suite of developer tools and utilities to improve productivity and
            workflow. Includes code formatters, linters, debugging tools, and
            performance optimization utilities. Built with extensibility in mind
            to support various programming languages and frameworks.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              JavaScript
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              TypeScript
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Python
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              CLI
            </span>
          </div>
          <div className="flex gap-3">
            <Link
              to="/#"
              className="text-blue-400 hover:underline text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Project
            </Link>
            <Link
              to="/#"
              className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Source Code
            </Link>
          </div>
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
