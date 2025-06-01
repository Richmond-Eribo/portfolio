import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="py-4 max-w-3xl mx-auto px-4">
      <div className="text-center">
        <p className="mb-3">
          If you want to get in touch, feel free to{" "}
          <a
            href="mailto:uyiosaeribo344@gmail.com"
            className="text-blue-400 hover:underline"
          >
            email me
          </a>{" "}
          or{" "}
          <Link to="/#" className="text-blue-400 hover:underline">
            book a chat
          </Link>
        </p>
      </div>
    </footer>
  );
};
