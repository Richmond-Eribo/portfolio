export type ProjectImageDetail = {
  id: string
  title: string
  category: "celebration" | "congratulatory"
  description: string
  imageUrl: string
}

export type GraphicProject = {
  title: string
  description: string
  projects: ProjectImageDetail[]
}
