import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router";
import { cn, isActiveRoute } from "../lib/utils";
import { LetsChat } from "./lets-chat";
export const Header = () => {
    return (_jsx("nav", { className: cn("max-w-3xl  w-full px-4 absolute transition-all duration-300 delay-75 top-8 left-1/2 -translate-x-1/2  h-13"), children: _jsx("div", { className: cn("bg-zinc-900  p-3 h-full flex items-center justify-between rounded-full"), children: _jsxs("div", { className: cn("flex justify-between w-full"), children: [_jsx(NavLinks, {}), _jsx(LetsChat, {})] }) }) }));
};
function NavLinks({ className }) {
    const location = useLocation();
    return (_jsx("div", { className: cn("gap-2  md:flex", className), children: navLinks.map(link => (_jsxs(Link, { to: link.to, className: cn("px-3 py-2 text-sm flex items-center gap-1 text-gray-400 hover:text-white", isActiveRoute(link.to, location.pathname)
                ? "bg-zinc-800 rounded-full text-white"
                : ""), children: [link.icon, link.label] }, link.label))) }));
}
const navLinks = [
    {
        label: "Home",
        to: "/",
        icon: (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) })),
    },
    // {
    //   label: "Work",
    //   to: "/work",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-4 w-4"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   label: "Projects",
    //   to: "/projects",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-4 w-4"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   label: "Posts",
    //   to: "/posts",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-4 w-4"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
    //       />
    //     </svg>
    //   ),
    // },
];
