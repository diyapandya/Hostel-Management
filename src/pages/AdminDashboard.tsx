import { Users, Building2, DollarSign, Wrench, TrendingUp, AlertCircle, CheckCircle, Clock, Bell, UserCog } from "lucide-react";
import StatCard from "@/components/Dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      icon: Users,
      trend: { value: "+12% from last month", positive: true },
    },
    {
      title: "Total Wardens",
      value: "24",
      icon: UserCog,
      trend: { value: "+2 new this month", positive: true },
    },
    {
      title: "Occupied Rooms",
      value: "456/500",
      icon: Building2,
      trend: { value: "91% occupancy", positive: true },
    },
    {
      title: "Fee Collection",
      value: "₹24.5L/26.6L",
      icon: DollarSign,
      trend: { value: "8% pending", positive: false },
    },
    {
      title: "Maintenance Issues",
      value: "18",
      icon: Wrench,
      trend: { value: "5 pending", positive: false },
    },
  ];

  const occupancyData = [
    { month: "Jan", occupancy: 82 },
    { month: "Feb", occupancy: 85 },
    { month: "Mar", occupancy: 88 },
    { month: "Apr", occupancy: 87 },
    { month: "May", occupancy: 90 },
    { month: "Jun", occupancy: 91 },
  ];

  const feeCollectionData = [
    { month: "Jan", paid: 22, pending: 3, overdue: 1 },
    { month: "Feb", paid: 23, pending: 2, overdue: 1 },
    { month: "Mar", paid: 24, pending: 2, overdue: 0.5 },
    { month: "Apr", paid: 23.5, pending: 2, overdue: 1 },
    { month: "May", paid: 24, pending: 1.8, overdue: 0.8 },
    { month: "Jun", paid: 24.5, pending: 1.5, overdue: 0.6 },
  ];

  const complaintDistribution = [
    { name: "Plumbing", value: 35, color: "#3b82f6" },
    { name: "Electrical", value: 28, color: "#f59e0b" },
    { name: "Cleaning", value: 15, color: "#10b981" },
    { name: "AC/Heating", value: 12, color: "#8b5cf6" },
    { name: "Others", value: 10, color: "#6b7280" },
  ];

  const recentNotices = [
    { id: 1, title: "Fee Payment Deadline - June 30th", date: "2 hours ago", priority: "high", category: "Finance" },
    { id: 2, title: "Block B Maintenance Schedule", date: "5 hours ago", priority: "medium", category: "Maintenance" },
    { id: 3, title: "New Mess Menu Available", date: "1 day ago", priority: "low", category: "General" },
    { id: 4, title: "Water Supply Interruption - Block C", date: "1 day ago", priority: "high", category: "Emergency" },
  ];

  const urgentIssues = [
    { id: 1, type: "Maintenance", issue: "Water leakage - Block A, Floor 3", status: "Pending", warden: "John Doe", priority: "High" },
    { id: 2, type: "Fee", issue: "15 students with overdue fees", status: "Action Required", warden: "Finance Team", priority: "High" },
    { id: 3, type: "Room", issue: "Room assignment conflict - A-204", status: "In Progress", warden: "Jane Smith", priority: "Medium" },
  ];

  const wardenPerformance = [
    { name: "John Doe", resolved: 45, pending: 3, rating: 4.8 },
    { name: "Jane Smith", resolved: 38, pending: 5, rating: 4.6 },
    { name: "Mike Johnson", resolved: 42, pending: 2, rating: 4.9 },
    { name: "Sarah Wilson", resolved: 35, pending: 7, rating: 4.5 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Complete hostel management overview and analytics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Row 1 - Occupancy & Fee Collection */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Occupancy Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Hostel Occupancy Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="occupancy" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))" 
                    fillOpacity={0.2}
                    name="Occupancy %"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Fee Collection Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-success" />
              Fee Collection Status (Lakhs ₹)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={feeCollectionData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="paid" fill="#10b981" name="Paid" />
                  <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
                  <Bar dataKey="overdue" fill="#ef4444" name="Overdue" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 - Complaints Distribution & Warden Performance */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Complaint Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-warning" />
              Maintenance Complaints by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={complaintDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {complaintDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Warden Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCog className="h-5 w-5 text-accent" />
              Top Performing Wardens
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {wardenPerformance.map((warden, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div className="flex-1">
                    <p className="font-medium">{warden.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {warden.resolved} resolved • {warden.pending} pending
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{warden.rating}</span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables Row - Notices & Urgent Issues */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Recent Notices */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Quick Notifications Panel
            </CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentNotices.map((notice) => (
                <div key={notice.id} className="flex items-start justify-between border-b pb-3 last:border-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{notice.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {notice.category}
                      </Badge>
                      <p className="text-xs text-muted-foreground">{notice.date}</p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      notice.priority === "high"
                        ? "destructive"
                        : notice.priority === "medium"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {notice.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Urgent Issues */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Urgent Issues & Alerts
            </CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {urgentIssues.map((issue) => (
                <div key={issue.id} className="flex items-start justify-between border-b pb-3 last:border-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {issue.type}
                      </Badge>
                      <Badge
                        variant={issue.priority === "High" ? "destructive" : "default"}
                        className="text-xs"
                      >
                        {issue.priority}
                      </Badge>
                    </div>
                    <p className="font-medium text-sm">{issue.issue}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Assigned: {issue.warden}
                    </p>
                  </div>
                  <Badge
                    variant={
                      issue.status === "Pending"
                        ? "secondary"
                        : issue.status === "In Progress"
                        ? "default"
                        : "outline"
                    }
                  >
                    {issue.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

