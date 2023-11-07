import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typical from "react-typical";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div className="w-full">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m{" "}
            <span className="text-[#915eff]">
              {" "}
              <Typical
                steps={[
                  "Sahil",
                  1000,
                  "Web Developer",
                  3500,
                  "Full stack Developer",
                  5000,
                ]}
                loop={Infinity}
              />{" "}
            </span>{" "}
          </h1>
          <p className={`${styles.heroSubText}`}>
            A computer science student passionate about programming{" "}
            <br className="sm:block hidden" /> and study new technology
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-2xl bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
