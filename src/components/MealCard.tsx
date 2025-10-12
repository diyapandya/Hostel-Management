import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface MealCardProps {
  day: string;
  date: string;
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
}

export function MealCard({ day, date, meals }: MealCardProps) {
  const [booked, setBooked] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  const handleBookMeal = (mealType: keyof typeof booked) => {
    setBooked((prev) => ({ ...prev, [mealType]: !prev[mealType] }));
    toast.success(
      booked[mealType]
        ? `${mealType} booking canceled`
        : `${mealType} booked successfully!`
    );
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{day}</CardTitle>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {Object.entries(meals).map(([type, menu]) => (
          <div
            key={type}
            className="flex items-center justify-between gap-3 p-3 rounded-lg bg-muted/50"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium capitalize text-sm">{type}</p>
                {booked[type as keyof typeof booked] && (
                  <StatusBadge status="booked" className="text-xs" />
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{menu}</p>
            </div>
            <Button
              size="sm"
              variant={booked[type as keyof typeof booked] ? "secondary" : "default"}
              onClick={() => handleBookMeal(type as keyof typeof booked)}
              className="shrink-0"
            >
              {booked[type as keyof typeof booked] ? (
                <>
                  <Check className="h-4 w-4 mr-1" />
                  Booked
                </>
              ) : (
                "Book"
              )}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
