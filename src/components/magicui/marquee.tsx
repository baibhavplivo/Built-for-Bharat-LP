import React from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      style={{
        gap: "var(--gap)",
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0", {
              "flex-row": !vertical,
              "flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
            style={{
              gap: "var(--gap)",
              animation: `marquee var(--duration) linear infinite${reverse ? " reverse" : ""}`,
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
