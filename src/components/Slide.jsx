import React from "react"
import { Link } from "react-router-dom"

const Slide = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="w-[100%] h-[100%] overflow-hidden rounded-lg"
    >
      <img
        className="w-[100%] h-[100%] rounded-sm cursor-pointer grayscale-[70%] hover:grayscale-0 hover:scale-125 transition-all duration-300"
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
        alt=""
      />
    </Link>
  )
}

export default Slide
