import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertCircle, Calendar } from "lucide-react";

interface Notice {
  id: number;
  title: string;
  content: string;
  type: "event" | "alert" | "announcement";
  date: string;
  read: boolean;
}

export default function Notices() {
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: 1,
      title: "Hostel Meeting - October 15th",
      content:
        "All residents are requested to attend the monthly hostel meeting on October 15th at 6:00 PM in the common hall. Important updates will be shared.",
      type: "event",
      date: "Oct 5, 2025",
      read: false,
    },
    {
      id: 2,
      title: "Water Supply Interruption",
      content:
        "Water supply will be interrupted on October 10th from 10:00 AM to 2:00 PM due to maintenance work. Please plan accordingly.",
      type: "alert",
      date: "Oct 4, 2025",
      read: false,
    },
    {
      id: 3,
      title: "New Meal Menu Released",
      content:
        "The updated meal menu for the next two weeks has been released. Check the Meals section for details.",
      type: "announcement",
      date: "Oct 3, 2025",
      read: true,
    },
    {
      id: 4,
      title: "Festival Celebration - Diwali",
      content:
        "Join us for Diwali celebrations on October 24th! Special dinner and cultural programs planned. Register by October 20th.",
      type: "event",
      date: "Oct 2, 2025",
      read: true,
    },
    {
      id: 5,
      title: "Updated Hostel Rules",
      content:
        "New hostel rules regarding visitor timings and noise levels have been implemented. Please review the updated guidelines.",
      type: "announcement",
      date: "Oct 1, 2025",
      read: true,
    },
  ]);

  const toggleRead = (id: number) => {
    setNotices((prev) =>
      prev.map((notice) =>
        notice.id === id ? { ...notice, read: !notice.read } : notice
      )
    );
  };

  const getIcon = (type: Notice["type"]) => {
    switch (type) {
      case "event":
        return <Calendar className="h-5 w-5 text-primary" />;
      case "alert":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      default:
        return <Bell className="h-5 w-5 text-accent" />;
    }
  };

  const getTypeBadge = (type: Notice["type"]) => {
    const colors = {
      event: "bg-primary/10 text-primary border-primary/20",
      alert: "bg-warning/10 text-warning border-warning/20",
      announcement: "bg-accent/10 text-accent border-accent/20",
    };
    return (
      <Badge variant="outline" className={colors[type]}>
        {type}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Notices & Notifications</h1>
        <p className="text-muted-foreground">Stay updated with hostel announcements and events</p>
      </div>

      <div className="space-y-3">
        {notices.map((notice) => (
          <Card
            key={notice.id}
            className={`cursor-pointer hover:shadow-md transition-all ${
              !notice.read ? "border-l-4 border-l-primary" : ""
            }`}
            onClick={() => toggleRead(notice.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-muted">{getIcon(notice.type)}</div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className={`font-semibold ${
                        !notice.read ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {notice.title}
                    </h3>
                    {getTypeBadge(notice.type)}
                  </div>

                  <p
                    className={`text-sm ${
                      !notice.read ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {notice.content}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-muted-foreground">{notice.date}</p>
                    {!notice.read && (
                      <Badge className="bg-primary/10 text-primary text-xs">New</Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
