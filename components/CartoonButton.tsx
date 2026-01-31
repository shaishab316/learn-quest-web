import React from "react";
import { motion } from "framer-motion";
import type { BoxIcon } from "lucide-react";
interface CartoonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "white";
  icon?: typeof BoxIcon;
  className?: string;
  fullWidth?: boolean;
}
export function CartoonButton({
  children,
  onClick,
  variant = "primary",
  icon: Icon,
  className = "",
  fullWidth = false,
}: CartoonButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-b from-kingdom-blue to-blue-600 shadow-[0_6px_0_#0099cc]",
    secondary:
      "bg-gradient-to-b from-kingdom-purple to-purple-700 shadow-[0_6px_0_#8a4baf]",
    accent:
      "bg-gradient-to-b from-kingdom-yellow to-yellow-500 shadow-[0_6px_0_#cc9900]",
    white: "bg-white shadow-[0_6px_0_#cccccc]",
  };
  const textColors = {
    primary: "text-white",
    secondary: "text-white",
    accent: "text-kingdom-dark",
    white: "text-kingdom-dark",
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        filter: "brightness(1.1)",
      }}
      whileTap={{
        scale: 0.95,
        y: 4,
        boxShadow: "0 2px 0 rgba(0,0,0,0.2)",
      }}
      onClick={onClick}
      className={`
        ${variants[variant]} 
        ${textColors[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
        relative px-6 py-3 rounded-full font-bold text-lg tracking-wide
        flex items-center justify-center gap-2
        transition-colors duration-200
        border-2 border-white/20
        cursor-pointer
      `}
    >
      {Icon && (
        <div className="relative">
          <Icon className="w-6 h-6" strokeWidth={3} />
        </div>
      )}
      <span className="drop-shadow-md">{children}</span>

      {/* Shine effect */}
      <div className="absolute top-1 left-4 right-4 h-1/3 bg-white/20 rounded-full blur-[1px]" />
    </motion.button>
  );
}
