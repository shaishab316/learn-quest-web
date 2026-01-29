import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface CartoonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'success';
  icon?: BoxIcon;
  className?: string;
  fullWidth?: boolean;
}
export function CartoonButton({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  fullWidth = false
}: CartoonButtonProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  // Random blinking effect for the "eyes"
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 200);
      }
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);
  const variants = {
    primary:
    'bg-gradient-to-b from-kingdom-blue to-blue-500 shadow-[0_6px_0_#0099cc] border-blue-300',
    secondary:
    'bg-gradient-to-b from-kingdom-purple to-purple-600 shadow-[0_6px_0_#8a4baf] border-purple-300',
    accent:
    'bg-gradient-to-b from-kingdom-yellow to-yellow-500 shadow-[0_6px_0_#cc9900] border-yellow-200',
    success:
    'bg-gradient-to-b from-kingdom-green to-green-600 shadow-[0_6px_0_#2f9e44] border-green-300'
  };
  const textColors = {
    primary: 'text-white',
    secondary: 'text-white',
    accent: 'text-kingdom-dark',
    success: 'text-kingdom-dark'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -2,
        filter: 'brightness(1.1)'
      }}
      whileTap={{
        scale: 0.95,
        y: 4,
        boxShadow: '0 2px 0 rgba(0,0,0,0.2)'
      }}
      onClick={onClick}
      className={`
        ${variants[variant]} 
        ${textColors[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
        relative px-6 py-3 rounded-2xl font-black text-lg tracking-wide
        flex items-center justify-center gap-3
        transition-colors duration-200
        border-t-2 border-l-2 border-r-2 border-b-0
        overflow-hidden group
      `}>

      {/* Candy Shine Effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-80 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

      {Icon &&
      <div className="relative z-10">
          <Icon className="w-6 h-6 drop-shadow-sm" strokeWidth={3} />

          {/* Cute Eyes */}
          <div className="absolute top-[30%] left-[20%] w-full h-full pointer-events-none">
            <motion.div
            className="absolute top-0 left-0 w-[3px] h-[3px] bg-white rounded-full shadow-sm"
            animate={{
              scaleY: isBlinking ? 0.1 : 1
            }} />

            <motion.div
            className="absolute top-0 right-[40%] w-[3px] h-[3px] bg-white rounded-full shadow-sm"
            animate={{
              scaleY: isBlinking ? 0.1 : 1
            }} />

          </div>
        </div>
      }

      <span className="drop-shadow-md z-10 relative">{children}</span>
    </motion.button>);

}