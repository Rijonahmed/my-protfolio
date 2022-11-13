import React from 'react';
import bannerImg from '../../Images/fortfolioRijon.png';
import { motion } from "framer-motion"
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaHandSpock } from 'react-icons/fa';
import bg_video from '../../Video/production ID_3944851.mp4'


const Banner = () => {
  return (
    <div>

      <div className="hero bg-secondary" style={{
        backgroundImage: `url("https://i.ibb.co/tBrQ6yd/Logo-Makr-0-KWy8-I.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
      }}>
        {/* <video autoPlay loop muted src={bg_video}></video> */}
        <div className='hero-overlay bg-opacity-60'></div>
        <div class="hero-content flex-col lg:flex-row">
          <motion.div
            animate={{ x: -10 }}
            transition={{
              ease: "easeOut", duration: 2
            }}

          >
            <motion.img src={bannerImg} class="max-w-xs lg:max-w-md mask mask-circle shadow-5xl" style={{
              backgroundImage: `url("https://i.makeagif.com/media/2-17-2017/Mi6bfh.gif")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
            }} alt='' whileHover={{ scale: 0.9 }}
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
            <h1 class="text-3xl flex  lg:text-5xl font-bold text-white"> Hey,<motion.div
              animate={{
                scale: [1.5, .7, 1, .7,],
                rotate: [0, 0, 90, 90, 0],
                borderRadius: ["0%", "0%", "50%", "0%"]
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [1, 1, 0],
                repeat: Infinity,
                repeatDelay: 1
              }}
            >👋</motion.div> I am Rijon Ahmed</h1>
            <p class="py-6 font-bold text-1xl lg:text-2xl text-white">Junior web developer / React Expert</p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, }}
              transition={{
                ease: "easeOut", duration: .3
              }}
            ><a className='bg-primary p-3 rounded-2xl text-white font-bold text-center ' href="https://drive.google.com/file/d/1jP_MTWgPW32AM_teIBYb2djO5CuqTB47/view" target="_blank" rel="noopener noreferrer">Downlode Resume</a></motion.button>
            <div className='flex mt-5'>
              <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, }}
                transition={{
                  ease: "easeOut", duration: .3
                }} className='mr-4' href="https://github.com/Rijonahmed" target="_blank" rel="noopener noreferrer"><FaGithub size="2em"></FaGithub></motion.a>

              <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, }}
                transition={{
                  ease: "easeOut", duration: .3
                }} className='mr-4' href="https://www.linkedin.com/in/rijon-ahmed-7274ab240/" target="_blank" rel="noopener noreferrer"><FaLinkedin size="2em" className=''></FaLinkedin></motion.a>
              <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, }}
                transition={{
                  ease: "easeOut", duration: .3
                }} className='mr-4' href="https://www.facebook.com/yeamul036/" target="_blank" rel="noopener noreferrer"> <FaFacebook size="2em"></FaFacebook></motion.a>
              <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, }}
                transition={{
                  ease: "easeOut", duration: .3
                }} className='mr-4' href="https://www.instagram.com/yeamul_ahade_rijon/" target="_blank" rel="noopener noreferrer"><FaInstagram size="2em"></FaInstagram></motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;