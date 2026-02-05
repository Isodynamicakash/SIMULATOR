"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MAIN_ROUTES = [
  "/subjects",
  "/subjects/class-9",
  "/subjects/class-10",
  "/subjects/class-11",
  "/subjects/class-11/physics",
  "/subjects/class-11/chemistry",
  "/subjects/class-12",
  "/subjects/physics",
];

export default function RouteWarmup() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const delay = 120;
    const ids: ReturnType<typeof setTimeout>[] = [];
    MAIN_ROUTES.forEach((href, i) => {
      ids.push(
        setTimeout(() => {
          router.prefetch(href);
        }, i * delay)
      );
    });
    return () => ids.forEach((id) => clearTimeout(id));
  }, [router]);

  return null;
}
