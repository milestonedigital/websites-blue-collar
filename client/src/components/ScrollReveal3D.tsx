/*
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * Reusable scroll-triggered 3D reveal wrapper
 * DRAMATIC: Large rotateX/Y angles, deep perspective, strong entrance
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollReveal3DProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal3D({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollReveal3DProps) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 80, rotateX: 35, scale: 0.92 }
      : direction === "left"
      ? { opacity: 0, x: -100, rotateY: -25, scale: 0.92 }
      : { opacity: 0, x: 100, rotateY: 25, scale: 0.92 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, rotateX: 0, rotateY: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformPerspective: 700, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
