export type MenuItem = {
    id: number;
    label: string;
    icon?: string;
    path?: string;
    submenu?: MenuItem[];
};

export const menuList: MenuItem[] = [
    {
        id: 1,
        label: "Home",
        icon: "🏠",
        path: "/"
    },
    {
        id: 2,
        label: "Services",
        icon: "🛠️",
        path: "/services",
        submenu: [
            { id: 21, label: "Web App Development", path: "/services/web-app-development" },
            { id: 22, label: "Brand Marketing", path: "/services/brand-marketing" },
            { id: 23, label: "SAP Integration", path: "/services/sap-enterprise-integration" },
            { id: 24, label: "WhatsApp Automation", path: "/services/whatsapp-automation" },
            { id: 25, label: "Cybersecurity", path: "/services/cybersecurity" },
            { id: 26, label: "Design & Multimedia", path: "/services/design-multimedia" },
        ]
    },
    {
        id: 3,
        label: "Industries",
        icon: "🏭",
        path: "/industries",
        submenu: [
            { id: 31, label: "Startups & SMEs", path: "/industries/startups-smes" },
            { id: 32, label: "Education", path: "/industries/coaching-education" },
            { id: 33, label: "Fintech & E-commerce", path: "/industries/fintech-ecommerce" },
            { id: 34, label: "Real Estate", path: "/industries/real-estate-agencies" },
            { id: 35, label: "Healthcare", path: "/industries/healthcare-wellness" },
            { id: 36, label: "Government & NGOs", path: "/industries/large-scale-government-ngos" },
        ]
    },
    {
        id: 4,
        label: "Engagement",
        icon: "🤝",
        path: "/engagement-models",
        submenu: [
            { id: 41, label: "Fixed Projects", path: "/engagement-models/fixed-scope-projects" },
            { id: 42, label: "Monthly Retainers", path: "/engagement-models/monthly-retainers" },
            { id: 43, label: "CTO-as-a-Service", path: "/engagement-models/cto-as-a-service" },
            { id: 44, label: "Staff Augmentation", path: "/engagement-models/staff-augmentation" },
        ]
    },
    {
        id: 5,
        label: "Case Studies",
        icon: "📚",
        path: "/case-studies"
    },
    {
        id: 6,
        label: "About",
        icon: "👥",
        path: "/about",
        submenu: [
            { id: 61, label: "Team", path: "/about/team" },
            { id: 62, label: "Careers", path: "/about/careers" },
        ]
    },
    {
        id: 7,
        label: "Contact",
        icon: "📞",
        path: "/contact"
    }
];