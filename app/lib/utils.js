import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function isActiveRoute(target, path) {
    // console.log(path, target, "checking", path.startsWith(target) ? true : false);
    return target === path ? target === path : path.startsWith(target + "/");
}
