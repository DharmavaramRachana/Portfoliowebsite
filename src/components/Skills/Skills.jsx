import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
  SiGraphql,
  SiFastapi,
  SiRedis,
  SiKubernetes,
} from "react-icons/si";

const HuggingFaceIcon = () => (
  <img
    src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
    alt="Hugging Face"
    style={{ width: "44px" }}
  />
);

const skills = [
  { icon: <FaPython />, color: "#3776AB" },
  { icon: <SiJavascript />, color: "#F7DF1E" },
  { icon: <FaJava />, color: "#EA2D2E" },
  { icon: <SiCplusplus />, color: "#00599C" },
  { icon: <FaReact />, color: "#61DBFB" },
  { icon: <FaNodeJs />, color: "#3C873A" },
  { icon: <FaAws />, color: "#FF9900" },
  { icon: <FaDocker />, color: "#2496ED" },
  { icon: <FaGitAlt />, color: "#F1502F" },
  { icon: <FaLinux />, color: "#FCC624" },
  { icon: <SiTypescript />, color: "#3178C6" },
  { icon: <SiMongodb />, color: "#47A248" },
  { icon: <SiPostgresql />, color: "#336791" },
  { icon: <SiMysql />, color: "#4479A1" },
  { icon: <SiTensorflow />, color: "#FF6F00" },
  { icon: <SiPytorch />, color: "#EE4C2C" },
  { icon: <SiNextdotjs />, color: "#FFFFFF" },
  { icon: <SiTailwindcss />, color: "#38BDF8" },
  { icon: <SiOpenai />, color: "#10A37F" },
  { icon: <HuggingFaceIcon />, color: "#FFD21E" },

  /* ✅ NEW SKILLS ADDED */
  { icon: <SiGraphql />, color: "#E10098" },
  { icon: <SiFastapi />, color: "#009688" },
  { icon: <SiRedis />, color: "#DC382D" },
  { icon: <SiKubernetes />, color: "#326CE5" },
];

export const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.title}>Technologies</h2>

      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className={styles.card}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.15,
              boxShadow: `0 0 25px ${skill.color}`,
            }}
          >
            <div
              className={styles.icon}
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
