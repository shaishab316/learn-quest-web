import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  RotateCcw,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import { CartoonButton } from "./CartoonButton";
interface SubmissionCardProps {
  studentName: string;
  studentLevel: number;
  questTitle: string;
  subject: string;
  submittedAt: string;
  maxXP: number;
  previewType: "text" | "image";
  previewContent: string;
}
export function SubmissionCard({
  studentName,
  studentLevel,
  questTitle,
  subject,
  submittedAt,
  maxXP,
  previewType,
  previewContent,
}: SubmissionCardProps) {
  const [awardedXP, setAwardedXP] = useState(maxXP);
  const [feedback, setFeedback] = useState("");
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="bg-white/5 backdrop-blur-md rounded-4xl border border-white/10 p-6 min-w-87.5 md:min-w-100 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
        <div className="w-12 h-12 bg-kingdom-purple rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-white/20">
          {studentName.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-white text-lg leading-tight">
            {studentName}
          </h4>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span className="bg-white/10 px-2 py-0.5 rounded-full">
              Lvl {studentLevel}
            </span>
            <span>• {submittedAt}</span>
          </div>
        </div>
        <div className="bg-kingdom-blue/20 text-kingdom-blue px-3 py-1 rounded-full text-xs font-bold border border-kingdom-blue/30">
          {subject}
        </div>
      </div>

      {/* Quest Info */}
      <div>
        <h5 className="text-white/60 text-xs uppercase tracking-wider font-bold mb-1">
          Quest Submission
        </h5>
        <p className="text-white font-bold">{questTitle}</p>
      </div>

      {/* Preview Content */}
      <div className="bg-kingdom-dark/40 rounded-xl p-4 border border-white/5">
        {previewType === "text" ? (
          <div className="flex gap-3">
            <FileText className="text-white/40 shrink-0" size={20} />
            <p className="text-white/80 text-sm italic">({previewContent})</p>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
              <ImageIcon className="text-white/40" />
            </div>
            <p className="text-white/60 text-sm">Image attachment provided</p>
          </div>
        )}
      </div>

      {/* Grading Controls */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm font-bold text-white/80">
          <span>Award XP</span>
          <span className="text-kingdom-yellow">{awardedXP} XP</span>
        </div>
        <input
          type="range"
          min="0"
          max={maxXP + 50}
          value={awardedXP}
          onChange={(e) => setAwardedXP(parseInt(e.target.value))}
          className="w-full h-2 bg-kingdom-dark rounded-lg appearance-none cursor-pointer accent-kingdom-yellow"
        />

        <input
          type="text"
          placeholder="Add feedback (optional)..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-kingdom-blue/50 transition-colors text-sm"
        />
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 mt-2">
        <CartoonButton
          variant="accent"
          icon={RotateCcw}
          className="text-sm py-2"
        >
          Redo
        </CartoonButton>
        <CartoonButton
          variant="primary"
          icon={CheckCircle}
          className="text-sm py-2"
        >
          Approve
        </CartoonButton>
      </div>
    </motion.div>
  );
}
