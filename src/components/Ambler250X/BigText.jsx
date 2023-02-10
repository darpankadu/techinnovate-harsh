import React, {useEffect, useRef} from "react"

import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export default function BigText() {
  const textRef = useRef()

  useEffect(() => {
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current, //start the animation when "text" enters the viewport
        // x: -500,
        scrub: 0.5,
        //markers: true, //This is for developers only
        start: "top 40%",
        end: "bottom 30%",
      },
      x: -650,
    })
  })

  return (
    <div className=" overflow-hidden">
      <div className="mt-24" ref={textRef}>
        <span className="responsive-ambler-text whitespace-nowrap text-[300px] font-semibold uppercase text-[#A6A6A6]">
          ambler 250x
        </span>
      </div>
    </div>
  )
}
