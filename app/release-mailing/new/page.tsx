"use client";
import { PageContainer } from "@/components/app/PageContainer";
import { PageHeader } from "@/components/app/PageHeader";
import { Label } from "@/components/ui/label";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNewReleaseViewModel } from "./new-release.view.model";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ImagePreview } from "@/components/app/ImagePreview";
import { Images } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewReleasePage() {
  const {
    actionButton,
    form,
    imageInputRef,
    handleClickImageInput,
    handleSelectImage,
    handleClearImage,
  } = useNewReleaseViewModel();

  return (
    <div>
      <PageHeader title="Cadastro de novo Release" buttonProps={actionButton} />

      <PageContainer>
        <Form {...form}>
          <div className="grid lg:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <Label className="font-medium">Título</Label>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Título da matéria"
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eye"
              render={({ field }) => (
                <FormItem>
                  <Label className="font-medium">Olho</Label>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Olho da matéria"
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <Label className="font-medium">Subtítulo</Label>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Subtítulo da matéria"
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <Label className="font-medium">Corpo da matéria</Label>

                  <FormControl>
                    <ReactQuill
                      {...field}
                      className="bg-white h-96"
                      onChange={(value) =>
                        field.onChange({ target: { value } })
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label>Imagem principal da matéria</Label>

              <div
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full rounded-md border border-input bg-white min-h-32 px-4 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:outline-none",
                  !form.watch("image") && "cursor-pointer",
                )}
                onClick={handleClickImageInput}
              >
                <Input
                  ref={imageInputRef}
                  id="image"
                  name="image"
                  type="file"
                  multiple={false}
                  accept="image/*"
                  onChange={handleSelectImage}
                  className="hidden"
                />

                {!!form.watch("image") ? (
                  <ImagePreview
                    url={form.watch("image") as string}
                    handleDelete={handleClearImage}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Images className="text-muted-foreground" size={38} />

                    <Label className="pointer-events-none text-muted-foreground">
                      Selecione uma imagem para o release
                    </Label>
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-2 flex items-center justify-between mt-16">
              <FormField
                control={form.control}
                name="exclusive"
                render={({ field }) => (
                  <FormItem className="flex flex-row-reverse gap-2">
                    <Label>
                      Matéria exclusiva (não poderá ser publicada no blog)
                    </Label>

                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="published"
                render={({ field }) => (
                  <FormItem className="flex flex-row-reverse gap-2">
                    <Label>Publicar matéria no blog</Label>

                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </Form>
      </PageContainer>
    </div>
  );
}
