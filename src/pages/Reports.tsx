import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export default function Reports() {
  const reportTypes = [
    {
      title: "Hostel Occupancy Report",
      description: "Detailed breakdown of room occupancy across all blocks",
      category: "Occupancy",
    },
    {
      title: "Fee Collection Report",
      description: "Monthly and annual fee collection statistics",
      category: "Finance",
    },
    {
      title: "Maintenance Report",
      description: "Summary of all maintenance requests and resolutions",
      category: "Maintenance",
    },
    {
      title: "Student Enrollment Report",
      description: "Student admission and enrollment trends",
      category: "Students",
    },
    {
      title: "Warden Performance Report",
      description: "Performance metrics for all wardens",
      category: "Staff",
    },
    {
      title: "Complaints Summary",
      description: "Analysis of all complaints by category and resolution time",
      category: "Complaints",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Reports & Analytics</h2>
        <p className="text-muted-foreground">Generate and export detailed reports</p>
      </div>

      {/* Reports Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reportTypes.map((report) => (
          <Card key={report.title} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-base">{report.title}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">{report.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">Category: {report.category}</div>
                <Button className="w-full gap-2" variant="outline">
                  <Download className="h-4 w-4" />
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Export Options */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Export</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">Export as PDF</Button>
            <Button variant="outline">Export as Excel</Button>
            <Button variant="outline">Export as CSV</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
