import React from "react";
import { motion } from "framer-motion";
import styles from "./Education.module.css";

const education = [
  {
    logo: "UB.png",
    school: "University at Buffalo",
    degree: "Master of Science in Computer Science",
    duration: "Aug 2024 – Dec 2025",
    gpa: "GPA: 3.5 / 4.0",
    location: "Buffalo, NY",
    coursework: [
      "Algorithms",
      "Operating Systems",
      "Software Engineering",
      "Deep Learning",
      "Machine Learning",
      "Computer Security",
      "Data Models & Query Language",
      "Computer Vision & Image Processing",
    ],
  },
  {
    logo: "SRM.png",
    school: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology",
    duration: "Aug 2020 – Sep 2024",
    gpa: "GPA: 9.6 / 10.0",
    location: "Chennai, India",
    coursework: [],
  },
];

export const Education = () => {
  return (
    <section className={styles.education} id="education">
      <h2 className={styles.title}>Education</h2>

      {education.map((edu, i) => (
        <motion.div
          key={i}
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
          <div className={styles.header}>
            <div className={styles.left}>
                <img src={edu.logo} alt={edu.school} className={styles.logo} />

                <div className={styles.info}>
                <h3>{edu.school}</h3>
                <p className={styles.degree}>{edu.degree}</p>
                </div>
            </div>

            <div className={styles.right}>
                <p>{edu.location}</p>
                <p>{edu.duration}</p>
                <p className={styles.gpa}>{edu.gpa}</p>
            </div>
            </div>


          {edu.coursework.length > 0 && (
            <div className={styles.coursework}>
              <h4>Relevant Coursework</h4>
              <div className={styles.tags}>
                {edu.coursework.map((course, idx) => (
                  <span key={idx} className={styles.tag}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </section>
  );
};
