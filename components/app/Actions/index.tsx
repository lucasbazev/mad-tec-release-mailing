import { deleteRelease } from "@/app/release-mailing/releases.repository";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Release } from "@/interfaces/Release";
import { generateDOCXFile } from "@/utils/generateDOCXFile";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { asBlob } from "html-docx-js-typescript";
import { saveAs } from "file-saver";

export function Actions<T extends { id: number }>({ item }: { item: T }) {
  const router = useRouter();

  async function handleExportDOCX() {
    try {
      const releaseItem = item as unknown as Release;
      const html = generateDOCXFile(releaseItem);
      const doc = (await asBlob(html)) as Blob;

      saveAs(doc, `${releaseItem.title}.docx`);
      toast.success("Release exportado como DOCX com sucesso!");
    } catch (error) {
      console.error("Erro ao exportar release como DOCX:", error);
      toast.error("Erro ao exportar release como DOCX.");
    }
  }

  function handleDelete() {
    deleteRelease(item.id);
    toast.success("Release excluído com sucesso!");
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Ellipsis />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Exportar como:</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href={`/release-mailing/export/${item.id}/pdf`}
              target="_blank"
              className="w-full"
            >
              PDF
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleExportDOCX}>
            <p>DOCX</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleDelete}>
          <p>Excluir</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
