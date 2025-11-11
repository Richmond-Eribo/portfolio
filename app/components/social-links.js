import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Mail, Twitter } from "lucide-react";
export function SocialLinks() {
    return (_jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsxs("a", { href: "https://github.com/Richmond-Eribo", target: "_blank", className: "flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors", children: [_jsx(Github, { size: 18 }), _jsx("span", { children: "GitHub" })] }), _jsxs("a", { href: "https://x.com/_Rixchy", target: "_blank", className: "flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors", children: [_jsx(Twitter, { size: 18 }), _jsx("span", { children: "Twitter" })] }), _jsxs("a", { href: "mailto:uyiosaeribo344@gmail.com", className: "flex items-center gap-2 px-3 py-2 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors", children: [_jsx(Mail, { size: 18 }), _jsx("span", { children: "Email" })] })] }));
}
