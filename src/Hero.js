export default function Hero() {
    return (
    <div className="py-10 md:py-20 px-0 w-full max-w-screen-2xl mx-auto">    
        <div className="mx-auto text-left">
          <h1 className="text-6xl md:text-9xl leading-[70px] font-semibold text-dark leading-[4rem] md:leading-[8rem]">
            <span className="block font-clashdisplay">Digital Designer &</span>
            <span className="block font-clashdisplay">Front-End Developer</span>
          </h1>
          <div className="mt-7 md:w-9/12 md:flex md:space-x-4 font-clashdisplay items-center">
            <div className="mb-10 md:mb-0 md:w-4/12 md:border-r border-dark">
                <span className="block text-3xl font-bold">+<span className="text-5xl">5</span> years</span>
                <span className="block text-2xl">of experience</span>
            </div>
            <p className="w-full text-md md:text-xl text-paragraph md:ml-6">I am a <b>frontend developer</b> working out of Bucharest, Romania, and I am constantly looking for ground-breaking solutions to issues that arise in daily life. In my work, I spend most of my time coming up with innovative solutions to development problems.</p>
          </div>
        </div>
    </div>
    )
}