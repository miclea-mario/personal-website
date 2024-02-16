import React, { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Project from "./Project";
import Footer from "./Footer";
import Contact from "./Contact";
import Hero from "./Hero";

import { projectData } from "./data";
import Spline from "@splinetool/react-spline";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const projects = projectData.map(function (project, index) {
    return (
      <Project
        projectKey={index}
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        url={project.url}
        tags={project.tags}
      />
    );
  });

  const toggleContactModal = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div className="bg-grain-texture bg-50p-auto">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div role="status">
            <h1 className="mb-3 animate-[slideFromLeft_4s_ease-in-out_infinite] font-semibold text-9xl font-clashdisplay leading-none text-dark md:text-8xl lg:text-8xl">
              Mario
            </h1>
            <h1 className="mb-3 animate-[slideFromRight_4s_ease-in-out_infinite] font-semibold text-9xl font-clashdisplay leading-none text-dark md:text-8xl lg:text-8xl">
              Miclea
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <Header
              toggleContactModal={toggleContactModal}
              isContactOpen={isContactOpen}
          />
          <div className="px-5 flex items-center justify-center h-[120vh] lg:h-[130vh] xl:h-screen w-full max-w-screen-2xl mx-auto">
            <Hero />
            <Spline className="absolute top-0 z-10" scene="https://prod.spline.design/Q2FmaTr87OtgL4IX/scene.splinecode" />
          </div>
          <About />
          <div id="projects">
            <h2 className="font-clashdisplay text-5xl md:text-8xl font-semibold text-center mb-20">
              Latest projects
            </h2>
            {projects}
          </div>
          <Footer
            toggleContactModal={toggleContactModal}
            isContactOpen={isContactOpen}
          />
          {isContactOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur">
              <div className="w-screen sm:max-w-xl rounded-lg p-6">
                <Contact onClose={toggleContactModal} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
