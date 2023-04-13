import React from "react"
import { getMovieDetails, getMovieVideos } from "../api"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import Loading from "./../components/Loading"
import SlideVideo from "./../components/SlideVideo"
import Error from "../components/Error"

const MovieDetails = () => {
  const { id } = useParams()

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery(["movieDetails"], async () => {
    const data = await getMovieDetails(id)
    return data
  })

  const {
    data: movieVideos,
    isLoading: areLoading,
    isError: areError,
  } = useQuery(["movieVideos"], async () => {
    const data = await getMovieVideos(id)
    return data
  })
  console.log({ isError })
  console.log({ areError })
  {
    if (isLoading || areLoading) {
      return <Loading />
    } else if (isError || areError) {
      return <Error />
    }
  }
  return (
    <div>
      <iframe
        className="w-full h-[50vh] mx-auto z-10"
        src={`https://youtube.com/embed/${movieVideos?.results[0].key}`}
        title={`${movieVideos?.results[0].name}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="text-center text-lg mt-8 dark:text-neutral-0-400 transition-all duration-300">
        <p>Title: {movie?.title}</p>
        <p>Release date: {movie?.release_date}</p>
        <p>Duration: {movie?.runtime} min</p>
      </div>
      <h2 className="text-center text-2xl mt-8 dark:text-neutral-0-400 transition-all duration-300">
        More about
        <span className="text-secondary"> "{movie?.title}"</span>:
      </h2>
      <div
        id="videos"
        className="w-[100%] h-[100%] overflow-hidden rounded-lg grid grid-cols-2 items-center gap-2 py-8 px-2 z-30"
      >
        {movieVideos?.results.map((video) => {
          return <SlideVideo key={video.id} video={video} />
        })}
      </div>
    </div>
  )
}

export default MovieDetails
