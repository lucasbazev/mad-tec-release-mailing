"use client";
import { PageHeader } from "@/components/app/PageHeader";

export default function ReleaseMailingPage() {
  const actionButton = [
    {
      children: "Novo Release",
      onClick: () => {},
    },
  ];

  return (
    <div>
      <PageHeader title="Release & Mailing" buttonProps={actionButton} />

      <div className="p-4 md:p-8 pb-16">
        <p>maluco</p>
      </div>
    </div>
  );
}
