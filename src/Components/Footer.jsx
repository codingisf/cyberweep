
import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer className="py-10 bg-black text-white ">
          
        <section className="flex justify-between gap-16 px-auto lg:px-16">
        <div className="">
          <ul>
            <li className="font-semibold text-xg text-violet-600">Pages</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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
            <li className="font-semibold text-xg text-violet-600">Resources</li>
            <li>Blog</li>
            <li>Medium article</li>
            <li>Git hub WorkShop</li>
          </ul>
        </div>
        </section>
        <span className='text-center'>
          <p className='text-violet-600 my-5'>Created by <span className='font-semibold text-white text-lg'> Balaji </span></p>
        </span>
      </footer>
    )
  }
}

export default Footer