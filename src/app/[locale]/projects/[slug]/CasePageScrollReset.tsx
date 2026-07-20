"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function CasePageScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.scrollX === 0 && window.scrollY === 0) return;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    // Chrome needs a layout read before it applies the temporary behavior.
    root.getClientRects();
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousScrollBehavior;
  }, [pathname]);

  return null;
}
