"use client";
import { PageHeader } from "@/components/app/PageHeader";

export default function ReleaseMailingPage() {
  const actionButton = [
    {
      children: "Novo Release",
      onClick: () => {},
    },
  ];

  return <PageHeader title="Release & Mailing" buttonProps={actionButton} />;
}
