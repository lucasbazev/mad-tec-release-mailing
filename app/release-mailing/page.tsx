"use client";
import { PageHeader } from "@/components/app/PageHeader";
import { Table } from "@/components/app/Table";
import { Release } from "@/interfaces/Release";
import { tableHeaders, tableKeyValues } from "./releases.config";
import { PageContainer } from "@/components/app/PageContainer";
import { useReleasesViewModel } from "./releases.view.model";

export default function ReleaseMailingPage() {
  const { actionButton, releases } = useReleasesViewModel();

  return (
    <div>
      <PageHeader title="Release & Mailing" buttonProps={actionButton} />

      <PageContainer>
        {!!releases.length ? (
          <Table<Release>
            data={releases}
            headers={tableHeaders}
            values={tableKeyValues}
          />
        ) : (
          <div className="text-center text-gray-500">
            <p>Nenhum release cadastrado.</p>
            <p>Você pode cadastrar um novo release clicando no botão acima.</p>
          </div>
        )}
      </PageContainer>
    </div>
  );
}
