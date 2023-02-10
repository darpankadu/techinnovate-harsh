import React from "react"
import {Link} from "react-router-dom"

const Content = () => {
  return (
    <div className="bg-bgPrimary overflow-hidden">
      {/* <div className='flex justify-center align-center'>
          <div className='w-[55rem] pt-[8rem] mb-[28.5rem] text-[20px]'>
            <h1 className='text-center text-[50px] mb-[2rem]'>About Us</h1>
            Founded in December 2021, we took our first step toward a healthier, cleaner, and greener future by the incredible team of engineers with evolutionary ideas who wanted to prove that people didn’t need to compromise to drive electric – that electric vehicles can be economic, better, and more fun to drive than IC Engine vehicles. The collective efforts of passionate engineers with their intensive efforts of developing and providing reasonable solutions are responsible for company formation.
          </div>
      </div> */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="images/team.jpeg" />
          </div>
          <div className="lg:flex-grow lg:pl-24 flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left">
            <h1 className="title-font mb-4 text-3xl text-[50px] font-medium text-gray-900 sm:text-4xl">
              About Us
            </h1>
            <p className="mb-8 text-xl leading-relaxed">
              Founded in December 2021, we took our first step toward a
              healthier, cleaner, and greener future by the incredible team of
              engineers with evolutionary ideas who wanted to prove that people
              didn’t need to compromise to drive electric – that electric
              vehicles can be economic, better, and more fun to drive than IC
              Engine vehicles. The collective efforts of passionate engineers
              with their intensive efforts of developing and providing
              reasonable solutions are responsible for company formation.
            </p>
            <div class="flex justify-center">
              <Link to="/contact">
                <button className="inline-flex rounded border-0 bg-black py-2 px-6 text-lg text-white focus:outline-none">
                  Contact Us
                </button>
              </Link>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Content
