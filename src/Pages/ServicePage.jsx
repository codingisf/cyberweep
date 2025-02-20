import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const websitedevelopment = "/websitedevelopment.svg";
const uximage = "/uximage.svg";
const cybersecurity = "/cybersecurity.svg";


const ServiceCardDetails = [
  {
    cardTitle: "🚀 Cybersecurity",
    cardImage: cybersecurity,
    cardBody:
      "Stay ahead of cyber threats with our industry-leading cybersecurity training. We offer hands-on, real-world simulations designed by experts to equip you with the latest tools and techniques.",
  },
  {
    cardTitle: "🕸️ Advanced Web Development",
    cardImage: websitedevelopment,
    cardBody:
      "Build your dream website and mobile apps with latest frameworks and technologies. Build responsive, user-friendly websites and applications, ensuring scalability and performance.",
  },
  {
    cardTitle: "🖌️ UX/UI Design",
    cardImage: uximage,
    cardBody:
      "Our UI/UX Design services focus on crafting intuitive, engaging, and accessible digital experiences. We specialize in wireframing and prototyping to refine ideas before development, ensuring a seamless user journey.",
  },
];

const ServiceModelDetails = [
  {
    ModelTitle: "🚀 Cybersecurity",
    ModelBody:
      "Our cybersecurity training programs provide hands-on, real-world learning experiences to equip individuals and businesses with essential security skills. From beginner to advanced penetration testing, you'll gain expertise in ethical hacking, vulnerability scanning, and exploitation techniques. Our secure coding courses focus on the OWASP Top 10 vulnerabilities, ensuring developers build applications with security-first principles. If you're preparing for industry-recognized certifications, our CEH, OSCP, and advanced security certification prep programs offer structured, exam-focused training. Additionally, our corporate training workshops help businesses strengthen their security posture, defend against cyber threats, and implement best practices through customized, industry-relevant training sessions.",
  },
  {
    ModelTitle: "🕸️ Advanced Web Development",
    ModelBody:
      "We build secure, scalable, and high-performance websites tailored to modern digital needs. Our custom web development solutions leverage the latest technologies like React, Angular, and Vue.js, ensuring a seamless user experience across all devices. We specialize in secure API development, providing encrypted and well-optimized API systems for smooth data communication and integration. To keep your digital presence protected and efficient, we offer ongoing maintenance and security audits, including performance optimization, vulnerability assessments, and regular updates. Whether you need an e-commerce platform, business website, or enterprise solution, we create future-ready web applications that drive success.",
  },
  {
    ModelTitle: "🖌️ UX/UI Design",
    ModelBody:
      "Exceptional digital experiences start with intuitive design. Our UI/UX design services focus on user-centered design principles, ensuring every interaction is seamless and engaging. We create wireframes and interactive prototypes to refine ideas before development, guaranteeing a flawless user journey. Our approach prioritizes accessibility and usability, making digital platforms inclusive and easy to navigate for all users. With expertise in brand identity and visual design, we help businesses build a strong digital presence with visually appealing, cohesive, and modern aesthetics. By blending creativity, functionality, and security, we craft designs that not only look stunning but also enhance user engagement and satisfaction.",
  },
];

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
      <button onClick={() => onOpen(index)} className="text-violet-500 mt-4">
        Read More
      </button>
    </div>
  </div>
);

function ServicePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex(index);
  };

  return (
    <section className="bg-black min-h-[100vh]">
      <header
        className="lg:h-[60vh] h-[50vh] flex justify-center items-center bg-gray-300"
        style={{ backgroundImage: "url('/img-1.jpg')" }}
      >
        <h1 className="text-[2rem] lg:text-[3.5rem] text-violet-500 font-semibold">
          Our Service
        </h1>
      </header>

      <section className="py-14 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 w-[95%]">
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
            {ServiceCardDetails.map((t, i) => (
              <ServiceCard key={i} {...t} index={i} onOpen={handleOpen} />
            ))}
          </div>
        </div>
      </section>

      {ServiceModelDetails.map((t, i) => (
        <Dialog
          open={openIndex === i}
          handler={() => setOpenIndex(null)}
          size="md"
          key={i}
          
        >
          <DialogHeader>
            <h2 className="text-2xl font-semibold text-violet-500">
              {t.ModelTitle}
            </h2>
          </DialogHeader>
          <DialogBody>
            <p className="text-black text-justify">{t.ModelBody}</p>
          </DialogBody>
          <DialogFooter className="text-red-400 hover:underline">
            <button onClick={() => setOpenIndex(null)}>
              Close
            </button>
          </DialogFooter>
        </Dialog>
      ))}
    </section>
  );
}

export default ServicePage;
