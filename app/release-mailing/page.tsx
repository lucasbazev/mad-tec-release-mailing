"use client";
import { PageHeader } from "@/components/app/PageHeader";
import { Table } from "@/components/app/Table";
import { Release } from "@/interfaces/Release";
import { tableHeaders, tableKeyValues } from "./releases.config";
import { PageContainer } from "@/components/app/PageContainer";
import { useReleasesViewModel } from "./releases.view.model";

export default function ReleaseMailingPage() {
  const { actionButton, releases, onSelectItem } = useReleasesViewModel();

  return (
    <div>
      <PageHeader title="Release & Mailing" buttonProps={actionButton} />

      <PageContainer>
        <Table<Release>
          data={releases}
          headers={tableHeaders}
          values={tableKeyValues}
          onSelectItem={onSelectItem}
        />
      </PageContainer>
    </div>
  );
}
