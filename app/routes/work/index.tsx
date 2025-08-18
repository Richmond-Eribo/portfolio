export default async function Work() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-white mb-8">Work Experience</h1>

      <div className="space-y-8">
        {/* Job 1 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="font-medium text-white text-xl">Founder & CEO</h3>
              <p className="text-blue-400">roadmap.sh</p>
            </div>
            <p className="text-gray-400 text-sm mt-1 md:mt-0">2022 - Present</p>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Building and maintaining roadmap.sh, a community-driven platform
            helping millions of developers navigate their careers. Leading
            product development, community engagement, and business strategy.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 mb-6 text-gray-300">
            <li>Grew the platform to over 5 million monthly active users</li>
            <li>
              Built a sustainable business model through sponsorships and
              premium content
            </li>
            <li>Managed a distributed team of contributors and maintainers</li>
            <li>
              Implemented a scalable architecture to handle high traffic volumes
            </li>
            <li>
              Established partnerships with major tech companies and educational
              platforms
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
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
          </div>
        </div>

        {/* Job 2 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="font-medium text-white text-xl">
                Engineering Manager
              </h3>
              <p className="text-blue-400">Tradeling</p>
            </div>
            <p className="text-gray-400 text-sm mt-1 md:mt-0">2020 - 2022</p>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Led a team of 15 engineers building a B2B e-commerce platform.
            Responsible for technical architecture, team growth, and delivery of
            critical features. Implemented agile methodologies and improved
            development processes.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 mb-6 text-gray-300">
            <li>
              Managed the development of a microservices-based e-commerce
              platform
            </li>
            <li>
              Reduced deployment time by 70% through CI/CD pipeline improvements
            </li>
            <li>
              Implemented a mentorship program that improved team retention by
              40%
            </li>
            <li>
              Led the migration from monolith to microservices architecture
            </li>
            <li>
              Established coding standards and review processes across
              engineering teams
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              JavaScript
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              React
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Node.js
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              PostgreSQL
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Docker
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Kubernetes
            </span>
          </div>
        </div>

        {/* Job 3 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="font-medium text-white text-xl">
                Senior Software Engineer
              </h3>
              <p className="text-blue-400">Monzo</p>
            </div>
            <p className="text-gray-400 text-sm mt-1 md:mt-0">2017 - 2020</p>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Worked on core banking infrastructure and customer-facing
            applications. Designed and implemented scalable microservices,
            improved system reliability, and mentored junior engineers.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 mb-6 text-gray-300">
            <li>
              Developed critical payment processing systems handling millions of
              transactions daily
            </li>
            <li>
              Improved API response times by 60% through performance
              optimizations
            </li>
            <li>Implemented real-time fraud detection algorithms</li>
            <li>
              Contributed to the mobile app development using React Native
            </li>
            <li>
              Designed and implemented a distributed transaction system with
              high availability
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Go
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Kubernetes
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              Cassandra
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              React Native
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              GraphQL
            </span>
          </div>
        </div>

        {/* Job 4 */}
        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="font-medium text-white text-xl">
                Full Stack Developer
              </h3>
              <p className="text-blue-400">Sixt</p>
            </div>
            <p className="text-gray-400 text-sm mt-1 md:mt-0">2014 - 2017</p>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Developed and maintained web applications for car rental services.
            Implemented new features, optimized performance, and collaborated
            with cross-functional teams to improve user experience.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 mb-6 text-gray-300">
            <li>Built and maintained the customer-facing booking platform</li>
            <li>
              Implemented responsive design principles to improve mobile
              experience
            </li>
            <li>
              Reduced page load times by 45% through frontend optimizations
            </li>
            <li>Developed internal tools for fleet management and analytics</li>
            <li>
              Integrated third-party payment processors and booking systems
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              PHP
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              JavaScript
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              MySQL
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              jQuery
            </span>
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs">
              HTML/CSS
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

const getData = async () => {
  const data = {
    title: "Waku",
    headline: "Waku",
    body: "Hello world!",
  }

  return data
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const
}
