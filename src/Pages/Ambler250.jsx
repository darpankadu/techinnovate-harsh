import React, {useRef} from "react"

import Navbar from "../components/Navbar"
import Main from "../components/Ambler/Main"
import Card from "../components/Ambler/CardComponent"
import Specifications from "../components/Ambler/Specifications"
import BigText from "../components/Ambler/BigText"
import CardwithImage from "../components/Ambler/CardwithImage"
import Footer from "../components/Footer"
import GridImage from "../components/GridImage"
import images from "../gridData"

import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import {useEffect} from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Ambler() {
  // this is for hamburger bar icon
  const [isNavOpen, setIsNavOpen] = React.useState(false)
  const [isCrossVisible, setIsCrossVisible] = React.useState(!isNavOpen)
  const navToggle = () => {
    setIsNavOpen((prevState) => !prevState)
    setIsCrossVisible((prevState) => !prevState)
  }
  const crossClick = () => {
    setIsCrossVisible((prevState) => !prevState)
    setIsNavOpen((prevState) => !prevState)
  }

  // This is for image grid
  const allImages = images.map((image) => {
    return (
      <GridImage
        key={image.id}
        row={image.row}
        src={image.src}
        vehicle={"ambler250"}
      />
    )
  })

  let row1Images = []
  let row2Images = []
  let row3Images = []
  allImages.map((rowImage) => {
    if (rowImage.props.row === 1) {
      return row1Images.push(rowImage)
    } else if (rowImage.props.row === 2) {
      return row2Images.push(rowImage)
    } else {
      return row3Images.push(rowImage)
    }
  })

  const row1 = useRef()
  const row2 = useRef()
  const row3 = useRef()

  useEffect(() => {
    gsap.to(row1.current, {
      scrollTrigger: {
        trigger: row1.current, //start the animation when "row1" enters the viewport
        scrub: 0.5,
        // markers: true, //This is for developers only
        start: "top 55%",
        // end: "bottom 10%",
      },
      x: 280,
    })
  })
  useEffect(() => {
    gsap.to(row2.current, {
      scrollTrigger: {
        trigger: row2.current, //start the animation when "row1" enters the viewport
        scrub: 0.5,
        // markers: true, //This is for developers only
        start: "top 60%",
        // end: "bottom 10%",
      },
      x: -250,
    })
  })
  useEffect(() => {
    gsap.to(row3.current, {
      scrollTrigger: {
        trigger: row3.current, //start the animation when "row3" enters the viewport
        scrub: 0.5,
        // markers: true, //This is for developers only
        start: "top 80%",
        // end: "bottom 10%",
      },
      x: 280,
    })
  })

  // Animation for changing background color
  const changeBg = useRef()

  useEffect(() => {
    gsap.to(changeBg.current, {
      backgroundColor: "black",
      duration: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: changeBg.current,
        toggleActions: "play none none reverse",
        //markers: true, //This is for developers only
        start: "top 100px",
        end: "bottom 90%",
      },
    })
  })

  return (
    <div className="bg-bgPrimary font-LexendDeca overflow-hidden">
      <Navbar
        handleClick={navToggle}
        isNavOpen={isNavOpen}
        isCrossVisible={isCrossVisible}
        handleCrossClick={crossClick}
      />
      <Main />
      <Card />
      <Specifications product="Ambler 250"/>
      <BigText />
      <div className="changeBg" ref={changeBg}>
        {/* <ThreeD /> */}
        {/* Image Grid */}
        <div className="relative mt-[120px] overflow-hidden before:absolute before:top-0 before:h-6 before:w-full before:bg-[#5AB0C2] after:absolute after:bottom-0 after:h-6 after:w-full after:bg-[#5AB0C2] sm:overflow-hidden">
          {/* ROW 1 */}
          <div className="pt-[64px] ">
            <div className="ml-[-200px] flex gap-x-6 " ref={row1}>
              {row1Images}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="mt-[31px]">
            <div className=" flex gap-x-11" ref={row2}>
              {row2Images}
            </div>
          </div>

          {/* ROW 3 */}
          <div className="mt-[31px] pb-[64px]">
            <div className=" ml-[-200px] flex gap-x-11" ref={row3}>
              {row3Images}
            </div>
          </div>
        </div>
        <CardwithImage
          text={
            "Ambler 250 is easy to lock. It has cruise control which gives you efficient driving experience in daily commute. You can lock the speed whatever you want and it can be easily stopped by applying the brakes."
          }
        />
      </div>
      <Footer />
    </div>
  )
}
