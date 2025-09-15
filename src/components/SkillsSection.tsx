import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Server, 
  Database, 
  GitBranch, 
  Container, 
  Monitor,
  Shield,
  Code,
  Cpu,
  Network,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const SkillsSection = () => {
    const skillCategories = [
      {
        title: "Backend Development",
        icon: Code,
        skills: ["PHP", "Laravel", "REST API", "OOP", "System Architecture"],
        color: "text-blue-400"
      },
      {
        title: "Frontend Proficiency",
        icon: Monitor,
        skills: ["HTML", "CSS", "JavaScript","Bootstrap", "ReactJs","Angular" ],
        color: "text-cyan-400"
      },
      {
        title: "DevOps & CI/CD",
        icon: GitBranch,
        skills: ["Git", "GitHub Actions", "CI/CD Pipelines", "Docker","Ansible", "Bash Scripting"],
        color: "text-green-400"
      },
      {
        title: "Database Design & Management",
        icon: Database,
        skills: ["Database Design", "MySQL", "MS SQL Server", "Query Optimization"],
        color: "text-purple-400"
      },
      {
        title: "Infrastructure & Deployment",
        icon: Server,
        skills: ["Linux", "Nginx/Apache", "Deployment Automation", "Performance Tuning"],
        color: "text-orange-400"
      },
      {
        title: "Development Practices",
        icon: Network,
        skills: ["QA Processes","JIRA", "Agile/Scrum", "Team Collaboration"],
        color: "text-red-400"
      },
      {
        title: "Laravel Ecosystem",
        icon: Container,
        skills: ["Livewire", "Multi-tenant Architecture", "Eloquent ORM", "Artisan"],
        color: "text-yellow-400"
      },
      {
        title: "Currently Mastering",
        icon: TrendingUp, 
        skills: ["Kubernetes", "Terraform", "AWS", "Jenkins", "Prometheus", "GCP"],
        color: "text-pink-400" // or "text-gray-400" to subtly differentiate it
      }
    ];

  return (
    <section id="skills" className="py-20 px-6 bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for backend development and DevOps practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border-primary/20 shadow-card-shadow hover:shadow-skill-glow transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className={`h-8 w-8 ${category.color} mr-3`} />
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="mr-2 mb-2 bg-secondary/50 border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-card border-primary/20 shadow-card-shadow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Core Philosophy</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> 
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" /> 
                  <h4 className="text-lg font-semibold mb-2">Quality First</h4>
                  <p className="text-muted-foreground">Building reliability into every layer of the application, from code to deployment</p>
                </div>
                <div className="text-center">
                  <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Automation First</h4>
                  <p className="text-muted-foreground">Eliminate manual processes through intelligent automation</p>
                </div>
                <div className="text-center">
                  <Network className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Scalable Architecture</h4>
                  <p className="text-muted-foreground">Build systems that grow with your business needs</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Security Focused</h4>
                  <p className="text-muted-foreground">Implement security best practices from the ground up</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;