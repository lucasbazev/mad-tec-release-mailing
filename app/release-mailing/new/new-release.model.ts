import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  eye: z.string().optional(),
  subtitle: z.string().optional(),
  body: z.string().min(1, "Corpo é obrigatório"),
  exclusive: z.boolean(),
  published: z.boolean(),
  image: z.string().optional(),
});

export type NewReleaseFormDTO = z.infer<typeof schema>;
