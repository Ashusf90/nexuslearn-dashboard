"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 min-h-[240px] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.15),transparent_40%)]" />

      <div className="relative z-10">
        <p className="text-white/60 text-lg">
          Welcome back,
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
          Ashu 👋
        </h1>

        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-cyan-300">
            14 Day Learning Streak
          </span>
        </div>
      </div>
    </motion.section>
  );
}