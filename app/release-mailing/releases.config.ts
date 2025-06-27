import { Release } from "@/interfaces/Release";

export const MOCKS: Release[] = [
  {
    title: "Nova Atualização do Sistema Operacional Lançada",
    eye: "Tecnologia",
    subtitle: "Desempenho aprimorado e novos recursos de segurança.",
    body: "A tão esperada atualização do nosso sistema operacional já está disponível, trazendo consigo melhorias significativas de desempenho e um pacote robusto de recursos de segurança para proteger seus dados.",
    image: "https://example.com/images/os_update.jpg",
    exclusive: false,
    published: true,
  },
];

export const tableHeaders = [
  "Título",
  "Olho",
  "Subtítulo",
  "Exclusivo",
  "Publicado no blog",
];

export const tableKeyValues: (keyof Release)[] = [
  "title",
  "eye",
  "subtitle",
  "exclusive",
  "published",
];
