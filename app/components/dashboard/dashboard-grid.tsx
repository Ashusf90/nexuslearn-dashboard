"use client";

import { motion } from "framer-motion";
import HeroTile from "./hero-tile";
import CourseCard from "./course-card";
import ActivityTile from "./activity-tile";
import { Course } from "@/app/types/course";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function DashboardGrid({
  courses,
}: {
  courses: Course[];
}) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      <motion.div
        variants={item}
        className="lg:col-span-2"
      >
        <HeroTile />
      </motion.div>

      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={item}
        >
          <CourseCard
            title={course.title}
            progress={course.progress}
            icon_name={course.icon_name}
          />
        </motion.div>
      ))}

      <motion.div
        variants={item}
        className="lg:col-span-2"
      >
        <ActivityTile />
      </motion.div>
    </motion.section>
  );
}