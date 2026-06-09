import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight, X, Lock, Zap } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import hrCover from "@/assets/hr-cover.jpg";
import eksImg from "@/assets/eks-app/eks.webp";
import eksJenkins from "@/assets/eks-app/jenkins.png";
import eksJenkins2 from "@/assets/eks-app/jenkins2.png";
import eksScreenshot from "@/assets/eks-app/Screenshot from 2025-12-05 22-35-38.png";
import hafezon1 from "@/assets/hafezon/1.png";
import hafezon2 from "@/assets/hafezon/2.png";
import hafezon3 from "@/assets/hafezon/3.png";
import hafezon4 from "@/assets/hafezon/4.png";
import hafezon5 from "@/assets/hafezon/5.png";
import hafezon6 from "@/assets/hafezon/6.png";
import hafezon7 from "@/assets/hafezon/7.png";
import bareeqScreen from "@/assets/bareeqscreen.jpeg";

import imsDashboard from "@/assets/ims/ims2.png";
import imsProductsList from "@/assets/ims/ims3.png";
import imsProductsTable from "@/assets/ims/ims4.png";
import imsAccounts from "@/assets/ims/ims5.png";
import imsCategories from "@/assets/ims/ims6.png";
import imsClients from "@/assets/ims/ims7.png";
import imsInvoices from "@/assets/ims/ims8.png";
import imsSales from "@/assets/ims/ims9.png";
import imsStock from "@/assets/ims/ims11.png";
import screen12 from "@/assets/ims/ims12.png";
import screen13 from "@/assets/ims/ims13.png";

import jumia1 from "@/assets/jumia/jumia1.png";
import jumia2 from "@/assets/jumia/jumia2.png";
import jumia5 from "@/assets/jumia/jumia5.png";
import jumia7 from "@/assets/jumia/jumia7.png";
import jumia8 from "@/assets/jumia/jumia8.png";
import jumia9 from "@/assets/jumia/jumia9.png";
import jumia10 from "@/assets/jumia/jumia10.png";
import jumia11 from "@/assets/jumia/jumia11.png";

import social1 from "@/assets/social/cs1.png";
import social2 from "@/assets/social/cs2.png";
import social3 from "@/assets/social/cs3.png";
import social4 from "@/assets/social/cs4.png";
import social5 from "@/assets/social/cs5.png";
import social6 from "@/assets/social/cs6.png";
import social7 from "@/assets/social/cs7.png";
import social8 from "@/assets/social/cs8.png";
import social9 from "@/assets/social/cs9.png";
import social10 from "@/assets/social/cs10.png";
import social12 from "@/assets/social/cs12.png";
import social13 from "@/assets/social/cs13.png";
import social14 from "@/assets/social/cs14.png";

import logic1 from "@/assets/logic/logic1.png";
import logic2 from "@/assets/logic/logic2.png";
import logic3 from "@/assets/logic/logic3.png";
import logic4 from "@/assets/logic/logic4.png";
import logic5 from "@/assets/logic/logic5.png";
import logic6 from "@/assets/logic/logic6.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string | null;
  demo?: string | null;
  screenshots?: string[];
  isPrivate?: boolean;
  isComingSoon?: boolean;
  coverPosition?: string;
  demoLabel?: string;
  repos?: { label: string; url: string }[];
  category: "Backend" | "Full Stack" | "DevOps" | "Product" | "Vibe Coding";
};

const projects: Project[] = [
  {
    title: "Bareeq - Jewelry Store Management SaaS",
    description: "A live, production SaaS platform built for jewelry retailers. Handles QR-code-based POS and invoicing, real-time inventory tracking, supplier management, customer records, and multi-branch financial reporting. Currently expanding with IoT/NFC integration for fast, hands-free stocktaking.",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Multi-tenant Architecture", "Redis", "Laravel Octane", "DigitalOcean", "Nginx", "GitHub Actions", "CI/CD", "QR Integration", "NFC / IoT"],
    highlights: ["Live in Production", "Multi-branch support", "Real-time financial reporting", "NFC Stocktaking (WIP)"],
    demoLabel: "Visit Site",
    github: null,
    demo: "https://bareeq.merspire.com/",
    screenshots: [bareeqScreen],
    coverPosition: "top",
    category: "Backend",
  },
  {
    title: "Multi-Tenant Healthcare SaaS",
    description: "Secure multi-tenant SaaS for healthcare with HIPAA-compliant data isolation, custom domain routing, OAuth2 + Active Directory auth, and tenant-specific workflow configurations.",
    tech: ["Laravel", "API", "Oauth2", "Active Directory", "Multi-tenancy", "MsSqlServer", "Queue Jobs", "Domain Routing"],
    highlights: ["Data isolation", "Custom domains", "Scalable architecture"],
    github: null,
    demo: "https://revixir.com",
    demoLabel: "Visit Site",
    screenshots: [hrCover],
    isPrivate: true,
    category: "Backend",
  },
  {
    title: "HR Assessment System",
    description: "Hiring automation platform that streamlines candidate evaluations, optimizes interview scheduling, and provides data-driven insights for better hiring decisions.",
    tech: ["Laravel", "PHP", "MySQL", "Livewire", "Bootstrap", "Chart.js", "PDF Reports"],
    highlights: ["Multi-stage Assessments", "Excel Integration", "Performance metrics"],
    github: null,
    demo: null,
    screenshots: [logic1, logic2, logic3, logic4, logic5, logic6],
    category: "Backend",
  },
  {
    title: "K8s CI/CD Pipeline on AWS EKS",
    description: "Graduation project from the DEPI DevOps track. A complete production-grade pipeline: Terraform provisions an AWS EKS cluster and VPC, Kubernetes manifests deploy Node.js applications, Jenkins automates the CI/CD flow, Docker Hub stores images, and Nginx handles load balancing.",
    tech: ["Kubernetes", "AWS EKS", "Terraform", "Jenkins", "Docker", "Nginx", "Node.js", "CI/CD"],
    highlights: ["Infrastructure as Code", "AWS EKS cluster", "Automated CI/CD", "Multi-app deployment"],
    github: null,
    repos: [
      { label: "Terraform Infra", url: "https://github.com/workytip/eks-terraform-infra" },
      { label: "K8s Manifests", url: "https://github.com/workytip/k8s-applications" },
      { label: "Node.js Apps", url: "https://github.com/workytip/sample-node-apps" },
    ],
    demo: "https://k8s-ci-cd-blueprint.lovable.app/",
    demoLabel: "View Docs",
    screenshots: [eksImg, eksJenkins, eksJenkins2, eksScreenshot],
    category: "DevOps",
  },
  {
    title: "Inventory Management System",
    description: "Web-based Inventory Management System built as a capstone project for NTI. Provides businesses with tools for tracking inventory, managing suppliers, and monitoring sales operations.",
    tech: ["Native PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
    highlights: ["Stock Monitoring", "Sales Reporting", "Supplier management"],
    github: "https://github.com/workytip/Invetory-Management-System",
    demo: "https://youtu.be/pvrV-g5BclI",
    screenshots: [imsDashboard, imsProductsList, imsProductsTable, imsAccounts, imsCategories, imsClients, imsInvoices, imsSales, imsStock, screen12, screen13],
    category: "Full Stack",
  },
  {
    title: "Jumia Clone E-commerce Platform",
    description: "Full-featured e-commerce platform inspired by Jumia. Includes product catalog, shopping cart, order management, and admin dashboard with comprehensive product and user management.",
    tech: ["Laravel", "PHP", "MySQL", "Angular", "Bootstrap", "REST API", "Google login"],
    highlights: ["User Authentication", "Shopping Cart", "Advanced Search", "Admin dashboard", "Order tracking"],
    github: "https://github.com/workytip/jumia-clone",
    demo: "https://youtu.be/NcFsOzWdoyM",
    screenshots: [jumia1, jumia2, jumia5, jumia7, jumia8, jumia9, jumia10, jumia11],
    category: "Full Stack",
  },
  {
    title: "Social Media Content Scheduler",
    description: "Full-stack content scheduling dashboard built with Laravel and React. Allows users to create, queue, and manage posts for simulated social platforms using Laravel Queues and Job Scheduling.",
    tech: ["Laravel", "React", "MySQL", "Queue Jobs", "Scheduling", "REST API"],
    highlights: ["Queue management", "Automated posting", "Multi-platform"],
    github: "https://github.com/workytip/content-scheduler",
    demo: "https://youtu.be/pQ4zjder14k",
    screenshots: [social1, social2, social3, social4, social5, social6, social7, social8, social9, social10, social12, social13, social14],
    category: "Full Stack",
  },
  {
    title: "Be Fluent – Language Fluency App",
    description: "A language fluency companion that helps users build speaking confidence through structured practice tracking and progress milestones. Conceived, designed, and shipped solo as product owner using AI-assisted development.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Lovable", "Claude AI"],
    highlights: ["Full Product Ownership", "Concept to Live App", "AI-Assisted Build"],
    github: null,
    demo: "https://be-fluent.lovable.app/",
    demoLabel: "Visit App",
    category: "Vibe Coding",
  },
  {
    title: "Islah – Self-Improvement Tracker",
    description: "A habit reform and self-improvement app inspired by the Arabic concept of islāh (to correct, to better oneself). Helps users commit to daily goals and track meaningful personal change. Shipped end-to-end as product owner.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Lovable", "Claude AI"],
    highlights: ["Full Product Ownership", "Habit Tracking", "AI-Assisted Build"],
    github: null,
    demo: "https://islah.lovable.app/",
    demoLabel: "Visit App",
    category: "Vibe Coding",
  },
  {
    title: "Laravel Mentorship Platform",
    description: "A developer mentorship platform connecting Laravel learners with experienced engineers. Features mentor profiles, session planning, and guided career progression paths. Owned and shipped independently using AI-powered workflows.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Lovable", "Claude AI"],
    highlights: ["Full Product Ownership", "Mentor Matching", "AI-Assisted Build"],
    github: null,
    demo: "https://laravel-mentorship.lovable.app/",
    demoLabel: "Visit App",
    category: "Vibe Coding",
  },
  {
    title: "Easy Reading – Accessible Reader",
    description: "A reading accessibility tool that makes digital content easier to process with adjustable typography, line spacing, and distraction-free focus modes. Built and shipped solo from concept to deployed product.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Lovable", "Claude AI"],
    highlights: ["Full Product Ownership", "Accessibility Focus", "AI-Assisted Build"],
    github: null,
    demo: "https://easy-reading.lovable.app/",
    demoLabel: "Visit App",
    category: "Vibe Coding",
  },
  {
    title: "Hafezon - Islamic Productivity & Quran Tracker",
    description: "Islamic productivity app covering Quran memorization planning and progress tracking, daily Muslim routine management, and a built-in Pomodoro timer for focused study sessions. Personal passion project - full concept and design by Marwa.",
    tech: ["React", "UI/UX Design", "Product Design", "Frontend"],
    highlights: ["Quran memorization tracker", "Daily routine planner", "Pomodoro focus sessions"],
    github: "https://github.com/workytip/hafezon",
    demo: "https://app.hafezon.site/",
    screenshots: [hafezon1, hafezon2, hafezon3, hafezon4, hafezon5, hafezon6, hafezon7],
    category: "Product",
  },
];

const youtubeEmbed = (url: string) =>
  url.replace("youtu.be/", "www.youtube.com/embed/").replace("watch?v=", "embed/");

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const screenshots = project.screenshots ?? [];
  const hasScreenshots = screenshots.length > 0;
  const hasYoutube = !!project.demo?.includes("youtu");

  const prev = () => setImgIndex(i => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setImgIndex(i => (i + 1) % screenshots.length);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft" && hasScreenshots) prev();
    if (e.key === "ArrowRight" && hasScreenshots) next();
  }, [onClose, hasScreenshots]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-card border border-primary/20 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Media */}
        {hasScreenshots && (
          <div className="relative aspect-video bg-black rounded-t-2xl overflow-hidden">
            <img
              src={screenshots[imgIndex]}
              alt={`${project.title} screenshot ${imgIndex + 1}`}
              className="w-full h-full object-contain"
            />
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === imgIndex ? "bg-primary" : "bg-white/40"}`}
                    />
                  ))}
                </div>
                <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {imgIndex + 1} / {screenshots.length}
                </div>
              </>
            )}
          </div>
        )}

        {!hasScreenshots && hasYoutube && (
          <div className="aspect-video rounded-t-2xl overflow-hidden">
            <iframe
              src={youtubeEmbed(project.demo!)}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        )}

        {/* Info */}
        <div className="p-6 space-y-5">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              {project.category === "Vibe Coding" && (
                <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold mt-1">
                  <Zap className="h-3 w-3" /> Vibe Coded · Product Owner
                </span>
              )}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              {project.isPrivate && (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                  <Lock className="h-3 w-3" /> Private
                </span>
              )}
              {project.isComingSoon && (
                <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">Coming Soon</span>
              )}
              {project.github && (
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.github!, "_blank")}>
                  Code
                </Button>
              )}
              {project.repos?.map((repo, i) => (
                <Button key={i} size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(repo.url, "_blank")}>
                  {repo.label}
                </Button>
              ))}
              {project.demo && !project.demo.includes("youtu") && (
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open(project.demo!, "_blank")}>
                  <ExternalLink className="h-4 w-4 mr-1.5" /> {project.demoLabel ?? "Live Demo"}
                </Button>
              )}
              {project.demo?.includes("youtu") && (
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open(project.demo!, "_blank")}>
                  <ExternalLink className="h-4 w-4 mr-1.5" /> Watch Demo
                </Button>
              )}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-2">Key Highlights</h4>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h, i) => (
                <Badge key={i} className="bg-primary/10 text-primary border-primary/20">{h}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <Badge key={i} variant="outline" className="bg-secondary/50 border-primary/30 text-foreground">{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type Category = "All" | "Backend" | "Full Stack" | "DevOps" | "Product" | "Vibe Coding";
const TABS: Category[] = ["All", "Backend", "Full Stack", "DevOps", "Product", "Vibe Coding"];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filtered = activeTab === "All" ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 px-6 bg-section-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Backend systems, full-stack apps, DevOps pipelines, and AI-assisted products built with ownership from concept to delivery
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-primary/20 hover:border-primary hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => {
            const cover = project.screenshots?.[0];
            return (
              <div
                key={index}
                onClick={() => setSelected(project)}
                className="group bg-card border border-primary/20 rounded-xl shadow-card-shadow hover:shadow-skill-glow hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Cover image */}
                <div className="aspect-video bg-muted/30 overflow-hidden relative">
                  {cover ? (
                    <img
                      src={cover}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: project.coverPosition ?? "center" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <span className="text-primary/30 text-4xl font-bold">{project.title[0]}</span>
                    </div>
                  )}
                  {project.category === "Vibe Coding" && (
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold shadow">
                      <Zap className="h-3 w-3" /> AI-Built
                    </div>
                  )}
                  {project.isPrivate && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      <Lock className="h-3 w-3" /> Private
                    </div>
                  )}
                  {project.isComingSoon && (
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      Coming Soon
                    </div>
                  )}
                  {(project.screenshots?.length ?? 0) > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      {project.screenshots!.length} screenshots
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-secondary/50 border-primary/30 text-foreground">
                        {t}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="text-xs bg-secondary/50 border-primary/30 text-muted-foreground">
                        +{project.tech.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            onClick={() => window.open("https://github.com/workytip", "_blank")}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default ProjectsSection;
