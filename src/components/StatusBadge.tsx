import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "booked" | "pending" | "canceled" | "completed" | "in-progress";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variants = {
    booked: "bg-success text-success-foreground",
    pending: "bg-warning text-warning-foreground",
    canceled: "bg-destructive text-destructive-foreground",
    completed: "bg-success text-success-foreground",
    "in-progress": "bg-primary text-primary-foreground",
  };

  return (
    <Badge className={cn(variants[status], "capitalize", className)}>
      {status.replace("-", " ")}
    </Badge>
  );
}
