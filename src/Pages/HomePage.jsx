import React from "react"
import {Link} from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../style.css"

const HomePage = () => {
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
  return (
    <div className="overflow-hidden">
      <Navbar
        handleClick={navToggle}
        isNavOpen={isNavOpen}
        isCrossVisible={isCrossVisible}
        handleCrossClick={crossClick}
      />

      {/* Landing Page */}
      <section className="section home bg-bgPrimary">
        <img
          src="images/homepage/main.png"
          alt="ambler"
          className="h-full w-full object-contain"
        />
      </section>

      {/* Slide-2 */}
      <section className="slide2">
        <div className="slide-container">
          <div className="slide2-grid">
            <div className="photo">
              <img
                className="slide2-content-img"
                src="images/homepage/slide2-img.png"
                alt="ambler"
              />
            </div>
            <div className="description">
              <h2>
                Meet the <br /> Revolutionary Vehicle
              </h2>
              <div className="slide2-description">
                <div className="desc">
                  <h4>Stunning colors</h4>
                  <p>
                    High quality Glossy and Matte finish colour combination with
                    suitable protective chemical coating for long lasting life
                    and protection against corrosion.
                  </p>
                </div>
                <div className="desc">
                  <h4>Large Bootspace</h4>

                  <p>Upto 25 litres of bootspace for your valluable items.</p>
                  <p>
                    Also for goods carrying upto 20kg. AMBLER have the floor
                    space upto 400+ mm
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ambler">
            <h1>AMBLER</h1>
          </div>
        </div>
      </section>
      {/* Slide-2 END */}

      {/* Slide-3 */}
      <section className="slide3">
        <div>
          <img src="images/homepage/twobikes-new.jpg" alt="two bikes"/>
        </div>
        <div className="performance-txt-container">
          <h1 className="performance-txt">PERFORMANCE</h1>
        </div>
        <div className="slide3-desc-container">
          <div className="slide3-heading-desc-container">
            <h1>
              Best <span>Performance</span> ever seen
            </h1>
            <div className="slide3-descriptions">
              <div className="slide3-desc">
                <h5>- Upto 75km range in single charge</h5>
              </div>
              <div className="slide3-desc">
                <h5>- 10 paisa/km cost</h5>
              </div>
              <div className="slide3-desc">
                <h5>- Rs.6/single full charge cost</h5>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="images/homepage/bridge-1.jpeg" alt="two bikes 2" />
        </div>
      </section>
      {/* Slide-3 END */}

      {/* Slide-4*/}
      <section className="slide4">
        <div className="slide4-content-container">
          <div className="slide4-content">
            <h1>AMBLER 250X</h1>
            <div className="slide4-descriptions">
              <div className="slide4-desc">
                <h5>An electric walking bike.</h5>
              </div>
              <div className="slide4-desc">
                <h5>Made as per the standard Indian road infrastructure.</h5>
              </div>
              <div className="slide4-desc">
                <h5>3 versatile mode</h5>
              </div>
              <div className="slide4-desc">
                <h5>IP 67 rated battery pack</h5>
              </div>
            </div>
            <button>
              <Link to="/ambler250x">Learn More</Link>
            </button>
          </div>
          <div className="ambler250X-big">
            <h1>250X</h1>
          </div>
        </div>
        <div className="photo4">
          <img src="images/homepage/banner2.png" alt="banner"  className="object-scale-down"/>
        </div>
      </section>
      {/* Slide-4 END */}

      {/* Slide-5 */}
      <section className="slide5">
        <div className="slide4-content-container">
          <div className="slide4-content">
            <h1>AMBLER 250</h1>
            <div className="slide4-descriptions">
              <div className="slide4-desc">
                <h5>An electric smart vehicle.</h5>
              </div>
              <div className="slide4-desc">
                <h5>Made as per the standard Indian road infrastructure.</h5>
              </div>
              <div className="slide4-desc">
                <h5>Strong look and stylish.</h5>
              </div>
              <div className="slide4-desc">
                <h5>IP 67 rated battery</h5>
              </div>
            </div>
            <button>
              <Link to="/ambler250">Learn More</Link>
            </button>
          </div>
          <div className="ambler250-big">
            <h1>250</h1>
          </div>
        </div>
        <div className="photo4">
          <img src="images/homepage/banner3.jpeg" alt="banner" />
        </div>
      </section>
      {/* Slide-5 END */}

      {/* Slide-6 */}
      <section className="slide6">
        <div className="container6">
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src="images/homepage/loop-1.jpeg" alt="#photo1" />
              </div>
              <div className="slide">
                <img src="images/homepage/loop-2.jpeg" alt="#photo2" />
              </div>
              <div className="slide">
                <img src="images/homepage/loop-3.jpeg" alt="#photo3" />
              </div>
              <div className="slide">
                <img src="images/graphic.png" alt="#photo4" />
              </div>
              <div className="slide">
                <img src="images/homepage/loop-5.jpeg" alt="#photo5" />
              </div>
              {/* <div className="slide">
                <img src="images/homepage/loop-6.jpeg" alt="#photo6" />
              </div> */}
              <div className="slide">
                <img src="images/homepage/loop-7.jpeg" alt="#photo7" />
              </div>
              <div className="slide">
                <img src="images/homepage/loop-8.jpeg" alt="#photo8" />
              </div>
              <div className="slide">
                <img src="images/homepage/loop-9.jpeg" alt="#photo9" />
              </div>
            </div>
          </div>
          <div className="slide6-headings">
            <div className="bigtext">WELCOME IT TO YOUR PLACE</div>
            <div className="smalltext">
              It will be available soon in the market for retail purchase.
            </div>
          </div>
        </div>
      </section>
      {/* Slide-6 END */}

      {/* Slide-7*/}
      <section className="slide7">
        <div className="missionContainer">
          <div className="ourMission">
            <div className="heading">
              <h2>
                OUR <span>MISSION</span>
              </h2>
            </div>
            <div className="mission-text">
              Developing vehicle subsystem and components specific to Indian
              requirements of Electric vehicle with range and cost-effective
              <br />
              <br />
              We have a mission of customised electric vehicle for different
              type of use as well as also used in daily commute of more than
              35km.
            </div>
          </div>
        </div>
        <div className="video7 display-block">
          <img src="images/homepage/ourMission.jpeg" alt="video" />
        </div>
      </section>
      {/* Slide-7 END */}

      <Footer />
    </div>
  )
}

export default HomePage
