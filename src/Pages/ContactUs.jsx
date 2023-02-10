import React from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'


const ContactUs = () => {

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
        <ContactForm />
    </div>
  )
}

export default ContactUs