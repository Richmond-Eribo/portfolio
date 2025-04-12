import { ProfileCard } from "../components/profile-card";
import { Bio } from "../components/bio";
import { SocialLinks } from "../components/social-links";
import { ArrowUpRight } from "lucide-react";
import { personalities, roles } from "../lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";

export default async function HomePage() {
  return (
    <main>
      <ProfileCard />
      <Bio />

      <SocialLinks />

      <div className="mb-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Personalities</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {personalities.map((per) => (
            <Card
              className="last:col-span-2 max-md:col-span-2 "
              key={per.title}
            >
              <CardHeader>
                <h3 className="font-medium text-white text-lg">{per.title} </h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-relaxed mb-4">{per.subtext}</p>
              </CardContent>

              <CardFooter>
                <div className="w-full flex justify-end">
                  <div className="border border-zinc-800 rounded-full p-2">
                    <ArrowUpRight />
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Work History */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">Work History</h2>

        <div className="space-y-6">
          {/* Job 1 */}
          {roles.map((role, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-5 rounded-lg border border-zinc-800"
            >
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <div>
                  <h3 className="font-medium text-white text-lg">
                    {role.position}
                  </h3>
                  <p className="text-blue-400">{role.organization} </p>
                </div>
                <p className="text-gray-400 text-sm mt-1 md:mt-0">
                  {role.duration}
                </p>
              </div>
              <ul className="list-disc pl-4">
                {role.responsibilities.map((res, i) => (
                  <li key={i} className="text-sm leading-relaxed mb-4">
                    {res}
                  </li>
                ))}
              </ul>

              {/* <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
                Node.js
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
                MongoDB
              </span>
              <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
                AWS
              </span>
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
