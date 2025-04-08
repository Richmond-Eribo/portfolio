import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isActiveRoute(target: string, path: string) {
  // console.log(path, target, "checking", path.startsWith(target) ? true : false);
  return target === path ? target === path : path.startsWith(target + "/");
}
