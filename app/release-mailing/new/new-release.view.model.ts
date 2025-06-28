import { ChangeEvent, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewReleaseFormDTO, schema } from "./new-release.model";
import { toast } from "sonner";
import { saveNewRelease } from "./new-release.repository";
import { useRouter } from "next/navigation";
import { fileToBase64 } from "@/utils/fileToBase64";

const defaultValues = {
  title: "",
  eye: "",
  subtitle: "",
  body: "",
  exclusive: false,
  published: true,
  image: "",
};

export function useNewReleaseViewModel() {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const form = useForm<NewReleaseFormDTO>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const isExclusive = form.watch("exclusive");
  const isPublished = form.watch("published");

  function handleClickImageInput() {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  }

  async function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    // const imageUrl = URL.createObjectURL(file);
    const imageBase64 = await fileToBase64(file);
    form.setValue("image", imageBase64);
  }

  function handleClearImage() {
    form.setValue("image", "");
  }

  async function handleSave(values: NewReleaseFormDTO) {
    try {
      saveNewRelease(values);

      toast.success("Release salvo com sucesso!");
      router.push("/release-mailing");

      return;
    } catch (error) {
      console.error("Error saving release:", error);

      toast.error(
        "Houve um erro ao salvar o release. Por favor, tente novamente.",
      );
      return;
    }
  }

  const actionButton = [
    {
      children: "Salvar",
      onClick: form.handleSubmit(handleSave),
    },
  ];

  useEffect(() => {
    if (isExclusive) {
      form.setValue("published", false);
    }
  }, [form, isExclusive, isPublished]);

  return {
    actionButton,
    form,
    imageInputRef,
    handleClickImageInput,
    handleSelectImage,
    handleClearImage,
  };
}
