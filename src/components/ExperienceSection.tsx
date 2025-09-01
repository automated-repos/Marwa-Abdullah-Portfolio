import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "TechScale Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading cloud infrastructure modernization initiatives for enterprise clients. Architecting scalable Kubernetes platforms and implementing advanced CI/CD pipelines.",
      achievements: [
        "Reduced deployment time by 80% through automated CI/CD pipelines",
        "Managed $2M+ cloud infrastructure across AWS, Azure, and GCP",
        "Led a team of 6 engineers in infrastructure transformation projects",
        "Implemented zero-downtime deployment strategies for 100+ microservices"
      ],
      tech: ["Kubernetes", "AWS", "Terraform", "Jenkins", "Prometheus", "Docker"]
    },
    {
      title: "DevOps Engineer",
      company: "CloudFirst Inc",
      location: "Seattle, WA",
      period: "2020 - 2022",
      description: "Specialized in container orchestration and cloud migration projects. Built robust monitoring and alerting systems for high-traffic applications.",
      achievements: [
        "Migrated 50+ legacy applications to cloud-native architecture",
        "Achieved 99.9% uptime for critical production systems",
        "Reduced infrastructure costs by 35% through optimization",
        "Established comprehensive monitoring covering 500+ services"
      ],
      tech: ["Docker", "Azure", "Ansible", "GitLab CI", "Grafana", "ELK Stack"]
    },
    {
      title: "System Administrator",
      company: "DataFlow Systems",
      location: "Portland, OR",
      period: "2019 - 2020",
      description: "Managed on-premise and hybrid cloud infrastructure. Focused on automation, security hardening, and performance optimization.",
      achievements: [
        "Automated 90% of routine operational tasks",
        "Implemented backup and disaster recovery procedures",
        "Reduced system downtime by 60% through proactive monitoring",
        "Established security compliance across all systems"
      ],
      tech: ["Linux", "VMware", "Bash", "Puppet", "Nagios", "MySQL"]
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