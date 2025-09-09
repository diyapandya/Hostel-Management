import React from 'react';
import { 
  Utensils, 
  Wrench, 
  Home, 
  Package, 
  Bell,
  Clock,
  Shield,
  Smartphone,
  Heart
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Utensils className="w-6 h-6 text-primary" />,
      title: "Easy Meal Booking",
      description: "Skip the queues and book your favorite meals in advance. Choose from daily menus and special dietary options that fit your lifestyle."
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: "Quick Maintenance Requests",
      description: "Report issues instantly with photos and get real-time updates. Our team responds quickly to keep your living space comfortable."
    },
    {
      icon: <Home className="w-6 h-6 text-primary" />,
      title: "Housekeeping Made Simple",
      description: "Schedule cleaning services when it's convenient for you. Rate and review to help us maintain the highest standards."
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: "Smart Parcel Alerts",
      description: "Never miss a delivery again. Get instant notifications when your packages arrive with easy pickup scheduling."
    },
    {
      icon: <Bell className="w-6 h-6 text-primary" />,
      title: "Stay Connected",
      description: "Keep up with hostel news, events, and important announcements through our digital notice board."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Community First",
      description: "Built by students, for students. We understand what matters most in your hostel experience."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: "Save Time",
      text: "No more waiting in lines"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-primary" />,
      title: "Always Available", 
      text: "Access from anywhere, anytime"
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "Secure & Reliable",
      text: "Your data is safe with us"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        {/* Header */}
        <div className="features-header">
          <h2 className="features-title">
            Everything You Need for <span className="gradient-text">Better Hostel Life</span>
          </h2>
          <p className="features-description">
            We've designed every feature with student life in mind. Simple, efficient, 
            and always there when you need it most.
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 p-6 rounded-2xl" style={{backgroundColor: 'hsl(var(--primary-soft) / 0.5)'}}>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              {benefit.icon}
              <div>
                <div className="font-medium text-sm">{benefit.title}</div>
                <div className="text-xs text-muted-foreground">{benefit.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;