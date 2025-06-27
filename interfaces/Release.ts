export interface Release {
  id: number;
  title: string;
  eye?: string;
  subtitle?: string;
  body: string;
  image?: string;
  exclusive: boolean;
  published: boolean;
}
