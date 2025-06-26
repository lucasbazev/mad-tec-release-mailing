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
  {
    title: "Relatório Anual de Sustentabilidade Revelado",
    subtitle: "Compromisso com o futuro e práticas mais verdes.",
    body: "Nosso relatório anual de sustentabilidade detalha os progressos que fizemos em direção a operações mais ecológicas e nosso compromisso contínuo com a responsabilidade ambiental.",
    exclusive: true,
    published: true,
  },
  {
    title: "Projeto 'Aurora' Atinge Marco Importante",
    eye: "Inovação",
    body: "A equipe por trás do inovador Projeto Aurora celebrou um marco crucial esta semana, aproximando-nos ainda mais da nossa próxima grande revelação. Fique atento para mais novidades!",
    image: "https://example.com/images/aurora_project.png",
    exclusive: false,
    published: false,
  },
];

export const tableHeaders = [
  "Título",
  "Olho",
  "Subtítulo",
  "Corpo",
  "Exclusivo",
  "Publicado no blog",
];

export const tableKeyValues: (keyof Release)[] = [
  "title",
  "eye",
  "subtitle",
  "body",
  "exclusive",
  "published",
];
