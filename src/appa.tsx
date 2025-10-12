import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/Layout/DashboardLayout";
import Dashboard from "./pages/AdminDashboard";
import Students from "./pages/Students";
import Wardens from "./pages/Wardens";
import Rooms from "./pages/Rooms";
import Fees from "./pages/Fees";
import Maintenance from "./pages/Maintenance";
import Notices from "./pages/Notices";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Appa = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="wardens" element={<Wardens />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="fees" element={<Fees />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="notices" element={<Notices />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default Appa;

