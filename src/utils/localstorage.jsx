const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        title: "Design Login Page",
        description: "Create responsive login UI for the app.",
        date: "2025-07-10",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Fix Signup Bug",
        description: "Resolve user validation error on signup.",
        date: "2025-07-09",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        title: "Write Unit Tests",
        description: "Write test cases for auth module.",
        date: "2025-07-07",
        category: "Testing"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        title: "Prepare Project Report",
        description: "Summarize progress and issues.",
        date: "2025-07-10",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Code API Integration",
        description: "Integrate backend APIs into frontend.",
        date: "2025-07-08",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Update README",
        description: "Add setup steps to the project README.",
        date: "2025-07-06",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        title: "Deploy on Firebase",
        description: "Try to deploy app, got errors.",
        date: "2025-07-05",
        category: "Deployment"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        title: "Redesign Profile Page",
        description: "Modernize profile UI layout.",
        date: "2025-07-10",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Optimize Images",
        description: "Compress and serve responsive images.",
        date: "2025-07-08",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        title: "Database Backup",
        description: "Missed backup schedule.",
        date: "2025-07-07",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Add Dark Mode",
        description: "Implement dark mode toggle.",
        date: "2025-07-06",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Fix Navbar",
        description: "Resolve overlap issue in mobile view.",
        date: "2025-07-05",
        category: "Bug Fix"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        title: "Schedule Meeting",
        description: "Set up weekly sync with team.",
        date: "2025-07-10",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Fix Login Redirect",
        description: "Redirect to dashboard after login.",
        date: "2025-07-09",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        title: "Upload Resources",
        description: "Couldn’t upload due to file limit.",
        date: "2025-07-08",
        category: "Assets"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        title: "Write Blog Post",
        description: "Share update about latest release.",
        date: "2025-07-10",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Fix Footer Layout",
        description: "Align items in mobile view.",
        date: "2025-07-09",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Add Loading Spinner",
        description: "Show loader during API calls.",
        date: "2025-07-08",
        category: "Enhancement"
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        title: "Push to GitHub",
        description: "Forgot to commit changes.",
        date: "2025-07-07",
        category: "Version Control"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]


export  const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees));
        localStorage.setItem("admin",JSON.stringify(admin));

}

export const getLocalStorage = () => {
     const employees = JSON.parse(localStorage.getItem('employees')); // typo: employess
const admin = JSON.parse(localStorage.getItem('admin'));

return {employees, admin}

}

export default localStorage