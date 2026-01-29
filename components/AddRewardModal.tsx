import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gamepad2, Pizza, Film, Clock, Gift, Plus } from "lucide-react";
import { CartoonButton } from "./CartoonButton";
interface AddRewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd?: (reward: { name: string; cost: number; category: string }) => void;
}
const categories = [
  {
    id: "gaming",
    icon: Gamepad2,
    label: "Gaming",
    color: "bg-kingdom-blue",
  },
  {
    id: "food",
    icon: Pizza,
    label: "Food",
    color: "bg-kingdom-pink",
  },
  {
    id: "movie",
    icon: "Movie",
    label: "Movie",
    color: "bg-kingdom-purple",
    Icon: Film,
  },
  {
    id: "privilege",
    icon: Clock,
    label: "Privilege",
    color: "bg-kingdom-green",
  },
  {
    id: "mystery",
    icon: Gift,
    label: "Mystery",
    color: "bg-kingdom-yellow",
  },
];
export function AddRewardModal({
  isOpen,
  onClose,
  onAdd,
}: AddRewardModalProps) {
  const [category, setCategory] = useState("gaming");
  const [name, setName] = useState("");
  const [cost, setCost] = useState(500);
  const [quantity, setQuantity] = useState<number | "unlimited">("unlimited");
  const handleSubmit = () => {
    if (name.trim()) {
      onAdd?.({
        name,
        cost,
        category,
      });
      setName("");
      setCost(500);
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
          className="absolute inset-0 bg-kingdom-dark/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0,
            y: 20,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          exit={{
            scale: 0.9,
            opacity: 0,
            y: 20,
          }}
          className="relative bg-kingdom-dark border border-white/10 rounded-[2.5rem] p-8 w-full max-w-lg shadow-2xl overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-kingdom-yellow/20 to-transparent pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-kingdom-yellow/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kingdom-yellow rounded-xl flex items-center justify-center">
                  <Gift className="text-kingdom-dark" size={24} />
                </div>
                <h2 className="text-2xl font-black text-white">Add Reward</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-3">
                  Category
                </label>
                <div className="flex flex-wrap gap-3">
                  {categories.map((cat) => {
                    const IconComponent = cat.id === "movie" ? Film : cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`
                          flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-all
                          ${category === cat.id ? `${cat.color} border-white text-white font-bold shadow-lg scale-105` : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}
                        `}
                      >
                        <IconComponent size={18} />
                        <span className="text-sm">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reward Name */}
              <div>
                <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">
                  Reward Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., 30 min Free Fire"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-yellow focus:ring-1 focus:ring-kingdom-yellow transition-all font-bold"
                />
              </div>

              {/* XP Cost */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-white/60 text-sm font-bold uppercase tracking-wider">
                    XP Cost
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-kingdom-yellow rounded-full flex items-center justify-center">
                      <span className="text-kingdom-dark text-[10px] font-black">
                        ✦
                      </span>
                    </div>
                    <span className="text-kingdom-yellow font-black text-xl">
                      {cost}
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={cost}
                  onChange={(e) => setCost(parseInt(e.target.value))}
                  className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-kingdom-yellow"
                />
                <div className="flex justify-between text-xs text-white/40 mt-1 font-bold">
                  <span>100 XP</span>
                  <span>2000 XP</span>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">
                  Quantity Available
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setQuantity("unlimited")}
                    className={`
                      flex-1 py-3 rounded-xl font-bold text-sm transition-all
                      ${quantity === "unlimited" ? "bg-kingdom-purple text-white" : "bg-white/5 text-white/60 hover:bg-white/10"}
                    `}
                  >
                    Unlimited
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="number"
                      min="1"
                      placeholder="Custom"
                      value={typeof quantity === "number" ? quantity : ""}
                      onChange={(e) =>
                        setQuantity(
                          e.target.value
                            ? parseInt(e.target.value)
                            : "unlimited",
                        )
                      }
                      className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-center font-bold focus:outline-none focus:border-kingdom-purple"
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <p className="text-white/40 text-xs font-bold uppercase mb-2">
                  Preview
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    {category === "gaming" && (
                      <Gamepad2 className="text-kingdom-blue" />
                    )}
                    {category === "food" && (
                      <Pizza className="text-kingdom-pink" />
                    )}
                    {category === "movie" && (
                      <Film className="text-kingdom-purple" />
                    )}
                    {category === "privilege" && (
                      <Clock className="text-kingdom-green" />
                    )}
                    {category === "mystery" && (
                      <Gift className="text-kingdom-yellow" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold">
                      {name || "Reward Name"}
                    </p>
                    <p className="text-kingdom-yellow text-sm font-bold">
                      {cost} XP
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 flex justify-end gap-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full font-bold text-white/60 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <CartoonButton
                  variant="accent"
                  icon={Plus}
                  onClick={handleSubmit}
                >
                  Add Reward
                </CartoonButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
