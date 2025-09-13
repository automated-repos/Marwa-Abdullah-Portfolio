import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const highlights = [
    "2+ years in Backend Development",
    "Quality-focused mindset from testing experience", 
    "PHP & Laravel specialist",
    "DevOps expertise with CI/CD",
    "Multi-tenant architecture expert",
    "Resilient code practices"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            How a Detour into Testing Made Me a More Mindful Developer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey from backend development through testing and back to development with deeper understanding
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Early in my career, I was deeply involved as a key contributor to a complex, multi-tenant backend project using PHP and Laravel. Just as we were heading to production, the company's focus shifted.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I was asked to join the QA effort for a new project. Instead of seeing it as a setback, I embraced it. I discovered I had a knack for testing—for thinking of edge cases and potential flaws. For months, I helped ensure the new product was robust and reliable.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              But I missed building. So I made a decision: I would dedicate myself to returning to development, intentionally rebuilding my skills with a new perspective. I immersed myself in modern PHP, Laravel best practices, and, crucially, began studying DevOps to understand the entire software lifecycle.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Today, I am a more well-rounded Software Engineer. My 2+ years of backend experience is now complemented by a tester's discipline for quality and a growing knowledge of CI/CD and automation. I don't just write code; I write resilient, well-considered code that stands up to scrutiny.
            </p>
            
            <p className="text-lg text-primary font-semibold leading-relaxed">
              My journey taught me that the best developers understand how software can fail.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-primary">Key Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {highlights.map((highlight, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-card border border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <Card className="bg-card border-primary/20 shadow-card-shadow">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground">
                    MA
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Marwa Abdullah Elawady</h3>
                  <p className="text-muted-foreground">Software Engineer & DevOps</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="text-foreground">Alexandria, Egypt</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="text-foreground">2+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialization</span>
                    <span className="text-foreground">Backend & DevOps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technologies</span>
                    <span className="text-foreground">Laravel, PHP, CI/CD</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;