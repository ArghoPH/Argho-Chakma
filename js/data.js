// Shared project data for portfolio pages
// This file is referenced by index.html and mywork.html

const projectFilters = [
  "All",
  "Web Design & Development",
  "Application Design",
  "Software",
  "Web Development",
  "UI/UX Design"
];

const projects = [
  {
    id: 1,
    title: "Digital Loan Process",
    category: "Application Design",
    description: "Modern NGO Loan Process solution with seamless user experience.",
    image: "/img/mapp/appdesign.png",
    link: "/projects/mobileapp.html",
    linkColor: "text-purple-600",
    technologies: [
      { name: "Figma", color: "text-red-600" },
      { name: "Wireframing", color: "text-purple-600" },
      { name: "User Flow", color: "text-sky-600" },
      { name: "Responsive", color: "text-orange-600" },
      { name: "Prototyping", color: "text-green-600" },
    ]
  },
  {
    id: 2,
    title: "ERP Support Module",
    category: "UI/UX Design",
    description: "Intuitive mobile banking experience with focus on security and usability.",
    image: "/img/erpdesign.png",
    link: "/projects/erp.html",
    linkColor: "text-orange-600",
    technologies: [
      { name: "Figma", color: "text-purple-600" },
      { name: "Responsive Design", color: "text-orange-600" },
      { name: "Prototyping", color: "text-emerald-600" },
      { name: "UI/UX Principles", color: "text-purple-600" }
    ]
  },
  {
    id: 3,
    title: "ERP Dashboard",
    category: "Software",
    description: "Comprehensive analytics dashboard with real-time data visualization.",
    image: "/img/erpdashboard/Homepage Dashboard (1).png",
    link: "/projects/erpdashboard.html",
    linkColor: "text-red-600",
    technologies: [
      { name: "ASP.NET", color: "text-purple-600" },
      { name: "Vue.js", color: "text-blue-600" },
      { name: "JavaScript", color: "text-green-600" }
    ]
  },
  {
    id: 4,
    title: "Support Module UI",
    category: "Software",
    description: "Customer support management module with ticket tracking interface.",
    image: "/img/support.png",
    link: "/projects/support.html",
    linkColor: "text-indigo-600",
    technologies: [
      { name: "ASP.NET", color: "text-purple-600" },
      { name: "Vue.js", color: "text-blue-600" },
      { name: "JavaScript", color: "text-green-600" }
    ]
  },
    {
    id: 5,
    title: "SSLCommerz Integration",
    category: "Web Development",
    description: "Secure payment gateway integration for any platforms.",
    image: "/img/sslcommerz.png",
    link: "/projects/sslcommerz.html",
    linkColor: "text-green-600",
    technologies: [
      { name: "PHP", color: "text-purple-600" },
      { name: "JavaScript (ES6+)", color: "text-blue-600" },
      { name: "API", color: "text-green-600" },
      { name: "Security", color: "text-red-600" }
    ]
  },

      {
    id: 6,
    title: "Skakti Website Redesign",
    category: "Web Design & Development",
    description: "Complete website redesign with modern UI and improved user experience.",
    image: "/img/website-redesign.png",
    link: "/projects/website-redesign.html",
    linkColor: "text-green-600",
    technologies: [
      { name: "Figma", color: "text-purple-600" },
      { name: "Responsive Layout", color: "text-blue-600" },
      { name: "Color Palettes", color: "text-green-600" },
      { name: "UI/UX Principles", color: "text-red-600" },
      { name: "PHP", color: "text-purple-600" },
      { name: "JavaScript (ES6+)", color: "text-sky-600" },
      { name: "Development", color: "text-orange-600" },
    ]
  },

        {
    id: 7,
    title: "Shakti STARC",
    category: "Web Design & Development", 
    description: "Complete page with modern UI and Development.",
    image: "/img/shakti-starc.png",
    link: "/projects/shakti-starc.html",
    linkColor: "text-green-600",
    technologies: [
      { name: "Figma", color: "text-purple-600" },
      { name: "Responsive Layout", color: "text-blue-600" },
      { name: "Color Palettes", color: "text-green-600" },
      { name: "UI/UX Principles", color: "text-red-600" },
      { name: "PHP", color: "text-purple-600" },
      { name: "JavaScript (ES6+)", color: "text-sky-600" },
      { name: "Development", color: "text-orange-600" },
    ]
  },

  
        {
    id: 7,
    title: "Inventory Management System",
    category: "UI/UX Design", 
    description: "Intuitive inventory management system with focus on usability and efficiency.",
    image: "/img/inventory-management.png",
    link: "/projects/inventory-management.html",
    linkColor: "text-green-600",
    technologies: [
      { name: "Figma", color: "text-purple-600" },
      { name: "Responsive Design", color: "text-blue-600" },
      { name: "Color Palettes", color: "text-green-600" },
      { name: "UI/UX Principles", color: "text-red-600" }
    ]
  },

  {
    id: 7,
    title: "Inventory Management System",
    category: "Software", 
    description: "Intuitive inventory management system with focus on usability and efficiency.",
    image: "/img/inventory-management.png",
    link: "/projects/inventory-management.html",
    linkColor: "text-green-600",
    technologies: [
      { name: "Vue.js", color: "text-purple-600" },
      { name: "JavaScript (ES6+)", color: "text-blue-600" },
      { name: "ASP.NET", color: "text-green-600" },
      { name: "UI/UX Principles", color: "text-red-600" },
      { name: "Front-End", color: "text-orange-600" },
    ]
  },

  {
    id: 8,
    title: "Branch Wise Territory View Drawer",
    category: "Software", 
    description: "Intuitive branch-wise territory view drawer with enhanced user experience.",
    image: "/img/branch-wise-territory-view.png",
    link: "/projects/branch-wise-territory-view.html",
    linkColor: "text-green-600",
    technologies: [
      { name: "Vue.js", color: "text-purple-600" },
      { name: "JavaScript (ES6+)", color: "text-blue-600" },
      { name: "ASP.NET", color: "text-green-600" },
      { name: "UI/UX Principles", color: "text-red-600" },
      { name: "Front-End", color: "text-orange-600" },
    ]
  },

  {
    id: 8,
    title: "Approval Process",
    category: "Software", 
    description: "Intuitive approval process with enhanced user experience.",
    image: "/img/approval-process.png",
    link: "/projects/approval-process.html",
    linkColor: "text-green-600",
    technologies: [
      { name: "Vue.js", color: "text-purple-600" },
      { name: "JavaScript (ES6+)", color: "text-blue-600" },
      { name: "ASP.NET", color: "text-green-600" },
      { name: "UI/UX Principles", color: "text-red-600" },
      { name: "Front-End", color: "text-orange-600" },
    ]
  },

  {
    id: 9,
    title: "Fixed Asset Code Mapping",
    category: "Software", 
    description: "Intuitive fixed asset code mapping system with enhanced user experience.",
    image: "/img/fixed-asset-code-mapping.png",
    link: "/projects/fixed-asset-code-mapping.html",
    linkColor: "text-green-600",
    technologies: [
      { name: "Vue.js", color: "text-purple-600" },
      { name: "JavaScript (ES6+)", color: "text-blue-600" },
      { name: "ASP.NET", color: "text-green-600" },
      { name: "UI/UX Principles", color: "text-red-600" },
      { name: "Front-End", color: "text-orange-600" },
    ]
  },

  
];
