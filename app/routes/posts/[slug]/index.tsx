export default async function SinglePost() {
  return (
    <main>
      <h1>Single Post</h1>
      <p>This is a placeholder for a single post page.</p>
      <p>Content will be dynamically loaded based on the post slug.</p>
    </main>
  )
}

export const getConfig = async () => {
  return {
    render: "dynamic",
  } as const
}
