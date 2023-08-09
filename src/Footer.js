import { useState } from 'react';
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

import { socials } from './data';

export default function Footer({ toggleContactModal, isContactOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const socialIcons = socials.map(function (el) {
    return (
        <a href={ el.url } target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                <path d={ el.icon }></path>
            </svg>
        </a>
    );
  });

    return (
        <footer className="bg-dark py-10 px-5 lg:px-16 xl:px-20">
            <div className="flex justify-between border-b border-customGray py-20">
                <div>
                    <h4 className="text-white uppercase font-clashdisplay text-md mb-5">Have a project in mind?</h4>
                    <h2 className="text-white font-clashdisplay font-semibold text-6xl md:text-8xl">Let's talk!</h2>
                </div>
                <button
                  onClick={toggleContactModal}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="text-dark py-3 px-4 rounded-md uppercase bg-white self-center font-clashdisplay">
                  Start a project <ArrowSmallRightIcon className={`inline h-6 text-dark transition-all ${isHovered ? 'visible w-6' : 'invisible w-0 -translate-x-5'}`} />
                </button>
            </div>
            <div className="lg:flex gap-8 justify-between uppercase text-sm mt-10">
                <div className="mb-5 md:mb-0">
                    <h3 className="text-paragraph font-semibold font-clashdisplay">Social</h3>
                    <div className='flex space-x-4 mt-1'>
                        {socialIcons}
                    </div>
                </div>
                <div className="mb-5 md:mb-0">
                    <h3 className="text-paragraph font-semibold font-clashdisplay">Email</h3>
                    <a href="mailto:miclea.alexandru.mario@gmail.com" className="text-white font-clashdisplay font-semibold">miclea.alexandru.mario@gmail.com</a>
                </div>
                <div className="mb-5 md:mb-0">
                    <h3 className="text-paragraph font-semibold font-clashdisplay">Phone</h3>
                    <a href="tel:+40730215243" className="text-white font-clashdisplay font-semibold">(+40) 730 215 243</a>
                </div>
                <div className="self-center">
                    <h3 className="text-white font-clashdisplay font-normal justify-end">Made by Mario Miclea</h3>
                </div>
            </div>
        </footer>
    )
}