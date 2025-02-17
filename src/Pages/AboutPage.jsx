import React from "react";
import Footer from "../Components/Footer";

function AboutPage() {
  return (
    <>
      <header
        className="lg:h-[60vh] h-[50vh] flex justify-center items-center bg-gray-300"
        style={{ backgroundImage: "url('/img-1.jpg')" }}
      >
        <h1 className="text-[2rem] lg:text-[3.5rem] text-violet-500 font-semibold">
          About Us
        </h1>
      </header>

      <section className="bg-black text-white">
        {/* Section- 1 */}
        <section className="flex lg:flex-row flex-col justify-evenly items-center lg:h-[100vh] py-10 lg:py-0 mx-auto px-10  w-full">
          <div className="left lg:w-[30%]">
            <img src="" alt="No image" />
          </div>
          <div className="right lg:w-[60%]">
            <h2 className="text-md lg:text-lg text-blue-300 font-semibold lg:mb-2">
              Short story
            </h2>
            <h1 className="text-2xl lg:text-[2.5rem] font-semibold lg:mb-7">
              Cyberweep Infotech
            </h1>
            <p className="text-md lg:text-lg mb-5">
              Your security is our prioity
            </p>
            <p className="mb-5">
              Cyberweep infotech our mission is to provide comprehensive
              cybersecurity services that empower our clients to navigate the
              digital realm with confidence. We believe that everyone has the
              right to protect their digital presence and thrive in an
              interconnected world without compromising security. With cyber
              threats constantly evolving, our team of highly skilled
              professionals stays at the forefront of the cybersecurity
              landscape to identify, mitigate, and prevent potential risks to
              our clients' data and online assets. Education and awareness are
              central to our approach, enabling our clients to make informed
              decisions and take proactive measures to safeguard against
              cybercrime.
            </p>
            <p className="mb-5">
              We leverage cutting-edge technologies to strengthen our clients'
              defenses, keeping them one step ahead of potential adversaries.
              Our tailored solutions cater to the unique needs of each client,
              ensuring they receive the highest level of protection against
              ever- evolving cyber threats. Transparency and open communication
              are the foundation of our client relationships, fostering trust
              and collaboration.,
            </p>
            <p>
              we strive to create a safer digital world for all, where everyone
              can thrive without compromising their online security. Join us on
              this journey towards a secure digital future
            </p>
          </div>
        </section>
        <hr className="w-[90%] mx-auto mb-5" />

        {/* section - 2 */}
        <section className="py-8 flex">
          <div className="left lg:w-[50%] lg:my-auto w-full">
            <h1 className="lg:text-[6rem] text-[3.5rem] font-bold  bg-gradient-to-l from-violet-300 via-cyan-200 to-blue-700 bg-clip-text text-transparent whitespace-nowrap text-center">
              Our Mission
            </h1>

            <p className="px-10 mt-10 text-xl mx-auto">
              Our mission is to provide comprehensive cybersecurity services
              that empower our clients to navigate the digital realm with
              confidence
            </p>
          </div>
          <div className="right my-auto"> </div>
        </section>
        {/* <hr className="w-[90%] mx-auto my-5" /> */}

        {/* section - 3 */}
        <section className="flex flex-row-reverse py-8">
          <div className="left lg:w-[50%] lg:my-auto">
            <h1 className="lg:text-[6rem] text-[3.5rem] font-bold px-20 bg-gradient-to-l from-violet-300  via-cyan-200  to-blue-700  bg-clip-text text-transparent">
              Outlook
            </h1>

            <p className="px-10 mt-10 text-xl mx-auto ">
              Our mission is to provide comprehensive cybersecurity services
              that empower our clients to navigate the digital realm with
              confidence
            </p>
          </div>
          <div className="right my-auto"> </div>
        </section>
        <hr className="w-[90%] mx-auto my-5" />

        {/* section - 4 */}
        <section>
          <h1 className="lg:text-[4.5rem] text-[2.5rem] ml-5 font-semibold">
            What we{" "}
            <span className="bg-gradient-to-l from-violet-300  via-cyan-200  to-blue-700  bg-clip-text text-transparent">
              {" "}
              covered
            </span>{" "}
            :{" "}
          </h1>
          <div className="">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>


          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
  {/* Large Card - 1 */}
  <div className="lg:col-span-3 bg-[#1A0B30] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
    <img src="shield-icon.png" alt="Data Privacy" className="w-16 h-16 mb-4" />
    <h3 className="text-white text-xl font-semibold">Data Privacy and Protection</h3>
    <p className="text-gray-400 mt-2">
      Learn how to protect your personal data and sensitive information from breaches and unauthorized access.
    </p>
  </div>

  {/* Medium Card - 2 */}
  <div className="bg-[#0F0F1A]  rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
    <img src="target-icon.png" alt="Cybersecurity Best Practices" className="w-16 h-16 mb-4" />
    <h3 className="text-white text-xl font-semibold">Cybersecurity Best Practices</h3>
    <p className="text-gray-400 mt-2">
      Get practical tips and strategies to enhance your online security posture, both at home and in the workplace.
    </p>
  </div>

  {/* Large Card - 3 */}
  <div className="lg:row-span-2 lg:col-span-2 bg-[#191138] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
    <img src="news-icon.png" alt="Industry News" className="w-16 h-16 mb-4" />
    <h3 className="text-white text-xl font-semibold">Industry News and Trends</h3>
    <p className="text-gray-400 mt-2">
      Stay up-to-date with the latest developments, trends, and advancements in cybersecurity.
    </p>
  </div>

  {/* Small Card - 4 */}
  <div className="bg-[#1E193C] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
    <img src="business-icon.png" alt="Cybersecurity for Businesses" className="w-16 h-16 mb-4" />
    <h3 className="text-white text-xl font-semibold">Cybersecurity for Businesses</h3>
    <p className="text-gray-400 mt-2">
      Discover how to implement robust cybersecurity measures to safeguard your company’s data.
    </p>
  </div>

  {/* Small Card - 5 */}
  <div className="bg-[#130C24] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
    <img src="threat-icon.png" alt="Cyber Threats" className="w-16 h-16 mb-4" />
    <h3 className="text-white text-xl font-semibold">Cyber Threats and Attacks</h3>
    <p className="text-gray-400 mt-2">
      Stay informed about the latest cyber threats, malware, phishing, and other malicious activities.
    </p>
  </div>
</section>



<section className="relative bg-black text-white py-32 text-center">
      {/* Title & Description */}
      <h2 className="text-4xl font-bold">Meet our team</h2>
      <p className="text-gray-400 max-w-xl mx-auto mt-2">
        Clarity gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS.
      </p>

      {/* Team Members with Curved Background */}
      <div className="relative mt-16">
        <div className="absolute inset-x-0 bottom-0 h-48 clip-team"></div>

        <div className="relative flex justify-center gap-6">
          {/* Team Member 1 */}
          <div className="relative w-32 h-32 -top-10">
            <div className="absolute w-full h-full bg-violet-600 rounded-full"></div>
            <img src="" alt="Team Member" className="absolute w-full h-full object-cover rounded-full border-4 border-black"/>
          </div>

          {/* Team Member 2 */}
          <div className="relative w-32 h-32 ">
            <div className="absolute w-full h-full bg-purple-600 rounded-full"></div>
            <img src="" alt="Team Member" className="absolute w-full h-full object-cover rounded-full border-4 border-black"/>
          </div>

          {/* CEO in Center */}
          <div className="relative w-40 h-40 z-10 top-10">
            <div className="absolute w-full h-full bg-yellow-500 rounded-full"></div>
            <img src="" alt="CEO" className="absolute w-full h-full object-cover rounded-full border-4 border-black"/>
          </div>

          {/* Team Member 4 */}
          <div className="relative w-32 h-32">
            <div className="absolute w-full h-full bg-purple-600 rounded-full"></div>
            <img src="" alt="Team Member" className="absolute w-full h-full object-cover rounded-full border-4 border-black"/>
          </div>

          {/* Team Member 5 */}
          <div className="relative w-32 h-32 -top-10">
            <div className="absolute w-full h-full bg-violet-600 rounded-full"></div>
            <img src="" alt="Team Member" className="absolute w-full h-full object-cover rounded-full border-4 border-black"/>
          </div>
        </div>
      </div>
    </section>


        </section>
      </section>


     < Footer className="h-[30%]"/>
    </>
  );
}

export default AboutPage;