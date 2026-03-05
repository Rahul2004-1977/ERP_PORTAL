import { X } from "lucide-react";
import { useState } from "react";

interface AddSchoolModalProps {
  onClose: () => void;
}

export function AddSchoolModal({ onClose }: AddSchoolModalProps) {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolPhone: "",
    schoolAddress: "",
    schoolWebsite: "",
    adminName: "",
    adminEmail: "",
    adminPassword: "",
    adminPhone: "",
    schoolType: "Private",
    maxStudents: "",
    subscriptionPlan: "Basic",
  });

  const update = (key: string, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50" onClick={onClose} />
      <div className="relative bg-card rounded-xl border border-border shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="sticky top-0 bg-card flex items-center justify-between p-6 border-b border-border z-10">
          <h2 className="text-lg font-display font-bold">Add New School</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* School Information */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              School Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="School Name" value={formData.schoolName} onChange={(v) => update("schoolName", v)} required />
              <InputField label="School Email" type="email" value={formData.schoolEmail} onChange={(v) => update("schoolEmail", v)} required />
              <InputField label="School Phone" value={formData.schoolPhone} onChange={(v) => update("schoolPhone", v)} required />
              <InputField label="Website" value={formData.schoolWebsite} onChange={(v) => update("schoolWebsite", v)} />
              <div className="sm:col-span-2">
                <InputField label="Address" value={formData.schoolAddress} onChange={(v) => update("schoolAddress", v)} required />
              </div>
            </div>
          </div>

          {/* Admin Information */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Admin Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Admin Name" value={formData.adminName} onChange={(v) => update("adminName", v)} required />
              <InputField label="Admin Email" type="email" value={formData.adminEmail} onChange={(v) => update("adminEmail", v)} required />
              <InputField label="Admin Password" type="password" value={formData.adminPassword} onChange={(v) => update("adminPassword", v)} required />
              <InputField label="Admin Phone" value={formData.adminPhone} onChange={(v) => update("adminPhone", v)} />
            </div>
          </div>

          {/* Additional Settings */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Additional Settings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">School Type</label>
                <select
                  value={formData.schoolType}
                  onChange={(e) => update("schoolType", e.target.value)}
                  className="w-full px-3 py-2.5 bg-muted rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>
              <InputField label="Max Students" type="number" value={formData.maxStudents} onChange={(v) => update("maxStudents", v)} />
              <div>
                <label className="block text-sm font-medium mb-1.5">Subscription</label>
                <select
                  value={formData.subscriptionPlan}
                  onChange={(e) => update("subscriptionPlan", e.target.value)}
                  className="w-full px-3 py-2.5 bg-muted rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Create School
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-3 py-2.5 bg-muted rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
      />
    </div>
  );
}
