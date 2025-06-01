import { Link } from "waku";

export function Bio() {
  return (
    <div className="space-y-6 mb-10 sm:text-lg">
      <p className="leading-relaxed">
        I’m a frontend developer and a generalist. I focus on building and the
        processes involved. I have over five years of experience working in
        different industries<span className="text-gray-500">🚀</span>
      </p>

      <p className="leading-relaxed">
        I’ve worked with startups, media companies, and government organizations
        to develop projects and improve their infrastructure.
        <span className="text-gray-500">🏭</span>
      </p>

      <p className="leading-relaxed">
        I’m passionate <span className="text-gray-500">❤️</span> about creating
        user experiences based on data. This interest led me to explore data
        science and artificial intelligence to improve my skills
      </p>

      <p className="leading-relaxed">
        At the moment, I’m part of a team working on{" "}
        <a
          href="https://textcash.africa"
          className="text-blue-400 hover:underline"
        >
          Textcash
        </a>
        , aiming to make unbanked transactions in Africa easier and more
        accessible.
      </p>
    </div>
  );
}
