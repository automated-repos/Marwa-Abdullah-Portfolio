import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Backend Engineer (Part-time)",
      company: "Merspire",
      location: "Remote, Egypt",
      period: "Oct 2025 - Present",
      description: "Leads backend engineering for Bareeq, a production SaaS platform for jewelry store management. Responsible for backend development, DevOps operations, and quality assurance across the full product lifecycle.",
      achievements: [
        "Architected and built the backend for Bareeq, a live multi-tenant SaaS serving jewelry retailers",
        "Designed REST APIs powering real-time POS, inventory, and financial management features",
        "Implemented QR-code-based product cataloging and invoice generation system",
        "Managed multi-branch cash register and treasury tracking with live financial reporting",
        "Owned end-to-end DevOps: deployment, monitoring, and infrastructure operations",
        "Applied QA discipline to ensure reliability across all critical financial workflows"
      ],
      tech: ["Laravel", "PHP", "MySQL", "REST API", "DevOps", "QA Testing", "Multi-tenant Architecture", "Docker"]
    },
    {
      title: "Software Engineer",
      company: "nWeave",
      location: "Alexandria, Egypt",
      period: "Feb 2023 - Dec 2024",
      description: "Designed and maintained the backend architecture of a multi-tenant healthcare SaaS platform (AHS-nWeave) serving multiple independent healthcare providers. Transitioned into a QA Engineer role (May–Oct 2024), embedding quality assurance practices into the active development cycle.",
      achievements: [
        "Architected the multi-tenant backend serving multiple healthcare providers under a unified system with strict data isolation per tenant",
        "Built RESTful APIs for complex healthcare workflows including provider-specific configurations, patient data management, and centralized reporting",
        "Implemented OAuth2 + Active Directory authentication with granular role-based access control",
        "Led end-to-end API testing using Postman and documented critical bug findings that prevented production incidents",
        "Optimized MS SQL Server database structures and query performance across central and tenant-specific databases",
        "Established quality gates and testing protocols aligned with healthcare data compliance requirements",
        "Ensured reliable communication between the central system and tenant databases using Laravel Queue Jobs"
      ],
      tech: ["Laravel", "PHP", "MS SQL Server", "MySQL", "REST API", "OAuth2", "Active Directory", "Multi-tenant Architecture", "Queue Jobs", "QA Testing"]
    },
    {
      title: "Laravel Developer (Freelance)",
      company: "Logic",
      location: "Cairo, Egypt",
      period: "Feb 2024 - Aug 2024",
      description: "Freelance engagement (concurrent with nWeave role). Built a custom HR Assessment System from scratch using Laravel and Livewire, handling the full project lifecycle from database design to frontend delivery.",
      achievements: [
        "Designed and built a modular HR assessment platform automating candidate evaluation and interview scheduling",
        "Implemented multi-stage assessment workflows with configurable scoring and evaluator assignment",
        "Built bulk Excel data import/export for candidate and assessment data management",
        "Developed a dynamic scheduling matrix to optimize interviewer-candidate matching and availability",
        "Created Chart.js-powered performance analytics dashboard and automated PDF report generation"
      ],
      tech: ["Laravel", "Livewire", "PHP", "MySQL", "Bootstrap", "Chart.js", "PDF Reports"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-section-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            A journey of continuous learning and delivering impactful solutions
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <Card className="md:ml-16 bg-card border-primary/20 shadow-card-shadow hover:shadow-skill-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-foreground mt-2">
                            <Building className="h-4 w-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <Badge 
                              key={i}
                              variant="outline"
                              className="bg-secondary/50 border-primary/30 text-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;