import { Button } from "@/components/ui/button";
import { FiDownload ,FiTwitter,FiLinkedin,FiGithub,FiYoutube} from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className=" flex flex-col xl:flex-row justify-between items-center
        xl:pt-8 xl:pb-24"
        >
          {/* text */}
          <div className=" text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I`m <br />
              <span className="text-accent">Luke coleman</span>
            </h1>
            <p className="max-w-[500px] text-white/80 mb-9">
              I excel at crafting elegant gigital experiences and I am
              Proficient in various Programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* button */}
              <Button
                variant={"outline"}
                size={"lg"}
                className="flex items-center gap-2"
              >
                <span>Download cv</span>
                <FiDownload className=" text-xl" />
              </Button>
              {/* icons */}
              <div className="flex items-center justify-center gap-4 ">
                <Socials/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none">
            <Photo/>
          </div>

        </div>
      </div>
    </section>
  );
}
