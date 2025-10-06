import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { UserPlus, User, Shield, UserCog } from 'lucide-react';

const baseSchema = {
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).max(100),
  role: z.enum(['student', 'warden', 'admin']),
};

const studentSchema = z.object({
  ...baseSchema,
  roomNo: z.string().trim().min(1, { message: "Room number is required" }).max(10),
});

const wardenSchema = z.object({
  ...baseSchema,
  department: z.string().trim().min(2, { message: "Department is required" }).max(100),
});

const adminSchema = z.object({
  ...baseSchema,
  employeeId: z.string().trim().min(1, { message: "Employee ID is required" }).max(20),
});

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'warden' | 'admin';
  roomNo?: string;
  department?: string;
  employeeId?: string;
};

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<RegisterForm>({
    name: '',
    email: '',
    password: '',
    role: 'student',
    roomNo: '',
  });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { value: 'student', label: 'Student', icon: User, color: 'from-blue-500 to-cyan-500' },
    { value: 'warden', label: 'Warden', icon: Shield, color: 'from-purple-500 to-pink-500' },
    { value: 'admin', label: 'Admin', icon: UserCog, color: 'from-orange-500 to-red-500' },
  ];

  const handleInputChange = (field: keyof RegisterForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleRoleChange = (role: 'student' | 'warden' | 'admin') => {
    setFormData({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role,
      ...(role === 'student' && { roomNo: '' }),
      ...(role === 'warden' && { department: '' }),
      ...(role === 'admin' && { employeeId: '' }),
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      let validatedData;
      
      switch (formData.role) {
        case 'student':
          validatedData = studentSchema.parse(formData);
          break;
        case 'warden':
          validatedData = wardenSchema.parse(formData);
          break;
        case 'admin':
          validatedData = adminSchema.parse(formData);
          break;
      }

      // Check if user already exists
      const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const existingUser = storedUsers.find(
        (u: any) => u.email === validatedData.email && u.role === validatedData.role
      );

      if (existingUser) {
        toast({
          variant: "destructive",
          title: "Registration Failed",
          description: "An account with this email and role already exists.",
        });
        setIsLoading(false);
        return;
      }

      // Save user to localStorage
      const newUser = {
        ...validatedData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      
      storedUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));

      toast({
        title: "Registration Successful!",
        description: "Your account has been created. Please sign in.",
      });

      setTimeout(() => {
        navigate('/login');
      }, 1000);

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: 'var(--gradient-hero)' }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="hero-title text-3xl sm:text-4xl mb-3">
            Create Account
          </h1>
          <p className="text-muted-foreground">Join AutoStay System today</p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Select Your Role</Label>
              <div className="grid grid-cols-3 gap-3">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <button
                      key={role.value}
                      type="button"
                      onClick={() => handleRoleChange(role.value as any)}
                      className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.role === role.value
                          ? 'border-primary bg-primary/5 shadow-sm'
                          : 'border-border hover:border-primary/50 bg-background'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${role.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-medium">{role.label}</span>
                    </button>
                  );
                })}
              </div>
              {errors.role && <p className="text-sm text-destructive mt-1">{errors.role}</p>}
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={errors.password ? 'border-destructive' : ''}
              />
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>

            {/* Dynamic Fields Based on Role */}
            {formData.role === 'student' && (
              <div className="space-y-2">
                <Label htmlFor="roomNo">Room Number</Label>
                <Input
                  id="roomNo"
                  type="text"
                  placeholder="e.g., A-101"
                  value={formData.roomNo || ''}
                  onChange={(e) => handleInputChange('roomNo', e.target.value)}
                  className={errors.roomNo ? 'border-destructive' : ''}
                />
                {errors.roomNo && <p className="text-sm text-destructive">{errors.roomNo}</p>}
              </div>
            )}

            {formData.role === 'warden' && (
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  type="text"
                  placeholder="e.g., Computer Science"
                  value={formData.department || ''}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className={errors.department ? 'border-destructive' : ''}
                />
                {errors.department && <p className="text-sm text-destructive">{errors.department}</p>}
              </div>
            )}

            {formData.role === 'admin' && (
              <div className="space-y-2">
                <Label htmlFor="employeeId">Employee ID</Label>
                <Input
                  id="employeeId"
                  type="text"
                  placeholder="e.g., EMP-12345"
                  value={formData.employeeId || ''}
                  onChange={(e) => handleInputChange('employeeId', e.target.value)}
                  className={errors.employeeId ? 'border-destructive' : ''}
                />
                {errors.employeeId && <p className="text-sm text-destructive">{errors.employeeId}</p>}
              </div>
            )}

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full btn-primary h-12"
              disabled={isLoading}
            >
              {isLoading ? (
                'Creating Account...'
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  Create Account
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
