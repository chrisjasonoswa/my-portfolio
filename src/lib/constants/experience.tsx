export const SUMMARY = [
  { title: "Years of experience", label: "3", value: 3, icon: "clock" },
  { title: "Companies worked at", label: "4", value: 4, icon: "building" },
  {
    title: "Technologies used",
    label: "15+",
    value: 15,
    icon: "codeBracketIcon",
  },
  { title: "Projects", label: "8", value: 8, icon: "folder" },
];
export const SUMMARY_MAX = Math.max(...SUMMARY.map((item) => item.value));

interface History {
  jobTitle: string;
  company: string;
  date: string;
  projects?: Project[]
}

interface Project{
  title: string,
  technologies: string[],
  shortDescription: string,
  description: string[]
  url?: string
}

export const HISTORY: History[] = [
  {
    jobTitle: "Full Stack Software Engineer",
    company: "HIPE Japan Inc.",
    date: "May 2024 - Present",
    projects: [
      {
        title: 'Harmony',
        technologies: ['Vue', 'Laravel'],
        shortDescription: 'A real estate management platform connecting agencies, customers, and administrators through an integrated web portal.',
        description: [
          'Web application for real estate agencies, enabling super admins to manage house plans, specifications, pricing, and mortgage details, while allowing agencies to handle customers, leads, and applications through a dedicated portal',
          'Worked on ERD planning and model implementation, managed all frontend implementations and review other developers task, and assisted in backend API creation and integration.'
        ],
        url: 'https://the-base-hy.click/'
      },
      {
        title: 'Financial Planning Management System',
        technologies: ['React', 'Inertia', 'Laravel'],
        shortDescription: 'An AI-powered pension management system featuring real-time dashboards, chatbot assistance, and planner consultations.',
        description: [
          'A web application that helps users manage their pensions through an AI-powered chatbot and connects them with financial planners for personalized consultations when needed.',
          'Worked on dashboard charts for data visualization, LINE API integration, notifications, and other frontend and backend implementations'
        ],
        url: 'https://fp-platform.lrdev03.click/'
      },  
      {
        title: 'General Purchase',
        technologies: ['Vue(Nuxt.js)', 'Java SpringBoot'],
        shortDescription: 'A sales and commission management platform with integration of AI-powered OCR for data extraction.',
        description: [
          'Web app for managing sales and commissions, where owners earn a percentage from clients\' monthly savings on optimized service subscriptions.',
          'Worked on the frontend development and backend API, assisted in OpenAI-powered OCR extraction.'
        ],
        url: 'https://general-pcs.site/'
      },
      {
        title: 'Areus Line Official',
        technologies: ['Vue(Nuxt.js)', 'Java SpringBoot'],
        shortDescription: 'A unified communication platform integrating Chatwork, LINE, and Email with support for cloud storage and push notifications.',
        description: [
          'A web app that integrates multiple communication platforms, including Chatwork, LINE, and Email, into a single unified interface.',
          'Worked on the frontend development and backend API, LINE API integration, OneDrive API integration and web push notifications.'
        ],
        url: 'https://tracking.assistant-system.com/'
      }
    ]
  },
  {
    jobTitle: "Full Stack Developer (Part-time)",
    company: "WareSwift",
    date: "April 2025 - May 2025",
    projects: [
      {
        title: 'WareSwift - Smart Warehouse & Shipping Platform',
        technologies: ['Vue (Quasar)', 'Django'],
        shortDescription: 'A warehouse and shipping management system that streamlines inventory tracking, order fulfillment, and carrier integrations.',
        description: [
          'A web-based platform designed to simplify warehouse operations and shipping processes by integrating inventory management, order tracking, and carrier APIs for automated label generation, shipping costs reduction, and delivery status updates.',
          'Implemented new features, enhanced UI/UX components, resolved USPS/UPS API integration issues, and added EasyPost API support for improved shipment processing and tracking.'
        ],
        url: 'https://wareswift.com/'
      }
    ]
  },
  {
    jobTitle: "Software Design Engineer 1",
    company: "NEC Telecom Software Philippines, Inc.",
    date: "June 2023 - April 2024",
    projects: [
      {
        title: 'NVF Management System',
        technologies: ['React', 'Django', 'PostgreSQL'],
        shortDescription: 'Network Virtual Functions (NFVs) operation and management system',
        description: [
          'A web platform for monitoring Network Virtual Functions and execute operations like initiate, heal, and maintain services.',
          'Handled end-to-end development, including backend setup and API design, ERD planning, frontend UI design and implementation, and integration of backend APIs.'
        ],
      },
      {
        title: 'Proxy Tool',
        technologies: ['Nginx', 'Lua', 'PostgreSQL'],
        shortDescription: 'A reverse proxy tool for debugging and logging VNF-related operations.',
        description: [
          'Reverse and logging tool using Nginx with Lua for capturing and analyzing request and response data related to Network Virtual Function (VNF) operations, enabling easier debugging and monitoring of network services.',
          'Handled the full tool development and environment setup, ensuring seamless integration and reliable monitoring of VNF operations.'
        ],
      },
      {
        title: 'VNF Package Generator',
        technologies: ['Python', 'Excel', 'VBA'],
        shortDescription: 'A tool that automates VNF Package generation.',
        description: [
          'A desktop tool that automates the creation of Network Virtual Function (VNF) packages based on configurable inputs and templates, streamlining the otherwise manual packaging process.',
          'Assisted in requirements gathering and design planning, developed Python scripts and packages, and contributed to Excel design and VBA coding.'
        ],
      }
    ]
  },
  {
    jobTitle: "Academic Programmer",
    company: "Uvocorp",
    date: "Nov 2023 - Jan 2024",
  },
  {
    jobTitle: "Academic Programmer",
    company: "Uvocorp",
    date: "Nov 2022 - March 2023",
  },
  {
    jobTitle: "Embedded Sytems Intern",
    company: "Cebu Institute of Technology University ",
    date: "Jun 2022 - Aug 2022",
    projects: [
      {
        title: 'Smart Campus Temperature Monitoring System',
        technologies: ['C# Windows Forms', 'Arduino'],
        shortDescription: 'A real-time classroom temperature monitoring system integrating Arduino sensors with a desktop dashboard for analytics and alerts.',
        description: [
          'An application delivering real-time temperature tracking through an intuitive dashboard that visualizes data from multiple classrooms. It features configurable alerts for abnormal readings and historical data logs. This project demonstrates the integration of embedded hardware with desktop software to enhance environmental monitoring and operational efficiency across campus facilities.',
          'Contributed in the hardware setup and development, and also the dashboard visualization ang management features'
        ]
      }
    ]
  },
];
