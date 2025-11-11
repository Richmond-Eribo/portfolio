import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export default function Layout() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { className: "max-w-3xl mx-auto px-4 py-8 mt-24", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
}
