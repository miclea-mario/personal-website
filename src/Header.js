import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import { socials } from "./data";

export default function Header({ toggleContactModal, isContactOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialIcons = socials.map(function (el) {
    return (
      <a href={el.url} target="_blank">
        <div className="rounded-md bg-dark/5 p-2 ring-1 ring-dark/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={el.icon}></path>
          </svg>
        </div>
      </a>
    );
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen || isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (isContactOpen) setIsMobileMenuOpen(false);
  }, [isMobileMenuOpen, isContactOpen]);

  return (
    <header className="absolute h-full inset-x-0 top-0 z-50 px-5 lg:px-16 xl:px-20 w-full max-w-screen-2xl mx-auto">
      <nav
        className="flex items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className="mb-3 text-3xl font-clashdisplay leading-none text-dark md:text-2xl lg:text-2xl">
              Mario Miclea
            </h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-5 lg:justify-end items-center">
          <a
            href="#about"
            className="text-sm font-semibold font-clashdisplay leading-6 text-dark hover:bg-gray-600/40 hover:text-white py-1 px-2 rounded-lg transition-all"
          >
            About me
          </a>
          <a
            href="#projects"
            className="text-sm font-semibold font-clashdisplay leading-6 text-dark hover:bg-gray-600/40 hover:text-white py-1 px-2 rounded-lg transition-all"
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-sm font-semibold font-clashdisplay leading-6 text-dark hover:bg-gray-600/40 hover:text-white py-1 px-2 rounded-lg transition-all"
          >
            Services
          </a>
          <button
            onClick={toggleContactModal}
            className="text-sm font-semibold font-clashdisplay leading-6 text-white bg-dark hover:bg-transparent hover:text-dark border-2 border-dark py-1 px-2 rounded-lg"
          >
            Let's Chat
          </button>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div
        className={`${isMobileMenuOpen ? "" : "hidden"} lg:hidden`}
        role="dialog"
        aria-modal="true"
      >
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-50"></div>
        <div className="animate-[sideBarSlide_.5s_ease-in-out] fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-5 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#">
              <h1 className="mb-3 text-3xl font-clashdisplay leading-none text-dark md:text-2xl lg:text-2xl">
                Mario Miclea
              </h1>
            </a>
            <button
              type="button"
              className="rounded-md text-gray-700"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 font-clashdisplay">
                <a
                  href="#about"
                  onClick={toggleMobileMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About me
                </a>
                <a
                  href="#projects"
                  onClick={toggleMobileMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </a>
                <a
                  href="#services"
                  onClick={toggleMobileMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
              </div>
              <div className="py-6">
                <button
                  onClick={toggleContactModal}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Let's Chat
                </button>
              </div>
            </div>
            <div className="absolute bottom-10 flex flex-row gap-5 items-start">
              { socialIcons }
            </div>
          </div>
        </div>
      </div>
      <Hero />
    </header>
  );
}
