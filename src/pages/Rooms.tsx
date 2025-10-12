import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, Wrench } from "lucide-react";

export default function Rooms() {
  const blocks = [
    { name: "Block A", total: 150, occupied: 142, available: 8, maintenance: 0 },
    { name: "Block B", total: 180, occupied: 165, available: 12, maintenance: 3 },
    { name: "Block C", total: 170, occupied: 149, available: 18, maintenance: 3 },
  ];

  const rooms = [
    { id: 1, room: "A-201", block: "Block A", capacity: 3, occupied: 3, status: "Occupied" },
    { id: 2, room: "A-202", block: "Block A", capacity: 2, occupied: 0, status: "Available" },
    { id: 3, room: "B-105", block: "Block B", capacity: 3, occupied: 2, status: "Occupied" },
    { id: 4, room: "B-106", block: "Block B", capacity: 2, occupied: 0, status: "Maintenance" },
    { id: 5, room: "C-304", block: "Block C", capacity: 4, occupied: 4, status: "Occupied" },
    { id: 6, room: "C-305", block: "Block C", capacity: 3, occupied: 0, status: "Available" },
  ];

  return (
    <div className="space-y-6">
      {/* Block Overview Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {blocks.map((block) => (
          <Card key={block.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">{block.name}</CardTitle>
              <Building2 className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Rooms:</span>
                  <span className="font-medium">{block.total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Occupied:</span>
                  <span className="font-medium text-success">{block.occupied}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Available:</span>
                  <span className="font-medium text-primary">{block.available}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Maintenance:</span>
                  <span className="font-medium text-warning">{block.maintenance}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-success"
                    style={{ width: `${(block.occupied / block.total) * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rooms Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Rooms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                  <th className="pb-3">Room Number</th>
                  <th className="pb-3">Block</th>
                  <th className="pb-3">Capacity</th>
                  <th className="pb-3">Occupied</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id} className="border-b last:border-0">
                    <td className="py-4 font-medium">{room.room}</td>
                    <td className="py-4 text-sm text-muted-foreground">{room.block}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{room.capacity}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm">{room.occupied}</td>
                    <td className="py-4">
                      <Badge
                        variant={
                          room.status === "Occupied"
                            ? "default"
                            : room.status === "Available"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {room.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-right">
                      <Button variant="outline" size="sm">
                        Assign Student
                      </Button>
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
