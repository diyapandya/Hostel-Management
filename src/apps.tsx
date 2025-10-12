import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/Layout/DashboardLayout";
import Dashboard from "./pages/StudentDashboard";
import WardenDashboard from "./pages/WardenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Meals from "./pages/Meal";
import Maintenance from "./pages/Maintenance";
import Notices from "./pages/Notices";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const Apps = () => (
  <QueryClientProvider client={queryClient}>
   
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="meals" element={<Meals />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="notices" element={<Notices />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
        {/* Warden dashboard */}
  <Route path="/warden-dashboard" element={<WardenDashboard />} />

  {/* Admin dashboard */}
  <Route path="/admin-dashboard" element={<AdminDashboard />} />
     
  {/* Not Found */}
      <Route path="*" element={<NotFound />} />
         </Routes>
  </QueryClientProvider>
);

export default Apps;
