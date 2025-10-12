import { MealCard } from "../components/MealCard";


export default function Meals() {
  const weeklyMenu = [
    {
      day: "Monday",
      date: "Oct 7, 2025",
      meals: {
        breakfast: "Poha, Tea, Banana",
        lunch: "Rice, Dal, Mixed Vegetables, Chapati",
        dinner: "Jeera Rice, Rajma, Salad, Curd",
      },
    },
    {
      day: "Tuesday",
      date: "Oct 8, 2025",
      meals: {
        breakfast: "Idli, Sambar, Chutney, Coffee",
        lunch: "Veg Pulao, Raita, Papad, Pickle",
        dinner: "Roti, Paneer Butter Masala, Dal, Rice",
      },
    },
    {
      day: "Wednesday",
      date: "Oct 9, 2025",
      meals: {
        breakfast: "Upma, Chutney, Tea, Fruits",
        lunch: "Rice, Sambar, Potato Fry, Chapati",
        dinner: "Fried Rice, Manchurian, Soup",
      },
    },
    {
      day: "Thursday",
      date: "Oct 10, 2025",
      meals: {
        breakfast: "Paratha, Pickle, Curd, Tea",
        lunch: "Chole Bhature, Salad, Lassi",
        dinner: "Rice, Dal Tadka, Aloo Gobi, Roti",
      },
    },
    {
      day: "Friday",
      date: "Oct 11, 2025",
      meals: {
        breakfast: "Dosa, Sambar, Chutney, Coffee",
        lunch: "Biryani, Raita, Papad",
        dinner: "Chapati, Mix Veg Curry, Dal, Rice",
      },
    },
    {
      day: "Saturday",
      date: "Oct 12, 2025",
      meals: {
        breakfast: "Bread Toast, Jam, Butter, Milk",
        lunch: "Rice, Rajma, Salad, Curd",
        dinner: "Pasta, Garlic Bread, Soup",
      },
    },
    {
      day: "Sunday",
      date: "Oct 13, 2025",
      meals: {
        breakfast: "Puri Bhaji, Tea, Sweets",
        lunch: "Special Thali (Rice, Roti, Dal, 3 Vegetables)",
        dinner: "Noodles, Spring Rolls, Ice Cream",
      },
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meal Booking</h1>
        <p className="text-muted-foreground">View weekly menu and book your meals in advance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {weeklyMenu.map((menu) => (
          <MealCard key={menu.day} {...menu} />
        ))}
      </div>
    </div>
  );
}
