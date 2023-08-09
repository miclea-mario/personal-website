import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact({ onClose }) {
  const [isHovered, setIsHovered] = useState(false);
  const [state, handleSubmit] = useForm("mgejaakw");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="isolate font-clashdisplay">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-end">
          <button
            type="button"
            className="hover:bg-dark hover:text-white transition-all rounded-xl text-dark"
            onClick={onClose}
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
        <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          Let’s work together.
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Write me your ideas
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-md sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-dark"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm block w-full rounded-md border-0 px-3.5 py-2 text-dark shadow-sm placeholder:text-dark ring-1 ring-dark focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
              />
            </div>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-dark"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm block w-full rounded-md border-0 px-3.5 py-2 text-dark shadow-sm placeholder:text-dark ring-1 ring-dark focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-dark"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                className="resize-none bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm block w-full rounded-md border-0 px-3.5 py-2 text-dark shadow-sm placeholder:text-dark focus:ring-2 ring-1 ring-dark focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-dark px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disabled={state.succeeded}
          >
            {state.succeeded ? (
              "Message sent!"
            ) : (
              <>
                Send Message
                <PaperAirplaneIcon
                  className={`inline ml-1 h-6 w-6 text-white transition-all ${
                    isHovered ? "translate-x-2" : "translate-x-0"
                  }`}
                />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
