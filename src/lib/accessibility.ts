interface PageRegionSnapshot {
  element: HTMLElement;
  inert: boolean;
  ariaHidden: string | null;
}

/**
 * Keeps virtual cursor and keyboard navigation inside a portalled dialog.
 * The returned function restores every region to its exact previous state.
 */
export function isolatePageRegions() {
  const pageRegions: PageRegionSnapshot[] = Array.from(
    document.querySelectorAll<HTMLElement>(
      "[data-site-header], #main-content, footer",
    ),
  ).map((element) => ({
    element,
    inert: element.inert,
    ariaHidden: element.getAttribute("aria-hidden"),
  }));

  pageRegions.forEach(({ element }) => {
    element.inert = true;
    element.setAttribute("aria-hidden", "true");
  });

  return () => {
    pageRegions.forEach(({ element, inert, ariaHidden }) => {
      element.inert = inert;

      if (ariaHidden === null) {
        element.removeAttribute("aria-hidden");
      } else {
        element.setAttribute("aria-hidden", ariaHidden);
      }
    });
  };
}
