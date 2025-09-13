import useEmblaCarousel from "embla-carousel-react"
import Autoscroll from "embla-carousel-auto-scroll"

export function SkillsCarousel({
  className,
  icons,
}: {
  className?: string
  icons: any[]
}) {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      watchDrag: false,
      watchFocus: false,
    },
    [
      Autoscroll({
        speed: 1,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  )

  return (
    <div
      className={className + " relative overflow-hidden embla"}
      ref={emblaRef}
    >
      <div className="flex  w-full embla__container pointer-events-none ">
        {icons?.map((Icon, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-12 h-12 flex   items-center justify-center embla__slide"
          >
            <Icon className={"scale-[65%]"} />
          </div>
        ))}
      </div>

      <span className="absolute bg-transparent inset-0 z-10" />

      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-card to-transparent pointer-events-none" />
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-card to-transparent pointer-events-none" />
    </div>
  )
}
