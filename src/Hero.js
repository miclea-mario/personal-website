export default function Hero() {
    return (
    <div className="py-10 md:py-36 px-0">    
        <div className="mx-auto text-left">
          <h1 className="text-6xl leading-[70px] font-semibold text-dark md:text-9xl">
            <span className="block font-plus-jakarta lg:leading-normal">Digital Designer &</span>
            <span className="block font-plus-jakarta">Front-End Developer</span>
          </h1>
          <div className="mt-7 md:w-9/12 md:flex md:space-x-4 font-plus-jakarta items-center">
            <div className="mb-10 md:mb-0 md:w-4/12 md:border-r border-dark">
                <span className="block text-3xl font-bold">+<span className="text-5xl">5</span> years</span>
                <span className="block text-2xl">of experience</span>
            </div>
            <p className="w-full text-md md:text-xl text-paragraph md:ml-6">I am a <b>Professional Digital Designer and Front-End Developer</b>. This website contains design works that I have produced over the past few years. Find various types of design projects such as logo designs, brochure designs, product packaging designs, website designs, and many more.</p>
          </div>
        </div>
    </div>
    )
}