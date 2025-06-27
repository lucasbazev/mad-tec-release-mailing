import { getReleases } from "../release.repository";
import { NewReleaseFormDTO } from "./new-release.model";

export function saveNewRelease(values: NewReleaseFormDTO) {
  const stored = getReleases();
  stored.push(values);
  localStorage.setItem("releases", JSON.stringify(stored));
}
