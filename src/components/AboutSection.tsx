import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const highlights = [
    "5+ years in DevOps and Infrastructure",
    "Expert in AWS, Azure, and GCP",
    "Kubernetes and Docker specialist",
    "CI/CD pipeline architect",
    "Infrastructure as Code advocate",
    "Monitoring and observability expert"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between development and operations with innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate DevOps engineer with over 5 years of experience in building, 
              deploying, and maintaining scalable infrastructure. My journey began as a 
              system administrator, and I've evolved into a cloud-native advocate who loves 
              automating everything.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I specialize in creating robust CI/CD pipelines, implementing Infrastructure 
              as Code, and establishing comprehensive monitoring solutions. My goal is to 
              enable development teams to ship faster while maintaining reliability and security.
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
                    AT
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Alex Thompson</h3>
                  <p className="text-muted-foreground">Senior DevOps Engineer</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="text-foreground">San Francisco, CA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="text-foreground">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialization</span>
                    <span className="text-foreground">Cloud Infrastructure</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certifications</span>
                    <span className="text-foreground">AWS, Azure, K8s</span>
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