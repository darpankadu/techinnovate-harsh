import React from "react"

const Support = () => {
  return (
    <div className=" bg-bgPrimary pt-12 overflow-hidden">
      <h2 className="text-center text-2xl font-light">Supported by</h2>
      <div className="my-8 mx-10 flex flex-wrap items-center justify-evenly gap-6">
        <img className="h-16 w-44" alt="IIC" src="images/footer/iic.png" />
        <img alt="i-hub" src="images/footer/iHub.png" className="h-14 w-32" />
        <img className="h-20 w-44" alt="Nidhi" src="images/footer/nidhi.png" />
        <img
          alt="i-create"
          src="images/footer/icreate.png"
          className="h-20 w-36"
        />

        <img className="h-16 w-36" alt="SSIP" src="images/footer/ssip.png" />
        <img
          alt="Startup"
          src="images/footer/startup.png"
          className="h-16 w-36"
        />
      </div>
    </div>
  )
}

export default Support
