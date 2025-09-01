import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const highlights = [
    "2+ years in Backend Development",
    "PHP & Laravel specialist",
    "DevOps intern with CI/CD experience",
    "Multi-tenant architecture expert",
    "Database design & optimization",
    "REST API development"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Backend developer with DevOps skills, building scalable solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a dedicated Software Engineer with over 2 years of experience in backend development,
              specializing in PHP, MySQL, and Laravel. Currently expanding my expertise into DevOps 
              practices, with hands-on experience in CI/CD, cloud automation, and infrastructure optimization.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I specialize in building scalable APIs, optimizing database structures, and implementing
              robust authentication systems. I thrive in collaborative environments where I can share
              insights and learn from others, continually pushing the boundaries of my skill set.
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