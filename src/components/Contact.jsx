import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { PhoneCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const Contact = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Mes coordonnées
        </p>
        <h2 className={styles.sectionHeadText}>
          Convaincu ?
        </h2>
      </motion.div>
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <div>
            <h3 className='text-white text-[24px] font-bold'>Téléphone</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>06.34.82.11.61</p>
          </div>
          <div>
            <h3 className='text-white text-[24px] font-bold'>Email</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>marvin.viverge@gmail.com</p>
          </div>
          <div>
            <h3 className='text-white text-[24px] font-bold'>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/marvin-viverge" className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>Marvin VIVERGE</a>
          </div>
          <div>
            <h3 className='text-white text-[24px] font-bold'>Localisation</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>Meurthe-et-Moselle (54) - FRANCE</p>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <PhoneCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");