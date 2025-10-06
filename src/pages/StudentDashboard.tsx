import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, Home, User, BookOpen, Utensils } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StudentDashboard = () => {
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
    if (userData.role !== 'student') {
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

  const features = [
    { icon: Utensils, title: 'Meal Booking', description: 'Book your daily meals', color: 'from-blue-500 to-cyan-500' },
    { icon: Home, title: 'Room Service', description: 'Request maintenance', color: 'from-purple-500 to-pink-500' },
    { icon: BookOpen, title: 'Study Rooms', description: 'Reserve study spaces', color: 'from-orange-500 to-red-500' },
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Welcome, {user.name}!</h2>
                <p className="text-muted-foreground">Room No: {user.roomNo}</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Access all your hostel services from one convenient dashboard.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
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

          {/* Recent Activity */}
          <div className="mt-8 bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <p className="text-muted-foreground">No recent activity. Start using the features above!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
