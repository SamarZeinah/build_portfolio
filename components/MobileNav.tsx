"use client"
import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries}from "react-icons/ci";
const links=[
    {
        name:'home',
        path:'/'
    },
    {
        name:'services',
        path:'/services'
    },
    {
        name:'resume',
        path:'/resume'
    },
    {
        name:'work',
        path:'/work'
    },
    {
        name:'contact',
        path:'/contact'
    },
]
const MobileNav = () => {
    const pathname=usePathname();
  return (
    <Sheet >
        <SheetTrigger className="flex justify-center items-center ">
            <CiMenuFries className="text-accent text-[32px]"/>
        </SheetTrigger>
        <SheetContent className="bg-black">
            {/* logo */}
            <Link href="/">
          <h1 className="text-4xl font-semibold text-center my-[55px] ">
            Luke<span className="text-accent">.</span>
          </h1>
        </Link>
            {/* nav */}
        <nav className=" flex flex-col gap-y-6 justify-center items-center">
            {links.map((link,index)=>{
                return(
                    <Link href={link.path}key={index} className={`${link.path===pathname&&
                        "text-accent border-b-2 border-accent " 
                    } capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
                )
            })}  
    </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav