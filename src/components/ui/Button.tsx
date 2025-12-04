import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 min-h-[48px] inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gold-600 text-black hover:bg-gold-500 focus:ring-gold-500 border-transparent',
    secondary: 'bg-gold-700/20 text-gold-400 border-gold-600 hover:bg-gold-700/30 focus:ring-gold-500',
    outline: 'border-gold-600 text-gold-400 hover:bg-gold-900/20 focus:ring-gold-500',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}

