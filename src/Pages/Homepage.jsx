import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="py-10 bg-black text-white ">
        <hr className="w-[90%] mx-auto py-5" />
        <section className="flex flex-col lg:flex-row justify-end gap-16 px-auto lg:px-16">
          <div className="mx-auto">
            <p className="text-violet-800 font-bold ">About Us</p>

<p className="w-[70%] text-justify">
            SecureHutz is a next-generation cybersecurity and development company dedicated to empowering businesses and individuals with the tools to build, defend, and innovate securely. We specialize in security solutions, training, and consulting designed to bridge the gap between technology and trust.
            Driven by a mission to create a safer digital ecosystem, SecureHutz blends expertise, innovation, and education — helping you stay one step ahead in an ever-evolving cyber landscape.

            </p>

            <p className="mt-5">Where Innovation Meets Security.</p>
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
        <p className="text-center">Copyright © 2025 All Rights Reserved by Securehutz.</p>
      </footer>
    );
  }
}

export default Footer;
