import Link from "next/link";
import { Button } from "../components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
    
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Luke<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* disktop nav */}
        <div className="hidden xl:flex items-center gap-8">
            {/* <ul className="flex gap-8 ">
                <Link href="/Home"><li className="text-accent border-b-2 border-accent  ">Home</li></Link>
                <Link href="/Services"><li>Services</li></Link>
                <Link href="/Resume"><li>Resume</li></Link>
                <Link href="/Work"><li>Work</li></Link>
                <Link href="/Contact"><li>Contact</li></Link>

            </ul> */}
            <Nav/>
            <Link href="/contact">
            <Button>Hire me</Button>
            </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>

      </div>
    </header>
  );
};

export default Header;
