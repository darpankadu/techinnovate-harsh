import React from "react"

export default function GridImage(props) {
  console.log(props)
  return (
    <>
      <img
        src={`/images/grid/${props.vehicle}/${props.src}`}
        className="h-[268px] w-[439px]"
        alt="ambler1"
      />
      {console.log("WG")}
    </>
  )
}
