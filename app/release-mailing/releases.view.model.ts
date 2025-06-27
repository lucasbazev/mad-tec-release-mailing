import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { getReleases } from "./release.repository";
import { MOCKS } from "./releases.config";
import { Release } from "@/interfaces/Release";

export function useReleasesViewModel() {
  const releases = useMemo((): Release[] => {
    const stored = getReleases();

    return [...MOCKS, ...stored];
  }, []);

  const router = useRouter();

  const actionButton = [
    {
      children: "Novo Release",
      onClick: () => router.push("/release-mailing/new"),
    },
  ];

  function onSelectItem(item: object) {
    alert("Selected item: " + JSON.stringify(item));
  }

  return {
    actionButton,
    releases,
    onSelectItem,
  };
}
