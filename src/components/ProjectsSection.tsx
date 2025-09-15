import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import hrCover from "@/assets/hr-cover.png";
import ansible from "@/assets/ansible.png";

// IMS Screenshots imports (add these manually after copying images)
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

//jumia imports
import jumia1 from "@/assets/jumia/jumia1.png";
import jumia2 from "@/assets/jumia/jumia2.png";
import jumia5 from "@/assets/jumia/jumia5.png";
import jumia7 from "@/assets/jumia/jumia7.png";
import jumia8 from "@/assets/jumia/jumia8.png";
import jumia9 from "@/assets/jumia/jumia9.png";
import jumia10 from "@/assets/jumia/jumia10.png";
import jumia11 from "@/assets/jumia/jumia11.png";

//social imports
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
import logic6 from "@/assets/logic/logic5.png";


const ProjectsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  // IMS Screenshots array (uncomment and populate after adding images)
  const imsScreenshots = [
    imsDashboard,
    imsProductsList,
    imsProductsTable,
    imsAccounts,
    imsCategories,
    imsClients,
    imsInvoices,
    imsSales,
    imsStock,
    screen12,
    screen13
  ];

  const jumiaScreenshots = [
    jumia1,
    jumia2,
    jumia5,
    jumia7,
    jumia8,
    jumia9,
    jumia10,
    jumia11
  ];

  const socialScreenshots = [
    social1,
    social2,
    social3,
    social4,
    social5,
    social6,
    social7,
    social8,
    social9,
    social10,
    social12,
    social13,
    social14
  ];

  const logicScreenshots = [
    logic1,
    logic2,
    logic3,
    logic4,
    logic5,
    logic6
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
      title: "Multi-Tenant SaaS Application",
      description: "Developed a secure multi-tenant SaaS solution for healthcare, guaranteeing HIPAA compliance and data isolation. Implemented custom domains and tenant-specific configurations using modern Laravel architecture",
      tech: ["Laravel","API","Oauth2",'Active Directory',, "Multi-tenancy", "MsSqlServer", "Queue Jobs", "Domain Routing"],
      highlights: ["Data isolation", "Custom domains", "Scalable architecture"],
      github: null,
      demo: "",
      hasScreenshots: true,
      screenshots: [hrCover], 
      isPrivate: true
    },
    {
      title: "HR Assessment System",
      description: "Developed a comprehensive HR assessment system that revolutionizes the hiring process through automation. The platform streamlines candidate evaluations, optimizes interview scheduling, and provides data-driven insights for better hiring decisions.",
      tech: ["Laravel", "PHP", "MySQL","Livewire", "Bootstrap", "Chart.js", "PDF Reports"],
      highlights: ["Multi-stage Assessments", "Excel Integration", "Performance metrics"],
      github: null,
      demo: null,
      hasScreenshots: true,
      screenshots: logicScreenshots,
      // coverImage: hrCover
    },
    {
      title: "DevOps Infrastructure Automation",
      description: "Infrastructure automation project using Docker containerization and Ansible configuration management. Implements CI/CD pipelines, automated deployments, and server provisioning for scalable applications.",
      tech: ["Docker", "Ansible", "Linux", "CI/CD", "Bash Scripting", "Infrastructure"],
      highlights: ["Container orchestration", "Automated deployment", "Server provisioning"],
      github: null,
      demo: null,
      isComingSoon: true,
      hasScreenshots: true,
      screenshots: [ansible]
    },
    {
      title: "Inventory Management System",
      description: "Developed a comprehensive web-based Inventory Management System as the capstone project for NTI (National Telecommunication Institute). The system provides businesses with efficient tools for tracking inventory, managing suppliers, and monitoring sales operations.",
      tech: ["Native PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
      highlights: ["Stock Monitoring", "Sales Reporting", "Supplier management"],
      github: "https://github.com/workytip/Invetory-Management-System",
      demo: "https://youtu.be/pvrV-g5BclI",
      hasScreenshots: true,
      screenshots: imsScreenshots
    },
    {
      title: "Jumia Clone E-commerce Platform",
      description: "A full-featured e-commerce platform inspired by Jumia. Includes product catalog, shopping cart, order management, and admin dashboard with comprehensive product and user management.",
      tech: ["Laravel", "PHP", "MySQL", "Angular", "Bootstrap", "REST API" , "Google login"],
      highlights: ["User Authentication","Shopping Cart","Advanced Search", "Admin dashboard", "Order tracking"],
      github: "https://github.com/workytip/jumia-clone",
      demo: "https://youtu.be/NcFsOzWdoyM",
      hasScreenshots: true,
      screenshots: jumiaScreenshots 
    },
    {
      title: "Social Media Content Scheduler",
      description: "A full-stack content scheduling dashboard built with Laravel and React. The application allows users to create, queue, and manage posts for simulated social platforms. Demonstrates advanced backend handling with Laravel Queues and Job Scheduling for reliable, asynchronous post publishing.",
      tech: ["Laravel", "React", "MySQL", "Queue Jobs", "Scheduling", "REST API"],
      highlights: ["Queue management", "Automated posting", "Multi-platform"],
      github: "https://github.com/workytip/content-scheduler",
      demo: "https://youtu.be/pQ4zjder14k",
      hasScreenshots: true,
      screenshots: socialScreenshots 
    },
    
   
    
    // {
    //   title: "Kubernetes Cluster Management",
    //   description: "Advanced Kubernetes cluster setup and management project. Features automated scaling, monitoring, and deployment strategies for containerized applications in production environments.",
    //   tech: ["Kubernetes", "Docker", "Monitoring", "Scaling", "DevOps", "Cloud"],
    //   highlights: ["Auto-scaling", "Production ready", "Monitoring integration"],
    //   github: null,
    //   demo: null,
    //   isComingSoon: true
    // }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions that demonstrate expertise in Backend & modern DevOps practices
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