import React, {useEffect, useRef} from "react"
import {Link, useNavigate} from "react-router-dom"

export default function Navbar(props) {
  let navigate = useNavigate()
  const styles = {
    display: props.isNavOpen ? "none" : "block",
  }
  const crossStyles = {
    display: props.isCrossVisible ? "none" : "block",
  }
  const hamStyles = {
    transform: !props.isNavOpen ? "translateX(-100%)" : "translateX(0)",
  }
  const [sticky, setSticky] = React.useState(false)

  const navRef = useRef()

  useEffect(() => {
    const navHeight = navRef.current.getBoundingClientRect().height

    const makeSticky = () => {
      if (window.scrollY >= navHeight) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener("scroll", makeSticky)
  })

  return (
    <nav
      className={
        sticky ? "navShadow duration-300" : "bg-bgPrimary duration-300"
      }
      ref={navRef}
    >
      <div
        className={
          sticky
            ? "flex justify-between px-10 navxsm:px-7"
            : "flex justify-between px-10 py-4 nav:py-8 navxsm:px-7"
        }
      >
        {/* Logo div */}
        <div
          className="mr-9 flex cursor-pointer items-center"
          onClick={() => navigate("/")}
        >
          <div>
            <img
              src="./images/footerLogo.png"
              className={` navxsm:w-11 ${sticky ? "w-10" : "w-[3.1rem]"}`}
              alt="logo"
            />
          </div>
          <div
            className={`navLogoHeading ml-3 flex flex-col font-LexendDeca uppercase ${
              sticky ? "text-[15px]" : "text-[18px]"
            }`}
          >
            <h3>techinnovate</h3>
            <h3>mobility pvt ltd.</h3>
          </div>
        </div>
        <div className="flex items-center justify-center font-LexendDeca">
          {/* This will be visible below 640px i.e in mobile */}
          <div className="hidden w-8 nav:block">
            <img
              src="./images/icons/bars.png"
              alt="bars"
              className="h-[40px] cursor-pointer duration-500 hover:rotate-90"
              id="toggleBtn"
              onClick={props.handleClick}
              style={styles}
            />
            <img
              src="images/icons/cross.png"
              className="cursor-pointer duration-500 hover:rotate-90"
              onClick={props.handleCrossClick}
              style={crossStyles}
              alt="cross"
            />
          </div>
          {/* This will be visible above 960px i.e., in desktop  */}
          <ul
            className={`flex  text-2xl font-light nav:hidden ${
              sticky ? "items-center" : null
            }`}
          >
            <li className="relative mx-4 overflow-hidden after:absolute after:bottom-0 after:left-0 after:inline-block after:h-[0.2rem] after:w-full  after:translate-x-[-100%] after:bg-black after:transition after:duration-300 after:ease-in hover:cursor-pointer  hover:after:translate-x-0">
              <Link to="/">Home</Link>
            </li>
            <li
              className={`group relative  mx-4 hover:cursor-pointer ${
                sticky ? "top-[6px]" : "top-0"
              }`}
            >
              Products
              <div className="relative -left-8 mt-3 opacity-0 transition duration-150 ease-in  group-hover:z-50 group-hover:opacity-100">
                <ul className=" absolute  w-[170px] bg-[#c8e5eb] font-light before:absolute before:top-[-12px] before:left-[40%] before:h-0 before:w-0 before:border-r-[20px] before:border-b-[15px] before:border-l-[20px] before:border-[#c8e5eb] before:border-l-transparent before:border-r-transparent  ">
                  <li className="py-3 pl-2 pr-3 duration-500 ease-out hover:cursor-pointer hover:bg-[#c8e5eb] hover:pl-4 ">
                    <Link to="/ambler250">Ambler250</Link>
                  </li>
                  <li className="py-3 pl-2 pr-3 duration-500 ease-out hover:cursor-pointer hover:bg-[#c8e5eb] hover:pl-4">
                    <Link to="/ambler250x">Ambler250X</Link>
                  </li>
                </ul>
              </div>
            </li>
            <Link to="/about">
              <li className="relative mx-4 overflow-hidden after:absolute after:bottom-0 after:left-0 after:inline-block after:h-[0.2rem] after:w-full  after:translate-x-[-100%] after:bg-black after:transition after:duration-300 after:ease-in hover:cursor-pointer hover:after:translate-x-0">
                About Us
              </li>
            </Link>
            <Link to="/contact">
              <li className="relative mx-4 overflow-hidden after:absolute after:bottom-0 after:left-0 after:inline-block after:h-[0.2rem] after:w-full  after:translate-x-[-100%] after:bg-black after:transition after:duration-300 after:ease-in hover:cursor-pointer hover:after:translate-x-0">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* This is hamburger */}
      <div
        className="absolute top-0 z-10 h-screen w-[80vw] translate-x-[-100%] bg-white transition-transform duration-700 ease-out xsm:w-screen"
        style={hamStyles}
      >
        <div className="mt-8 flex items-center justify-between px-4  navsm:px-8 navmd:px-11">
          <div className="mr-9 flex cursor-pointer items-center navxsm:mr-7">
            <div>
              <img
                src="./images/footerLogo.png"
                className="w-14 navxsm:w-11"
                alt="logo"
                onClick={() => navigate("/")}
              />
            </div>
            <div
              className="navLogoHeading ml-3 flex flex-col text-[18px] uppercase"
              onClick={() => navigate("/")}
            >
              <h3>techinnovate</h3>
              <h3>mobility pvt ltd.</h3>
            </div>
          </div>
          <div className="mr-4 navxsm:mr-0">
            <img
              src="images/icons/cross.png"
              className="w-[35px] cursor-pointer duration-500 hover:rotate-90"
              onClick={props.handleCrossClick}
              style={crossStyles}
              alt="cross"
            />
          </div>
        </div>
        <ul className="mt-8 text-3xl uppercase navxsm:text-[28px] ">
          <Link to="/">
            <li className="py-3 pt-3 pl-9 pr-3 duration-500 ease-out hover:cursor-pointer hover:bg-[#c8e5eb] hover:pl-10 navmd:pl-12 navmd:hover:pl-14">
              home
            </li>
          </Link>
          <Link to="/ambler250">
            <li className="py-3 pt-3 pl-9 pr-3 duration-500 ease-out hover:cursor-pointer hover:bg-[#c8e5eb] hover:pl-10 navmd:pl-12 navmd:hover:pl-14">
              ambler250
            </li>
          </Link>
          <Link to="/ambler250x">
            <li className="py-3 pt-3 pl-9 pr-3 duration-500 ease-out hover:cursor-pointer hover:bg-[#c8e5eb] hover:pl-10 navmd:pl-12 navmd:hover:pl-14">
              ambler250x
            </li>
          </Link>
          <Link to="/about">
            <li className="py-3 pt-3 pl-9 pr-3 duration-500 ease-out hover:cursor-pointer hover:bg-[#c8e5eb] hover:pl-10 navmd:pl-12 navmd:hover:pl-14">
              about
            </li>
          </Link>
          <Link to="/contact">
            <li className="py-3 pt-3 pl-9 pr-3 duration-500 ease-out hover:cursor-pointer hover:bg-[#c8e5eb] hover:pl-10 navmd:pl-12 navmd:hover:pl-14">
              contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
