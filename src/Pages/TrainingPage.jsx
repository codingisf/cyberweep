import React from 'react'
import { Carousel } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { explore_project } from './Homepage';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const websitedevelopment = "/websitedevelopment.svg";
const uximage = "/uximage.svg";
const cybersecurity = "/cybersecurity.svg";

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


const ServiceCardDetails = [
  {
    cardTitle: "Cybersecurity",
    cardImage: cybersecurity,
    cardBody:
      "Stay ahead of cyber threats with our industry-leading cybersecurity training. We offer hands-on, real-world simulations designed by experts to equip you with the latest tools and techniques.",
  },
  {
    cardTitle: "Advanced Web Development",
    cardImage: websitedevelopment,
    cardBody:
      "Build your dream website and mobile apps with latest frameworks and technologies. Build responsive, user-friendly websites and applications, ensuring scalability and performance.",
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


const ServiceCard = ({ cardTitle, cardImage, cardBody, index, onOpen }) => (
  <div className="bg-white/10 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20 w-full sm:w-[80%] md:w-[60%] lg:w-[30%]">
    <div className="p-6">
      {cardImage && (
        <img
          src={cardImage}
          alt="cyber-security-solutions web-development full-stack"
          className="mb-4 w-[80%] mx-auto"
        />
      )}
      <h3 className="text-xl font-semibold text-white mb-4">{cardTitle}</h3>
      <p className="text-white/80">{cardBody}</p>
    </div>
  </div>
);


function TrainingPage() {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-fixed bg-center text-white bg-black max-w-[100vw]">

     <header
            className="lg:h-[60vh] h-[50vh] flex justify-center items-center bg-gray-300"
            style={{ backgroundImage: "url('/img-1.jpg')" }}
          >
            <h1 className="text-[2rem] lg:text-[3.5rem] text-violet-500 font-semibold">
              Our Training
            </h1>
          </header>

    <section className="py-14 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 w-[95%]">
              <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
                {ServiceCardDetails.map((t, i) => (
                  <ServiceCard key={i} {...t} index={i}/>
                ))}
              </div>
            </div>
          </section>


<h1 className="py-5 px-auto pl-10 lg:text-3xl text-xl bg-violet-800">
            Our Student's testimonials
          </h1>
      <section className="relative lg:h-[88vh] bg-cover bg-center">
          {/* <section className="bg-violet-800">
            <h1 className=" lg:text-xl text-lg font-semibold pl-10">
              Our customers
            </h1>
            <p className="lg:text-4xl text-xl font-semibold pl-10 pb-3">
              Testimonials
            </p>
          </section> */}

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

        <section className="min-h-[100vh] pb-10">
          <h1 className="py-5 px-auto text-center lg:text-3xl text-xl bg-violet-800 text-white font-bold">
            Our Training
          </h1>
          <section className="h-[70%] grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 mt-5 mx-10 ">
            <img
              src="/img1.jpg"
              alt=""
              className="lg:col-span-1 lg:row-span-2 w-full h-full object-cover rounded-md"
            />
            <img
              src="/img2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <img
              src="/img3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <img
              src="/img4.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <img
              src="/img5.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </section>
        </section>



      
      </div>
  )
}

export default TrainingPage
