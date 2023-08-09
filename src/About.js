import profile_pic from './assets/profile-pic.png'
import Card from './Card'
import { PencilIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section id="about" className="border-t border-dark py-20 md:py-36 mx-auto w-full px-5 lg:px-16 xl:px-20"> 
      <div className='flex flex-col-reverse md:flex-row'>
        <div className="md:w-3/5">
          <h2 className="font-clashdisplay text-5xl text-semibold leading-loose">Hi ✌ I'm Mario Miclea.</h2>
          <p className="text-dark font-clashdisplay text-semibold text-2xl">As a software developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.</p>
        </div>
        <div className="md:w-2/5">
          <img className="w-96 ml-auto" src={profile_pic} />
        </div>
      </div>
      <div className="w-full block mt-[100px] mb:mt-20">
        <h2 className="font-clashdisplay text-5xl md:text-8xl font-semibold text-center mb-20">What I Do?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-10'>
          <Card
            icon={<PencilIcon className="w-20 h-20" />}
            title="Graphic Design"
            description="Nemo enim ipsam voluptatem quia volupta sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores."
          />

          <Card
            icon={<CodeBracketIcon className="w-20 h-20" />}
            title="Website Design"
            description="Custom description goes here."
          />

          <Card
            icon={<LightBulbIcon className="w-20 h-20" />}
            title="Custom Title"
            description="Custom description goes here."
          />
        </div>
      </div>
    </section>
  );
}
