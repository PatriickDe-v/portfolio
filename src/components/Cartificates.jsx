import { motion } from "motion/react";
import udemyLogo from "../assets/logos/udemy.png";
import livroLogo from "../assets/logos/livros.png";
const Cartificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Licenças e Certificados
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className=" py-10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:bg-purple-900 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <img
                  src={udemyLogo}
                  alt="Ícone"
                  className="w-10 h-10 mr-4 rounded-full"
                />
                <h3 className="text-white text-lg font-semibold">
                  React.js do básico ao avançado
                </h3>
              </div>
              <p className="text-neutral-400 text-sm">Udemy</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:bg-purple-900 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <img
                  src={udemyLogo}
                  alt="Ícone"
                  class="w-10 h-10 mr-4 rounded-full"
                />
                <h3 className="text-white text-lg font-semibold">
                  Formação Node.js
                </h3>
              </div>
              <p className="text-neutral-400 text-sm">Udemy</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:bg-purple-900 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <img
                  src={udemyLogo}
                  alt="Ícone"
                  class="w-10 h-10 mr-4 rounded-full"
                />
                <h3 className="text-white text-lg font-semibold">
                  TypeScript do básico ao avançado
                </h3>
              </div>
              <p className="text-neutral-400 text-sm">Udemy</p>
            </div>
          </div>
        </div>
        <motion.h6
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Leituras Complementares
        </motion.h6>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:bg-purple-900 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <img
                  src={livroLogo}
                  alt="Ícone"
                  className="w-10 h-10 mr-4 rounded-full"
                />
                <h3 className="text-white text-lg font-semibold">
                  Introdução a linguagem SQL
                </h3>
              </div>
              <p className="text-neutral-400 text-sm">
                Livro da editora Novatec
              </p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:bg-purple-900 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <img
                  src={livroLogo}
                  alt="Ícone"
                  className="w-10 h-10 mr-4 rounded-full"
                />
                <h3 className="text-white text-lg font-semibold">
                  Lógica de programação e algoritmos com JavaScript
                </h3>
              </div>
              <p className="text-neutral-400 text-sm">
                Livro da editora Novatec
              </p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:bg-purple-900 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <img
                  src={livroLogo}
                  alt="Ícone"
                  className="w-10 h-10 mr-4 rounded-full"
                />
                <h3 className="text-white text-lg font-semibold">
                  Aprendendo Node
                </h3>
              </div>
              <p className="text-neutral-400 text-sm">
                Livro da editora Novatec
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cartificates;
