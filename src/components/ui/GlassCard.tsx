'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'blue' | 'pink' | 'green';
  hoverable?: boolean;
}

const glowColors = {
  purple: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
  cyan: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
  blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
  pink: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]',
  green: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
};

const borderGlowColors = {
  purple: 'rgba(168,85,247,0.3)',
  cyan: 'rgba(6,182,212,0.3)',
  blue: 'rgba(59,130,246,0.3)',
  pink: 'rgba(236,72,153,0.3)',
  green: 'rgba(16,185,129,0.3)',
};

export default function GlassCard({
  children,
  className = '',
  glowColor = 'purple',
  hoverable = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`
        glass-card rounded-2xl p-6
        transition-all duration-500 ease-out
        ${hoverable ? glowColors[glowColor] : ''}
        ${className}
      `}
      whileHover={
        hoverable
          ? {
              y: -5,
              borderColor: borderGlowColors[glowColor],
              transition: { duration: 0.3 },
            }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
