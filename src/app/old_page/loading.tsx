import { SkeletonCard } from "@/components/SkeletonCard";

const loading = () => {
  return (
    <main className={"max-w-6xl mx-auto my-12 flex flex-col gap-10"}>
      <div className={"grid grid-cols-3 gap-8"}>
        {/* Quick way to map over 9 items */}
        {"abcdefghi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default loading;
