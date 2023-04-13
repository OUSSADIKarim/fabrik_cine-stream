import React from "react"
import { Link } from "react-router-dom"
import Trending from "../components/Trending"
import Latest from "../components/Latest"
const Home = () => {
  return (
    <main className="dark:bg-primary transition-colors duration-300 ">
      <Latest />
      <Trending />
      <Link
        className="block w-fit text-2xl text-neutral-0-400 bg-secondary my-5 mx-auto px-8 py-4 rounded-lg hover:bg-primary hover:text-secondary hover:scale-110 transition-all duration-300"
        to="/discover"
      >
        Discover more movies
      </Link>
    </main>
  )
}

export default Home
