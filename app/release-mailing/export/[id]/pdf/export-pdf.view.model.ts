import { getReleases } from "@/app/release-mailing/releases.repository";
import { useEffect } from "react";

export function useExportPDFViewModel(id: string) {
  if (!id) window.close();

  const release = getReleases().find((release) => release.id === Number(id));

  if (!release) {
    window.close();
  }

  useEffect(() => {
    window.print();
  }, []);

  return {
    release,
  };
}
