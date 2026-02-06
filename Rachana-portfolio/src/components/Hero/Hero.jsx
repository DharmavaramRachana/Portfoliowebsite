import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className = {styles.container}>
        <div className = {styles.content}><h1 className= {styles.title}>Hi, I'm Rachana Dharmavaram</h1>
        <p className = {styles.description}>Software Development Engineer with strong foundations in computer science and experience designing, building, and operating scalable, fault-tolerant
           backend services. Proven ownership of cloud-native systems on AWS, CI/CD pipelines, and distributed data workflows. Passionate about solving real
           customer problems through clean, maintainable code and operational excellence.
        </p>
        <a href = "mailto:drachana27@gmail.com" className = {styles.contactBtn}>Contact Me</a>
        </div>
        <img src="/HeroImage.png" alt="Rachana profile" className = {styles.heroImg}/>
          <div className= {StyleSheet.topBlur}/>
          <div className= {StyleSheet.bottomBlur}/>
    </section>;
};