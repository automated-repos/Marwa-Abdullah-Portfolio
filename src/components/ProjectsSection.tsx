import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Inventory Management System",
      description: "A comprehensive inventory management system built with modern web technologies. Features real-time stock tracking, automated reorder points, supplier management, and detailed reporting dashboard.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
      highlights: ["Real-time tracking", "Automated alerts", "Supplier management"],
      github: "https://github.com/workytip/Invetory-Management-System",
      demo: "https://youtu.be/pvrV-g5BclI",
      hasScreenshots: true
    },
    {
      title: "Jumia Clone E-commerce Platform",
      description: "A full-featured e-commerce platform inspired by Jumia. Includes product catalog, shopping cart, payment integration, order management, and admin dashboard with comprehensive product and user management.",
      tech: ["Laravel", "PHP", "MySQL", "Vue.js", "Bootstrap", "PayPal API"],
      highlights: ["Payment integration", "Admin dashboard", "Order tracking"],
      github: "https://github.com/workytip/jumia-clone",
      demo: "https://youtu.be/NcFsOzWdoyM",
      hasScreenshots: true
    },
    {
      title: "Social Media Content Scheduler",
      description: "A full-stack content scheduling dashboard built with Laravel and React. The application allows users to create, queue, and manage posts for simulated social platforms. Demonstrates advanced backend handling with Laravel Queues and Job Scheduling for reliable, asynchronous post publishing.",
      tech: ["Laravel", "React", "MySQL", "Queue Jobs", "Scheduling", "REST API"],
      highlights: ["Queue management", "Automated posting", "Multi-platform"],
      github: "https://github.com/workytip/content-scheduler",
      demo: "https://youtu.be/pQ4zjder14k",
      hasScreenshots: true
    },
    {
      title: "HR Management System",
      description: "Complete human resources management solution featuring employee records, attendance tracking, payroll management, performance evaluations, and leave management. Built with focus on user experience and administrative efficiency.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Chart.js", "PDF Reports"],
      highlights: ["Employee tracking", "Payroll system", "Performance metrics"],
      github: null,
      demo: null,
      hasScreenshots: true
    },
    {
      title: "Multi-Tenant SaaS Application",
      description: "Enterprise-grade multi-tenant application architecture with isolated data, custom domains, and tenant-specific configurations. Implements advanced Laravel tenancy patterns for scalable SaaS solutions.",
      tech: ["Laravel", "Multi-tenancy", "MySQL", "Redis", "Queue Jobs", "Domain Routing"],
      highlights: ["Data isolation", "Custom domains", "Scalable architecture"],
      github: null,
      demo: null,
      hasScreenshots: false,
      isPrivate: true
    },
    {
      title: "DevOps Infrastructure Automation",
      description: "Infrastructure automation project using Docker containerization and Ansible configuration management. Implements CI/CD pipelines, automated deployments, and server provisioning for scalable applications.",
      tech: ["Docker", "Ansible", "Linux", "CI/CD", "Bash Scripting", "Infrastructure"],
      highlights: ["Container orchestration", "Automated deployment", "Server provisioning"],
      github: null,
      demo: null,
      isComingSoon: true
    },
    {
      title: "Kubernetes Cluster Management",
      description: "Advanced Kubernetes cluster setup and management project. Features automated scaling, monitoring, and deployment strategies for containerized applications in production environments.",
      tech: ["Kubernetes", "Docker", "Monitoring", "Scaling", "DevOps", "Cloud"],
      highlights: ["Auto-scaling", "Production ready", "Monitoring integration"],
      github: null,
      demo: null,
      isComingSoon: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions that demonstrate expertise in modern DevOps practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-primary/20 shadow-card-shadow hover:shadow-skill-glow transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Screenshot placeholder space */}
                {project.hasScreenshots && (
                  <div className="bg-muted/30 border-2 border-dashed border-primary/30 rounded-lg p-8 text-center">
                    <p className="text-muted-foreground text-sm">Screenshots will be added here</p>
                  </div>
                )}

                {/* YouTube Demo */}
                {project.demo && project.demo.includes('youtu') && (
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={project.demo.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/')}
                      title={`${project.title} Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.map((highlight, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="outline"
                          className="bg-secondary/50 border-primary/30 text-foreground text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  {project.isComingSoon ? (
                    <div className="flex-1 text-center py-2 px-4 bg-muted/50 rounded-md">
                      <span className="text-muted-foreground text-sm font-medium">Coming Soon</span>
                    </div>
                  ) : project.isPrivate ? (
                    <div className="flex-1 text-center py-2 px-4 bg-muted/50 rounded-md">
                      <span className="text-muted-foreground text-sm font-medium">Private Repository</span>
                    </div>
                  ) : (
                    <>
                      {project.github ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      ) : (
                        <div className="flex-1" />
                      )}
                      
                      {project.demo && !project.demo.includes('youtu') ? (
                        <Button 
                          size="sm" 
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      ) : project.hasScreenshots && !project.demo ? (
                        <div className="flex-1 text-center py-2 px-4 bg-muted/50 rounded-md">
                          <span className="text-muted-foreground text-sm font-medium">Screenshots Only</span>
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;