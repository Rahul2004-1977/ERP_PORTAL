import {
  School,
  UserCog,
  CheckCircle,
  Users,
  GraduationCap,
  Clock,
} from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { SchoolDistributionChart } from "@/components/SchoolDistributionChart";

const recentActivity = [
  { school: "Greenwood Academy", action: "Registered", time: "2 hours ago", status: "active" },
  { school: "Sunrise International", action: "Registered", time: "5 hours ago", status: "active" },
  { school: "Heritage School", action: "Updated", time: "1 day ago", status: "active" },
  { school: "Mapleton High", action: "Suspended", time: "2 days ago", status: "inactive" },
  { school: "Riverside Public", action: "Registered", time: "3 days ago", status: "active" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        <StatCard title="Total Schools" value={48} icon={School} trend="12% this month" trendUp color="primary" />
        <StatCard title="School Admins" value={52} icon={UserCog} trend="8% this month" trendUp color="info" />
        <StatCard title="Active Schools" value={42} icon={CheckCircle} trend="2 new today" trendUp color="success" />
        <StatCard title="Total Students" value="12,480" icon={Users} trend="5% this month" trendUp color="warning" />
        <StatCard title="Total Teachers" value="1,245" icon={GraduationCap} trend="3% this month" trendUp color="primary" />
      </div>

      {/* Chart & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 stat-card">
          <h3 className="text-base font-display font-semibold mb-4">School Distribution</h3>
          <SchoolDistributionChart />
        </div>

        <div className="stat-card">
          <h3 className="text-base font-display font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${
                  item.status === "active" ? "bg-success" : "bg-destructive"
                }`} />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{item.school}</p>
                  <p className="text-xs text-muted-foreground">{item.action}</p>
                </div>
                <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                  <Clock className="w-3 h-3" />
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
