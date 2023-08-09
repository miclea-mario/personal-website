  import React, { useState, useRef, useLayoutEffect } from 'react';
  import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

  export default function Project({ projectKey, title, description, imageUrl, url, tags, isLast }) {
    const [isHovered, setIsHovered] = useState(false);
    const elementRef = useRef(null);
    const [distanceToTop, setDistanceToTop] = useState(null);

    const handleHover = () => {
      setIsHovered(true);
    };

    const handleLeave = () => {
      setIsHovered(false);
    };

    
    
    const handleScroll = () => {
      const element = elementRef.current.nextElementSibling;
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const distanceToTop = elementRect.top / window.innerHeight * 100; // Convert to vh
        setDistanceToTop(distanceToTop);
      }
    };

    useLayoutEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const divStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})`,
      opacity: 0.5,
      filter: isHovered ? 'brightness(120%) contrast(109%) saturate(100%)' : 'brightness(120%) contrast(109%) saturate(0%)',
      transition: 'filter 0.3s ease-in-out',
    };

    if(distanceToTop<0) console.log('hidden');
    const sectionClass = (isLast || distanceToTop <= 0) ? 'relative' : 'sticky';

    return (
      <section className={`z-${projectKey+1} top-0 h-screen fit-content flex items-center relative bg-dark pt-[400px] pb-[80px] px-5 lg:px-16 xl:px-20 ${sectionClass}`} ref={elementRef}>
        <div
          id="backgroundDiv"
          className="absolute top-0 left-0 h-full w-full bg-scroll bg-center bg-cover filter brightness-120 contrast-109 saturate-0"
          style={divStyle}
        ></div>
        <div className="relative justify-between w-full">
          <a className="flex" href={url} target="_blank" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <h3 className="text-white font-plus-jakarta text-5xl md:text-8xl font-medium">{title}</h3>
            <ArrowUpRightIcon className="h-10 w-10 text-white" />
          </a>
          <div className="block mt-[35px] mb-[25px] h-[1px] border-b-[1px] border-white"></div>

          <div className="lg:flex justify-between">
            <p className="font-plus-jakarta text-white uppercase max-w-[310px] mb-5 md:mb-0">{description}</p>
            <p className=''>
              {tags.map((tag, index) => (
                <span key={index} className="block lg:inline w-fit md:px-3 md:py-1 uppercase text-sm font-plus-jakarta text-white md:bg-dark rounded-xl md:mr-2">
                {tag}
              </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    );
  }