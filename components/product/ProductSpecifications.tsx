import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin } from "lucide-react";

export default function ProductSpecifications({
  specifications,
}: {
  specifications: any;
}) {
  if (!specifications) return null;

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2" /> Product Specifications
        </h3>
        <div className="space-y-3">
          {specifications.origin && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Origin:</span>
              <span>{specifications.origin}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
