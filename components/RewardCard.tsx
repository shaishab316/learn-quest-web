import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Pizza,
  Film,
  Clock,
  Gift,
  Sparkles,
  Check,
  Loader2,
} from "lucide-react";
export type RewardStatus = "available" | "requested" | "approved" | "redeemed";
interface RewardCardProps {
  name: string;
  cost: number;
  category: "gaming" | "food" | "movie" | "privilege" | "mystery";
  status?: RewardStatus;
  isLimited?: boolean;
  onRequest?: () => void;
}
const categoryConfig = {
  gaming: {
    icon: Gamepad2,
    color: "kingdom-blue",
    bg: "from-kingdom-blue/30 to-kingdom-blue/10",
  },
  food: {
    icon: Pizza,
    color: "kingdom-pink",
    bg: "from-kingdom-pink/30 to-kingdom-pink/10",
  },
  movie: {
    icon: Film,
    color: "kingdom-purple",
    bg: "from-kingdom-purple/30 to-kingdom-purple/10",
  },
  privilege: {
    icon: Clock,
    color: "kingdom-green",
    bg: "from-kingdom-green/30 to-kingdom-green/10",
  },
  mystery: {
    icon: Gift,
    color: "kingdom-yellow",
    bg: "from-kingdom-yellow/30 to-kingdom-yellow/10",
  },
};
const statusConfig = {
  available: {
    label: "Request",
    canRequest: true,
  },
  requested: {
    label: "Pending...",
    canRequest: false,
  },
  approved: {
    label: "Approved!",
    canRequest: false,
  },
  redeemed: {
    label: "Redeemed",
    canRequest: false,
  },
};
export function RewardCard({
  name,
  cost,
  category,
  status = "available",
  isLimited = false,
  onRequest,
}: RewardCardProps) {
  const [isRequesting, setIsRequesting] = useState(false);
  const config = categoryConfig[category];
  const statusInfo = statusConfig[status];
  const Icon = config.icon;
  const handleRequest = () => {
    if (!statusInfo.canRequest) return;
    setIsRequesting(true);
    setTimeout(() => {
      setIsRequesting(false);
      onRequest?.();
    }, 800);
  };
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className={`
        relative bg-linear-to-br ${config.bg}
        border-2 border-white/10 hover:border-${config.color}/50
        rounded-4xl p-5 flex flex-col
        backdrop-blur-md overflow-hidden
        transition-colors duration-300
      `}
    >
      {/* Limited Badge */}
      {isLimited && (
        <div className="absolute top-3 right-3 bg-kingdom-pink text-white text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 animate-pulse">
          <Sparkles size={10} />
          LIMITED
        </div>
      )}

      {/* Icon Area */}
      <div
        className={`
        w-20 h-20 mx-auto mb-4 rounded-2xl
        bg-linear-to-br from-white/10 to-white/5
        border border-white/10
        flex items-center justify-center
        shadow-lg
      `}
      >
        <Icon size={40} className={`text-${config.color}`} strokeWidth={1.5} />
      </div>

      {/* Name */}
      <h3 className="text-white font-bold text-center text-lg mb-2 leading-tight">
        {name}
      </h3>

      {/* Cost */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-6 h-6 bg-kingdom-yellow rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,202,40,0.5)]">
          <span className="text-kingdom-dark text-xs font-black">✦</span>
        </div>
        <span className="text-2xl font-black text-kingdom-yellow">{cost}</span>
        <span className="text-white/40 text-sm font-bold">XP</span>
      </div>

      {/* Action Button */}
      <motion.button
        whileTap={
          statusInfo.canRequest
            ? {
                scale: 0.95,
              }
            : {}
        }
        onClick={handleRequest}
        disabled={!statusInfo.canRequest || isRequesting}
        className={`
          w-full py-3 rounded-xl font-bold text-sm
          transition-all duration-300
          flex items-center justify-center gap-2
          ${status === "available" ? `bg-${config.color} text-white hover:brightness-110 shadow-lg` : status === "requested" ? "bg-white/10 text-kingdom-yellow border border-kingdom-yellow/30" : status === "approved" ? "bg-kingdom-green/20 text-kingdom-green border border-kingdom-green/30" : "bg-white/5 text-white/40 cursor-not-allowed"}
        `}
      >
        {isRequesting ? (
          <Loader2 size={18} className="animate-spin" />
        ) : status === "approved" ? (
          <>
            <Check size={18} />
            {statusInfo.label}
          </>
        ) : (
          statusInfo.label
        )}
      </motion.button>
    </motion.div>
  );
}
