import { Release } from "@/interfaces/Release";

export function getReleases(): Release[] {
  const stored = localStorage.getItem("releases");
  const releases = stored ? JSON.parse(stored) : [];

  return releases;
}
