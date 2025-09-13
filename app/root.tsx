import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"


import "./app.css"
import { Route } from "./+types/root"

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Richmond Eribo | Frontend Engineer</title>
        <meta name="title" content="Uyiosa Richmond Eribo" />
        <meta
          name="description"
          content="Frontend Engineer building high-performance, user-centric web applications for startups, government agencies, and global brands. Passionate about modern web technologies, AI, and digital innovation."
        />

        {/* open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://richmonderibo.dev/" />
        <meta property="og:title" content="Uyiosa Richmond Eribo" />
        <meta
          property="og:description"
          content="Frontend Engineer building high-performance, user-centric web applications for startups, government agencies, and global brands. Passionate about modern web technologies, AI, and digital innovation."
        />
        <meta
          property="og:image"
          content="https://richmonderibo.dev/richmond.webp"
        />

        {/* Twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://richmonderibo.dev/" />
        <meta name="twitter:title" content="Uyiosa Richmond Eribo" />
        <meta
          name="twitter:description"
          content="Frontend Engineer building high-performance, user-centric web applications for startups, government agencies, and global brands. Passionate about modern web technologies, AI, and digital innovation."
        />
        <meta
          name="twitter:image"
          content="https://richmonderibo.dev/richmond.webp"
        />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>

        <Meta />
        <Links />
      </head>
      <body className="font-geist tracking-wide">
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
