import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import Slide from "./Slide"
import "@splidejs/react-splide/css"
// import "@splidejs/react-splide/css/skyblue"
import "@splidejs/react-splide/css/sea-green"
import "@splidejs/react-splide/css/core"

const Caroussel = () => {
  return (
    <>
      <Splide
        className="text-secondary h-1/2"
        tag="section"
        options={{
          rewind: true,
          width: 400,
          //   height: 400,
          autoplay: true,
          interval: 3000,
          gap: "4rem",
          pagination: true,
          paginationKeyboard: true,
          keyboard: true,
          focus: "center",
          perPage: 4,
        }}
      >
        <SplideSlide>
          <Slide />
        </SplideSlide>
        <SplideSlide>
          <Slide />
        </SplideSlide>
        <SplideSlide>
          <Slide />
        </SplideSlide>
        <SplideSlide>
          <Slide />
        </SplideSlide>
        <SplideSlide>
          <Slide />
        </SplideSlide>
      </Splide>
    </>
  )
}

export default Caroussel
