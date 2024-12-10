"use client"
import Link from "next/link"
import {FiTwitter,FiLinkedin,FiGithub,FiYoutube} from "react-icons/fi";
import {usePathname}from "next/navigation"
const socials=[
    {
    icon:<FiGithub/>,
    path:"/github"
    },
    {
    icon:<FiLinkedin/>,
    path:"/linkedin"
    },
    {
    icon:<FiYoutube/>,
    path:"/youtube"
    },
    {
    icon:<FiTwitter/>,
    path:"/twitter"
    },
]
const Socials = () => {
    const pathname=usePathname();
  return (
    <div className="flex  gap-6 ">
        {socials.map((item,index)=>{
         return <Link key={index} href={item.path} className="w-9 h-9 border rounded-full border-accent text-accent
          flex justify-center items-center hover:bg-accent hover:text-primary">{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials
