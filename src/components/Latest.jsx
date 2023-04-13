import { useQuery } from "@tanstack/react-query"
import React from "react"
import { getTrendingMovies } from "../api"
import { Link } from "react-router-dom"

const Latest = () => {
  const { data: latestMovie, isLoading } = useQuery(["latest"], async () => {
    const data = await getTrendingMovies()
    return data
  })
  return (
    <div className="w-full max-h-[100vh]">
      <Link
        to={`/movie/${latestMovie?.results[0]?.id}`}
        className="group relative md:flex md:justify-center before:content-[''] before:absolute before:w-full before:h-full md:before:w-[50%] before:bg-gradient-to-t before:from-primary before:to-neutral-0-200 before:opacity-50 before:z-[1]"
      >
        <img
          className="object-cover w-full h-[100vh] md:w-[50%] md:h-[100vh] md:object-bottom grayscale-[1] group-hover:grayscale-0 md:hover:grayscale-0 transition-all duration-300"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${latestMovie?.results[0].backdrop_path}`}
          alt=""
        />
        <h2 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-neutral-0-400 text-center text-4xl z-[2]">
          {latestMovie?.results[0]?.title}
        </h2>
      </Link>
    </div>
  )
}

export default Latest
