import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

export default function Students() {
  const [searchQuery, setSearchQuery] = useState("");

  const students = [
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", room: "A-201", feeStatus: "Paid", phone: "+91 9876543210" },
    { id: 2, name: "Priya Patel", email: "priya@example.com", room: "B-105", feeStatus: "Pending", phone: "+91 9876543211" },
    { id: 3, name: "Amit Kumar", email: "amit@example.com", room: "A-304", feeStatus: "Paid", phone: "+91 9876543212" },
    { id: 4, name: "Sneha Reddy", email: "sneha@example.com", room: "C-201", feeStatus: "Overdue", phone: "+91 9876543213" },
    { id: 5, name: "Vikram Singh", email: "vikram@example.com", room: "B-208", feeStatus: "Paid", phone: "+91 9876543214" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Student
        </Button>
      </div>

      {/* Students Table Card */}
      <Card>
        <CardHeader>
          <CardTitle>All Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Phone</th>
                  <th className="pb-3">Room</th>
                  <th className="pb-3">Fee Status</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b last:border-0">
                    <td className="py-4 font-medium">{student.name}</td>
                    <td className="py-4 text-sm text-muted-foreground">{student.email}</td>
                    <td className="py-4 text-sm text-muted-foreground">{student.phone}</td>
                    <td className="py-4 text-sm">{student.room}</td>
                    <td className="py-4">
                      <Badge
                        variant={
                          student.feeStatus === "Paid"
                            ? "default"
                            : student.feeStatus === "Pending"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {student.feeStatus}
                      </Badge>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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
