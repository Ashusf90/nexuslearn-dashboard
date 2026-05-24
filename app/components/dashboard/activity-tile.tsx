"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const bars = [40, 70, 55, 90, 65, 80, 50];
  <div className="flex justify-between mt-4 text-xs text-white/40">
  <span>Mon</span>
  <span>Tue</span>
  <span>Wed</span>
  <span>Thu</span>
  <span>Fri</span>
  <span>Sat</span>
  <span>Sun</span>
</div>

  return (
    <motion.section
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-xl overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_40%)]" />

      <div className="relative z-10">
        <h3 className="text-xl font-semibold">
          Weekly Activity
        </h3>

        <div className="mt-8 flex items-end gap-3 h-40">
          {bars.map((bar, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${bar}%` }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-400"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}