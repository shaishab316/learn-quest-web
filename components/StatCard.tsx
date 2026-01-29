import { motion } from "framer-motion";
import type { BoxIcon } from "lucide-react";
interface StatCardProps {
  label: string;
  value: string | number;
  icon: typeof BoxIcon;
  color: "blue" | "purple" | "yellow" | "pink" | "green";
  trend?: string;
}
export function StatCard({
  label,
  value,
  icon: Icon,
  color,
  trend,
}: StatCardProps) {
  const colorMap = {
    blue: "bg-kingdom-blue text-kingdom-dark",
    purple: "bg-kingdom-purple text-white",
    yellow: "bg-kingdom-yellow text-kingdom-dark",
    pink: "bg-kingdom-pink text-white",
    green: "bg-kingdom-green text-kingdom-dark",
  };
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="bg-white/5 backdrop-blur-lg rounded-4xl p-6 border border-white/10 relative overflow-hidden group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-2xl ${colorMap[color]} shadow-lg`}>
          <Icon size={24} strokeWidth={2.5} />
        </div>
        {trend && (
          <span className="text-kingdom-green text-sm font-bold bg-kingdom-green/10 px-2 py-1 rounded-full border border-kingdom-green/20">
            {trend}
          </span>
        )}
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-black text-white mb-1 tracking-tight">
          {value}
        </h3>
        <p className="text-white/60 font-medium text-sm uppercase tracking-wider">
          {label}
        </p>
      </div>

      {/* Decorative background glow */}
      <div
        className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-3xl ${colorMap[color].split(" ")[0]}`}
      />
    </motion.div>
  );
}
