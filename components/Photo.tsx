"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        {/*photo*/}
          <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
       className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
      >
        <div >
          <Image
            src="/assets/photo.png"
            alt="photo miss"
            priority
            quality={100}
            fill
          />
        </div>
          </motion.div>
          {/* Circle */}
          <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] "
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{
                delay: 1,
                duration: 0.4,
                ease: "easeIn", 
            }
          }}>
          
          </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
