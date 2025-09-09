import React from 'react';
import { UserPlus, Settings, Smartphone, Sparkles } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <UserPlus className="w-6 h-6 text-primary-foreground" />,
      title: "Sign Up",
      description: "Create your account with your hostel ID. Quick and easy verification process."
    },
    {
      number: "02", 
      icon: <Settings className="w-6 h-6 text-primary-foreground" />,
      title: "Set Up Profile",
      description: "Customize your preferences for meals, notifications, and services."
    },
    {
      number: "03",
      icon: <Smartphone className="w-6 h-6 text-primary-foreground" />,
      title: "Start Using",
      description: "Book meals, request services, and manage your hostel life from your phone."
    },
    {
      number: "04",
      icon: <Sparkles className="w-6 h-6 text-primary-foreground" />,
      title: "Enjoy the Convenience",
      description: "Experience hassle-free hostel living with everything at your fingertips."
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How <span className="gradient-text">AutoStay</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Just four easy steps and you'll be enjoying 
            a more convenient hostel experience.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="btn-primary text-lg px-12 py-5">
            Start Your Journey Today
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            Join thousands of students already using AutoStay
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;