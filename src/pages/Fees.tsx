import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Download } from "lucide-react";

export default function Fees() {
  const feeStats = [
    { label: "Total Collected", amount: "₹22,50,000", color: "text-success" },
    { label: "Pending", amount: "₹1,80,000", color: "text-warning" },
    { label: "Overdue", amount: "₹20,000", color: "text-destructive" },
  ];

  const feeRecords = [
    { id: 1, student: "Rahul Sharma", room: "A-201", amount: "₹18,000", status: "Paid", date: "2024-01-15" },
    { id: 2, student: "Priya Patel", room: "B-105", amount: "₹18,000", status: "Pending", date: "Due: 2024-02-05" },
    { id: 3, student: "Amit Kumar", room: "A-304", amount: "₹18,000", status: "Paid", date: "2024-01-20" },
    { id: 4, student: "Sneha Reddy", room: "C-201", amount: "₹18,000", status: "Overdue", date: "Due: 2024-01-25" },
    { id: 5, student: "Vikram Singh", room: "B-208", amount: "₹18,000", status: "Paid", date: "2024-01-18" },
  ];

  return (
    <div className="space-y-6">
      {/* Fee Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {feeStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <DollarSign className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.amount}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fee Records */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Fee Records</CardTitle>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                  <th className="pb-3">Student Name</th>
                  <th className="pb-3">Room</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {feeRecords.map((record) => (
                  <tr key={record.id} className="border-b last:border-0">
                    <td className="py-4 font-medium">{record.student}</td>
                    <td className="py-4 text-sm text-muted-foreground">{record.room}</td>
                    <td className="py-4 font-medium">{record.amount}</td>
                    <td className="py-4">
                      <Badge
                        variant={
                          record.status === "Paid"
                            ? "default"
                            : record.status === "Pending"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {record.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{record.date}</td>
                    <td className="py-4 text-right">
                      {record.status !== "Paid" && (
                        <Button variant="outline" size="sm">
                          Send Reminder
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
