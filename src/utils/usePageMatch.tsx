import { signal } from "@preact/signals-react";
import { useEffect } from "react";

export const usePageMatch = (query: string) => {
  const matches = signal(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches.value) {
      matches.value = media.matches;
    }
    const listener = () => (matches.value = media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches.value]);

  return matches.value;
};
