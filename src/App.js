import React from "react"
import {Routes, Route} from "react-router-dom"
import Ambler from "./Pages/Ambler250.jsx"
import Ambler250X from "./Pages/Ambler250X.jsx"
import HomePage from "./Pages/HomePage.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import ContactUs from "./Pages/ContactUs"
import ScrollToTop from "./ScrollToTop"

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ambler250" element={<Ambler />} />
        <Route path="/ambler250x" element={<Ambler250X />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </ScrollToTop>
  )
}

export default App
