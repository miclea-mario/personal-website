import profile_pic from './assets/profile-pic.png'
import Card from './Card'
import { PencilIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import { SiJavascript, SiPhp, SiWordpress, SiReact, SiTailwindcss, SiGithub, SiNodedotjs, SiMysql, SiSass, SiFigma, SiVercel } from "react-icons/si";
export default function About() {

  const iconComponents = [
    { icon: <SiJavascript className="w-14 h-14 hover:text-[#F7DF1E] transition-all" />, title: "JavaScript" },
    { icon: <SiReact className="w-14 h-14 hover:text-[#61DAFB] transition-all" />, title: "React.js" },
    { icon: <SiNodedotjs className="w-14 h-14 hover:text-[#339933] transition-all" />, title: "Node.js" },
    { icon: <SiTailwindcss className="w-14 h-14 hover:text-[#3ebff8] transition-all" />, title: "Tailwind CSS" },
    { icon: <SiSass className="w-14 h-14 hover:text-[#CC6699] transition-all" />, title: "Sass" },
    { icon: <SiPhp className="w-14 h-14 hover:text-[#777BB4] transition-all" />, title: "PHP" },
    { icon: <SiWordpress className="w-14 h-14 hover:text-[#28799e] transition-all" />, title: "WordPress" },
    { icon: <SiMysql className="w-14 h-14 hover:text-[#4479A1] transition-all" />, title: "MySQL" },
    { icon: <SiFigma className="w-14 h-14" />, title: "Figma" },
    { icon: <SiGithub className="w-14 h-14" />, title: "GitHub" },
    { icon: <SiVercel className="w-14 h-14" />, title: "Vercel" },
  ];

  return (
    <section id="about" className="border-t border-dark py-20 md:py-36 mx-auto w-full px-5 lg:px-16 xl:px-20 w-full max-w-screen-2xl mx-auto"> 
      <div className='flex flex-col-reverse md:flex-row items-center'>
        <div className="md:w-3/5">
          <h2 className="font-clashdisplay text-5xl text-semibold mb-5 mt-5 md:mt-0">Hi ✌ I'm Mario Miclea.</h2>
          <p className="text-dark font-clashdisplay text-semibold text-2xl">Fueled by a passion for innovation, I constantly seek opportunities to
enhance my skills. A highly motivated and proactive learner, I excel at
quickly assimilating information, adapting to new challenges, and solving
problems with ease. With a positive attitude and strong work ethic, I am
committed to achieving excellence in all endeavors, aspiring to make a
positive impact in the technology industry.</p>
        </div>
        <div className="md:w-2/5">
          <img className="w-96 ml-auto" src={profile_pic} />
        </div>
      </div>
      <div id="services" className="w-full block mt-[100px] mb:mt-20">
        <h2 className="font-clashdisplay text-5xl md:text-8xl font-semibold text-center mb-20">What I Do?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-10'>
          <Card
            icon={<PencilIcon className="w-20 h-20" />}
            title="Digital Design"
            description="From striking graphics to user-friendly interfaces, I create designs that leave a lasting impact. Whether it's crafting a logo, developing marketing materials, or establishing a complete digital brand identity, I ensure that every element aligns seamlessly with the vision and goals."
          />

          <Card
            icon={<CodeBracketIcon className="w-20 h-20" />}
            title="Front End Design"
            description="I can take your website from concept to completion with ease. I understand that each business is unique, and I take the time to get to know you and your specific needs. This allows me to create custom solutions that are tailored to your business and your audience."
          />

          <Card
            icon={<LightBulbIcon className="w-20 h-20" />}
            title="Brainstorming"
            description="I thrive to dive into the depths of imagination, transforming ideas into practical strategies. Through collaborative dialogue, I'll guide the process, leveraging my diverse skill set and research to uncover fresh insights."
          />
        </div>
      </div>
      <div id="services" className="w-full block mt-[100px] mb:mt-20">
        <h2 className="font-clashdisplay text-5xl md:text-8xl font-semibold text-center mb-20">My Skill Set</h2>
        <div className='border border-paragraph p-5 grid grid-cols-3 md:grid-cols-6 gap-10'>
          {iconComponents.map((item, index) => (
            <div className="group relative md:m-6 flex justify-center">
              {item.icon}
              <span className="font-clashdisplay absolute top-20 scale-0 transition-all rounded bg-paragraph p-2 text-xs text-white group-hover:scale-100">{item.title}</span>
            </div>
          ))}
          <div className="font-clashdisplay flex justify-center items-center">
              + more
          </div>
        </div>
      </div>
    </section>
  );
}
