import { useState, useEffect } from "react";
import {
  School,
  BookOpen,
  Bell,
  Rocket,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  GraduationCap,
  Calendar,
  Award,
} from "lucide-react";

interface SchoolInfo {
  name: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  principal?: string;
  established?: string;
  board?: string;
  logo?: string;
  totalStudents?: number;
  totalStaff?: number;
}

const defaultSchoolInfo: SchoolInfo = {
  name: "Springfield International School",
  address: "123 Education Lane, Knowledge City, KN 45001",
  phone: "+91 98765 43210",
  email: "info@springfieldschool.edu",
  website: "www.springfieldschool.edu",
  principal: "Dr. Ananya Sharma",
  established: "2005",
  board: "CBSE",
  totalStudents: 2450,
  totalStaff: 185,
};

const schoolMotto = {
  title: "Our Motto",
  tagline: "Learn. Lead. Inspire.",
  description:
    "We believe every child carries the potential to shape the future. Our mission is to nurture curious minds, build strong character, and empower students to become compassionate leaders who make a positive impact on the world.",
};

const schoolNotices = [
  {
    id: 1,
    title: "Annual Day Celebration",
    date: "2025-04-15",
    category: "Event",
    description:
      "The Annual Day function will be held on April 15th. All students are required to participate in cultural programmes. Parents are cordially invited.",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    date: "2025-04-10",
    category: "Meeting",
    description:
      "PTM for Classes 6-10 is scheduled for April 10th from 9 AM to 1 PM. Please carry the student diary.",
  },
  {
    id: 3,
    title: "Summer Vacation Notice",
    date: "2025-05-01",
    category: "Holiday",
    description:
      "Summer vacation begins May 15th and school reopens July 1st. Holiday homework will be shared via the student portal.",
  },
  {
    id: 4,
    title: "Science Exhibition",
    date: "2025-04-22",
    category: "Event",
    description:
      "Inter-school Science Exhibition on April 22nd. Students from Classes 8-12 can register their projects by April 12th.",
  },
  {
    id: 5,
    title: "Fee Payment Reminder",
    date: "2025-04-05",
    category: "Finance",
    description:
      "Q1 fee payment deadline is April 30th. Late payments will incur a surcharge. Pay online via the parent portal.",
  },
];

const futurePlans = [
  {
    id: 1,
    title: "Smart Classroom Initiative",
    timeline: "2025-2026",
    icon: "monitor",
    description:
      "Upgrading all classrooms with interactive smart boards, high-speed Wi-Fi, and digital learning tools to create an immersive learning environment.",
  },
  {
    id: 2,
    title: "New Sports Complex",
    timeline: "2026",
    icon: "trophy",
    description:
      "Construction of a multi-sport complex with an indoor swimming pool, basketball courts, and a 200m athletics track.",
  },
  {
    id: 3,
    title: "AI & Robotics Lab",
    timeline: "2025",
    icon: "cpu",
    description:
      "Setting up a dedicated AI and Robotics laboratory for students in Classes 8-12 to foster innovation and computational thinking.",
  },
  {
    id: 4,
    title: "Green Campus Drive",
    timeline: "2025-2027",
    icon: "leaf",
    description:
      "Transitioning to solar energy, rainwater harvesting, and a zero-waste campus with student-led eco-clubs and sustainability projects.",
  },
  {
    id: 5,
    title: "International Exchange Programme",
    timeline: "2026",
    icon: "globe",
    description:
      "Partnering with schools in the UK and Singapore for student and faculty exchange programmes to promote global learning.",
  },
];

const categoryColors: Record<string, string> = {
  Event: "bg-blue-100 text-blue-700",
  Meeting: "bg-purple-100 text-purple-700",
  Holiday: "bg-green-100 text-green-700",
  Finance: "bg-amber-100 text-amber-700",
};

type Tab = "info" | "motto" | "notices" | "plans";

export default function SchoolDiaryModule() {
  const [activeTab, setActiveTab] = useState<Tab>("info");
  const [schoolData, setSchoolData] = useState<SchoolInfo>(defaultSchoolInfo);

  useEffect(() => {
    const stored = localStorage.getItem("school");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.schoolInfo?.name) {
          setSchoolData({
            ...defaultSchoolInfo,
            ...parsed.schoolInfo,
          });
        }
      } catch {
        // use defaults
      }
    }
  }, []);

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "info", label: "School Info", icon: <School className="w-4 h-4" /> },
    { key: "motto", label: "Motto & Mission", icon: <Award className="w-4 h-4" /> },
    { key: "notices", label: "Notices", icon: <Bell className="w-4 h-4" /> },
    { key: "plans", label: "Future Plans", icon: <Rocket className="w-4 h-4" /> },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.key
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* School Info Tab */}
      {activeTab === "info" && (
        <div className="space-y-6">
          {/* School Header Card */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              {schoolData.logo &&
              (schoolData.logo.startsWith("data:image") ||
                schoolData.logo.startsWith("http")) ? (
                <img
                  src={schoolData.logo}
                  alt={schoolData.name}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-white/30"
                />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8" />
                </div>
              )}
              <div>
                <h2 className="text-2xl font-bold">{schoolData.name}</h2>
                {schoolData.board && (
                  <p className="text-white/80 text-sm">
                    Affiliated to {schoolData.board}
                    {schoolData.established &&
                      ` | Established ${schoolData.established}`}
                  </p>
                )}
              </div>
            </div>
            {schoolData.principal && (
              <p className="text-white/90 text-sm">
                Principal: <span className="font-semibold">{schoolData.principal}</span>
              </p>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {schoolData.totalStudents && (
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-2xl font-bold">{schoolData.totalStudents.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            )}
            {schoolData.totalStaff && (
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <GraduationCap className="w-5 h-5 text-indigo-600 mb-2" />
                <p className="text-2xl font-bold">{schoolData.totalStaff.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Staff</p>
              </div>
            )}
            {schoolData.established && (
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <Calendar className="w-5 h-5 text-green-600 mb-2" />
                <p className="text-2xl font-bold">{schoolData.established}</p>
                <p className="text-sm text-muted-foreground">Year Established</p>
              </div>
            )}
            {schoolData.board && (
              <div className="bg-white rounded-xl p-4 shadow-sm border">
                <BookOpen className="w-5 h-5 text-amber-600 mb-2" />
                <p className="text-2xl font-bold">{schoolData.board}</p>
                <p className="text-sm text-muted-foreground">Board</p>
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {schoolData.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{schoolData.address}</p>
                  </div>
                </div>
              )}
              {schoolData.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{schoolData.phone}</p>
                  </div>
                </div>
              )}
              {schoolData.email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{schoolData.email}</p>
                  </div>
                </div>
              )}
              {schoolData.website && (
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Website</p>
                    <p className="text-sm text-muted-foreground">{schoolData.website}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Motto & Mission Tab */}
      {activeTab === "motto" && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 text-center">
            <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
              {schoolMotto.title}
            </h3>
            <p className="text-3xl font-bold text-amber-900 mb-4">
              &ldquo;{schoolMotto.tagline}&rdquo;
            </p>
            <p className="text-amber-800/80 max-w-2xl mx-auto leading-relaxed">
              {schoolMotto.description}
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "Excellence", color: "bg-blue-100 text-blue-700" },
                { value: "Integrity", color: "bg-green-100 text-green-700" },
                { value: "Innovation", color: "bg-purple-100 text-purple-700" },
                { value: "Compassion", color: "bg-rose-100 text-rose-700" },
              ].map((item) => (
                <div
                  key={item.value}
                  className={`${item.color} rounded-lg p-4 text-center font-semibold text-sm`}
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3">Our Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To be a globally recognized institution that shapes future leaders through
                holistic education, fostering academic excellence, creativity, and social
                responsibility in every student.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To provide a nurturing and inclusive environment where students develop
                critical thinking, ethical values, and life skills that empower them to
                thrive in a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Notices Tab */}
      {activeTab === "notices" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">School Notices</h3>
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {schoolNotices.length} notices
            </span>
          </div>

          {schoolNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-xl p-5 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <h4 className="font-semibold">{notice.title}</h4>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    categoryColors[notice.category] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {notice.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {notice.description}
              </p>
              <p className="text-xs text-muted-foreground">
                Posted:{" "}
                {new Date(notice.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Future Plans Tab */}
      {activeTab === "plans" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Future Plans & Roadmap</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-6">
              {futurePlans.map((plan, index) => (
                <div key={plan.id} className="relative flex gap-4">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                    <Rocket className="w-5 h-5" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{plan.title}</h4>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                        {plan.timeline}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
