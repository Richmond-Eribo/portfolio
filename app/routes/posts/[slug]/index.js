import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router";
import { getPostBySlug } from "@/lib/blog";
import { Calendar, Clock, Tag } from "lucide-react";
export default function SinglePost() {
    const params = useParams();
    const slug = params.slug;
    const post = getPostBySlug(slug);
    if (!post) {
        return (_jsxs("main", { children: [_jsx("h1", { className: "text-3xl font-bold text-white mb-4", children: "Post Not Found" }), _jsx("p", { className: "text-gray-400", children: "The blog post you're looking for doesn't exist." })] }));
    }
    return (_jsx("main", { children: _jsxs("article", { className: "max-w-3xl mx-auto", children: [_jsx("h1", { className: "text-4xl font-bold text-white mb-4", children: post.title }), _jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-gray-400 mb-8", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { size: 14 }), _jsx("span", { children: new Date(post.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    }) })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { size: 14 }), _jsx("span", { children: post.readTime })] }), post.tags.length > 0 && (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Tag, { size: 14 }), _jsx("span", { children: post.tags.join(", ") })] }))] }), _jsx("div", { className: "prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-code:text-blue-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800", dangerouslySetInnerHTML: { __html: post.content || "" } })] }) }));
}
export const getConfig = async () => {
    return {
        render: "static",
    };
};
