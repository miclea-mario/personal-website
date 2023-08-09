import { useState } from 'react';
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

export default function Footer({ toggleContactModal, isContactOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
    return (
        <footer className="bg-dark py-10 px-5 lg:px-16 xl:px-20">
            <div className="flex justify-between border-b border-gray py-20">
                <div>
                    <h4 className="text-white uppercase font-plus-jakarta text-md mb-5">Have a project in mind?</h4>
                    <h2 className="text-white font-plus-jakarta font-semibold text-6xl md:text-8xl">Let's talk!</h2>
                </div>
                <button
                  onClick={toggleContactModal}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="text-dark py-3 px-4 rounded-md uppercase bg-white self-center font-plus-jakarta">
                  Start a project <ArrowSmallRightIcon className={`inline h-6 text-dark transition-all ${isHovered ? 'visible w-6' : 'invisible w-0 -translate-x-5'}`} />
                </button>
            </div>
            <div className="lg:flex gap-8 justify-between uppercase text-sm mt-10">
                <div className="mb-5 md:mb-0">
                    <h3 className="text-paragraph font-semibold font-plus-jakarta">Legal</h3>
                    <h3 className="text-white font-plus-jakarta font-semibold">MICLEA ALEXANDRU-MARIO PFA</h3>
                    <h3 className="text-white font-plus-jakarta font-semibold">CUI: 12345</h3>
                    <h3 className="text-white font-plus-jakarta font-semibold">ADDRESS: Mecanizarii 3, Poarta Alba, CT, RO</h3>
                </div>
                <div className="mb-5 md:mb-0">
                    <h3 className="text-paragraph font-semibold font-plus-jakarta">Email</h3>
                    <a href="mailto:contact@micleamario.com" className="text-white font-plus-jakarta font-semibold">contact@micleamario.com</a>
                </div>
                <div className="mb-5 md:mb-0">
                    <h3 className="text-paragraph font-semibold font-plus-jakarta">Phone</h3>
                    <a href="tel:+40730215243" className="text-white font-plus-jakarta font-semibold">(+40) 730 215 243</a>
                </div>
                <div className="self-center">
                    <h3 className="text-white font-plus-jakarta font-normal justify-end">© Miclea Mario. ALL RIGHTS RESERVED.</h3>
                </div>
            </div>
        </footer>
    )
}