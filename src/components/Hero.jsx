import { motion } from "framer-motion";
import { styles } from "../styles";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check screen width
    };

    window.addEventListener("resize", handleResize);

    // Set initial state
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`relative w-full h-[130vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4B00B1]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[Darkblue]">Rohit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Web and Mobile Applications <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      {/* Render image or 3D model based on screen size */}
      <div className="absolute inset-0 flex justify-center items-center">
        {!isMobile ? (
          <ComputersCanvas /> // Render the 3D model for larger screens
        ) : (
          <img
            src="C:\Users\neelt\Downloads\Portfolio\src\assets\myimage.jpg" // Replace with your image path
            alt="Hero Illustration"
            className="w-full h-auto object-contain" // Adjust styling as needed
          />
        )}
      </div>

      <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
