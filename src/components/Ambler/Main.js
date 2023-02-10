import React from "react"

export default function Main() {
  return (
    <div className=" my-24 flex justify-center sm:mt-0  sm:flex-col-reverse sm:items-center smd:mt-0 smd:flex-col-reverse smd:items-center overflow-hidden">
      <div className="mr-48 w-[490px] sm:mr-0 sm:mt-10 sm:w-[80%] smd:mr-0 smd:mt-16 mainImg:mx-16">
        <div className="bg-white pl-6 pt-10 ">
          <h1 className="relative pb-5 text-5xl font-semibold uppercase after:absolute after:right-0 after:bottom-0 after:h-2 after:w-[53%] after:bg-secondary smFoo:text-[35px] sm:pr-6 ">
            Ambler 250
          </h1>
          <h3 className=" text-[25px] font-normal uppercase">Mini bike</h3>
          <p className="mt-6 w-[420px] pb-14 text-justify text-2xl font-extralight leading-8 sm:w-auto sm:pr-10 cardImg:pr-8">
            Ambler 250 is an E-bike with stylish look along with high range and
            comfortable riding experince. Lorem ipsum dolor sit amet,
            consectetur. Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
      </div>
      <div className=" sm:mt-16 mainImg:flex mainImg:items-center">
        <img
          src="./images/ambler/main.png"
          alt="Ambler"
          className=" h-[410px] w-[600px] object-cover  sm:h-auto sm:w-full sm:object-contain"
        ></img>
      </div>
    </div>
  )
}
