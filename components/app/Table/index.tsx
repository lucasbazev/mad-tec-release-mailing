import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Actions } from "../Actions";

interface ITableProps<T> {
  data: (T & { id: number })[];
  headers: string[];
  values: (keyof T)[];
  onSelectItem?: (item: T) => void;
}

function BooleanCell({ value }: { value: boolean }) {
  return (
    <TableCell className="p-4">
      <div className="">
        <p
          className={cn(
            "px-4 border border-green-500 text-green-500 rounded-full bg-transparent w-fit",
            !value && "border-gray-500 text-gray-500",
          )}
        >
          {value ? "Sim" : "Não"}
        </p>
      </div>
    </TableCell>
  );
}

export function Table<T>({
  data,
  headers,
  values,
  onSelectItem,
}: ITableProps<T>) {
  return (
    <ShadcnTable className="bg-white rounded-md overflow-hidden">
      <TableHeader>
        <TableRow className="bg-gray-200">
          {headers.map((header) => (
            <TableHead key={header} className="text-gray-900 px-4">
              {header}
            </TableHead>
          ))}

          <TableHead className="text-gray-900 px-4">Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item, idx) => (
          <TableRow
            key={idx}
            className="hover:shadow-md w-full"
            onClick={() => onSelectItem && onSelectItem(item)}
          >
            {values.map((valueKey) => {
              if (typeof item[valueKey] === "boolean") {
                return (
                  <BooleanCell key={String(valueKey)} value={item[valueKey]} />
                );
              }

              return (
                <TableCell
                  key={String(valueKey)}
                  className="truncate max-w-72 p-4"
                >
                  <p>{(item[valueKey] as string) || "-"}</p>
                </TableCell>
              );
            })}

            <TableCell className="p-4">
              <div>
                <Actions item={item} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </ShadcnTable>
  );
}
