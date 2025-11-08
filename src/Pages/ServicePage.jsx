import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

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
const casestudy1 = "/casestudy1.jpg";
const casestudy2 = "/casestudy2.jpg";

const shek = "/shek.jpg";

import { Footer } from "../Components/Footer";

const ServiceCardDetails = [
  {
    cardTitle: "Web Application Penetration Testing",
    cardImage: cybersecurity,
    cardBody:
      "At SecureHutz, we perform comprehensive web application penetration testing to identify and exploit vulnerabilities before attackers can. Using industry-standard frameworks like OWASP Top 10, NIST, and PTES, our experts simulate real-world attack vectors — covering authentication, session management, access control, and data validation flaws. We deliver a detailed report with risk ratings, proof of concept, and mitigation recommendations to help you strengthen your application’s security posture.",
  },
  {
    cardTitle: " Vulnerability Assessment and Remediation",
    cardImage: websitedevelopment,
    cardBody:
      "Our vulnerability assessment process provides a systematic approach to discovering and managing security risks across your digital ecosystem. SecureHutz utilizes advanced tools such as Nessus, Burp Suite, and OpenVAS to scan for vulnerabilities in applications, networks, and systems. Beyond detection, we work with your internal teams to prioritize and remediate these weaknesses — ensuring complete lifecycle coverage from discovery to closure.",
  },
  {
    cardTitle: "Secure Web Development (Front-End & Back-End)",
    cardImage: uximage,
    cardBody:
      "Security is embedded into every line of code we write. SecureHutz’s development team builds dynamic, high-performance web applications using modern frameworks like React, Node.js, and Django, while adhering to secure coding standards such as OWASP ASVS and CWE/SANS Top 25. Our developers implement strong authentication, encryption, and data protection measures to ensure every product we deliver is both functional and fortified.",
  },
  {
    cardTitle: " Continuous Security Support",
    cardImage: uximage,
    cardBody:
      "Security is embedded into every line of code we write. SecureHutz’s development team builds dynamic, high-performance web applications using modern frameworks like React, Node.js, and Django, while adhering to secure coding standards such as OWASP ASVS and CWE/SANS Top 25. Our developers implement strong authentication, encryption, and data protection measures to ensure every product we deliver is both functional and fortified.",
  },
];

const ServiceModelDetails = [
  {
    ModelTitle: "Cybersecurity",
    ModelBody:
      "Our cybersecurity training programs provide hands-on, real-world learning experiences to equip individuals and businesses with essential security skills. From beginner to advanced penetration testing, you'll gain expertise in ethical hacking, vulnerability scanning, and exploitation techniques. Our secure coding courses focus on the OWASP Top 10 vulnerabilities, ensuring developers build applications with security-first principles. If you're preparing for industry-recognized certifications, our CEH, OSCP, and advanced security certification prep programs offer structured, exam-focused training. Additionally, our corporate training workshops help businesses strengthen their security posture, defend against cyber threats, and implement best practices through customized, industry-relevant training sessions.",
  },
  {
    ModelTitle: "Advanced Web Development",
    ModelBody:
      "We build secure, scalable, and high-performance websites tailored to modern digital needs. Our custom web development solutions leverage the latest technologies like React, Angular, and Vue.js, ensuring a seamless user experience across all devices. We specialize in secure API development, providing encrypted and well-optimized API systems for smooth data communication and integration. To keep your digital presence protected and efficient, we offer ongoing maintenance and security audits, including performance optimization, vulnerability assessments, and regular updates. Whether you need an e-commerce platform, business website, or enterprise solution, we create future-ready web applications that drive success.",
  },
  {
    ModelTitle: "UX/UI Design",
    ModelBody:
      "Exceptional digital experiences start with intuitive design. Our UI/UX design services focus on user-centered design principles, ensuring every interaction is seamless and engaging. We create wireframes and interactive prototypes to refine ideas before development, guaranteeing a flawless user journey. Our approach prioritizes accessibility and usability, making digital platforms inclusive and easy to navigate for all users. With expertise in brand identity and visual design, we help businesses build a strong digital presence with visually appealing, cohesive, and modern aesthetics. By blending creativity, functionality, and security, we craft designs that not only look stunning but also enhance user engagement and satisfaction.",
  },
];

const ServiceCard = ({ cardTitle, cardImage, cardBody, index, onOpen }) => (
  <div className="bg-white/10 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition duration-300 backdrop-blur-lg border border-white/20 w-[70%] sm:w-[80%] h-full p-6 py-10 mx-auto">
    {cardImage && (
      <img
        src={cardImage}
        alt={cardTitle}
        className="mb-4 w-[70%] mx-auto object-contain"
      />
    )}
    <h3 className="text-2xl font-semibold text-white mb-4 text-center">
      {cardTitle}
    </h3>
    <p className="text-white/80 text-justify">{cardBody}</p>
    <div className="flex justify-center mt-6">
      <button
        onClick={() => onOpen(index)}
        className="text-violet-400 font-medium hover:text-violet-300 transition"
      >
        Read More →
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
    <>
      <section className="bg-black min-h-[100vh]">
        <section>
          <header
            className="lg:h-[60vh] h-[50vh] flex justify-center items-center bg-gray-300"
            style={{ backgroundImage: "url('/img-1.jpg')" }}
          >
            <h1 className="text-[2rem] lg:text-[3.5rem] text-violet-500 font-semibold">
              Our Service
            </h1>
          </header>

          <section className="py-14 h-full  bg-black w-full px-auto">
            <div className="container mx-auto w-full max-w-7xl px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mx-auto">
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
                <button onClick={() => setOpenIndex(null)}>Close</button>
              </DialogFooter>
            </Dialog>
          ))}
        </section>

        <section className="px-10">
          <h1 className="py-5 px-auto text-center lg:text-3xl text-xl bg-violet-800 text-white font-bold">
            Our Case Study About{" "}
            <span className="text-blue-500">UX/UI Design</span>
          </h1>

          <section className="py-10 w-full flex lg:flex-row flex-col items-center justify-center gap-y-5">
            <a
              href="https://www.behance.net/gallery/216070413/IOB-Mobile-Banking-App-UIUX-Case-Study"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mx-auto"
            >
              <Card
                shadow={false}
                className="relative grid h-[40rem] mx-auto w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                  style={{ backgroundImage: `url(${casestudy1})` }}
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                  >
                    How we design and code open-source projects?
                  </Typography>
                  <Typography variant="h5" className="mb-4 text-gray-400">
                    Mohamed Sheik
                  </Typography>
                  <Avatar
                    size="xl"
                    variant="circular"
                    alt="tania andrew"
                    className="border-2 border-white"
                    src={shek}
                  />
                </CardBody>
              </Card>
            </a>

            <a
              href="https://www.behance.net/gallery/218906755/Healthcare-Website-Design"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto"
            >
              <Card
                shadow={false}
                className="relative grid h-[40rem] mx-auto w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                  style={{ backgroundImage: `url(${casestudy2})` }}
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                  >
                    How we design and code open-source projects?
                  </Typography>
                  <Typography variant="h5" className="mb-4 text-gray-400">
                    Mohamed Sheik
                  </Typography>
                  <Avatar
                    size="xl"
                    variant="circular"
                    alt="tania andrew"
                    className="border-2 border-white"
                    src={shek}
                  />
                </CardBody>
              </Card>
            </a>
          </section>
        </section>

        

        <Footer />
      </section>
    </>
  );
}

export default ServicePage;
