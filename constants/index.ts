import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { sub } from "three/tsl";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Custom Software Development",
    subheading: "Tailored Solutions for Unique Needs",  
    description:
      "Discover the art of creating tailored software solutions with 'Custom Software Development.' This project highlights my expertise in building innovative, scalable, and efficient applications designed to meet unique client needs. Leveraging modern technologies like Next.js, it showcases a commitment to precision, creativity, and delivering exceptional user experiences.",
    image: "/projects/project-5.avif",
    link: "/development",
    points: [
      "⚡ Rapid MVP Prototyping",
      "🌐 Web and Mobile Apps",
      "🧩 API Integrations & Microservices",
      "☁️ Cloud-native Development"
    ]
  },
  {
    title: "AI & ML Solutions",
    subheading: "Harnessing the Power of Data",
    description:
      "Explore the transformative potential of 'AI & ML Solutions,' a project that showcases my expertise in developing intelligent systems powered by artificial intelligence and machine learning. From predictive analytics to automation, this project highlights innovative solutions designed to solve complex problems and drive efficiency using cutting-edge technologies.",
    image: "/projects/project-6.jpg",
    link: "/ai",
    points: [
      "🤖 Natural Language Processing",
      "📊 Predictive Analytics",
      "🧠 Machine Learning Models",
      "🔍 Data Analysis & Visualization"
    ]
  },
  {
    title: "DevOps and Cloud Solutions",
    subheading: "Streamlining Development and Deployment",                         
    description:
      "Unlock the potential of seamless development and deployment with 'DevOps and Cloud Solutions.' This project demonstrates my expertise in leveraging cloud platforms and DevOps practices to build scalable, reliable, and efficient systems. From CI/CD pipelines to infrastructure automation, it showcases a commitment to optimizing workflows and delivering robust cloud-based solutions.",
    image: "/projects/project-4.jpg",
    link: "/devops",
    points: [
      "☁️ Cloud Infrastructure Management",
      "🔄 Continuous Integration & Deployment",
      "🛠️ Infrastructure as Code",
      "📈 Monitoring & Performance Optimization"
    ]
  },
  {
    title: "SaaS Product Development",
    subheading: "We Transform SaaS Ideas Into Scalable Powerhouses",                         
    description:
      "Experience the future of software with 'SaaS Product Development,' a project that showcases my expertise in building scalable, cloud-based applications. From concept to deployment, this project highlights the journey of creating innovative Software as a Service (SaaS) solutions designed to meet diverse business needs.",
    image: "/projects/project-4.jpg",
    link: "/saas",
    points: [
      "🚀 MVP to Enterprise SaaS Rollout",
      "🔐 SSO, Subscription, and Payment Integrations",
      "📊 Analytics and Reporting Dashboards",
      "🔒 Security and Compliance"
    ]
  },
  {
    title: "Microservices Architecture and Engineering",
    subheading: "Building Scalable and Resilient Systems",
    description:
      "Dive into the world of 'Microservices Architecture and Engineering,' a project that showcases my expertise in designing and implementing scalable, resilient systems. This project highlights the power of microservices in creating modular applications that can evolve independently. From architecture design to deployment, it emphasizes a commitment to building robust solutions that meet modern business needs.",
    image: "/projects/project-5.avif",
    link: "/microservices",
    points: [
      "🔧 Microservices Design and Implementation",
      "🔄 API Gateway and Service Discovery",
      "📦 Containerization with Docker",
      "☁️ Cloud Deployment and Management"
    ]
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Locate Us",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "WhatsApp Us",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Mail Us",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Our Works",
    link: "/works",
  },
  {
    title: "Contact",
    link: "/contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com",
};
