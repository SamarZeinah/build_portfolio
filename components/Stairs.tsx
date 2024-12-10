import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",  
  },
  animate: {
    top: "100%",  
  },
  exit: {
    top: ["100%", "0%"],  
  },
};

const reveredIndex = (index: number) => {
  const totalSteps = 6;  
  return totalSteps - index - 1; 
};

const Stairs = () => {
  // render 6 motion divs each repreasenting a step of the stairs
    // Each div will have the same animation defined by the stairAnimation object
    // The delay for each div is calcuated dynamically based on its reversed index
    // Creating a staggered effect with decreasing delay for each subsequent step
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,  
              ease: "easeInOut", 
              delay: reveredIndex(index) * 0.1, 
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
