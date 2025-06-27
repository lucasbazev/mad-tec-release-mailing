import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Image from "next/image";

interface Props {
  url: string;
  handleDelete: () => void;
}

export function ImagePreview({ url, handleDelete }: Props) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg p-4">
      <Image
        src={url}
        alt="Arquivo para upload"
        width={128}
        height={128}
        className="w-fit object-cover"
      />

      <Button
        variant="ghost"
        className="absolute top-0 right-2 hover:bg-red-50 p-0"
        onClick={handleDelete}
      >
        <Trash className="w-4" />
      </Button>
    </div>
  );
}
