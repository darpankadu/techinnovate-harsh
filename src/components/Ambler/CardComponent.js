import React from "react"

export default function Card() {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="relative mb-4 mt-16 w-4/5 bg-white pb-12 pt-8 backdrop-blur before:absolute before:top-0 before:h-full before:w-6 before:bg-secondary xsm:before:w-4">
        <div className="mt-6 flex flex-col items-center sm:mx-[22px]">
          <h1 className="responsive-card-heading text-center text-5xl font-semibold uppercase">
            ambler 250
          </h1>
          <h3 className="mt-3 inline-block border-b-2 border-secondary text-center text-3xl font-semibold uppercase">
            product
          </h3>
        </div>
        <div className="flex justify-center">
          <p className="responsive-card-lorem w-4/5 py-7 text-center text-3xl font-extralight xsm:mx-4 xsm:leading-snug">
            Ambler 250 is day to day usable vehicle. You can commute with your
            goods, also it is eco-friendly and pocket-friendly too. It has no
            need of license.
          </p>
        </div>
      </div>
    </div>
  )
}
