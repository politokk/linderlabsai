import { ScrollArea } from "@/components/ui/scroll-area";

export const scrollArea = {
  name: "scroll-area",
  components: {
    Default: (
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {Array.from({ length: 50 }).map((_, index) => (
            <div key={`tag-${index + 1}`} className="text-sm">
              Tag {index + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
  },
};