"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => {
      const left = Math.floor(Math.random() * window.innerWidth);
      return {
        "--angle": angle + "deg",
        top: `-${Math.floor(Math.random() * 100)}px`, // spawn above the screen
        left: `${left}px`,
        animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
        animationDuration:
          Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s",
      };
    });
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      <style jsx>{`
        @keyframes meteor {
          0% {
            transform: translate(0, 0) rotate(var(--angle));
            opacity: 1;
          }
          100% {
            transform: translate(500px, 800px) rotate(var(--angle));
            opacity: 0;
          }
        }
      `}</style>

      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "pointer-events-none absolute h-0.5 w-0.5 animate-[meteor_linear_infinite] rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  );
};
