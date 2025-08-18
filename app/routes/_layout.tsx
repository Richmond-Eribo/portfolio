import { Outlet } from "react-router"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Layout() {
  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-8 mt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
