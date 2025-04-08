import type { PageProps } from "waku/router";

export default async function SinglePost({ slug }: PageProps<"/posts/[slug]">) {
  return <main>{slug}</main>;
}

export const getConfig = async () => {
  return {
    render: "dynamic",
  } as const;
};
