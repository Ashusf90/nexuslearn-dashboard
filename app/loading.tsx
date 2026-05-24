export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6 md:p-10">
      <div className="animate-pulse space-y-6">
        <div className="h-52 rounded-3xl bg-zinc-900" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-52 rounded-3xl bg-zinc-900"
            />
          ))}
        </div>
      </div>
    </main>
  );
}