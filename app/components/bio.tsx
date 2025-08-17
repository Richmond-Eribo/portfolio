import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CreditCardIcon,
} from "lucide-react"
import { Button } from "./ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"

export function Bio() {
  return (
    <div className="space-y-6 mb-10 sm:text-lg">
      <p className="leading-relaxed">
        I’m a frontend developer and a ML engineer. I focus on building and the
        processes involved in applying <ArtificialIntelligenceCourse /> to
        real-world problems. I have over five years of experience working in
        different industries.
      </p>

      <p className="leading-relaxed">
        I’m passionate about creating user experiences based on data. This
        interest led me to explore <MachineLearningCerts /> and artificial
        intelligence to improve my skills.
      </p>

      <p className="leading-relaxed">
        At the moment, I’m part of a team working on <Textcash />, aiming to
        make unbanked transactions in Africa easier and more accessible.
      </p>
    </div>
  )
}

const MachineLearningCerts = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant={"link"}
          className="sm:text-lg px-0 cursor-pointer underline font-normal"
        >
          Machine Learning
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <CreditCardIcon />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              Mathematics for Machine Learning
            </h4>
            <p className="text-sm">
              Issued by the Imperial College London on Coursera
            </p>
            {/* <div className="text-muted-foreground text-xs">
              Joined December 2021
            </div> */}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

const ArtificialIntelligenceCourse = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant={"link"}
          className="sm:text-lg px-0 cursor-pointer underline font-normal"
        >
          Artificial Intelligence
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <CreditCardIcon />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              Msc. Applied Artificial Intelligence
            </h4>
            <p className="text-sm">Currently enrolled at Teesside University</p>
            {/* <div className="text-muted-foreground text-xs">
              Joined December 2021
            </div> */}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

const Textcash = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant={"link"}
          asChild
          className="sm:text-lg px-0 cursor-pointer underline font-normal"
        >
          <a href="https://textcash.africa">Textcash</a>
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <img src="data:image/png;base64,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" />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              Simplifying Payments <br /> for Africans
            </h4>
            <p className="text-sm">Stellar Community Development Grant</p>
            {/* <div className="text-muted-foreground text-xs">
              Joined December 2021
            </div> */}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
