import React from "react"
import Caroussel from "./../components/Caroussel"
import { useQuery } from "@tanstack/react-query"
import { getTrendingMovies } from "./../api"
import Loading from "./Loading"

const Trending = () => {
  const { data: movies, isLoading } = useQuery(["trending"], async () => {
    const data = await getTrendingMovies()
    return data
  })

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="dark:text-secondary">Trending</h2>
        <Loading />
      </div>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center gap-8 my-8">
      <h2 className="dark:text-secondary text-5xl text-secondary">Trending</h2>
      <Caroussel movies={movies} />
    </section>
  )
}

export default Trending
