import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProfileCard } from "../components/profile-card";
import { Bio } from "../components/bio";
import { SocialLinks } from "../components/social-links";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SkillsCarousel } from "@/components/skills-carousel";
import { 
// AffinityPhoto,
AfterEffectIcon, CanvaIcon, CssIcon, FigmaIcon, IllustratorIcon, IndesignIcon, NextjsIcon, PhotoshopIcon, ReactIcon, SqlIcon, SvelteIcon, TailwindCssIcon, VuejsIcon, WorldpressIcon, } from "@/components/svgs";
import { Link } from "react-router";
export default function HomePage() {
    return (_jsxs("div", { className: "space-y-20", children: [_jsxs("div", { children: [_jsx(ProfileCard, {}), _jsx(Bio, {})] }), _jsx(SocialLinks, {}), _jsxs("div", { className: "", children: [_jsx("div", { children: _jsx("h2", { className: "text-2xl font-bold mb-6", children: "Experience" }) }), _jsx("div", { className: "grid grid-cols-2 gap-6", children: experience.map((per, index) => (_jsxs(Card, { className: "last:col-span-2 max-md:col-span-2 ", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "w-full flex justify-between", children: [_jsxs("h3", { className: "font-medium  text-lg", children: [per.title, " "] }), per?.badge && (_jsx(Badge, { variant: "destructive", className: "rounded-full", children: per?.badge }))] }) }), _jsx(CardContent, { className: "h-full", children: _jsx("p", { className: " leading-relaxed mb-4 ", children: per.subtext }) }), _jsxs(CardFooter, { className: "relative w-full flex justify-between gap-5", children: [_jsx(SkillsCarousel, { icons: per.icons, className: cn(index == 2 ? "max-w-[30%]" : "max-w-[70%]") }), per.icons && (_jsx(Link, { to: per.linkTo, className: "border border-zinc-800 rounded-full p-2 hover:rotate-12 duration-200 cursor-pointer transition-transform", children: _jsx(ArrowUpRight, {}) }))] })] }, index))) })] }), _jsxs("div", { className: "", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "My Thoughts" }), _jsx(Link, { to: "/posts", className: "text-blue-400 hover:text-blue-300 text-sm ml-2", children: "View all \u2192" })] }), _jsx("div", { className: "space-y-4", children: _jsxs(Link, { to: "https://medium.com/@uyiosaeribo344/undergraduate-ecosystem-in-nigeria-d3069231e235", target: "_blank", className: "block space-y-2 p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors", children: [_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsx("h4", { className: "font-medium", children: "Undergraduate Ecosystem In Nigeria" }), _jsx("span", { className: "text-sm text-zinc-500", children: "Oct 8, 2019" })] }), _jsx("p", { className: "text-sm text-zinc-500 max-w-92 lg:max-w-[550px] line-clamp-2", children: "The first thing that any city trying to create a start-up community or an entrepreneurial ecosystem that\u2019s vibrant should do, is to get rid of the ideal that; they\u2019re trying to be like Silicon valley." })] }) })] })] }));
}
const experience = [
    {
        title: "AI & ML Engineer",
        subtext: "This is all about documenting my journey into AI & ML engineering as an Msc Student in Artificial Intelligence (Teeside University).",
        linkTo: "#",
        // icons: [],
    },
    {
        title: "Frontend  Engineering",
        subtext: "Crafting engaging interfaces, one line of code at a time, learning and growing with every click.",
        linkTo: "#",
        icons: [
            NextjsIcon,
            SvelteIcon,
            ReactIcon,
            CssIcon,
            VuejsIcon,
            TailwindCssIcon,
            SqlIcon,
            WorldpressIcon,
        ],
    },
    {
        title: "Graphics Designer",
        subtext: "Dabbling in the art of visual storytelling, where colors, shapes, and creativity converge to bring ideas to life.",
        linkTo: "projects/graphic-design",
        badge: "Explored",
        icons: [
            FigmaIcon,
            PhotoshopIcon,
            IndesignIcon,
            IllustratorIcon,
            AfterEffectIcon,
            CanvaIcon,
            // AffinityPhoto,
        ],
    },
];
