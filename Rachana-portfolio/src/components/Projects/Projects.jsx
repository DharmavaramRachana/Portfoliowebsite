import React from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "RoomieConnect",
    image: "Roomieconnect.png",
    desc: "Splitwise-style expense sharing platform built with Vue, Node.js, PostgreSQL, and Stripe.",
    github: "https://github.com/Rachana-Surya-Team-Projects/RoomieConnect-Splitwise-Style-Expense-Sharing-Settlements",
  },
  {
    title: "ShopSmart",
    image: "Shopsmart.png",
    desc: "AI-powered product review summarizer and competitor comparison tool.",
    github: "https://github.com/DharmavaramRachana/ShopSmart-AI-Powered-Product-Review-Summarizer-Competitor-Comparison",
  },
  {
    title: "Crime Analytics System",
    image: "Crime.png",
    desc: "Interactive crime analytics dashboard with PostgreSQL and Tableau insights.",
    github: "https://github.com/Rachana-Surya-Team-Projects/Crime-Analytics-System",
  },
  {
    title: "DeepMed",
    image: "Deepmed.png",
    desc: "Healthcare AI system for chest X-ray classification using deep learning.",
    github: "https://github.com/Rachana-Surya-Team-Projects/DeepMed-Unveiling-Health-with-Neural-Networks",
  },
];

export const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.imageWrapper}>
              <img src={p.image} alt={p.title} />
            </div>

            <div className={styles.content}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <a href={p.github} target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
