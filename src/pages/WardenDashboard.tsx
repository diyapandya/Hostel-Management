import { Users, Building2, DollarSign, Wrench, TrendingUp } from "lucide-react";
import StatCard from "@/components/Dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      icon: Users,
      trend: { value: "12% from last month", positive: true },
    },
    {
      title: "Total Wardens",
      value: "24",
      icon: Users,
      trend: { value: "2 new this month", positive: true },
    },
    {
      title: "Occupied Rooms",
      value: "456/500",
      icon: Building2,
      trend: { value: "91% occupancy", positive: true },
    },
    {
      title: "Fee Collection",
      value: "₹24.5L",
      icon: DollarSign,
      trend: { value: "8% pending", positive: false },
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

  const recentNotices = [
    { id: 1, title: "Hostel Maintenance Schedule", date: "2 hours ago", priority: "high" },
    { id: 2, title: "Fee Payment Deadline Extended", date: "5 hours ago", priority: "medium" },
    { id: 3, title: "New Mess Menu Available", date: "1 day ago", priority: "low" },
  ];

  const pendingIssues = [
    { id: 1, room: "A-201", issue: "AC Not Working", status: "Pending", warden: "John Doe" },
    { id: 2, room: "B-105", issue: "Water Leakage", status: "In Progress", warden: "Jane Smith" },
    { id: 3, room: "C-304", issue: "Door Lock Broken", status: "Pending", warden: "Mike Johnson" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Occupancy Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
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
              <DollarSign className="h-5 w-5" />
              Fee Collection Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>Paid</span>
                  <span className="font-medium">₹22.5L (92%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[92%] rounded-full bg-success" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>Pending</span>
                  <span className="font-medium">₹2L (8%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[8%] rounded-full bg-warning" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables Row */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Recent Notices */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Notices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentNotices.map((notice) => (
                <div key={notice.id} className="flex items-start justify-between border-b pb-3 last:border-0">
                  <div>
                    <p className="font-medium">{notice.title}</p>
                    <p className="text-sm text-muted-foreground">{notice.date}</p>
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

        {/* Pending Maintenance Issues */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Maintenance Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingIssues.map((issue) => (
                <div key={issue.id} className="flex items-start justify-between border-b pb-3 last:border-0">
                  <div>
                    <p className="font-medium">
                      {issue.room} - {issue.issue}
                    </p>
                    <p className="text-sm text-muted-foreground">Warden: {issue.warden}</p>
                  </div>
                  <Badge
                    variant={issue.status === "Pending" ? "secondary" : "default"}
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
