import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, UserCog, TrendingUp, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Wardens() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  const wardens = [
    { id: 1, name: "John Doe", email: "john@example.com", hostel: "Block A", phone: "+91 9876543220", resolved: 45, pending: 3, rating: 4.8 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", hostel: "Block B", phone: "+91 9876543221", resolved: 38, pending: 5, rating: 4.6 },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", hostel: "Block C", phone: "+91 9876543222", resolved: 52, pending: 2, rating: 4.9 },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", hostel: "Block A", phone: "+91 9876543223", resolved: 41, pending: 4, rating: 4.7 },
    { id: 5, name: "David Brown", email: "david@example.com", hostel: "Block B", phone: "+91 9876543224", resolved: 35, pending: 6, rating: 4.5 },
  ];

  const handleAddWarden = () => {
    toast({
      title: "Warden Added",
      description: "New warden has been added successfully.",
    });
    setIsAddDialogOpen(false);
  };

  const handleDeleteWarden = (name: string) => {
    toast({
      title: "Warden Removed",
      description: `${name} has been removed from the system.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Warden Management</h1>
        <p className="text-muted-foreground">Manage wardens and monitor their performance</p>
      </div>

      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Wardens</CardTitle>
            <UserCog className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{wardens.length}</div>
            <p className="text-xs text-muted-foreground">Active wardens</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Resolved</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{wardens.reduce((sum, w) => sum + w.resolved, 0)}</div>
            <p className="text-xs text-muted-foreground">Issues resolved</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Issues</CardTitle>
            <TrendingUp className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{wardens.reduce((sum, w) => sum + w.pending, 0)}</div>
            <p className="text-xs text-muted-foreground">Awaiting action</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
            <Star className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(wardens.reduce((sum, w) => sum + w.rating, 0) / wardens.length).toFixed(1)}
            </div>
            <p className="text-xs text-muted-foreground">Out of 5.0</p>
          </CardContent>
        </Card>
      </div>

      {/* Header Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search wardens by name, email, or block..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Warden
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Warden</DialogTitle>
              <DialogDescription>
                Add a new warden and assign them to a hostel block.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter warden name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="warden@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+91 9876543210" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="block">Assign Block</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a block" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="block-a">Block A</SelectItem>
                    <SelectItem value="block-b">Block B</SelectItem>
                    <SelectItem value="block-c">Block C</SelectItem>
                    <SelectItem value="block-d">Block D</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddWarden}>Add Warden</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Wardens Table Card */}
      <Card>
        <CardHeader>
          <CardTitle>All Wardens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Phone</th>
                  <th className="pb-3">Assigned Block</th>
                  <th className="pb-3">Performance</th>
                  <th className="pb-3">Rating</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wardens.map((warden) => (
                  <tr key={warden.id} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-4 font-medium">{warden.name}</td>
                    <td className="py-4 text-sm text-muted-foreground">{warden.email}</td>
                    <td className="py-4 text-sm text-muted-foreground">{warden.phone}</td>
                    <td className="py-4">
                      <Badge variant="outline">{warden.hostel}</Badge>
                    </td>
                    <td className="py-4">
                      <div className="text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-success">{warden.resolved}</span>
                          <span className="text-muted-foreground">resolved</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-warning">{warden.pending}</span>
                          <span className="text-muted-foreground">pending</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-medium">{warden.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" title="Edit Warden">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          title="Remove Warden"
                          onClick={() => handleDeleteWarden(warden.name)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
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

