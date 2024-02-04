import { motion } from "framer-motion";

export default function AnimatedText({text}){

  const words = text.split(" ")
  const sentence = {
    hidden:{ opacity:1 },
    visible: {
      opacity: 1,
      
      transition: {
        delay: 2,
        staggerChildren: 0.08,
        duration: 4,


      }
    }
  }

  const letter ={
    hidden: { opacity:0, y:[0, 50, 50, 0] },
    visible: {
      opacity :1,
      y: 2,
      transition: {
        repeat: Infinity,
        duration: 1.5,
        repeatType: 'reverse',
        repeatDelay: 1
      }
      
      
    }
  }

  return(
      <motion.div
        style={{ overflow: "hidden", display:"marginRight", fontSize: "2rem" }}
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="text-primary_text md:flex "
      >
        {words.map((word, index) => (
          <motion.span
            variants={letter}
            key={index}
            className="lg:text-6xl md:text-4xl text-2xl font-thin py-5 tracking-wider lg:m-4 md:m-2 m-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
}