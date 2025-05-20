"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "../assets/Home.module.css";
import boardImage from "../../../public/images/linear.webp";

export default function BallBoard() {
  const { scrollYProgress } = useScroll();

  // Ball moves upward from its current position
  const ballY = useTransform(scrollYProgress, [0, 0.7], [0, -460]);

  // Board rotates from 180deg to 0deg (flipping forward)
  const boardRotateX = useTransform(scrollYProgress, [0, 0.8], [180, 0]);

  return (
    <div className={styles.wrapper}>
      {/* Ball (fixed position, moves upward) */}
      <motion.div 
        style={{ y: ballY }} 
        className={styles.ball} 
      />
      
      {/* Board (rotates while staying fixed) */}
      <motion.div 
        style={{ rotateX: boardRotateX }} 
        className={styles.board}
      >
        <Image 
          src={boardImage} 
          alt="Board" 
          fill 
          sizes="100%" 
          priority 
        />
      </motion.div>
    </div>
  );
}