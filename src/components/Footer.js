import React, {useEffect, useRef} from "react"
import {useNavigate} from "react-router-dom"
import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"

export default function Footer() {
  let navigate = useNavigate()
  const footer = useRef()

  useEffect(() => {
    gsap.to(footer.current, {
      backgroundColor: "#F3F3F3",
      color: "black",
      duration: 0.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: footer.current,
        toggleActions: "play none none reverse",
        // markers: true,
        // scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
    })
  })

  return (
    <footer className="bg-black pt-80 text-white overflow-hidden" ref={footer}>
      <div>
        <q className="responsive-sm-typo responsive-md-typo flex justify-center text-center text-5xl font-medium uppercase sm:mx-6 sm:block sm:text-center sm:leading-relaxed md:mx-4 md:block md:leading-relaxed">
          join the
          <span className="relative  mx-4 pb-2 after:absolute after:left-1 after:bottom-0 after:h-1 after:w-[98%] after:bg-secondary sm:inline-block">
            electric
          </span>
          revolution with us.
        </q>

        <div className="flex justify-center pt-32 ">
          <div className="flex justify-center gap-2 rounded-large bg-[#5ab0c263] py-2 px-8 text-4xl foo:bg-transparent smd:w-4/5">
            <div className="foo-flex justify-center">
              <span className="m-auto w-fit foo:block foo:rounded-large foo:bg-[#5ab0c263] foo:px-8 foo:py-1 fooContact:py-0 fooContact:px-6 fooContact:text-[23px]">
                Connect with us:
              </span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@techinnovatemobility.com"
                target="_blank"
                className="ml-4 underline foo:mt-2 foo:block fooContact:text-[20px]"
                rel="noreferrer"
              >
                info@techinnovatemobility.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center hover:cursor-pointer">
          <img
            src="./images/footerLogo.png"
            alt="logo"
            className="w-[60px]"
            onClick={() => navigate("/")}
          />
          <div
            className="mt-3 flex flex-col items-center text-[27px] font-light uppercase hover:cursor-pointer sm:ml-3"
            onClick={() => navigate("/")}
          >
            <h1 className="">techinnovate</h1>
            <h2 className="">mobiltiy pvt. ltd.</h2>
          </div>
        </div>
        <div className="mt-16 pb-8">
          <div className="flex justify-center">
            <h3 className="ml-5 text-2xl font-extralight uppercase smFoo:ml-2">
              follow us
            </h3>
          </div>
          <div className=" mx-4 mt-7 flex flex-wrap justify-around text-3xl font-medium smFoo:m-auto smFoo:mt-7 smFoo:w-fit smFoo:flex-col sm:text-2xl">
            <h2 className="cursor-pointer">
              <a
                href="https://www.linkedin.com/company/techinnovatemobility/"
                rel="nonreferrer noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
            </h2>
            <h2 className=" cursor-pointer smFoo:mt-2">
              <a
                href="https://www.instagram.com/techinnovatemobility/"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                Instagram
              </a>
            </h2>
            <h2 className="cursor-pointer smFoo:mt-2">
              <a
                href="https://www.facebook.com/techinnovatemobility"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                Facebook
              </a>
            </h2>
            <h2 className="cursor-pointer smFoo:mt-2">
              <a
                href="https://twitter.com/techinnovateEV?s=20&t=P-W1h-L01MEg2VRd6COhUA"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                Twitter
              </a>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  )
}
