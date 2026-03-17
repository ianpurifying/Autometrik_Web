'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { type ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export default function NeonButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: NeonButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500
      text-white font-semibold
      shadow-[0_0_20px_rgba(168,85,247,0.3)]
      hover:shadow-[0_0_40px_rgba(168,85,247,0.5),0_0_80px_rgba(168,85,247,0.2)]
    `,
    secondary: `
      bg-white/5 border border-white/10
      text-white font-medium
      hover:bg-white/10 hover:border-purple-500/30
    `,
    outline: `
      bg-transparent border border-purple-500/40
      text-purple-400 font-medium
      hover:bg-purple-500/10 hover:border-purple-500/60
    `,
  };

  const buttonContent = (
    <motion.span
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl cursor-pointer
        transition-all duration-300 ease-out
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      );
    }
    return <Link href={href}>{buttonContent}</Link>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}
