import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>Contact</h2>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className={styles.text}>
          I’m open to opportunities and collaborations. Feel free to reach out.
        </p>

        <div className={styles.links}>
          <a href="mailto:drachana27@gmail.com">
            <img src="gmail.png" alt="Email" />
            <span>Email</span>
          </a>

          <a href="https://github.com/DharmavaramRachana" target="_blank">
            <img src="github.png" alt="GitHub" />
            <span>GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/rachanadharmavaram/" target="_blank">
            <img src="linkedin.png" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
