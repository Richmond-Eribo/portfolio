import { ArrowLeft } from "lucide-react"
import { Route } from "./+types/detail-graphic-design"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import { advertisingProjects } from "@/lib/data"

export async function Loader({ params }: Route.LoaderArgs) {
  return
}

export default function DetailGraphicDesign() {
  const { id } = useParams()

  const index = id?.split("-")[0] || "0"
  const project = advertisingProjects.projects[Number(index)]
  let navigate = useNavigate()

  return (
    <div className=" space-y-8 grid place-content-center w-full">
      <div>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        >
          <ArrowLeft size={26} />
        </Button>
      </div>

      <div
        className="bg-gray-900 w-96 md:w-[400px] lg:w-[600px] aspect-[6/9] rounded-md relative"
        data-view-transition={`poster-${index}`}
      >
        <img
          src={project?.imageUrl}
          alt={project?.title}
          className="object-fill w-full h-full rounded-md"
        />
      </div>
    </div>
  )
}
