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

export default function NewReleasePage() {
  const { actionButton, form } = useNewReleaseViewModel();

  return (
    <div>
      <PageHeader title="Cadastro de novo Release" buttonProps={actionButton} />

      <PageContainer>
        <Form {...form}>
          <div className="space-y-4">
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
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <Label className="font-medium">Corpo da matéria</Label>

                  <FormControl>
                    <ReactQuill
                      {...field}
                      className="bg-white"
                      onChange={(value) =>
                        field.onChange({ target: { value } })
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex items-center gap-16 mt-16">
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
