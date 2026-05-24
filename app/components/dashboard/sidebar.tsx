"use client";

import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { icon: Home, label: "Home" },
  { icon: BookOpen, label: "Courses" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <aside className="hidden md:flex flex-col w-24 border-r border-white/10 bg-black/40 backdrop-blur-xl p-4">
        <nav className="flex flex-col gap-4 mt-10">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className="relative flex items-center justify-center h-14 rounded-2xl"
              >
                {active === item.label && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-2xl bg-cyan-500/20 border border-cyan-400/30"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <Icon className="relative z-10 text-white" />
              </button>
            );
          })}
        </nav>
      </aside>

      <nav className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="relative p-3 rounded-xl"
            >
              {active === item.label && (
                <motion.div
                  layoutId="mobile-pill"
                  className="absolute inset-0 rounded-xl bg-cyan-500/20"
                />
              )}

              <Icon className="relative z-10 text-white" size={20} />
            </button>
          );
        })}
      </nav>
    </>
  );
}