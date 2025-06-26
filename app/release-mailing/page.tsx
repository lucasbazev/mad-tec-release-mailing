"use client";
import { PageHeader } from "@/components/app/PageHeader";
import { Table } from "@/components/app/Table";
import { Release } from "@/interfaces/Release";
import { MOCKS, tableHeaders, tableKeyValues } from "./releases.config";

export default function ReleaseMailingPage() {
  const actionButton = [
    {
      children: "Novo Release",
      onClick: () => {},
    },
  ];

  function onSelectItem(item: object) {
    alert("Selected item: " + JSON.stringify(item));
  }

  return (
    <div>
      <PageHeader title="Release & Mailing" buttonProps={actionButton} />

      <div className="p-4 md:p-8 pb-16">
        <Table<Release>
          data={MOCKS}
          headers={tableHeaders}
          values={tableKeyValues}
          onSelectItem={onSelectItem}
        />
      </div>
    </div>
  );
}
