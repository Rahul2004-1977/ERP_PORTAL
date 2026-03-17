import { useState } from "react";

type School = {
  id: number;
  name: string;
  admin: string;
  email: string;
  phone: string;
  students: number;
  teachers: number;
  status: "paid" | "unpaid";
};

const schoolsData: School[] = [
  {
    id: 1,
    name: "Greenwood Academy",
    admin: "John Doe",
    email: "john@greenwood.com",
    phone: "9876543210",
    students: 1200,
    teachers: 80,
    status: "paid",
  },
  {
    id: 2,
    name: "Sunrise International",
    admin: "Amit Sharma",
    email: "amit@sunrise.com",
    phone: "9123456780",
    students: 900,
    teachers: 60,
    status: "unpaid",
  },
  {
    id: 3,
    name: "Heritage School",
    admin: "Priya Mehta",
    email: "priya@heritage.com",
    phone: "9988776655",
    students: 1500,
    teachers: 100,
    status: "paid",
  },
  {
    id: 4,
    name: "Mapleton High",
    admin: "Rahul Verma",
    email: "rahul@mapleton.com",
    phone: "9012345678",
    students: 700,
    teachers: 50,
    status: "unpaid",
  },
];

export default function DashboardPage() {
  const [schools] = useState(schoolsData);

  const total = schools.length;
  const paid = schools.filter((s) => s.status === "paid").length;
  const unpaid = schools.filter((s) => s.status === "unpaid").length;

  return (
    <div className="space-y-6">
      
      {/* 🔢 TOP CARDS (KEPT) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="stat-card p-4">
          <h3 className="text-sm text-muted-foreground">Total Schools</h3>
          <p className="text-2xl font-bold">{total}</p>
        </div>

        <div className="stat-card p-4">
          <h3 className="text-sm text-muted-foreground">Paid Schools</h3>
          <p className="text-2xl font-bold text-green-600">{paid}</p>
        </div>

        <div className="stat-card p-4">
          <h3 className="text-sm text-muted-foreground">Unpaid Schools</h3>
          <p className="text-2xl font-bold text-red-600">{unpaid}</p>
        </div>
      </div>

      {/* 📋 BIGGER TABLE */}
      <div className="stat-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          School Subscription Details
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="py-3 px-4">School</th>
                <th className="px-4">Admin</th>
                <th className="px-4">Email</th>
                <th className="px-4">Phone</th>
                <th className="px-4">Students</th>
                <th className="px-4">Teachers</th>
                <th className="px-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {schools.map((school) => (
                <tr
                  key={school.id}
                  className="bg-muted/40 hover:bg-muted/60 rounded-lg"
                >
                  <td className="py-4 px-4 font-medium text-base">
                    {school.name}
                  </td>
                  <td className="px-4">{school.admin}</td>
                  <td className="px-4">{school.email}</td>
                  <td className="px-4">{school.phone}</td>
                  <td className="px-4">{school.students}</td>
                  <td className="px-4">{school.teachers}</td>

                  <td className="px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        school.status === "paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {school.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}