import Footer from "../Components/Footer";
import { Carousel } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";


const testimonials = [
  {
    name: "Vishnu Prasath",
    role: "Computer Science Student",
    text: "This course was exceptionally well-structured, covering both fundamental and advanced topics with a strong practical focus. The mentor demonstrated deep expertise, providing clear explanations and real-world applications that enhanced my understanding. Hands-on labs, live demonstrations, and case studies made complex concepts easier to grasp. The course not only strengthened my technical skills but also emphasized ethical responsibility in cybersecurity practices. I highly recommend this course to anyone looking to advance their skills in ethical hacking and security.",
  },
  {
    name: "Agalya K.",
    role: "Cyber Security Student",
    text: "I sincerely appreciate the effort and dedication you put into mentoring.Your patience,encouragement,and real -world insights have helped me develop a deeper understanding and confidence in my skills.your guidence has not only improved my knowledge but also inspired me to keep learning and growing.Thank you for your unwavering support and dedication.The instructor’s expertise and personalized approach made complex topics more digestible. I now feel confident about my skills in ethical hacking and ready for internships and future job opportunities!",
  },
  {
    name: "Vincent Durai M.",
    role: "Artificial Intelligence And Machine Learning Major",
    text: "I personally got addicted in cyber security because of my mentor's training session .The training sessions were extremely informative, covering everything from vulnerability analysis to advanced cybersecurity techniques. The mentor’s expertise and personalized approach made complex topics more digestible. I now feel confident about my skills in ethical hacking and ready for internships and future job opportunities.I wish that i could learn more informations about cyber security from you and thankyou for guiding me and for keeping me as a part in your team.I will try my level best!",
  },
  {
    name: "Kavitha.B",
    role: "Cybersecurity Major",
    text: "The cybersecurity course was highly informative and well-structured, covering essential topics such as ethical hacking, encryption, and . The practical hands-on sessions provided a clear understanding of real-world cybersecurity challenges and solutions. A special mention to the mentor, whose expertise and guidance made the learning experience even more enriching. Their ability to simplify complex concepts, provide real-life examples, and engage students through interactive sessions was remarkable. The mentor’s dedication, continuous support, and encouragement helped build both knowledge and confidence in cybersecurity. Overall, this course has significantly enhanced my understanding of cybersecurity principles and tools, preparing me to tackle future challenges in this field",
  },
  {
    name: "Kavya Dharshini. R.U",
    role: "cyber security major",
    text: "I found this course to be an excellent supplement to my academic studies.This course challenged me to think critically and creatively about cybersecurity. The mentor's emphasis on problem-solving and critical thinking was invaluable.This course helped me develop practical skills that I can apply directly to my future career. The labs on network security and intrusion detection were particularly relevant to my interests.The instructor's industry connections and career guidance were also very helpful. I highly recommend this course to any cybersecurity student looking to gain a competitive edge.",
  },
  {
    name: "Chidhu.T",
    role: "Cyber security Student",
    text: "I started this program with little knowledge of cybersecurity, but now I feel confident in my skills. The structured curriculum, industry insights, and career advice have prepared me to take on the real-world challenges of IT security. This course has been a game-changer for my academic and career goals!.Best Learning Experience – I gained a strong grasp of ethical hacking techniques through this course. The real-world examples, interactive labs, and mentor’s clear explanations made it one of the most valuable learning experiences I’ve had in cybersecurity.",
  },
];

const TestimonialCard = ({ name, role, text }) => (
  <div className="bg-white/10 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl backdrop-blur-lg border border-white/20 p-6 lg:max-w-[70%] max-w-[80%] self-center py-auto my-auto">
    <h3 className="text-xl font-semibold text-white mb-4">
      {name} – {role}
    </h3>
    <p className="text-white">{text}</p>
    <div className="flex mt-1">
    <StarIcon className="w-6 h-6 text-yellow-500" />
    <StarIcon className="w-6 h-6 text-yellow-500" />
    <StarIcon className="w-6 h-6 text-yellow-500" />
    <StarIcon className="w-6 h-6 text-yellow-500" />
    <StarIcon className="w-6 h-6 text-yellow-500" />
    
    </div>
  </div>
);

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
              <div className="relative group mt-8">
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
            <span className="text-blue-400 lg:text-lg text-md font-bold">
              About Company
            </span>
            <h1 className="lg:text-3xl text-xl font-semibold">
              Cyberweep Infotech
            </h1>
            <p className="text-md lg:text-xl">
              It's a Cybersecurity Training & Web/Application Development
              Company
            </p>
          </section>
          <section className="lg:flex justify-between items-start mx-auto mt-20 w-[90%] h-full">
            <div className="lg:w-[40%]"></div>
            <div className="lg:w-[50%]">
              <p>
                At cyberweep Infotech, we are committed to empowering
                individuals and businesses through expert-led cybersecurity
                training, alongside web development and UI/UX design solutions.
                In today’s digital age, security is not just an option—it’s a
                necessity. Our training programs are designed to equip aspiring
                professionals and organizations with the knowledge and skills
                needed to defend against cyber threats, mitigate risks, and stay
                ahead in the evolving security landscape.
              </p>
              <p className="mt-10">
                Beyond training, we specialize in building secure,
                high-performance web applications and crafting user-centric
                UI/UX designs that enhance digital experiences. Whether you’re
                looking to upskill in cybersecurity, create a robust online
                presence, or develop intuitive digital solutions, cyberweep
                Infotech is here to help you navigate the future of technology
                with confidence.
              </p>
              <button>Free Consultation</button>
            </div>
          </section>
        </section>

        {/* section - 3 */}
        <section className="relative lg:h-[88vh] bg-cover bg-center">
          <h1 className=" lg:text-xl text-lg font-semibold mt-10 pl-10 bg-violet-800">
            Why choose us ?
          </h1>
          <p className="lg:text-4xl py-2 text-xl font-semibold pl-10 bg-violet-800">
            Exclusive offers Await
          </p>

          {/* card Container */}
          <section className="py-14 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 w-[95%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card - 1 */}
                <div className="bg-white/10 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6">
                    <img
                      src=""
                      alt="cyber-security-solutions web-development full-stack"
                      className="mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white mb-4">
                      🚀 Cutting-Edge Cybersecurity Training
                    </h3>
                    <p className="text-white/80">
                      Stay ahead of cyber threats with our industry-leading
                      cybersecurity training. We offer hands-on, real-world
                      simulations designed by experts to equip you with the
                      latest tools and techniques. Whether you're a beginner or
                      a seasoned professional, our structured learning paths
                      will help you gain in-demand skills and certifications.
                    </p>
                  </div>
                </div>

                {/* Card - 2 (with Top-right slope) */}
                <div className="relative bg-white/10 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6 relative">
                    <img
                      src=""
                      alt="cyber-security-solutions web-development full-stack"
                      className="mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white mb-4">
                      🎯 Expert-Led Web Development & UI/UX Design
                    </h3>
                    <p className="text-white/80">
                      Learn from the best in web development and UI/UX design.
                      Our courses focus on practical, project-based learning to
                      help you master front-end and back-end technologies. With
                      guidance from industry experts, you’ll build visually
                      stunning and high-performing websites that stand out in
                      the digital world.
                    </p>
                  </div>
                </div>

                {/* Card - 3 */}
                <div className="bg-white/10 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20">
                  <div className="p-6">
                    <img
                      src=""
                      alt="cyber-security-solutions web-development full-stack"
                      className="mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white mb-4">
                      🔥 Career-Focused Learning & Growth
                    </h3>
                    <p className="text-white/80">
                      We don’t just train you—we prepare you for success! Our
                      programs are designed with a career-oriented approach,
                      offering mentorship, real-world projects, and placement
                      support. Whether you're looking to upskill or launch a new
                      career, we provide the right resources to help you
                      achieve your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* section - 4 */}
        <section className="relative lg:h-[88dvh] bg-cover bg-center">
          <div className="container flex justify-evenly items-center h-full px-10 mx-auto ">
            <div className="relative lg:h-[50%] bg-violet-900 flex lg:flex-row rounded-lg lg:px-10  flex-col justify-between mx-auto items-center w-full">
              <h1 className="absolute left-10 top-5 text-lg">
                Meet Our <span className="text-blue-500">Mentor</span>
              </h1>
              <section></section>
              <section className="w-[60%] mt-20 lg:mt-0">
                <h1 className="mb-6">
                  Hi,
                  <span className="font-semibold text-lg">
                    I'm Mohammed Muzamil,
                  </span>
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

                <h1 className="text-black pb-5 rounded hover:cursor-pointer text-2xl underline w-full mt-5">
                  Founder & CEO of Cyberweep
                </h1>
              </section>
            </div>
          </div>
        </section>

        {/* section - 5 */}
        <section className="relative lg:h-[88vh] bg-cover bg-center">
          <section className="bg-violet-800">
            <h1 className=" lg:text-xl text-lg font-semibold mt-10 pl-10">
              Our customers
            </h1>
            <p className="lg:text-4xl text-xl font-semibold pl-10 pb-3">
              Testimonials
            </p>
          </section>

          {/* card Container */}

          <section className="py-14 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 w-[95%]">
              <div className="flex justify-center items-center">
                <Carousel className="w-full py-5" autoplay={true} loop={true}>
                  
                  {testimonials.map((t, i) => (
                    <div key={i} className="flex justify-center">
                      <TestimonialCard {...t} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </section>
        </section>

        {/* section - 6 */}
        <section className="relative h-[40vh] px-10 mt-10">
          <div className="container min-h-52 bg-violet-800 mx-auto rounded-2xl p-10 flex flex-col justify-evenly">
            <div className="flex lg:flex-row flex-col justify-evenly w-full">
              <div className="left lg:w-[70%] my-auto">
                <h1 className="text-xl lg:text-3xl font-semibold text-white">
                  Ready To dive into our top-notch Projects ?
                </h1>
              </div>
              <div className="flex justify-center w-[20%] my-auto mx-auto mt-2">
                <button className="w-22 px-6 py-3 rounded-xl bg-violet-900 text-white hover:rounded-none transition-all">
                  Explore projects
                </button>
              </div>
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
