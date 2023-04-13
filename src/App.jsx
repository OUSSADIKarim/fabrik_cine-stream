import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Discover from "./pages/Discover"
import MovieDetails from "./pages/MovieDetails"

function App() {
  const client = new QueryClient()

  return (
    <div className="h-[inherit] font-sans dark:bg-primary transition-all duration-300">
      <QueryClientProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </div>
  )
}

export default App
