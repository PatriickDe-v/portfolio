import helloWorld from "../assets/helloWorld.gif";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:md-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Patrick Strassburger
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-4xl 
            tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Sou movido pela paixão por tecnologia e pela capacidade de
              materializar ideias em código. Com uma base sólida em
              desenvolvimento web, dedico-me a aprimorar minhas habilidades
              continuamente, buscando sempre gerar um impacto positivo por meio
              das minhas soluções.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={helloWorld}
              alt="computer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
