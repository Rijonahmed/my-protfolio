import React from 'react';
import bannerImg from '../../Images/fortfolioRijon.png';
import { motion } from "framer-motion"
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <motion.div
            animate={{ x: -10 }}
            transition={{
              ease: "easeOut", duration: 2
            }}

          >
            <motion.img src={bannerImg} class="max-w-xs lg:max-w-md mask mask-decagon shadow-3xl border-8 border-slate-500" alt='' whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9, }} transition={{
                ease: "easeOut", duration: 0.5
              }} />
          </motion.div>
          <motion.div
            initial={{ opactiy: 2 }}
            animate={{ x: 10 }}
            transition={{
              ease: "easeOut", duration: 2
            }}
          >
            <h1 class="text-5xl font-bold"> Hey, I am Rijon Ahmed</h1>
            <p class="py-6 font-bold">Junior web developer / React Expert</p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, }}
              transition={{
                ease: "easeOut", duration: .3
              }}
            ><a className='bg-orange-600 p-3 rounded-2xl text-white font-bold text-center ' href="https://drive.google.com/file/d/1jP_MTWgPW32AM_teIBYb2djO5CuqTB47/view" target="_blank" rel="noopener noreferrer">Downlode Resume</a></motion.button>
            <div className='flex mt-5'>
              <a className='mr-4' href="https://github.com/Rijonahmed" target="_blank" rel="noopener noreferrer"><FaGithub size="2em"></FaGithub></a>

              <a className='mr-4' href="https://www.linkedin.com/in/rijon-ahmed-7274ab240/" target="_blank" rel="noopener noreferrer"><FaLinkedin size="2em"></FaLinkedin></a>
              <a className='mr-4' href="https://www.facebook.com/yeamul036/" target="_blank" rel="noopener noreferrer"> <FaFacebook size="2em"></FaFacebook></a>
              <a className='mr-4' href="https://www.instagram.com/yeamul_ahade_rijon/" target="_blank" rel="noopener noreferrer"><FaInstagram size="2em"></FaInstagram></a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;