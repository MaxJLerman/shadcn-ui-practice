import { SkeletonCard } from "@/components/SkeletonCard/SkeletonCard";

const loading = () => {
  return (
    <main>
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
