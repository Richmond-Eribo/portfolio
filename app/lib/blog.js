import blogData from "./blog-data.json";
export function getAllPosts() {
    return blogData;
}
export function getPostBySlug(slug) {
    const post = blogData.find((p) => p.slug === slug);
    return post ? post : null;
}
