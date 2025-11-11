import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router";
import { getAllPosts } from "@/lib/blog";
export default function Posts() {
    const posts = getAllPosts();
    return (_jsxs("main", { children: [_jsx("h1", { className: "text-3xl font-bold text-white mb-8", children: "Blog Posts" }), _jsx("div", { className: "space-y-8", children: posts.map((post) => (_jsx("div", { className: "bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors", children: _jsxs(Link, { to: `/posts/${post.slug}`, className: "block", children: [_jsx("h2", { className: "text-xl font-medium text-white mb-2 hover:text-blue-400 transition-colors", children: post.title }), _jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-gray-400 mb-4", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { size: 14 }), _jsx("span", { children: new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { size: 14 }), _jsx("span", { children: post.readTime })] }), post.tags.length > 0 && (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Tag, { size: 14 }), _jsx("span", { children: post.tags[0] })] }))] }), _jsx("p", { className: "text-sm leading-relaxed mb-4", children: post.excerpt }), _jsx("div", { className: "text-blue-400 text-sm", children: "Read more \u2192" })] }) }, post.slug))) })] }));
}
export const getConfig = async () => {
    return {
        render: "static",
    };
};
