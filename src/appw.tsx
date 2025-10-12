import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/Layout/DashboardLayout";
import Dashboard from "./pages/WardenDashboard";
import Students from "./pages/Students";
import Rooms from "./pages/Rooms";
import Maintenance from "./pages/Maintenance";
import Notices from "./pages/Notices";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Appw = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="notices" element={<Notices />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default Appw;
