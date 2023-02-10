import React from "react"

export default function SpecificationX() {
  return (
    <div className="mt-32 overflow-hidden">
      <div className="flex flex-row-reverse justify-between ximg:justify-center">
        <div className=" flex w-[40%] items-center justify-end   imgSpecs:hidden">
          <img
            src="./images/ambler250x/specs.png"
            alt="Ambler"
            className="h-[700px] w-[80%]"
          />
        </div>
        <div className="bg-[#ffffffb3]  pl-12 pt-20 specssm:w-full specssm:p-0">
          <div>
            <h1 className=" specs-heading relative pb-4 pr-32 text-5xl font-semibold uppercase after:absolute after:right-0 after:bottom-0 after:h-2 after:w-1/2 after:bg-secondary specssm:mt-12 specssm:pr-0 specssm:text-center">
              specifications
            </h1>
            <h3 className="specs-subheading mt-4 text-3xl font-light specssm:text-center">
              Product Ambler 250X
            </h3>
          </div>
          {/* Main Icons container */}
          <div className="mt-24 grid grid-cols-2 xxsm:flex  xxsm:flex-col specssm:m-auto specssm:w-[90%] specssm:pt-16">
            {/* Single icon container */}
            <div className="flex items-center pb-28 xsm:pb-20  xxsm:m-auto xxsm:min-w-[320px] xxsm:pl-[8%] ">
              <div>
                <img
                  src="images/icons/battery.png"
                  alt="battery"
                  className="h-[60px] w-[50px]"
                />
              </div>
              <div className="ml-3">
                <h4 className="text-2xl font-normal">Battery</h4>
                <h5 className=" text-[1rem] font-light">36V, 26AH, NMC</h5>
                <h5 className=" text-[1rem] font-light">Detachable Battery</h5>
              </div>
            </div>
            {/* end of single container */}
            {/* Single icon container */}
            <div className="flex items-center pb-28 xsm:pb-20  xxsm:m-auto xxsm:min-w-[320px] xxsm:pl-[8%] ">
              <div>
                <img
                  src="images/icons/cost.png"
                  alt="battery"
                  className="h-[60px] w-[50px]"
                />
              </div>
              <div className="ml-3">
                <h4 className="text-2xl font-normal">Cost Saving</h4>
                <h5 className=" text-[1rem] font-light">10 paise/km</h5>
              </div>
            </div>
            {/* end of single container */}
            {/* Single icon container */}
            <div className="flex items-center pb-28 xsm:pb-20  xxsm:m-auto xxsm:min-w-[320px] xxsm:pl-[8%] ">
              <div>
                <img
                  src="images/icons/speed.png"
                  alt="battery"
                  className="h-[60px] w-[50px]"
                />
              </div>
              <div className="ml-3">
                <h4 className="text-2xl font-normal">Speed</h4>
                <h5 className=" text-[1rem] font-light">
                  Maximum speed 25km/hr
                </h5>
              </div>
            </div>
            {/* end of single container */}
            {/* Single icon container */}
            <div className="flex items-center pb-28 xsm:pb-20  xxsm:m-auto xxsm:min-w-[320px] xxsm:pl-[8%] ">
              <div>
                <img
                  src="images/icons/weight.png"
                  alt="battery"
                  className="h-[60px] w-[50px]"
                />
              </div>
              <div className="ml-3">
                <h4 className="text-2xl font-normal">Weight</h4>
                <h5 className=" text-[1rem] font-light">
                  150kg payload capacity
                </h5>
              </div>
            </div>
            {/* end of single container */}
            {/* Single icon container */}
            <div className="flex items-center pb-28 xsm:pb-20  xxsm:m-auto xxsm:min-w-[320px] xxsm:pl-[8%] ">
              <div>
                <img
                  src="images/icons/range.jpeg"
                  alt="battery"
                  className="h-[60px] w-[50px]"
                />
              </div>
              <div className="ml-3">
                <h4 className="text-2xl font-normal">Range</h4>
                <h5 className=" text-[1rem] font-light">70km/charge</h5>
              </div>
            </div>
            {/* end of single container */}
            {/* Single icon container */}
            <div className="flex items-center pb-28 xsm:pb-20  xxsm:m-auto xxsm:min-w-[320px] xxsm:pl-[8%] ">
              <div>
                <img
                  src="images/icons/trademill.png"
                  alt="battery"
                  className="h-[60px] w-[50px]"
                />
              </div>
              <div className="ml-3">
                <h4 className="text-2xl font-normal">3 versatile modes</h4>
                <h5 className=" text-[1rem] font-light">
                  Standing, Walking, Sitting
                </h5>
              </div>
            </div>
            {/* end of single container */}
          </div>
        </div>
      </div>
    </div>
  )
}
