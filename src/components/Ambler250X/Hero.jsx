import React from "react"
import Box from "../Ambler250X/Box"

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative flex justify-center after:absolute after:right-0 after:bottom-[32px] after:h-2 after:w-[46%] after:bg-[#5ab0c2] nav:after:bottom-0">
        <h1 className="heading text-center text-[140px] font-bold">
          Ambler 250X
        </h1>
      </div>
      <img
        src="./images/ambler/main.png"
        alt="ambler250X"
        className="mx-auto mt-10 w-4/5"
      />
      <Box />
    </div>
  )
}

export default Hero
