import { Release } from "@/interfaces/Release";

export function generateDOCXFile(item: Release) {
  const headingStyle =
    "font-family: Arial, sans-serif; font-size: 24pt; font-weight: bold; margin-bottom: 15pt; text-align: center; color: #333;";
  const eyeStyle =
    "font-family: Arial, sans-serif; font-size: 14pt; font-style: italic; margin-bottom: 5pt; text-align: center; color: #666;";
  const subtitleStyle =
    "font-family: Arial, sans-serif; font-size: 18pt; margin-bottom: 10pt; text-align: center; color: #444;";
  const bodyStyle =
    "font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.5; margin-bottom: 10pt; color: #222;";
  const imageStyle =
    "max-width: 100%; height: auto; display: block; margin: 20pt auto;";

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>${item.title || "Documento"}</title>
      <style>
        body { margin: 0; padding: 0; }
        p { margin: 0; padding: 0; }
        h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
      </style>
    </head>

    <body>
      <div style="padding: 20pt;">
        ${item.eye ? `<p style="${eyeStyle}">${item.eye}</p>` : ""}
        ${item.title ? `<h1 style="${headingStyle}">${item.title}</h1>` : ""}
        ${item.subtitle ? `<h2 style="${subtitleStyle}">${item.subtitle}</h2>` : ""}

        <div style="${bodyStyle}">
          ${item.body || ""}
        </div>

        ${item.image ? `<img src="${item.image}" alt="${item.title}" style="${imageStyle}" />` : ""}
      </div>
    </body>
    </html>
  `;
}
