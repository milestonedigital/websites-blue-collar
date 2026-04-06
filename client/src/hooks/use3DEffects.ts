/*
 * DESIGN: Bold Modernism — Dark Agency Aesthetic
 * 3D scroll effects using Framer Motion
 */

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

/**
 * Returns motion values for a 3D card tilt effect on mouse move.
 * Usage: attach onMouseMove, onMouseLeave to the card container.
 */
export function useTilt3D(strength = 15) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
}
