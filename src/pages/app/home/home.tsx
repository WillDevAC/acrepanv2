import Chip from "@/components/ui/chip";

export function HomePage() {
  return (
    <div className="flex space-x-2">
      <Chip label="Destaques" />
      <Chip label="Pães" />
      <Chip label="Bolos" />
    </div>
  );
}
