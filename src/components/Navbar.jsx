import React, { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.theme)

  useEffect(() => {
    window.onload = () => {
      if (!theme) {
        const prefersColorSchemeIsDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
        prefersColorSchemeIsDark ? setTheme("dark") : setTheme("light")
      }
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else if (theme === "light") {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }

    localStorage.theme = theme
  }, [theme])

  const switchTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <header className="sticky top-0 w-[100%] p-4 bg-neutral-0-400 dark:bg-primary transition-colors duration-300 z-50">
      <div className="max-w-5xl m-auto flex align-middle justify-between">
        <Link
          to="/"
          className="relative text-2xl text-center hover:scale-110 transition-all duration-300"
        >
          <span className="text-secondary font-bold">Cine</span>
          <span className="dark:text-neutral-0-400 transition-colors duration-300">
            Stream
          </span>
        </Link>
        <nav className="md:hidden w-1/4 flex flex-col align-middle justify-center">
          <ul className="flex align-middle justify-between">
            <li>
              <Link
                to="/"
                className="relative flex flex-col align-middle justify-center hover:scale-125 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 17.8662V11.8662H12V17.8662H17V9.86621H20L10 0.866211L0 9.86621H3V17.8662H8Z"
                    fill="#BD71E0"
                    className="fill-secondary"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/discover"
                className="relative flex flex-col align-middle justify-center hover:scale-125 transition-all duration-300"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1667 11.8662H12.3767L12.0967 11.5962C13.0767 10.4562 13.6667 8.97621 13.6667 7.36621C13.6667 3.77621 10.7567 0.866211 7.16669 0.866211C3.57669 0.866211 0.666687 3.77621 0.666687 7.36621C0.666687 10.9562 3.57669 13.8662 7.16669 13.8662C8.77669 13.8662 10.2567 13.2762 11.3967 12.2962L11.6667 12.5762V13.3662L16.6667 18.3562L18.1567 16.8662L13.1667 11.8662ZM7.16669 11.8662C4.67669 11.8662 2.66669 9.85621 2.66669 7.36621C2.66669 4.87621 4.67669 2.86621 7.16669 2.86621C9.65669 2.86621 11.6667 4.87621 11.6667 7.36621C11.6667 9.85621 9.65669 11.8662 7.16669 11.8662Z"
                    fill="#BD71E0"
                    className="fill-secondary"
                  />
                </svg>
              </Link>
            </li>
            <li
              className="cursor-pointer hover:scale-125 transition-all duration-300"
              onClick={switchTheme}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.875C12.1549 1.875 14.2215 2.73102 15.7452 4.25476C17.269 5.77849 18.125 7.84512 18.125 10C18.125 12.1549 17.269 14.2215 15.7452 15.7452C14.2215 17.269 12.1549 18.125 10 18.125V1.875ZM10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0Z"
                  fill="black"
                  className="fill-secondary"
                />
              </svg>
            </li>
          </ul>
        </nav>

        <nav className="hidden md:visible w-1/4 md:flex flex-col align-middle justify-center">
          <ul className="flex align-middle justify-between">
            <li>
              <NavLink
                to="/"
                className="relative flex flex-col align-middle justify-center dark:text-secondary hover:scale-125 transition-all duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/discover"
                className="relative flex flex-col align-middle justify-center dark:text-secondary hover:scale-125 transition-all duration-300"
              >
                Discover
              </NavLink>
            </li>
            <li
              className="cursor-pointer hover:scale-125 transition-all duration-300"
              onClick={switchTheme}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.875C12.1549 1.875 14.2215 2.73102 15.7452 4.25476C17.269 5.77849 18.125 7.84512 18.125 10C18.125 12.1549 17.269 14.2215 15.7452 15.7452C14.2215 17.269 12.1549 18.125 10 18.125V1.875ZM10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0Z"
                  fill="black"
                  className="fill-secondary"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
