import { Release } from "@/interfaces/Release";

export function getReleases(): Release[] {
  const stored = localStorage.getItem("releases");
  const releases = stored ? JSON.parse(stored) : [];

  return releases;
}

export function deleteRelease(id: number): void {
  const releases = getReleases();
  const updatedReleases = releases.filter((release) => release.id !== id);

  localStorage.setItem("releases", JSON.stringify(updatedReleases));
}
