"use client";
import { use } from "react";
import {
  Document,
  Image,
  Page,
  PDFViewer,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { useExportPDFViewModel } from "./export-pdf.view.model";
import Html from "react-pdf-html";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  eye: {
    fontSize: 12,
    textAlign: "center",
    color: "#888",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  body: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "auto",
    marginTop: 20,
    objectFit: "contain",
  },
});

export default function ExportPDFPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(props.params);

  const { release } = useExportPDFViewModel(id);

  if (!release) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando dados do release...</Text>
      </View>
    );
  }

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            {/* 💡 Aplique os estilos diretamente */}
            {release.title && <Text style={styles.title}>{release.title}</Text>}
            {release.eye && <Text style={styles.eye}>{release.eye}</Text>}
            {release.subtitle && (
              <Text style={styles.subtitle}>{release.subtitle}</Text>
            )}
            {release.body && <Html style={styles.body}>{release.body}</Html>}
          </View>

          {release.image && <Image src={release.image} style={styles.image} />}
        </Page>
      </Document>
    </PDFViewer>
  );
}
