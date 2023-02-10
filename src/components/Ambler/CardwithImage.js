import React from "react"
import {useRef} from "react"
import gsap from "gsap"
import {useEffect} from "react"

export default function CardwithImage({text}) {
  const imgwidCard = useRef()

  useEffect(() => {
    gsap.fromTo(
      imgwidCard.current,
      {scale: 0.7},
      {
        scale: 1,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: imgwidCard.current,
          //markers: true, //This is for developers
          toggleActions: "play none none reverse",
          start: "top 65%",
          end: "bottom 50%",
        },
      }
    )
  }, [])

  return (
    <div className="pt-[250px]  sm:w-full sm:pt-[200px] overflow-hidden" ref={imgwidCard}>
      <div className="m-auto flex w-4/5 sm:w-[78%] sm:flex-col cardImg:flex-col">
        <div className="w-[500px] sm:w-full cardImg:flex cardImg:w-full cardImg:justify-center">
          <img
            src="./images/ambler/cardwidImage.jpg"
            className="sm:aspect-square cardImg:h-[365px] cardImg:w-[500px]"
            alt="ambler"
          />
        </div>
        <div className="flex w-4/5 items-center bg-white pl-[57px] outline outline-1 outline-blue-50 sm:m-0 sm:w-full sm:pt-8 sm:pb-10 sm:pl-0 cardImg:mt-6 cardImg:w-full cardImg:pt-8 cardImg:pb-10">
          <p className=" w-[90%] pr-3 text-2xl font-extralight sm:m-0  sm:w-full sm:px-10 sm:pr-10 sm:text-center">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}
