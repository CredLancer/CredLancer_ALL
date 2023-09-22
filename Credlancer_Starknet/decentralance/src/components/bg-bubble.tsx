import { cn } from "~/lib/utils";

const BgBubble = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-[650px] animate-slowjiggle w-[650px] rounded-full bg-gradient-to-tr from-[#b429f9] to-[#26c5f3] opacity-[2%] md:opacity-[4%] blur-xl",
        className
      )}
    />
  );
};

export default BgBubble;
