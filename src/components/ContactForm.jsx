import React from "react"
import Footer from "./Footer"

const ContactForm = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [mobileno, setMobile] = React.useState("")
  const [subject, setSubject] = React.useState("")
  const [message, setMessage] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {name, email, mobileno, subject, message}
    const response = await fetch("http://localhost:5000/api/form/submit", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
    const json = await response.json()
    if (response.ok) {
      setName("")
      setEmail("")
      setMobile("")
      setSubject("")
      setMessage("")
      console.log("new data added", json)
    }
  }

  return (
    <div className="bg-bgPrimary pt-8 overflow-hidden">
      <div className="relative flex flex-col justify-center overflow-hidden  bg-bgPrimary">
        <div className="lg:max-w-xl m-auto mb-16 mt-1 w-[60%] rounded-md bg-white p-6 shadow-xl ring-2 ring-black nav:w-4/5">
          <h1 className="decoration-none text-center text-3xl font-semibold uppercase text-black underline">
            Contact Form
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label>
                <span className="text-xl text-gray-700">Your name</span>
                <input
                  type="text"
                  value={name}
                  className="
                    mt-2
                    block w-full rounded-md border-gray-300
                    px-8
                    py-2
                    text-[17px]
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    xsm:pl-4
                "
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-4">
              <label>
                <span className="text-xl text-gray-700">Email address</span>
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    mt-2
                    block
                    w-full rounded-md border-gray-300
                    px-8
                    py-2
                    text-[17px]
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    xsm:pl-4
                "
                  placeholder="Enter your email address"
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label>
                <span className="text-xl text-gray-700">Mobile Number</span>
                <input
                  value={mobileno}
                  type="text"
                  onChange={(e) => setMobile(e.target.value)}
                  className="
                    mt-2
                    block
                    w-full rounded-md border-gray-300
                    px-8
                    py-2
                    text-[17px]
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    xsm:pl-4
                "
                  placeholder="Enter your mobile number"
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label>
                <span className="text-xl text-gray-700">Subject</span>
                <input
                  value={subject}
                  type="text"
                  onChange={(e) => setSubject(e.target.value)}
                  className="
                  mt-2
                    block
                    w-full
                    rounded-md border-gray-300 px-8
                    py-2
                    text-[17px]
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    xsm:pl-4
                "
                  placeholder="Enter subject"
                />
              </label>
            </div>
            <div className="mb-4">
              <label>
                <span class="text-xl text-gray-700">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="
                  mt-2
                    block
                    w-full
                    resize-none rounded-md border-gray-300
                    px-8 pb-8
                    pt-4
                    text-[17px]
                    shadow-sm
                    outline-1
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                    xsm:pl-4
                "
                  rows="5"
                  placeholder="Enter your message..."
                ></textarea>
              </label>
            </div>

            <div class="mb-6 mt-4 flex justify-center">
              <button
                type="submit"
                className="
                    focus:shadow-outline
                    h-10
                    rounded-lg
                    bg-[#2e2e2e]
                    px-5
                    text-xl
                    text-white
                    transition-colors
                    duration-500
                    hover:bg-[#5ab0c299]
                    hover:text-black
                "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default ContactForm
