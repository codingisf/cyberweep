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
      "Our cybersecurity training programs provide hands-on, real-world learning experiences to equip individuals and businesses with essential security skills. From beginner to advanced penetration testing, you'll gain expertise in ethical hacking, vulnerability scanning, and exploitation techniques.",
  },
  {
    ModelTitle: "🕸️ Advanced Web Development",
    ModelBody:
      "We build secure, scalable, and high-performance websites tailored to modern digital needs. Our custom web development solutions leverage the latest technologies like React, Angular, and Vue.js, ensuring a seamless user experience across all devices.",
  },
  {
    ModelTitle: "🖌️ UX/UI Design",
    ModelBody:
      "Exceptional digital experiences start with intuitive design. Our UI/UX design services focus on user-centered design principles, ensuring every interaction is seamless and engaging.",
  },
];

const ServiceCard = ({ cardTitle, cardImage, cardBody, index, onOpen }) => (
  <div className="bg-white/10 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20 w-full sm:w-[80%] md:w-[60%] lg:w-[30%]">
    <div className="p-6">
      {cardImage && (
        <img
          src={cardImage}
          alt="cyber-security-solutions web-development full-stack"
          className="mb-4 w-[80%]"
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
            <p className="text-black">{t.ModelBody}</p>
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
