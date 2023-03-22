import { useEffect } from "react";
export const useScrollTo = (x, y) => {
  useEffect(() => {
    window.scrollTo({ top: x, left: y, behavior: "smooth" });
  });
};
