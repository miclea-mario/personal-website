import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import Project from './Project';
import Footer from './Footer';
import Contact from './Contact';

import { projectData } from './data';
import Spline from '@splinetool/react-spline';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const projects = projectData.map(function (project, index) {
  const isLast = index === projectData.length - 1;
    return (
      <Project
        projectKey={index}
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        url={project.url}
        tags={project.tags}
        isLast={isLast}
      />
    );
  });

  const toggleContactModal = () => {
    setIsContactOpen(!isContactOpen);
  };
  
  return (
    <div className="bg-grain-texture bg-50p-auto">
      <div className='h-[120vh] lg:h-[130vh] xl:h-screen'>
        <Header toggleContactModal={toggleContactModal} isContactOpen={isContactOpen} />
        <Spline scene="https://prod.spline.design/Q2FmaTr87OtgL4IX/scene.splinecode" />
      </div>
      <About />
      <div id="projects">
        <h2 className="font-clashdisplay text-5xl md:text-8xl font-semibold text-center mb-20">Works</h2>
        {projects}
      </div>
      <Footer toggleContactModal={toggleContactModal} isContactOpen={isContactOpen} />
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="bg-white w-screen sm:max-w-xl rounded-lg p-6">
            <Contact onClose={toggleContactModal} />
          </div>
        </div>
      )}
    </div>
  );
}
