/**
 * Currently not implementing this component
 */

import React from "react"

export default function ThreeD() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-[20%] sm:w-[50%] smd:w-[40%]">
          <img src="./images/ambler/3D.svg" alt="ambler" />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h3 className="text-2xl font-extralight">Choose Theme</h3>
        <div className="mt-7 flex gap-x-14">
          <div className="h-[70px] w-[70px] rounded-full bg-[#2E4568] shadow-insideBorder hover:cursor-pointer sm:h-[55px] sm:w-[55px]"></div>
          <div className="h-[70px] w-[70px] rounded-full bg-[#666666] shadow-insideBorder hover:cursor-pointer sm:h-[55px] sm:w-[55px]"></div>
          <div className="h-[70px] w-[70px] rounded-full bg-[#264528] shadow-insideBorder hover:cursor-pointer sm:h-[55px] sm:w-[55px]"></div>
        </div>
      </div>
    </div>
  )
}
