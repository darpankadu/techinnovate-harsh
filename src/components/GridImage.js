import React from "react"

export default function GridImage(props) {
  return (
    <img
      src={`./images/grid/${props.vehicle}/${props.src}.jpeg`}
      className=" h-[268px] w-[439px] xsm:h-[140px] xsm:w-[250px] gridmd:h-[180px] gridmd:w-[250px]"
      alt="ambler1"
    />
  )
}
