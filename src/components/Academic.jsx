import { HiAcademicCap } from "react-icons/hi2";
import { motion } from "motion/react";

const Academic = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Formação Acadêmica
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <p className="mb-2 text-sm text-light-400">
            <HiAcademicCap className="text-7xl" />
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl  lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold">
            <span className="text-sm text-purple-100">
              Análise e Desenvolvimento de Sistemas - Uniasselvi
            </span>
          </h6>
          <p className="mb-4 text-neutral-400">Formação: Set 2026</p>
          <p className="mb-4 text-neutral-400">
            O curso forma profissionais para atuar com programação, arquitetura
            de computadores, desenvolvimento de sistemas web, além de executar
            projetos, fazer implementação, implantação e manutenção de
            softwares.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Academic;
