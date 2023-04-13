import React, { useEffect, useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import Slide from "./Slide"
import "@splidejs/react-splide/css"
// import "@splidejs/react-splide/css/skyblue"
import "@splidejs/react-splide/css/sea-green"
import "@splidejs/react-splide/css/core"

const Caroussel = ({ movies }) => {
  const [perPage, setPerPage] = useState(2)

  useEffect(() => {
    const width = window.innerWidth
    if (width >= 768) {
      setPerPage(4)
    }
  }, [perPage])

  return (
    <>
      <Splide
        className="text-secondary min-h-[10rem] w-[100%] md:max-w-[1024px] p-0"
        tag="section"
        options={{
          rewind: true,
          autoplay: true,
          interval: 3000,
          gap: "0.5rem",
          pagination: false,
          focus: "center",
          perPage: perPage,
          arrows: true,
        }}
      >
        {movies?.results.map((movie) => {
          return (
            <SplideSlide
              className="w-[100%] min-h-[5rem] md:max-h-[40%]"
              key={movie.id}
            >
              <Slide movie={movie} className="w-[100%] h-[100%]" />
            </SplideSlide>
          )
        })}
      </Splide>
    </>
  )
}

export default Caroussel
