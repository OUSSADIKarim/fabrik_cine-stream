import React from "react"

const SlideVideo = ({ video }) => {
  return (
    <iframe
      className="w-[100%] aspect-square md:w-[70vh] md:aspect-square mx-auto rounded-lg hover:scale-[1.02] transition-all duration-300 z-10"
      src={`https://youtube.com/embed/${video.key}`}
      title={`${video.name}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

export default SlideVideo
