# ERP Portal - File Structure

A React + TypeScript frontend with an Express/Node.js backend, built with Vite and styled using Tailwind CSS + shadcn/ui.

```
ERP_PORTAL/
├── index.html                          # Vite entry HTML
├── package.json                        # Frontend dependencies & scripts
├── package-lock.json
├── bun.lockb                           # Bun lockfile
├── vite.config.ts                      # Vite configuration
├── vitest.config.ts                    # Vitest test configuration
├── tailwind.config.ts                  # Tailwind CSS configuration
├── postcss.config.js                   # PostCSS configuration
├── eslint.config.js                    # ESLint configuration
├── components.json                     # shadcn/ui component config
├── tsconfig.json                       # Root TypeScript config
├── tsconfig.app.json                   # App-specific TS config
├── tsconfig.node.json                  # Node-specific TS config
├── .gitignore
├── README.md
│
├── public/                             # Static assets
│   ├── placeholder.svg
│   └── robots.txt
│
├── backend/                            # Express.js backend
│   ├── .env                            # Environment variables
│   ├── package.json                    # Backend dependencies
│   ├── package-lock.json
│   ├── tsconfig.json                   # Backend TS config
│   └── src/
│       ├── server.ts                   # Express server entry point
│       ├── config/
│       │   └── db.ts                   # Database connection config
│       ├── models/
│       │   ├── Logs.ts                 # Logs data model
│       │   └── School.ts              # School data model
│       ├── routes/
│       │   ├── logRoutes.ts            # Log API routes
│       │   └── schoolRoutes.ts         # School API routes
│       └── utils/
│           └── createLog.ts            # Logging utility
│
└── src/                                # React frontend source
    ├── main.tsx                         # App entry point
    ├── App.tsx                          # Root App component & routing
    ├── App.css                          # App-level styles
    ├── index.css                        # Global styles
    ├── vite-env.d.ts                   # Vite type declarations
    │
    ├── components/                     # Shared components
    │   ├── AddSchoolModal.tsx           # Modal for adding schools
    │   ├── AppSidebar.tsx              # Main app sidebar
    │   ├── NavLink.tsx                 # Navigation link component
    │   ├── RoleSwitcher.tsx            # Role switching component
    │   ├── SchoolAdminDashboard.tsx    # School admin dashboard view
    │   ├── SchoolDistributionChart.tsx # School distribution chart
    │   ├── StatCard.tsx                # Statistics card component
    │   ├── TeacherSidebar.tsx          # Teacher-specific sidebar
    │   ├── TopNavbar.tsx               # Top navigation bar
    │   └── ui/                         # shadcn/ui components
    │       ├── accordion.tsx
    │       ├── alert.tsx
    │       ├── alert-dialog.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── button.tsx
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── input.tsx
    │       ├── input-otp.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       ├── toggle.tsx
    │       ├── toggle-group.tsx
    │       ├── tooltip.tsx
    │       └── use-toast.ts
    │
    ├── contexts/                       # React contexts
    │   └── RoleContext.tsx              # Role management context
    │
    ├── hooks/                          # Custom React hooks
    │   ├── use-mobile.tsx              # Mobile detection hook
    │   └── use-toast.ts               # Toast notification hook
    │
    ├── layouts/                        # Layout components
    │   ├── DashboardLayout.tsx         # Super admin dashboard layout
    │   ├── SchoolAdminLayout.tsx       # School admin layout
    │   └── TeacherLayout.tsx           # Teacher layout
    │
    ├── lib/                            # Utility libraries
    │   └── utils.ts                    # Shared utility functions
    │
    ├── pages/                          # Page components
    │   ├── Index.tsx                   # Landing / index page
    │   ├── NotFound.tsx                # 404 page
    │   │
    │   ├── super_admin/               # Super Admin pages
    │   │   ├── DashboardPage.tsx       # Super admin dashboard
    │   │   ├── LogsPage.tsx            # System logs viewer
    │   │   ├── SchoolAdminsPage.tsx    # Manage school admins
    │   │   ├── SchoolsPage.tsx         # Manage schools
    │   │   ├── SettingsPage.tsx        # System settings
    │   │   └── Subscription.tsx        # Subscription management
    │   │
    │   ├── school-admin/              # School Admin pages
    │   │   ├── SchoolAdminSidebar.tsx  # School admin sidebar nav
    │   │   ├── SchoolModulePage.tsx    # Module page wrapper
    │   │   └── modules/               # School admin modules
    │   │       ├── AcademicsModule.tsx
    │   │       ├── ApprovalsModule.tsx
    │   │       ├── AttendenceModule.tsx
    │   │       ├── CommunicationModule.tsx
    │   │       ├── DownloadsModule.tsx
    │   │       ├── MaintenanceModule.tsx
    │   │       └── SurveyModule.tsx
    │   │
    │   └── teacher/                   # Teacher pages
    │       ├── TeacherDashboard.tsx    # Teacher dashboard
    │       ├── TeacherModulePage.tsx   # Module page wrapper
    │       └── modules/               # Teacher modules
    │           ├── AssignmentsModule.tsx
    │           ├── AttendanceModule.tsx
    │           ├── CommunicationModule.tsx
    │           ├── DigitalClassroomModule.tsx
    │           ├── ExamsModule.tsx
    │           ├── LeaveModule.tsx
    │           ├── StudentModule.tsx
    │           └── TimeTableModule.tsx
    │
    └── test/                          # Test files
        ├── setup.ts                   # Test setup/configuration
        └── example.test.ts            # Example test
```

## Architecture Overview

| Layer | Tech Stack |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui |
| Backend | Express.js, TypeScript |
| Database | MongoDB (via Mongoose) |
| Testing | Vitest |

## Role-Based Structure

The app supports three user roles, each with dedicated layouts, sidebars, and module pages:

- **Super Admin** (`src/pages/super_admin/`) - System-wide management (schools, admins, logs, settings, subscriptions)
- **School Admin** (`src/pages/school-admin/`) - School-level operations (academics, attendance, approvals, communication, downloads, maintenance, surveys)
- **Teacher** (`src/pages/teacher/`) - Classroom-level features (assignments, attendance, communication, digital classroom, exams, leave, students, timetable)
