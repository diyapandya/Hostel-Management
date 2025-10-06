import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, UserCog, Database, Settings, Activity } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/login');
      return;
    }
    
    const userData = JSON.parse(currentUser);
    if (userData.role !== 'admin') {
      navigate('/login');
      return;
    }
    
    setUser(userData);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  if (!user) return null;

  const adminFeatures = [
    { icon: Database, title: 'Database Management', description: 'Manage all system data', color: 'from-blue-500 to-cyan-500' },
    { icon: Settings, title: 'System Settings', description: 'Configure application', color: 'from-purple-500 to-pink-500' },
    { icon: Activity, title: 'Analytics', description: 'View usage statistics', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-hero)' }}>
      {/* Header */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <h1 className="text-xl font-bold gradient-text">AutoStay System</h1>
            <Button variant="outline" onClick={handleLogout} size="sm">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <UserCog className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                <p className="text-muted-foreground">Welcome, {user.name} | ID: {user.employeeId}</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Full system access and administrative controls at your fingertips.
            </p>
          </div>

          {/* Admin Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {adminFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* System Overview */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-4">System Overview</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Total Registered Users</span>
                <span className="font-semibold">{JSON.parse(localStorage.getItem('registeredUsers') || '[]').length}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Active Students</span>
                <span className="font-semibold">{JSON.parse(localStorage.getItem('registeredUsers') || '[]').filter((u: any) => u.role === 'student').length}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Active Wardens</span>
                <span className="font-semibold">{JSON.parse(localStorage.getItem('registeredUsers') || '[]').filter((u: any) => u.role === 'warden').length}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">System Status</span>
                <span className="font-semibold text-green-600">Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
