import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Filter, Bell, Crown, Plus } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";
import { RewardCard, RewardStatus } from "./RewardCard";
import { AddRewardModal } from "./AddRewardModal";
import { AvatarFrame } from "./AvatarFrame";
import { CartoonButton } from "./CartoonButton";

interface Reward {
  id: number;
  name: string;
  cost: number;
  category: "gaming" | "food" | "movie" | "privilege" | "mystery";
  status: RewardStatus;
  isLimited?: boolean;
}
interface RedeemShopProps {
  isTeacher?: boolean;
}

export function RedeemShop({ isTeacher = false }: RedeemShopProps) {
  const [filter, setFilter] = useState<
    "all" | "available" | "requested" | "approved"
  >("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [rewards, setRewards] = useState<Reward[]>([
    {
      id: 1,
      name: "30 min Free Fire",
      cost: 500,
      category: "gaming",
      status: "available",
      isLimited: true,
    },
    {
      id: 2,
      name: "Pizza Party Slice",
      cost: 300,
      category: "food",
      status: "available",
    },
    {
      id: 3,
      name: "Movie Night Pick",
      cost: 800,
      category: "movie",
      status: "requested",
    },
    {
      id: 4,
      name: "Extra Recess",
      cost: 400,
      category: "privilege",
      status: "available",
    },
    {
      id: 5,
      name: "Mystery Box",
      cost: 1000,
      category: "mystery",
      status: "available",
      isLimited: true,
    },
    {
      id: 6,
      name: "Homework Pass",
      cost: 600,
      category: "privilege",
      status: "approved",
    },
    {
      id: 7,
      name: "Ice Cream Treat",
      cost: 250,
      category: "food",
      status: "available",
    },
    {
      id: 8,
      name: "1 Hour Minecraft",
      cost: 700,
      category: "gaming",
      status: "available",
    },
  ]);
  const userXP = 2450;
  const filters = ["all", "available", "requested", "approved"] as const;
  const filteredRewards = rewards.filter((r) =>
    filter === "all" ? true : r.status === filter,
  );
  const handleRequest = (id: number) => {
    setRewards((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status: "requested" as RewardStatus,
            }
          : r,
      ),
    );
  };
  const handleAddReward = (reward: {
    name: string;
    cost: number;
    category: string;
  }) => {
    const newReward: Reward = {
      id: rewards.length + 1,
      name: reward.name,
      cost: reward.cost,
      category: reward.category as Reward["category"],
      status: "available",
    };
    setRewards((prev) => [...prev, newReward]);
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-kingdom-dark text-white selection:bg-kingdom-yellow selection:text-kingdom-dark">
      <FloatingParticles />
      <AddRewardModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddReward}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 md:py-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-kingdom-yellow rounded-xl flex items-center justify-center transform -rotate-6 border-2 border-white shadow-[0_0_20px_rgba(255,202,40,0.5)]">
              <ShoppingBag className="text-kingdom-dark" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight leading-none">
                Treasure<span className="text-kingdom-yellow">Shop</span>
              </h1>
              <p className="text-white/50 text-sm font-bold">
                Spend your hard-earned XP!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="flex items-center gap-4"
          >
            <CartoonButton
              variant="accent"
              icon={Plus}
              onClick={() => setIsAddModalOpen(true)}
              className="text-sm py-2"
            >
              Add Reward
            </CartoonButton>

            <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors relative">
              <Bell size={20} />
            </button>
            <AvatarFrame
              imageUrl="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              name="Alex"
            />
          </motion.div>
        </header>

        {/* Wallet Banner */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className="bg-linear-to-r from-kingdom-yellow/20 via-kingdom-yellow/10 to-kingdom-purple/20 rounded-4xl p-6 md:p-8 mb-8 border border-kingdom-yellow/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-kingdom-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <Crown className="text-kingdom-yellow" size={16} />
                Your Treasure Chest
              </p>
              <div className="flex items-baseline gap-3">
                <motion.span
                  className="text-5xl md:text-6xl font-black text-kingdom-yellow drop-shadow-[0_0_20px_rgba(255,202,40,0.5)]"
                  initial={{
                    scale: 0.5,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {userXP.toLocaleString()}
                </motion.span>
                <span className="text-white/60 text-xl font-bold">XP</span>
              </div>
              <p className="text-white/40 text-sm mt-2">
                Complete quests to earn more!
              </p>
            </div>

            <div className="flex gap-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10 text-center">
                <p className="text-2xl font-black text-kingdom-green">3</p>
                <p className="text-white/50 text-xs font-bold">Approved</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10 text-center">
                <p className="text-2xl font-black text-kingdom-purple">1</p>
                <p className="text-white/50 text-xs font-bold">Pending</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Limited Time Banner */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
          }}
          className="bg-linear-to-r from-kingdom-pink to-kingdom-purple rounded-2xl p-4 mb-8 flex items-center justify-between overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-50" />
          <div className="flex items-center gap-3 relative z-10">
            <Sparkles className="text-kingdom-yellow animate-pulse" size={24} />
            <div>
              <p className="font-black text-white">
                🎉 Weekend Double XP Event!
              </p>
              <p className="text-white/70 text-sm">
                All rewards cost 20% less until Sunday
              </p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-xl font-bold text-sm text-white relative z-10">
            Learn More
          </button>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`
                  px-4 py-2 rounded-xl font-bold text-sm capitalize transition-all
                  ${filter === f ? "bg-kingdom-yellow text-kingdom-dark shadow-lg" : "text-white/60 hover:text-white hover:bg-white/5"}
                `}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <Filter size={18} />
            <span className="text-sm font-bold hidden md:inline">Sort by</span>
          </button>
        </div>

        {/* Rewards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredRewards.map((reward) => (
            <motion.div key={reward.id} variants={itemVariants}>
              <RewardCard
                name={reward.name}
                cost={reward.cost}
                category={reward.category}
                status={reward.status}
                isLimited={reward.isLimited}
                onRequest={() => handleRequest(reward.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredRewards.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="text-white/20" size={40} />
            </div>
            <p className="text-white/40 font-bold">
              No rewards found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
