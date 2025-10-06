import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Smartphone } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to<br />
            <span className="gradient-text">AutoStay System</span>
          </h1>
          <p className="hero-subtitle">
            Your friendly companion for hostel living. We make it easy to book meals, 
            request maintenance, and connect with your community—all through one simple app 
            that puts students first.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/register')}>
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary" onClick={() => navigate('/login')}>
              Login Now
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-6 pt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>24/7 Access</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Smartphone className="w-4 h-4 text-primary" />
              <span>Mobile Friendly</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Students using AutoStay System in a modern hostel environment"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;