import { Users, BookOpen, GraduationCap, Clock, Bell } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const classData = [
  { name: "Primary (1-5)", students: 420, color: "hsl(168, 80%, 36%)" },
  { name: "Middle (6-8)", students: 310, color: "hsl(217, 91%, 60%)" },
  { name: "Secondary (9-10)", students: 245, color: "hsl(38, 92%, 50%)" },
  { name: "Senior (11-12)", students: 180, color: "hsl(280, 65%, 55%)" },
];

const notifications = [
  {
    title: "🎂 Birthday: Rahul Sharma",
    desc: "Class 6-A student",
    time: "Today",
  },
  {
    title: "📢 Staff Meeting",
    desc: "At 3:00 PM in conference hall",
    time: "Today",
  },
  {
    title: "📝 Exam Schedule Released",
    desc: "Check exams module",
    time: "Yesterday",
  },
  {
    title: "🎉 Annual Day",
    desc: "Coming this weekend",
    time: "Upcoming",
  },
];

export default function SchoolAdminDashboard() {
  return (
    <div className="space-y-6">

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Total Classes" value={32} icon={BookOpen} trend="4 new this term" trendUp color="primary" />
        <StatCard title="Total Students" value="1,155" icon={Users} trend="12% this year" trendUp color="info" />
        <StatCard title="Total Teachers" value={68} icon={GraduationCap} trend="5 new hires" trendUp color="success" />
        <StatCard title="Avg Attendance" value="94.2%" icon={Clock} trend="1.5% improvement" trendUp color="warning" />
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ✅ BIG Class Distribution Chart */}
        <div className="lg:col-span-2 stat-card">
          <h3 className="text-base font-semibold mb-4">Class Distribution</h3>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={classData}
                dataKey="students"
                nameKey="name"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={4}
              >
                {classData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 🔔 Notifications */}
        <div className="stat-card">
          <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </h3>

          <div className="space-y-3">
            {notifications.map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition"
              >
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}