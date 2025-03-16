import React, { lazy } from "react";
import Footer from "../Components/Footer";
import { Carousel } from "@material-tailwind/react";

const muzamil = "/muzamil.jpg";
const shek = "/shek.jpg";

const vector = "/Vector.png";
const virus = "/virus.png";
const web = "/web-analysis.png";
const dicon = "/3dicons.png";
const news = "/news.png";

const about = "/about-1.png";
const security = "/secutity.png";

const aboutdetails = [
  {
    name: "Mohammed Muzamil",
    role: "Founder & CEO | Cybersecurity Expert",
    about:
      "As the founder and CEO of Cyberweek, I’ve always been driven by a passion for technology and a vision for a secure digital future. With 4 years of experience in cybersecurity, networking, Linux, and prompt engineering, I’ve built a career on solving complex problems and creating innovative solutions.My journey began with a deep curiosity for how systems work—from securing networks to optimizing Linux servers and leveraging AI-driven prompt engineering to streamline workflows..",
    Img:  muzamil ,
  },
  {
    name: "Balaji",
    role: "Full-Stack Developer | API Architect",
    about:
      "Balaji is the wizard behind our code. Specializing in React, Node.js, and Python, he builds apps that are as secure as they are scalable. From crafting bulletproof APIs to optimizing database performance, he’s obsessed with clean, efficient code. Fun fact: Balaji once automated his entire morning routine—from brewing coffee to checking server logs—using a custom Python script. Talk about work-life balance!",
    Img: "",
  },
  {
    name: "Mohamed Sheik",
    role: "UI/UX Designer | Creative Visionary",
    about:
      "Shek turns complexity into clarity. With a background in psychology and a knack for pixel-perfect designs, he creates interfaces that users love—without compromising security.His work has been featured in DSEC and praised for blending aesthetics with functionality . When he’s not sketching wireframes, shek hosts workshops on design thinking and mentors aspiring creatives.",

    Img:  shek ,
  },
];

const AboutStaffCards = ({ name, role, about, Img }) => (
  <div className="bg-white/10 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl backdrop-blur-lg border border-white/20 p-6 lg:min-w-[70%] max-w-[90%] lg:h-[90%] self-center py-auto my-10 flex flex-col lg:flex-row gap-4 mx-auto text-start">
    <div className="lg:w-[40%]">
      <div className="lg:max-w-[45%] lg:max-h-[80%] bg-violet-800 rounded-s-full rounded-tr-full mx-auto overflow-hidden">
        <img
          src={Img}
          alt="CEO"
          className="w-full h-full object-cover"
          loading={lazy}
        />
      </div>
    </div>
    <div className="lg:w-[50%] my-auto">
      <h3 className="text-xl font-semibold text-white mb-4">
        {name} – {role}
      </h3>
      <p className="text-white">{about}</p>
    </div>
  </div>
);

function AboutPage() {
  return (
    <>
      <header
        className="lg:h-[60vh] h-[50vh] flex justify-center items-center bg-gray-300"
        style={{ backgroundImage: "url('/img-1.jpg')" }}
        loading={lazy}
      >
        <h1 className="text-[2rem] lg:text-[3.5rem] text-violet-500 font-semibold">
          About Us
        </h1>
      </header>

      <section className="bg-black text-white">
        {/* Section- 1 */}
        <section className="flex lg:flex-row flex-col justify-evenly items-center lg:h-[100vh] py-10 lg:py-0 mx-auto px-10  w-full">
          <div className="left lg:w-[30%]">
            <img src="" alt="" srcset="" />
          </div>
          <div className="right lg:w-[60%]">
            <h2 className="text-md lg:text-lg text-blue-300 font-semibold lg:mb-2">
              Our Story
            </h2>
            <h1 className="text-2xl lg:text-[2.5rem] font-semibold lg:mb-7">
              Cyberweep Infotech
            </h1>
            <p className="text-md lg:text-lg mb-5">
              Your security is our prioity
            </p>
            <p className="mb-5">
              At Cyberweek, we believe in a safer, smarter digital future. Our
              journey began in 2025 with a simple yet powerful vision: to
              empower individuals and businesses with the tools and knowledge
              they need to thrive in an increasingly connected world.As cyber
              threats grew more sophisticated, we saw a gap—between the need for
              robust security and the lack of accessible, practical training.
              That’s why we launched our cybersecurity training programs,
              equipping everyone from beginners to seasoned professionals with
              the skills to defend against evolving threats.
            </p>
            <p className="mb-5">
              But we didn’t stop there. Recognizing the importance of secure,
              user-friendly digital experiences, we expanded into web
              development. Today, we craft websites and applications that are
              not only visually stunning but also built with security at their
              core. What sets us apart? It’s our commitment to innovation, our
              team of certified experts, and our passion for making a
              difference. Whether you’re looking to upskill your team, build a
              secure app, or protect your business from cyber threats, we’re
              here to help you every step of the way.
            </p>
            <p>
              Join us in building a future where technology is both powerful and
              safe. Let’s create something extraordinary together.
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
              We empower individuals and businesses with cutting-edge
              cybersecurity training, innovative web development, and intuitive
              UI/UX design, helping them thrive in a digital-first world.
            </p>
          </div>
          <div className="right my-auto w-[50%]">
          <img src={about} alt="No image" className="w-[50%] mx-auto"/>
             </div>
        </section>
        {/* <hr className="w-[90%] mx-auto my-5" /> */}

        {/* section - 3 */}
        <section className="flex flex-row-reverse py-8">
          <div className="left lg:w-[50%] lg:my-auto w-full">
            <h1 className="lg:text-[6rem] text-[3.5rem] font-bold px-20 bg-gradient-to-l from-violet-300  via-cyan-200  to-blue-700 whitespace-nowrap  bg-clip-text text-transparent">
              Our Vision
            </h1>

            <p className="px-10 mt-10 text-xl mx-auto">
              Vision To shape the future of technology by creating secure,
              user-friendly digital experiences and fostering a community of
              skilled professionals ready to tackle tomorrow's challenges
            </p>
          </div>
          <div className="right my-auto w-[50%]">
          <img src={security} alt="No image" className="w-[50%] mx-auto"/>
             </div>
        </section>

<section className="flex flex-row py-8">
        <div className="left lg:w-[50%] lg:my-auto w-full">
          <h1 className="lg:text-[6rem] text-[3.5rem] font-bold  bg-gradient-to-l from-violet-300 via-cyan-200 to-blue-700 bg-clip-text text-transparent whitespace-nowrap text-center">
            Outlook
          </h1>

          <p className="px-10 mt-10 text-xl mx-auto">
            We’re dedicated to staying ahead of technological trends, offering
            innovative solutions that enhance security and user experience, and
            helping clients succeed in an ever-evolving digital landscape.
          </p>
        </div>
        <div className="right my-auto w-[50%]">
          <img src={about} alt="No image" className="w-[50%] mx-auto"/>
             </div>
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

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
            {/* Large Card - 1 */}
            <div className="lg:col-span-3 bg-[#1A0B30] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
              <img
                src={vector}
                alt="Data Privacy"
                className="w-36 h-36 mb-4"
              />
              <h3 className="text-white text-xl font-semibold">
                1. Cybersecurity Training 🚀
              </h3>
              <p className="text-gray-400 mt-2">
                Master ethical hacking and penetration testing with hands-on,
                real-world training. Build the skills to tackle modern
                cybersecurity challenges.
              </p>
            </div>

            {/* Medium Card - 2 */}
            <div className="bg-[#0F0F1A]  rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
              <img
                src={dicon}
                alt="Cybersecurity Best Practices"
                className="w-36 h-36 mb-4"
              />
              <h3 className="text-white text-xl font-semibold">
                2. Web Development 🕸️
              </h3>
              <p className="text-gray-400 mt-2">
                We create responsive, secure websites tailored to your needs.
                Empower your business with fast, scalable online solutions.
              </p>
            </div>

            {/* Large Card - 3 */}
            <div className="lg:row-span-2 lg:col-span-2 bg-[#191138] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
              <img
                src={news}
                alt="Industry News"
                className="w-28 h-28 mb-4"
              />
              <h3 className="text-white text-xl font-semibold">
                3. UI/UX Design 🖌️
              </h3>
              <p className="text-gray-400 mt-2">
                Designing intuitive, user-friendly interfaces that enhance
                interaction and engagement. We focus on seamless, visually
                appealing user experiences.
              </p>
            </div>

            {/* Small Card - 4 */}
            <div className="lg:row-span-2 lg:col-span-1 bg-[#1E193C] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
              <img
                src={web}
                alt="Cybersecurity for Businesses"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-white text-xl font-semibold">
                4. Consulting Services 🎧
              </h3>
              <p className="text-gray-400 mt-2">
                Expert consulting to optimize your cybersecurity strategy and
                digital presence. Get actionable insights to protect and grow
                your business.
              </p>
            </div>

            {/* Small Card - 5 */}
            <div className="lg:row-span-2 lg:col-span-1 bg-[#130C24] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3">
              <img
                src={virus}
                alt="Cyber Threats"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-white text-xl font-semibold">
                5. Career Mentorship 🗞️
              </h3>
              <p className="text-gray-400 mt-2">
                Personalized mentorship to guide your career in cybersecurity
                and tech. Receive job placement assistance and career
                development support.
              </p>
            </div>
          </section>

          <section className="relative bg-black text-white py-32 text-center">
            {/* Title & Description */}
            <h2 className="text-4xl font-bold">Meet our team</h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-2">
              Clarity gives you the blocks & components you need to create a
              truly professional website, landing page, or admin panel for your
              SaaS.
            </p>
            {/* Team Members with Curved Background */}
            <div className="mx-auto px-4 w-[95%]">
              <div className="flex justify-center items-center">
                <Carousel className="w-full py-10" autoplay={true} loop={true}>
                  {aboutdetails.map((staff, index) => (
                    <AboutStaffCards key={index} {...staff} />
                  ))}
                </Carousel>
              </div>
            </div>
          </section>
        </section>
      </section>

      <Footer className="h-[30%]" />
    </>
  );
}

export default AboutPage;
