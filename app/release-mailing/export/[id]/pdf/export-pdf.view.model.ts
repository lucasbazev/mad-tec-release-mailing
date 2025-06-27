import { getReleases } from "@/app/release-mailing/releases.repository";

export function useExportPDFViewModel(id: string) {
  if (!id) window.close();

  const release = getReleases().find((release) => release.id === Number(id));

  if (!release) {
    window.close();
  }

  return {
    release,
  };
}
