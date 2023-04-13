import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useRef, useState } from "react"
import { searchMovies } from "../api"
import Slide from "../components/Slide"
import Loading from "../components/Loading"

const Discover = () => {
  const [value, setValue] = useState("fight")
  const input = useRef()

  const {
    data: searchResult,
    isLoading,
    refetch,
  } = useQuery(["search"], async () => {
    const data = await searchMovies(value)
    return data
  })

  const handleChange = () => {
    setValue(input.current.value)
    refetch()
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="grid place-items-center">
      <h1 className="text-secondary text-2xl md:text-4xl mt-8">
        Discover more movies
      </h1>
      <input
        className="w-80 h-10 my-8 border-solid border-2 border-secondary rounded-2xl focus:outline-none text-primary px-4 "
        type="search"
        placeholder="Type to search a movie"
        ref={input}
        onChange={handleChange}
        onSubmit={handleChange}
      />
      <div className="w-[80%] grid grid-cols-2 md:grid-cols-4  gap-8">
        {searchResult?.results.length === 0 ? (
          <h2 className="my-8 text-2xl dark:text-neutral-0-400">
            No results found
          </h2>
        ) : (
          searchResult?.results.map((movie) => {
            return <Slide key={movie.id} movie={movie} />
          })
        )}
      </div>
    </div>
  )
}

export default Discover
