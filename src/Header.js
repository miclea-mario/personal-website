import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Contact from "./Contact";

export default function Header({ toggleContactModal, isContactOpen}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen || isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if(isContactOpen)
      setIsMobileMenuOpen(false);
  }, [isMobileMenuOpen, isContactOpen]);

  return (
    <header className="absolute h-full inset-x-0 top-0 z-50 px-5 lg:px-16 xl:px-20">
      <nav className="flex items-center justify-between py-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className="mb-3 text-3xl font-plus-jakarta leading-none text-dark md:text-2xl lg:text-2xl">Mario Miclea</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark" onClick={toggleMobileMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:justify-end items-center">
          <a href="#about" className="text-sm font-semibold font-plus-jakarta leading-6 text-dark">About me</a>
          <a href="#" className="text-sm font-semibold font-plus-jakarta leading-6 text-dark">Projects</a>
          <a href="#" className="text-sm font-semibold font-plus-jakarta leading-6 text-dark">Services</a>
          <button
            onClick={toggleContactModal}
            className="text-sm font-semibold font-plus-jakarta leading-6 text-white bg-dark hover:bg-transparent hover:text-dark border-2 border-dark py-1 px-2 rounded">
            Let's Chat
          </button>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className={`${isMobileMenuOpen ? '' : 'hidden'} lg:hidden`} role="dialog" aria-modal="true">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-5 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#">
              <h1 className="mb-3 text-3xl font-plus-jakarta leading-none text-dark md:text-2xl lg:text-2xl">Mario Miclea</h1>
            </a>
            <button type="button" className="rounded-md text-gray-700" onClick={toggleMobileMenu}>
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 font-plus-jakarta">
                <a href="#about" onClick={toggleMobileMenu} className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">About me</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">Projects</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">Services</a>
              </div>
              <div className="py-6">
                <button
                  onClick={toggleContactModal}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Let's Chat
                </button>
              </div>
            </div>
            <div className="absolute bottom-10 flex flex-row gap-5 items-start">
                <a href="https://www.linkedin.com/in/mario-miclea/" target="_blank">
                  <div className="rounded-md bg-dark/5 p-2 ring-1 ring-dark/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </div>
                </a>
                <a href="https://github.com/miclea-mario" target="_blank">
                  <div className="rounded-md bg-dark/5 p-2 ring-1 ring-dark/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
      <Hero />
      {/* Contact modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="bg-white w-screen sm:max-w-xl rounded-lg p-6">
            <Contact onClose={toggleContactModal} />
          </div>
        </div>
      )}
    </header>
  );
}
