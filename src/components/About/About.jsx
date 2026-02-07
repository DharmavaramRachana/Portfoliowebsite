import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <img
            src="/aboutImage.png"
            alt="Rachana"
            className={styles.profileImg}
          />
        </div>

        {/* Text */}
        <div className={styles.text}>
          <h2>About Me</h2>

          <p>
            Hi, I’m Rachana. I’m a software engineer passionate about building
            scalable systems and intelligent applications that solve real-world
            problems.
          </p>

          <p>
            My foundation comes from hands-on experience developing full-stack
            and backend systems. During my internship, I designed and deployed
            cloud-hosted services on AWS, built RESTful APIs, and optimized
            database workflows that supported real users in production. This
            strengthened my skills in backend engineering and cloud architecture
            while teaching me how to build reliable software at scale.
          </p>

          <p>
            I completed my Master’s in Computer Science, where I built a strong
            foundation in algorithms, operating systems, and machine learning.
            My focus is on understanding not just how to write code, but how
            software behaves at scale — from performance and security to
            maintainability.
          </p>

          <p>
            Today, I focus on combining software engineering with AI to build
            scalable, intelligent applications. I’m exploring how modern
            machine learning systems integrate with cloud architectures to
            create tools that are smart, efficient, and built for real-world
            impact.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>⚡ Scalable Systems</div>
            <div className={styles.card}>☁️ Cloud & DevOps</div>
            <div className={styles.card}>🧠 AI & Machine Learning</div>
            <div className={styles.card}>🚀 Backend Engineering</div>
          </div>

        </div>

      </div>
    </section>
  );
};
