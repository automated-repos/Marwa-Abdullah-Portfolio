import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// IMS Screenshots imports (add these manually after copying images)
// import imsDashboard from "@/assets/ims-dashboard.png";
// import imsProductsList from "@/assets/ims-products-list.png";
// import imsProductsTable from "@/assets/ims-products-table.png";
// import imsAccounts from "@/assets/ims-accounts.png";
// import imsCategories from "@/assets/ims-categories.png";
// import imsClients from "@/assets/ims-clients.png";
// import imsInvoices from "@/assets/ims-invoices.png";
// import imsSales from "@/assets/ims-sales.png";
// import imsStock from "@/assets/ims-stock.png";

const ProjectsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  // IMS Screenshots array (uncomment and populate after adding images)
  const imsScreenshots = [
    // imsDashboard,
    // imsProductsList,
    // imsProductsTable,
    // imsAccounts,
    // imsCategories,
    // imsClients,
    // imsInvoices,
    // imsSales,
    // imsStock
  ];

  const nextImage = (projectIndex: number, screenshotsLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % screenshotsLength
    }));
  };

  const prevImage = (projectIndex: number, screenshotsLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + screenshotsLength) % screenshotsLength
    }));
  };
  const projects = [
    {
      title: "Inventory Management System",
      description: "A comprehensive inventory management system built with modern web technologies. Features real-time stock tracking, automated reorder points, supplier management, and detailed reporting dashboard.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
      highlights: ["Real-time tracking", "Automated alerts", "Supplier management"],
      github: "https://github.com/workytip/Invetory-Management-System",
      demo: "https://youtu.be/pvrV-g5BclI",
      hasScreenshots: true,
      screenshots: imsScreenshots
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

                {/* Screenshot Gallery */}
                {project.hasScreenshots && project.screenshots && project.screenshots.length > 0 ? (
                  <div className="relative">
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted/30 border border-primary/20">
                      <img 
                        src={project.screenshots[currentImageIndex[index] || 0]}
                        alt={`${project.title} Screenshot ${(currentImageIndex[index] || 0) + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {project.screenshots.length > 1 && (
                      <>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                          onClick={() => prevImage(index, project.screenshots.length)}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                          onClick={() => nextImage(index, project.screenshots.length)}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {project.screenshots.map((_, i) => (
                            <button
                              key={i}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                i === (currentImageIndex[index] || 0) 
                                  ? 'bg-primary' 
                                  : 'bg-muted-foreground/30'
                              }`}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: i }))}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : project.hasScreenshots ? (
                  <div className="bg-muted/30 border-2 border-dashed border-primary/30 rounded-lg p-8 text-center">
                    <p className="text-muted-foreground text-sm">
                      Screenshots placeholder - Add images to src/assets/ and uncomment imports
                    </p>
                  </div>
                ) : null}

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