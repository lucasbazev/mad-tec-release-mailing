import { getReleases } from "../releases.repository";
import { NewReleaseFormDTO } from "./new-release.model";

export function saveNewRelease(values: NewReleaseFormDTO) {
  const stored = getReleases();
  const newRelease = { ...values, id: Date.now() };

  stored.push(newRelease);
  localStorage.setItem("releases", JSON.stringify(stored));
}
