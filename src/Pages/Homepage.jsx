import Footer from "../Components/Footer";


const muzamil = "/muzamil.jpg";
export const explore_project = "/explore-project.png";
const bulb = "/bulb.png";
const group = "/Group.png";
const money = "/money.png";


function Homepage() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-cover bg-fixed bg-center text-white bg-black max-w-[100vw]">
        {/* Section - 1 */}
        <section
          className="relative w-full h-[100vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/img-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="flex items-center flex-col-reverse lg:flex-row h-full mx-auto ">
            <div className="relative z-10 flex flex-col items-start px-2 justify-center h-full text-center text-white w-[60%] mx-10">
              <h1 className="text-2xl md:text-3xl font-bold select-none">
                Secure Your Future with Cutting-Edge Solutions
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Expert Cybersecurity Solutions & Bespoke Web/App Development for
                Businesses Ready to Thrive.
              </p>
              <div className="relative group mt-8 ">
                <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
                  <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

                  <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
                    <button
                      name="text"
                      className="input font-semibold text-lg h-full opacity-90 w-full px-4 py-3 rounded-xl bg-black"
                    >
                      Free Consultation
                    </button>
                  </div>
                  <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"></div>
                </div>
              </div>
            </div>
            <div className="w-[30%]">
              <img
                src="/img.jpg"
                alt="cyber-security-solutions web-development full-stack"
                className="w-full h-full object-cover bg-slate-300 "
              />
            </div>
          </div>
        </section>

        {/* section - 2 */}
        <section className="relative lg:h-[88vh] bg-cover bg-center">
          <h1 className="py-5 px-auto text-center lg:text-3xl text-xl bg-violet-800">
            In a connected world ,{" "}
            <span className="text-blue-400 max-w-[100vw]">
              SECURITY IS OUR SHIELD.
            </span>
          </h1>
          <section className="pl-10 w-full pt-5">
            <span className="text-blue-400 lg:text-xl text-md font-bold">
              About Securehutz
            </span>
          
            <h1 className="lg:text-3xl text-xl mt-5 font-semibold">
              Securehutz Technologies
            </h1>
            <p className="text-md lg:text-xl">
              It's a Cybersecurity & Web/Application Development Company
            </p>
          </section>
          <section className="lg:flex justify-between items-start mx-auto mt-20 w-[90%] h-full">
            <div className="lg:w-[40%]"></div>
            <div className="lg:w-[50%]">
              <p>
                At SecureHutz, our mission is to create a safer digital world
                for businesses of every size. We believe that security and
                innovation go hand in hand — that every website, application,
                and digital product should be built on a foundation of trust.
                Our team is driven by the vision of empowering organizations to
                grow without fear, knowing their digital assets are protected by
                experts who care.
              </p>
              <p className="mt-10">
                Combining deep expertise in cybersecurity and modern web
                development, SecureHutz delivers solutions that are both secure
                and scalable. From identifying vulnerabilities to developing
                resilient systems, we ensure that every client we serve moves
                forward with confidence in an ever-evolving digital landscape.
              </p>
            </div>
          </section>
        </section>

        {/* section - 3 */}
        <section className="relative lg:h-[88vh] bg-cover bg-center">
          <h1 className=" lg:text-4xl text-xl font-semibold mt-10 pl-10 bg-violet-800 py-5">
            Our Services
          </h1>

          {/* card Container */}
          <section className="py-14 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 w-[95%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card - 1 */}
                <div className="bg-white/10 relative shadow-xl rounded-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6">
                    {/* Circular Icon */}
                    <div className="mb-4 absolute -top-5 -right-5 rounded-full w-20 h-20 bg-black outline outline-4 outline-violet-800 z-10">
                      <img
                        src={bulb}
                        alt="cyber-security-solutions web-development full-stack"
                        className="w-full h-full object-cover rounded-full p-4"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Web Application Penetration <br /> Testing
                    </h3>
                    <p className="text-white/80 text-justify">
                      Our penetration testing services are designed to uncover
                      security vulnerabilities before attackers do. SecureHutz’s
                      certified experts perform in-depth assessments using
                      industry-standard methodologies such as OWASP, simulating
                      real-world attacks to evaluate your web application’s
                      resilience. We deliver detailed, actionable reports that
                      help you strengthen your defenses and ensure compliance
                      with global security standards.
                    </p>
                  </div>
                </div>

                {/* Card - 2 */}
                <div className="relative bg-white/10 shadow-xl rounded-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6">
                    {/* Circular Icon */}
                    <div className="mb-4 absolute -top-5 -right-5 rounded-full w-20 h-20 bg-black outline outline-4 outline-violet-800 z-10">
                      <img
                        src={group}
                        alt="cyber-security-solutions web-development full-stack"
                        className="w-full h-full object-cover rounded-full p-4"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Vulnerability Assessment and Remediation
                    </h3>
                    <p className="text-white/80 text-justify">
                      We don’t just find vulnerabilities — we help you fix them.
                      SecureHutz provides comprehensive vulnerability
                      assessments across your applications and infrastructure,
                      identifying risks that could compromise your data or
                      operations. Our remediation support guides your team
                      through prioritizing and patching issues effectively,
                      turning potential weaknesses into long-term security
                      improvements.
                    </p>
                  </div>
                </div>

                {/* Card - 3 */}
                <div className="bg-white/10 relative shadow-xl rounded-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6">
                    {/* Circular Icon */}
                    <div className="mb-4 absolute -top-5 -right-5 rounded-full w-20 h-20 bg-black outline outline-4 outline-violet-800 z-10">
                      <img
                        src={money}
                        alt="cyber-security-solutions web-development full-stack"
                        className="w-full h-full object-cover rounded-full p-4"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Secure Web Development <br /> (Front-End & Back-End)
                    </h3>
                    <p className="text-white/80 text-justify">
                      Security starts at the code level. Our web development
                      team builds high-performing, scalable websites and
                      applications with security woven into every line of code.
                      From frontend interfaces to backend systems, we apply
                      secure coding practices, modern frameworks, and rigorous
                      testing to ensure your product is fast, functional, and
                      fortified against threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* section - 4 */}
        {/* <section className="relative lg:h-[88dvh] bg-cover bg-center">
          <div className="container flex justify-evenly items-center h-full lg:px-10 px-5 mx-auto my-5 ">
            <div className="relative lg:h-[57%] bg-violet-900 flex lg:flex-row rounded-lg flex-col justify-between mx-auto items-center w-full p-0 ">
              <section className="">
                <h1 className="absolute left-10 text-lg lg:-mt-7 mt-5">
                  Meet Our <span className="text-blue-500">Instructor</span>
                </h1>
                <div className="lg:max-w-[35%] lg:max-h-[35%] max-w-[50%] max-h-[50%] mx-auto  relative lg:mt-0 mt-20">
                  <img
                    src={muzamil}
                    alt=""
                    srcset=""
                    className="overflow-hidden rounded-lg"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full outline outline-8 outline-violet-900"></div>
                </div>
              </section>
              <section className="lg:w-[60%] w-[85%] mt-20 lg:mt-0 ">
                <h1 className="mb-6 text-2xl">
                  Hi,
                  <span className="font-semibold ">I'm Mohammed Muzamil,</span>
                  your instructor.
                </h1>
                <p>
                  As a dedicated cybersecurity mentor, I am committed to
                  equipping aspiring professionals with the skills and knowledge
                  needed to excel in the ever-evolving digital landscape. With
                  expertise in penetration testing, vulnerability analysis, and
                  ethical hacking, I provide hands-on training that bridges the
                  gap between theoretical concepts and real-world cybersecurity
                  challenges. My mission is to empower learners with
                  industry-relevant techniques, best practices, and cutting-edge
                  tools, ensuring they are prepared to defend against modern
                  cyber threats. Join me on this journey to master cybersecurity
                  and build a secure digital future!
                </p>

                <h1 className="text-blue-600 pb-5 rounded hover:cursor-pointer text-2xl underline w-full mt-5">
                  Founder & CEO of Securehutz
                </h1>
              </section>
            </div>
          </div>
        </section> */}

        {/* section -5 */}
        <section className="relative lg:h-[88vh] bg-cover bg-center">
          <h1 className=" lg:text-4xl text-xl font-semibold mt-10 pl-10 bg-violet-800 py-5">
            Why choose Securehutz ?
          </h1>

          {/* card Container */}
          <section className="py-14 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 w-[95%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card - 1 */}
                <div className="bg-white/10 relative shadow-xl rounded-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Expertise You Can Trust
                    </h3>
                    <p className="text-white/80 text-justify">
                      Our team of certified cybersecurity professionals and
                      experienced developers ensures every solution is backed by
                      deep technical knowledge and industry best practices.
                    </p>
                  </div>
                </div>

                {/* Card - 2 */}
                <div className="relative bg-white/10 shadow-xl rounded-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      End-to-End Security
                    </h3>
                    <p className="text-white/80 text-justify">
                      From identifying vulnerabilities to building secure web
                      applications, SecureHutz provides comprehensive protection
                      for your digital assets.
                    </p>
                  </div>
                </div>

                {/* Card - 3 */}
                <div className="bg-white/10 relative shadow-xl rounded-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Client-Focused Approach
                    </h3>
                    <p className="text-white/80 text-justify">
                      We prioritize understanding your unique needs, delivering
                      tailored solutions that align with your business goals and
                      growth strategy.
                    </p>
                  </div>
                </div>
                {/* Card - 4 */}
                <div className="bg-white/10 relative shadow-xl rounded-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Proactive Innovation
                    </h3>
                    <p className="text-white/80 text-justify">
                      We stay ahead of emerging threats and technology trends,
                      ensuring your systems remain secure and future-ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <p className="text-center lg:text-2xl text-lg">
          Your business deserves a secure and reliable digital presence.Schedule Your Free Security Consultation Today
        </p>
        <div className="relative group mt-8 flex justify-center">
          <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
            <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

            <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
              <button
                name="text"
                className="input font-semibold text-lg h-full opacity-90 w-full px-4 py-3 rounded-xl bg-black"
              >
                Contact Our Team
              </button>
            </div>
            <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"></div>
          </div>
        </div>

        {/* section - 6 */}
        

        {/* section - 7 */}
        <section className="relative h-[40vh] px-10 my-10">
          <div className="min-h-52 bg-violet-800 mx-auto rounded-[3rem] p-10 flex flex-col justify-evenly">
            <div className="flex lg:flex-row flex-col justify-evenly w-full">
              <div className="left lg:w-[70%] my-auto">
                <h1 className="text-xl lg:text-4xl font-semibold text-white">
                  Ready To dive into our top-notch Projects ?
                </h1>
              </div>
              <div className="flex justify-center w-[20%] my-auto mx-auto mt-2 gap-5">
                <img src={explore_project} alt="" className="w-24 h-24" />
              </div>
            </div>
            <div className="mx-auto">
              <button className="max-w-22 px-6 py-3 font-bold rounded-2xl text-violet-800 bg-white hover:rounded-none transition-all">
                Explore projects
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
