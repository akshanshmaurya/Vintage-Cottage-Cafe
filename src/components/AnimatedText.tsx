// src/components/AnimatedText.tsx
import React from "react";
import { useGsapReveal } from "../hooks/useGsapReveal.tsx";

interface AnimatedTextProps {
  text: string;
  as?: React.ElementType;
  split?: "words" | "chars";
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "rotate-in";
  className?: string;
  trigger?: "load" | "scroll";
  stagger?: number;
  delay?: number;
  duration?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  as: Tag = "span",
  split = "words",
  animation = "fade-up",
  className = "",
  trigger = "load",
  stagger = 0.12,
  delay = 0,
  duration = 1,
}) => {
  const ref = useGsapReveal<HTMLDivElement>({
    animation: split === "chars" ? "stagger-up" : animation,
    trigger,
    stagger,
    delay,
    duration,
  });

  const elements =
    split === "chars"
      ? text.split("").map((char, i) => (
          <span key={i} className="inline-block whitespace-pre">
            {char}
          </span>
        ))
      : text.split(" ").map((word, i) => (
          <span key={i} className="inline-block mr-2">
            {word}
          </span>
        ));

  return (
    <Tag ref={ref as any} className={className}>
      {elements}
    </Tag>
  );
};