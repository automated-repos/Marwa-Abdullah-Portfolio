import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description: "Designed and implemented a unified Kubernetes platform spanning AWS, Azure, and GCP with automated failover, centralized monitoring, and cost optimization. Reduced infrastructure costs by 40% while improving reliability.",
      tech: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Grafana", "AWS", "Azure", "GCP"],
      highlights: ["99.9% uptime", "40% cost reduction", "Cross-cloud deployment"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Powered CI/CD Pipeline",
      description: "Built an intelligent CI/CD system using machine learning to predict build failures, optimize test execution order, and automatically rollback problematic deployments. Reduced build times by 60%.",
      tech: ["Jenkins", "Python", "ML/AI", "Docker", "Kubernetes", "GitLab", "Monitoring"],
      highlights: ["60% faster builds", "Predictive analytics", "Auto-rollback"],
      github: "#",
      demo: "#"
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Developed a comprehensive IaC framework with reusable modules, automated testing, and compliance checking. Standardized infrastructure deployment across 50+ microservices.",
      tech: ["Terraform", "Ansible", "Python", "AWS", "Testing", "Compliance"],
      highlights: ["50+ services", "100% automation", "Compliance ready"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Monitoring Dashboard",
      description: "Created a unified monitoring solution aggregating metrics from multiple sources with custom alerting, SLA tracking, and automated incident response. Improved MTTR by 70%.",
      tech: ["Prometheus", "Grafana", "ELK Stack", "Python", "Alerting", "SLA"],
      highlights: ["70% faster MTTR", "Custom alerting", "SLA tracking"],
      github: "#",
      demo: "#"
    },
    {
      title: "Zero-Downtime Deployment System",
      description: "Implemented blue-green deployment strategy with automated health checks, traffic shifting, and instant rollback capabilities. Achieved zero-downtime deployments for critical services.",
      tech: ["Kubernetes", "Istio", "ArgoCD", "Monitoring", "Load Balancing"],
      highlights: ["Zero downtime", "Instant rollback", "Health monitoring"],
      github: "#",
      demo: "#"
    },
    {
      title: "Security Compliance Automation",
      description: "Built automated security scanning and compliance reporting system integrated into CI/CD pipeline. Ensures all deployments meet security standards and regulatory requirements.",
      tech: ["Security", "Compliance", "SAST/DAST", "Policy", "Automation"],
      highlights: ["100% compliance", "Automated scanning", "Policy enforcement"],
      github: "#",
      demo: "#"
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
                
                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
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