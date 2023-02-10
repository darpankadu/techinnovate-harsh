import React from "react"
import SpecsResusable from "../SpecsReusable"
import specificationsdata from "../../specificationsdata"

export default function Specifications({product}) {
  const specifications = specificationsdata.map((specification) => {
    return (
      <SpecsResusable
        heading={specification.heading}
        subheading={specification.subheading}
        secondaryheading={specification.secondaryheading}
        src={specification.src}
        alt={specification.alt}
        key={specification.id}
      />
    )
  })
  return (
    <div className="mt-32 overflow-hidden">
      <div className="flex justify-between ximg:justify-center">
        <div className=" flex w-[40%] items-center  imgSpecs:hidden">
          <img
            src="./images/ambler/specs.png"
            alt="Ambler"
            className="h-[700px] w-[27vw]"
          />
        </div>
        <div className="bg-[#ffffffb3]  pl-12 pt-20 specssm:w-full specssm:p-0">
          <div>
            <h1 className=" specs-heading relative pb-4 pr-32 text-5xl font-semibold uppercase after:absolute after:right-0 after:bottom-0 after:h-2 after:w-1/2 after:bg-secondary specssm:mt-12 specssm:pr-0 specssm:text-center">
              specifications
            </h1>
            <h3 className="specs-subheading mt-4 text-3xl font-light specssm:text-center">
              Product {product}
            </h3>
          </div>
          {/* Main Icons container */}
          <div className="mt-24 grid grid-cols-2 xxsm:flex  xxsm:flex-col specssm:m-auto specssm:w-[90%] specssm:pt-16">
            {specifications}
          </div>
        </div>
      </div>
    </div>
  )
}
