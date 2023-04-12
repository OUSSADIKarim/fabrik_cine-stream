import React from "react"
import theMovieDbLogo from "../assets/themoviedb.svg"
const Footer = () => {
  return (
    <footer className="flex w-[100%] flex-col items-center justify-center gap-8 text-center  p-10 bg-neutral-0-400  dark:bg-primary dark:text-neutral-0-400 transition-colors duration-300">
      <img className="w-20" src={theMovieDbLogo} alt="" />
      <p>
        The data used are fetched from:
        <br />
        https://www.themoviedb.org/
      </p>
      <small>©fabrik_Karim</small>
    </footer>
  )
}

export default Footer
