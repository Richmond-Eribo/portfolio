import { advertisingProjects } from "@/lib/data"
import { NavLink } from "react-router"

export default function GraphicDesign() {
  return (
    <div className="min-h-screen space-y-8">
      <div className="self-end px-4">
        <h1 className="text-xl lg:text-3xl font-bold  md:text-left pb-1">
          Graphic Design
        </h1>
        <p className="text-gray-400 text-left">
          Exploring graphic design was a journey of creativity and
          problem-solving, allowing me to develop skills in creating visually
          appealing and effective designs. Here is a collection of my work.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {/* Add your project thumbnails or cards here */}

        {advertisingProjects.projects.map((image, index) => (
          <NavLink
            to={`/projects/graphic-design/${index}-${image.id}`}
            key={index}
            viewTransition
            data-view-transition={`poster-${index}`}
          >
            <div className="bg-gray-900 aspect-[6/8] rounded-md relative">
              <img
                src={image.imageUrl}
                alt={image.title}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
