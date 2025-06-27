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
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Actions<T extends { id: number }>({ item }: { item: T }) {
  const router = useRouter();

  function handleExportDOCX() {
    alert("Exportar DOCX: " + JSON.stringify(item));
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
