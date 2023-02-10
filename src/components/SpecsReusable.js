import React from "react"

export default function SpecsResusable(props) {
  return (
    <div className="flex items-center pb-28 xsm:pb-20  xxsm:m-auto xxsm:min-w-[320px] xxsm:pl-[8%] ">
      <div>
        <img
          src={`images/icons/${props.src}.png`}
          alt={props.alt}
          className="h-[60px] w-[50px]"
        />
      </div>
      <div className="ml-3 inline-block">
        <h4 className="w-fit text-2xl font-normal">{props.heading}</h4>
        <h5 className=" text-base font-light">{props.subheading}</h5>
        {props.secondaryheading ? (
          <h5 className="mt-1  w-fit text-base font-light">
            {props.secondaryheading}
          </h5>
        ) : null}
      </div>
    </div>
  )
}
