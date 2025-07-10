// src/hooks/useGsapReveal.ts
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "rotate-in" | "stagger-up";

interface UseGsapRevealOptions {
  animation?: AnimationType;
  trigger?: "load" | "scroll";
  stagger?: number;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  rotate?: number;
  once?: boolean;
}

export function useGsapReveal<T extends HTMLElement = HTMLElement>(
  options: UseGsapRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const {
      animation = "fade-up",
      trigger = "scroll",
      stagger = 0,
      delay = 0,
      duration = 1,
      y = 40,
      x = 0,
      rotate = 0,
      once = true,
    } = options;

    let fromVars: gsap.TweenVars = { opacity: 0, delay, duration };
    let toVars: gsap.TweenVars = { opacity: 1, delay, duration, ease: "power3.out" };

    switch (animation) {
      case "fade-up":
        fromVars.y = y;
        toVars.y = 0;
        break;
      case "fade-in":
        break;
      case "slide-left":
        fromVars.x = x || -40;
        toVars.x = 0;
        break;
      case "slide-right":
        fromVars.x = x || 40;
        toVars.x = 0;
        break;
      case "rotate-in":
        fromVars.rotate = rotate || -10;
        toVars.rotate = 0;
        break;
      case "stagger-up":
        fromVars.y = y;
        toVars.y = 0;
        toVars.stagger = stagger || 0.08;
        break;
    }

    if (trigger === "scroll") {
      toVars.scrollTrigger = {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: once ? "play none none none" : "play reverse play reverse",
        once,
      };
    }

    if (animation === "stagger-up" && ref.current.children.length > 0) {
      gsap.fromTo(
        ref.current.children,
        fromVars,
        toVars
      );
    } else {
      gsap.fromTo(ref.current, fromVars, toVars);
    }
  }, [
    options.animation,
    options.trigger,
    options.stagger,
    options.delay,
    options.duration,
    options.y,
    options.x,
    options.rotate,
    options.once,
  ]);

  return ref;
}


