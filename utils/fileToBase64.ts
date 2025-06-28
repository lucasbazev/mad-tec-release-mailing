export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const FIXED_MAX_WIDTH = 400;
    const FIXED_MAX_HEIGHT = 400;
    const JPEG_QUALITY = 0.6;

    const fileType = file.type === "image/png" ? "image/png" : "image/jpeg";

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          reject(new Error("Não foi possível obter o contexto 2D do canvas."));
          return;
        }

        let width = img.width;
        let height = img.height;

        if (width > FIXED_MAX_WIDTH || height > FIXED_MAX_HEIGHT) {
          const aspectRatio = width / height;

          if (
            width > FIXED_MAX_WIDTH &&
            width / aspectRatio > FIXED_MAX_HEIGHT
          ) {
            width = FIXED_MAX_WIDTH;
            height = width / aspectRatio;
          } else {
            height = FIXED_MAX_HEIGHT;
            width = height * aspectRatio;
          }
        }

        width = Math.round(width);
        height = Math.round(height);

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL(fileType, JPEG_QUALITY);
        resolve(dataUrl);
      };

      img.onerror = (error) =>
        reject(new Error("Erro ao carregar imagem para compressão: " + error));
    };

    reader.onerror = (error) =>
      reject(new Error("Erro ao ler arquivo: " + error));
  });
}
