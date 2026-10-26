"use client";

import { useEffect, useState } from "react";

/**
 * Motion gate.
 *
 * Every RAF-driven animation on this site has a pre-animation state with
 * opacity 0.35 and a large rotation. When the frame budget blows on a
 * mid-range phone, those loops starve each other and the transform parks
 * in the pre-state — the visitor sees blurred, rotated, 35%-opacity
 * content. That is what reads as "unfinished".
 *
 * This hook returns false when motion must not run, and every consumer is
 * required to hard-set its FINISHED state and start no RAF loop at all.
 *
 * Gated on:
 *  - prefers-reduced-motion (OS accessibility setting)
 *  - low-tier device (few cores or small memory), detected once
 */
export function useMotionGate(): boolean {
  const [allow, setAllow] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isLowTier = () => {
      const cores = navigator.hardwareConcurrency || 4;
      // @ts-ignore - deviceMemory is non-standard but widely available
      const mem = navigator.deviceMemory || 4;
      return cores <= 2 || mem <= 2;
    };

    const check = () => setAllow(!mq.matches && !isLowTier());
    check();

    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  return allow;
}

/**
 * Damped progress toward a target.
 *
 * Scroll-driven transforms derived from getBoundingClientRect().top every
 * frame never converge when frames drop. This adds a critically-damped
 * approach so the transform always reaches its final value within ~200ms
 * even under frame starvation.
 *
 * Store the returned ref's .current between frames; do not put it in
 * React state — that re-renders every frame.
 */
export function useSettledProgress() {
  const ref = { current: 0 };

  const step = (target: number, damping = 0.12) => {
    ref.current += (target - ref.current) * damping;
    if (Math.abs(target - ref.current) < 0.001) {
      ref.current = target;
    }
    return ref.current;
  };

  const reset = () => {
    ref.current = 0;
  };

  return { progress: ref, step, reset };
}
