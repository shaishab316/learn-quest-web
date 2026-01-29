import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calculator,
  FlaskConical,
  BookOpen,
  Palette,
  Star,
} from "lucide-react";
import { CartoonButton } from "./CartoonButton";
interface CreateQuestModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function CreateQuestModal({ isOpen, onClose }: CreateQuestModalProps) {
  const [subject, setSubject] = useState("math");
  const [difficulty, setDifficulty] = useState("medium");
  const [xp, setXp] = useState(500);
  const subjects = [
    {
      id: "math",
      icon: Calculator,
      label: "Math",
      color: "bg-kingdom-blue",
    },
    {
      id: "science",
      icon: FlaskConical,
      label: "Science",
      color: "bg-kingdom-purple",
    },
    {
      id: "reading",
      icon: BookOpen,
      label: "Reading",
      color: "bg-kingdom-yellow",
    },
    {
      id: "art",
      icon: Palette,
      label: "Art",
      color: "bg-kingdom-pink",
    },
  ];
  const difficulties = ["Easy", "Medium", "Hard", "Boss"];
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
          className="relative bg-kingdom-dark border border-white/10 rounded-[2.5rem] p-8 w-full max-w-2xl shadow-2xl overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-kingdom-purple/20 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-black text-white">
                Create New Quest
              </h2>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Subject Selection */}
              <div>
                <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-3">
                  Subject
                </label>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {subjects.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setSubject(sub.id)}
                      className={`
                        flex items-center gap-2 px-4 py-3 rounded-2xl border-2 transition-all
                        ${subject === sub.id ? `${sub.color} border-white text-kingdom-dark font-bold shadow-lg scale-105` : "bg-white/5 border-white/10 text-white hover:bg-white/10"}
                      `}
                    >
                      <sub.icon size={20} />
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <div>
                  <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">
                    Quest Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., The Great Fraction Adventure"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-blue focus:ring-1 focus:ring-kingdom-blue transition-all font-bold text-lg"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">
                    Instructions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Explain what the student needs to do..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-blue focus:ring-1 focus:ring-kingdom-blue transition-all resize-none"
                  />
                </div>
              </div>

              {/* Rewards & Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">
                    XP Reward: {xp}
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={xp}
                    onChange={(e) => setXp(parseInt(e.target.value))}
                    className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-kingdom-yellow"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-1 font-bold">
                    <span>100 XP</span>
                    <span>1000 XP</span>
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">
                    Difficulty
                  </label>
                  <div className="flex bg-white/5 rounded-xl p-1 border border-white/10">
                    {difficulties.map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setDifficulty(diff.toLowerCase())}
                        className={`
                          flex-1 py-2 rounded-lg text-sm font-bold transition-all
                          ${difficulty === diff.toLowerCase() ? "bg-white/20 text-white shadow-sm" : "text-white/40 hover:text-white/70"}
                        `}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-white/10 flex justify-end gap-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full font-bold text-white/60 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <CartoonButton icon={Star} onClick={onClose}>
                  Create Quest
                </CartoonButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
