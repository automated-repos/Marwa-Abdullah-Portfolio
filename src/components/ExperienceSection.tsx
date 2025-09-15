import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Freelance Backend & DevOps Engineer",
      company: "Independent Consultancy",
      location: "Alexandria, Egypt",
      period: "Sep 2025 - Present",
      description: "Establishing independent consultancy specializing in quality-first Laravel development and DevOps automation. Building resilient backend systems with a tester's mindset for failure prevention.",
      achievements: [
        "Developing comprehensive backend solutions with quality-first approach",
        "Creating robust CI/CD strategies for automated deployments",
        "Building consultancy focused on resilient system architecture",
        "Establishing expertise in failure-resistant Laravel applications",
        "Preparing technical solutions that anticipate real-world challenges"
      ],
      tech: ["Laravel", "PHP", "DevOps", "CI/CD", "Quality Engineering", "System Architecture"]
    },
    {
      title: "Software Engineer & QA Engineer",
      company: "nWeave",
      location: "Alexandria, Egypt",
      period: "Feb 2023 - Dec 2024",
      description: "Responsible for designing, developing, and maintaining the backend architecture of a multi-tenant healthcare web application. Additionally served as QA Engineer (May 2024 - Oct 2024), bringing quality assurance expertise to development processes.",
      achievements: [
        "Designed and maintained multi-tenant healthcare application backend",
        "Built scalable APIs for complex healthcare workflows",
        "Implemented comprehensive QA processes and testing strategies (May-Oct 2024)",
        "Optimized database structures for improved performance",
        "Established quality gates and testing protocols for healthcare compliance",
        "Implemented robust authentication and authorization systems",
        "Ensured seamless communication between central system and tenant databases"
      ],
      tech: ["Laravel", "PHP", "MySQL", "REST API", "Multi-tenant Architecture", "Database Design", "QA Testing", "Test Strategy", "Quality Assurance"]
    },
    {
      title: "Laravel Developer (Freelance)",
      company: "Logic",
      location: "Cairo, Egypt",
      period: "Feb 2024 - Aug 2024",
      description: "Freelance Laravel Developer who built custom systems with Laravel + Livewire, handling everything from database design to frontend support.",
      achievements: [
        "Built custom systems using Laravel framework",
        "Implemented Livewire for dynamic frontend interactions",
        "Handled complete project lifecycle from DB design to frontend",
        "Delivered robust solutions for various client requirements"
      ],
      tech: ["Laravel", "Livewire", "PHP", "Database Design", "Full-stack Development"]
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