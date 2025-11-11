import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
// 'use client';
import { useState } from "react";
export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(c => c + 1);
    return (_jsxs("section", { className: "border-blue-400 -mx-4 mt-4 rounded-sm border border-dashed p-4", children: [_jsxs("div", { children: ["Count: ", count] }), _jsx("button", { onClick: handleIncrement, className: "rounded-xs bg-black px-2 py-0.5 text-sm text-white", children: "Increment" })] }));
};
