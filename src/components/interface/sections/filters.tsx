import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

export function FilterSection() {
  return (
    <section className="flex items-center justify-end">
      <Select>
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Filtros" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Destaques</SelectItem>
          <SelectItem value="dark">Pães</SelectItem>
          <SelectItem value="system">Bolos</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
}
