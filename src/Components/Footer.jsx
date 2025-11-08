import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="py-10 bg-black text-white ">
        <hr className="w-[90%] mx-auto py-5" />
        <section className="flex flex-col lg:flex-row justify-end gap-16 px-auto lg:px-16">
          <div className="mx-auto">
            <p className="text-violet-800 font-bold ">About Us</p>

<p className="w-[70%]">
            We are a forward-thinking tech company specializing in cybersecurity
            training, web development, and UI/UX design. Our mission is to
            empower individuals and businesses with secure, scalable, and
            user-friendly digital solutions. With expertise in cybersecurity,
            networking, and Linux, we provide hands-on training, innovative web
            solutions, and seamless user experiences.
            </p>

            <p className="mt-5">Secure. Innovate. Elevate. </p>
          </div>

<div className="flex gap-16">

          <div className="mx-auto">
            <ul>
              <li className="font-semibold text-xg text-violet-600">Pages</li>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="font-semibold text-xg text-violet-600">Social</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Git Hub</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="font-semibold text-xg text-violet-600">
                Resources
              </li>
              <li>Blog</li>
              <li>Medium article</li>
              <li>Git hub WorkShop</li>
            </ul>
          </div>
          </div>
        </section>
        {/* <span className="text-center">
          <p className="text-violet-600 my-5">
            Created by{" "}
            <span className="font-semibold text-white text-lg"> Balaji </span>
          </p>
        </span> */}

        <hr className="w-[90%] mx-auto my-5" />
        <p className="text-center">Copyright © 2025 All Rights Reserved by Cyberweep.</p>
      </footer>
    );
  }
}

export default Footer;
