"use client";
import React from "react";
import Button from "../Button/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGlobalContext } from "@/app/utils/globalContext";
useTransform
function Menu() {
  const context = useGlobalContext();
  const { toggle, handleToggle } = context;
  
  //scroll
  const listItem = React.useRef(null); //reread
    const scrollYProgress = useScroll({
        target: listItem,
        offset: ["start end", "end start"]
    }).scrollYProgress;


    const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]); //reread

  const menuVariants = {
    visible: {

      y: -10,
      x: -30,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      display: "block", // Set display to "block" when visible
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 24,
      },
    },
    hidden: {
      x: 500,
      scaleX: 0.5,
      scaleY: 0.2,
      transition: {
        type: "ease",
        stiffness: 200,
        damping: 30,
      },
      transitionEnd: {
        display: "none", // Set display to "none" after the transition
      },
    },
  };
  return (
    <motion.div
      className="menu"
      initial="hidden"
      variants={menuVariants}
      animate={toggle? "visible" : "hidden"}
      whileInView={"visible"}
    >
      <div className="buttons">
        <Button
          text="メールアドレス"
          bg="white"
          onClick={() => {
            window.location.href = "mailto:nam.dh213718@sis.hust.edu.vn";
          }}
          padding=".8rem 2.5rem"
          hover="true"
        />
        <Button
          text="GitHubページ"
          bg="#ffffff"
          onClick={() => {
            window.open("https://github.com/dohoangnam2912", "_blank");
          }}
          padding=".8rem 2.5rem"
          hover="true"
        />
      </div>
    </motion.div>
  );
}

export default Menu;