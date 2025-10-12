import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Bell, Mail, Smartphone, Save } from "lucide-react";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    mealReminders: true,
    maintenanceUpdates: true,
    noticeAlerts: true,
    mealPreference: "veg",
  });

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your preferences and notifications</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Channels
            </CardTitle>
            <CardDescription>Choose how you want to receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="email" className="cursor-pointer">
                  Email Notifications
                </Label>
              </div>
              <Switch
                id="email"
                checked={settings.emailNotifications}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, emailNotifications: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="sms" className="cursor-pointer">
                  SMS Notifications
                </Label>
              </div>
              <Switch
                id="sms"
                checked={settings.smsNotifications}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, smsNotifications: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="push" className="cursor-pointer">
                  Push Notifications
                </Label>
              </div>
              <Switch
                id="push"
                checked={settings.pushNotifications}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, pushNotifications: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Types */}
        <Card>
          <CardHeader>
            <CardTitle>Notification Types</CardTitle>
            <CardDescription>Select which types of notifications to receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="meal-reminders" className="cursor-pointer">
                Meal Booking Reminders
              </Label>
              <Switch
                id="meal-reminders"
                checked={settings.mealReminders}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, mealReminders: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance" className="cursor-pointer">
                Maintenance Updates
              </Label>
              <Switch
                id="maintenance"
                checked={settings.maintenanceUpdates}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, maintenanceUpdates: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="notices" className="cursor-pointer">
                Notice Alerts
              </Label>
              <Switch
                id="notices"
                checked={settings.noticeAlerts}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, noticeAlerts: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Meal Preferences */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Meal Preferences</CardTitle>
            <CardDescription>Set your dietary preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={settings.mealPreference}
              onValueChange={(value) =>
                setSettings({ ...settings, mealPreference: value })
              }
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="veg" id="veg" />
                <Label htmlFor="veg" className="cursor-pointer font-normal">
                  Vegetarian
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="non-veg" id="non-veg" />
                <Label htmlFor="non-veg" className="cursor-pointer font-normal">
                  Non-Vegetarian
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="vegan" id="vegan" />
                <Label htmlFor="vegan" className="cursor-pointer font-normal">
                  Vegan
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="jain" id="jain" />
                <Label htmlFor="jain" className="cursor-pointer font-normal">
                  Jain
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave} size="lg">
          <Save className="mr-2 h-4 w-4" />
          Save All Settings
        </Button>
      </div>
    </div>
  );
}
