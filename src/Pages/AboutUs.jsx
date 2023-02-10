import React from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Support from '../components/Support'

const AboutUs = () => {
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
  return (
    <div className='overflow-hidden'>
        <Navbar 
             handleClick={navToggle}
             isNavOpen={isNavOpen}
             isCrossVisible={isCrossVisible}
             handleCrossClick={crossClick}
        />
        <Content />
        <Support />
        <Footer />
    </div>
  )
}

export default AboutUs