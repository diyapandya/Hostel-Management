import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import WardenDashboard from "./pages/WardenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Apps from "./apps";
import Appw from "./appw";
import Appa from "./appa";

const queryClient = new QueryClient();

function RequireAuth({ children }: { children: JSX.Element }) {
  const isLoggedIn = !!localStorage.getItem("currentUser");
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/student-dashboard/*"
            element={
              <RequireAuth>
                <Apps />
              </RequireAuth>
            }
          />
          <Route
            path="/warden-dashboard/*"
            element={
              <RequireAuth>
                <Appw />
              </RequireAuth>
            }
          />
          <Route
            path="/admin-dashboard/*"
            element={
              <RequireAuth>
                <Appa />
              </RequireAuth>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { useNavigate } from "react-router-dom";

const SomeComponent = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn-primary"
      onClick={() => navigate('/login')}
    >
      Login
    </button>
  );
};
