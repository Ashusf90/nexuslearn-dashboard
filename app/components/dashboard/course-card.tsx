"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Database,
  Sparkles,
  Code2,
} from "lucide-react";

const icons: any = {
  Rocket,
  Database,
  Sparkles,
  Code2,
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: {
  title: string;
  progress: number;
  icon_name: string;
}) {
  const Icon = icons[icon_name];

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-6 relative overflow-hidden hover:border-cyan-400/30 transition-colors"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <Icon className="text-cyan-300" />
          </div>

          <span className="text-white/50">
            {progress}%
          </span>
        </div>

        <h2 className="text-xl font-semibold mt-6">
          {title}
        </h2>

        <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="h-full bg-cyan-400 rounded-full"
          />
        </div>
      </div>
    </motion.article>
  );
}