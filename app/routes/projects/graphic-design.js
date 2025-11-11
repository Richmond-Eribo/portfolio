import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { advertisingProjects } from "@/lib/data";
import { NavLink } from "react-router";
export default function GraphicDesign() {
    return (_jsxs("div", { className: "min-h-screen space-y-8", children: [_jsxs("div", { className: "self-end px-4", children: [_jsx("h1", { className: "text-xl lg:text-3xl font-bold  md:text-left pb-1", children: "Graphic Design" }), _jsx("p", { className: "text-gray-400 text-left", children: "Exploring graphic design was a journey of creativity and problem-solving, allowing me to develop skills in creating visually appealing and effective designs. Here is a collection of my work." })] }), _jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-4 px-4", children: advertisingProjects.projects.map((image, index) => (_jsx(NavLink, { to: `/projects/graphic-design/${index}-${image.id}`, viewTransition: true, "data-view-transition": `poster-${index}`, children: _jsx("div", { className: "bg-gray-900 aspect-[6/8] rounded-md relative", children: _jsx("img", { src: image.imageUrl, alt: image.title, className: "object-cover w-full h-full rounded-md" }) }) }, index))) })] }));
}
