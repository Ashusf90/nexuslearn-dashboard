import { supabase } from "@/app/lib/supabase";
import Sidebar from "@/app/components/dashboard/sidebar";
import DashboardGrid from "@/app/components/dashboard/dashboard-grid";
import { Course } from "@/app/types/course";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        Failed to fetch courses
      </main>
    );
  }
if (!courses || courses.length === 0) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      No courses found.
    </main>
  );
}
  return (
    <main className="min-h-screen bg-black text-white flex mesh-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <Sidebar />

      <section className="flex-1 p-6 md:p-10 relative z-10">
        <div className="mb-8">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.2em]">
            Learning Dashboard
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Student Overview
          </h1>
        </div>

        <DashboardGrid courses={courses as Course[]} />
      </section>
    </main>
  );
}