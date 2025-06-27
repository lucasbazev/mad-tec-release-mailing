import { useRouter } from "next/navigation";
import { getReleases } from "./releases.repository";

export function useReleasesViewModel() {
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
    releases: getReleases(),
    onSelectItem,
  };
}
