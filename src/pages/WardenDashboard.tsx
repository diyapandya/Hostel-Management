import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, Shield, Users, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WardenDashboard = () => {
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
    if (userData.role !== 'warden') {
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

  const stats = [
    { icon: Users, label: 'Total Students', value: '248', color: 'from-blue-500 to-cyan-500' },
    { icon: AlertCircle, label: 'Pending Requests', value: '12', color: 'from-orange-500 to-red-500' },
    { icon: CheckCircle, label: 'Completed Today', value: '34', color: 'from-green-500 to-emerald-500' },
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome, Warden {user.name}!</h2>
                <p className="text-muted-foreground">Department: {user.department}</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Manage hostel operations and monitor student requests efficiently.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Recent Requests */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-4">Recent Requests</h3>
            <p className="text-muted-foreground">No pending requests at the moment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardenDashboard;
