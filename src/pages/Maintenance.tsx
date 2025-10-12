import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StatusBadge } from "@/components/StatusBadge";
import { toast } from "sonner";
import { Upload } from "lucide-react";

interface MaintenanceRequest {
  id: number;
  category: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  date: string;
}

export default function Maintenance() {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([
    {
      id: 1,
      category: "Plumbing",
      description: "Leaking tap in bathroom",
      status: "completed",
      date: "Oct 1, 2025",
    },
    {
      id: 2,
      category: "Electricity",
      description: "Light not working in room",
      status: "in-progress",
      date: "Oct 3, 2025",
    },
  ]);

  const [newRequest, setNewRequest] = useState({
    category: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRequest.category || !newRequest.description) {
      toast.error("Please fill all fields");
      return;
    }

    const request: MaintenanceRequest = {
      id: requests.length + 1,
      category: newRequest.category,
      description: newRequest.description,
      status: "pending",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    setRequests([request, ...requests]);
    setNewRequest({ category: "", description: "" });
    toast.success("Maintenance request submitted successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Maintenance Requests</h1>
        <p className="text-muted-foreground">Submit and track your maintenance requests</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Submit Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submit New Request</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newRequest.category}
                  onValueChange={(value) =>
                    setNewRequest({ ...newRequest, category: value })
                  }
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="Plumbing">Plumbing</SelectItem>
                    <SelectItem value="Electricity">Electricity</SelectItem>
                    <SelectItem value="Cleaning">Cleaning</SelectItem>
                    <SelectItem value="Furniture">Furniture</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the issue in detail..."
                  value={newRequest.description}
                  onChange={(e) =>
                    setNewRequest({ ...newRequest, description: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="photo">Upload Photo (Optional)</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="photo"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                    </div>
                    <input id="photo" type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Request List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{request.category}</h3>
                        <StatusBadge status={request.status} />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {request.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{request.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
