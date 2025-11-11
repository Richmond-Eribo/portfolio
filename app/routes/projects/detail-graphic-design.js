import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { advertisingProjects } from "@/lib/data";
export async function Loader({ params }) {
    return;
}
export default function DetailGraphicDesign() {
    const { id } = useParams();
    const index = id?.split("-")[0] || "0";
    const project = advertisingProjects.projects[Number(index)];
    let navigate = useNavigate();
    return (_jsxs("div", { className: " space-y-8 grid place-content-center w-full", children: [_jsx("div", { children: _jsx(Button, { variant: "ghost", size: "icon", onClick: () => navigate(-1), className: "cursor-pointer", children: _jsx(ArrowLeft, { size: 26 }) }) }), _jsx("div", { className: "bg-gray-900 w-96 md:w-[400px] lg:w-[600px] aspect-[6/9] rounded-md relative", "data-view-transition": `poster-${index}`, children: _jsx("img", { src: project?.imageUrl, alt: project?.title, className: "object-fill w-full h-full rounded-md" }) })] }));
}
