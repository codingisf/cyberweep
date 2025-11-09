import React, { lazy, useState } from "react";
import Footer from "../Components/Footer";
import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";
function ContactusPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <header
        className="lg:h-[60vh] h-[50vh] flex justify-center items-center bg-gray-300"
        style={{ backgroundImage: "url('/img-1.jpg')" }}
        loading={lazy}
      >
        <h1 className="text-[2rem] lg:text-[3.5rem] text-violet-500 font-semibold">
          Contact Us
        </h1>
      </header>

      <div className="bg-black relative w-full min-h-[100vh]  flex flex-col justify-center p-8">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 relative">
          {/* Left Side */}
          <div
            className="bg-gray-900 p-8 mt-10 rounded-lg"
            style={{
              clipPath:
                "polygon(0 0, 86% 0, 100% 13%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0% 20%)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Connect with us today!
            </h2>
            <p className="text-gray-400 mb-6 text-center">
              We'd love to hear from you. Please fill out this form.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-white">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="Ex: Jhon"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white w-full p-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-white">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white w-full p-2 rounded"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-white">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white w-full p-2 rounded"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-white">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white w-full p-2 rounded"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white w-full p-2 rounded"
                  rows={4}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <label
                  htmlFor="agree"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                >
                  You agree to our friendly privacy policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center self-start text-center space-y-6 mx-auto mt-10 ">
            <div className="flex flex-col gap-2 mx-auto items-center">
              <h1 className="text-4xl py-5 font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
                Get in touch
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <button className="w-[90px] h-[90px] outline-none border-none bg-white rounded-[90px_5px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#cc39a4] group flex items-center justify-center">
                    <svg
                      className="mt-6 ml-5 fill-[#cc39a4] group-hover:fill-white"
                      height="30"
                      width="30"
                      viewBox="0,0,256,256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="none">
                        <g transform="scale(8,8)">
                          <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>

                  <button className="w-[90px] h-[90px] outline-none border-none bg-white rounded-[5px_90px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#03A9F4] group flex items-center justify-center">
                    <svg
                      className="mt-6 -ml-4 fill-[#03A9F4] group-hover:fill-white"
                      height="30"
                      width="30"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                    </svg>
                  </button>
                </div>

                <div className="flex flex-row gap-2">
                  <button className="w-[90px] h-[90px] outline-none border-none bg-white rounded-[5px_5px_5px_90px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-black group flex items-center justify-center">
                    <svg
                      className="mt-[-0.375rem] ml-5 fill-black group-hover:fill-white"
                      height="30"
                      width="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </button>

                  <button className="w-[90px] h-[90px] outline-none border-none bg-white rounded-[5px_5px_90px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#8c9eff] group flex items-center justify-center">
                    <svg
                      className="mt-[-0.563rem] -ml-5 fill-[#8c9eff] group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="30"
                      height="30"
                    >
                      <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 mx-auto">
              <div className="flex align-center space-y-2 mt-8 mx-auto">
                <PhoneIcon className="h-6 w-6 my-2 text-blue-300" />
                <a
                  href="tel:+91 8220852483"
                  className="text-white hover:underline text-center"
                >
                  +91 8220852483
                </a>
              </div>

              {/* Mail Icon with Anchor Tag */}
              <div className="flex  space-y-2 w-full gap-2 align-middle">
                <EnvelopeIcon className="h-6 w-6 my-2 text-white" />
                <a
                  href="mailto:securehutz@gmail.com"
                  className="text-white hover:underline"
                >
                  securehutz@gmail.com
                </a>
              </div>
            </div>
            {/* Location Icon */}
            <div className="flex items-center text-white ">
              <MapIcon className="h-6 w-6 my-2 text-white" />
              <span>thottiyam , Trichy , 621215.</span>
            </div>

            <div className="text-white gap-3">
              <p>Working Hours - 9am to 5pm</p>
              <p>Saturday - sunday holidays</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.679292743318!2d78.33146407504483!3d10.987561989174315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU5JzE1LjIiTiA3OMKwMjAnMDIuNSJF!5e0!3m2!1sen!2sin!4v1762702730671!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactusPage;
