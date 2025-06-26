import { PageHeader } from "@/components/app/PageHeader";

export default function Home() {
  return (
    <div>
      <PageHeader title="Dashboard" />

      <div className="mt-8 p-4 md:p-8 pb-16">
        <p>
          Bem-vindo à MAD Tec, startup brasileira e plataforma revolucionária de
          monitoramento, análise e distribuição de informações em tempo real.
        </p>
      </div>
    </div>
  );
}
