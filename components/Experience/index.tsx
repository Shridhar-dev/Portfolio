import Image from 'next/image'
import FroverLogo from '@/public/experience/frover.webp'
import Social3Logo from '@/public/experience/social3.webp'
import DesignAndCodeLogo from '@/public/experience/dc.webp'
const experiences = [
    {
        logo: FroverLogo,
        company: "Frover Labs",
        role: "Software Developer Intern",
        period: "Jan 2023 - Present",
        alt: "Frover Labs Logo",
    },
    {
        logo: Social3Logo,
        company: "Social3",
        role: "Frontend Developer Intern",
        period: "Jul 2022 - Dec 2022",
        alt: "Social3 Logo",
    },
    {
        logo: Social3Logo,
        company: "Social3",
        role: "Frontend Developer Intern",
        period: "Jul 2022 - Dec 2022",
        alt: "Social3 Logo",
    },
    {
        logo: DesignAndCodeLogo,
        company: "Design & Code",
        role: "UI Designer",
        period: "Jan 2022 - Jun 2022",
        alt: "Design & Code Logo",
    },
]

function ExperiencePage() {
  return (
    <section className="w-full h-screen bg-black p-10">
        <div>
            <p className='text-white font-silk text-8xl'>Experience</p>
        </div>
        {
            experiences.map((exp, index) => (
                <Experience key={index} company={exp.company} role={exp.role} logo={exp.logo} period={exp.period}/>
            ))  
        }
    </section>
  )
}

function Experience({company,role,logo,period}: {company: string, role: string, logo: StaticImageData, period: string}) {
    return (
        <div className='border-b font-black py-14 px-10 text-4xl flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <Image 
                    src={logo}
                    height={FroverLogo.height-100}
                    width={FroverLogo.width-100}
                    alt="Frover Labs Logo"
                    className='h-20 w-20 object-cover'
                />
                {company} - <span className=' italic font-normal'>{role}</span>
            </div>
            <div>
                <p className='text-white text-3xl mt-5'>{period}</p>
            </div>
        </div>
    )
}
export default ExperiencePage