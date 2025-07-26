import { Badge } from "@/components/ui/badge";

export default function TagsList({ tags }: { tags: string[] }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="font-medium">Tags:</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Badge key={i} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
