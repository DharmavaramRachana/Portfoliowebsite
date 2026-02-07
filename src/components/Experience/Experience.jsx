import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const experiences = [
  {
    company: "Crypt0nest.ai",
    role: "AI/ML R&D and Product Intern (Team Lead – Machine Learning Track)",
    duration: "May 2025 – August 2025",
    location: "Austin, TX",
    stack:
      "Python, CatBoost, XGBoost, Pandas, NumPy, CoinGecko API, DeFiLlama API, LunarCrush API, Git, Walk-forward Validation",
    logo: "/cryptonest.png",
    points: [
      "Designed and scaled data pipelines from 10 → 200 assets integrating market, on-chain, and sentiment data.",
      "Built predictive backend services using CatBoost & XGBoost with walk-forward validation achieving Sharpe ratio 1.27.",
      "Owned end-to-end pipeline lifecycle: ingestion, feature engineering, model execution, delivery.",
      "Led code reviews and mentored interns to improve quality and delivery velocity.",
    ],
  },
  {
    company: "I&T Labs",
    role: "Full Stack Development Intern",
    duration: "January 2023 – May 2024",
    location: "Vijayawada, India",
    stack:
      "Python (Django), PostgreSQL, Bootstrap, HTML/CSS, JavaScript, Git, Testing",
    logo: "/itlabs.png",
    points: [
      "Designed and deployed AWS EC2 inventory system supporting 10+ businesses and 50+ daily users.",
      "Built REST APIs reducing operational errors by 30% and monitoring time by 40%.",
      "Optimized SQL improving dashboard load speed by 35% supporting 1,000+ requests.",
      "Implemented unit & integration tests ensuring production reliability.",
    ],
  },
];

const variants = {
  hiddenLeft: { opacity: 0, x: -120 },
  hiddenRight: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.timeline}>
        {experiences.map((exp, i) => {
          const direction = i % 2 === 0 ? "hiddenLeft" : "hiddenRight";

          return (
            <motion.div
              key={i}
              className={styles.card}
              variants={variants}
              initial={direction}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}

              /* staggered reveal */
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: "easeOut",
              }}

              /* hover effect */
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0 30px 80px rgba(0, 140, 255, 0.25)",
              }}
            >
              <div className={styles.logoWrapper}>
                <img src={exp.logo} alt={exp.company} className={styles.logo} />
              </div>

              <div className={styles.headerRow}>
                <h3>{exp.company}</h3>
                <span className={styles.date}>{exp.duration}</span>
              </div>

              <div className={styles.subHeader}>
                <em>{exp.role}</em>
                <span>{exp.location}</span>
              </div>

              <p className={styles.stack}>
                <strong>Stack:</strong> {exp.stack}
              </p>

              <ul className={styles.points}>
                {exp.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
