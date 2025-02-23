import { ScrollArea } from "@/components/ui/scroll-area";

export default function Settings() {
  return (
    <ScrollArea className="flex-1">
      <div className="flex flex-row gap-4 p-4">
        Hello
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="aspect-video h-12 w-full rounded-lg bg-muted/50"
          />
        ))}
      </div>
    </ScrollArea>
  );
}
