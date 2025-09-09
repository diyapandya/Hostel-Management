import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      description: "Get in touch for support or questions",
      value: "hello@autostay.com",
      href: "mailto:hello@autostay.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      description: "Speak directly with our support team",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Live Chat",
      description: "Chat with us in real-time",
      value: "Available 24/7",
      href: "#"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Visit Us",
      description: "Come see us at our office",
      value: "123 Campus Drive, University City",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            We're Here to <span className="gradient-text">Help</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or need support? Our friendly team is always ready to assist you. 
            Reach out to us anytime, and we'll get back to you quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="feature-card text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="feature-icon mx-auto">
                {method.icon}
              </div>
              <h3 className="feature-title">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
              <p className="text-sm font-medium text-primary">{method.value}</p>
            </a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="rounded-2xl p-8 text-center" style={{backgroundColor: 'hsl(var(--primary-soft) / 0.5)'}}>
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest features and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;