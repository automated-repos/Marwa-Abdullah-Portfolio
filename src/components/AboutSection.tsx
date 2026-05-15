import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.jpg";

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
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software Engineer with a QA Lens: Building Resilience from Code to Deployment
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            What if every developer wrote code thinking like a tester first?
          </h3>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Early in my career, I was deeply involved as a key contributor to a complex, multi-tenant backend project using PHP and Laravel. Just as we were heading to production, the company's focus shifted.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                I was asked to join the QA effort for a new project. Instead of seeing it as a setback, I embraced it. I discovered I had a talent for testing-for thinking of edge cases and potential flaws. For months, I helped ensure the new product was robust and reliable.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                But I missed building. So I made a decision: I would dedicate myself to returning to development, intentionally rebuilding my skills with a new perspective. I deepened my understanding of system design and distributed architecture - studying how data-intensive systems are built and where they break. I sharpened my Laravel and PHP knowledge through real interview preparation and hands-on exploration, not just documentation reading.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                Today, I am a more well-rounded engineer. I write backend code that is reliable by design - not just functional. That background in quality assurance didn't change my career path, it sharpened how I think about edge cases, API contracts, and system behaviour under real-world conditions.
              </p>

              <p className="text-lg text-primary font-semibold leading-relaxed">
                My goal is to grow into a Senior Software Engineer - someone who doesn't just implement features but helps shape the architecture behind them. I'm looking for a backend role, ideally Laravel-focused, where I can take ownership, go deep, and keep getting better.
              </p>
              <div className="pt-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">Key Expertise</h4>
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
            
            <Card className="bg-card border-primary/20 shadow-card-shadow lg:sticky lg:top-8">

              <CardContent className="p-4">
                <div className="space-y-6">
                  <div className="text-center">
                    <img
                      src={logo}
                      alt="Marwa Abdullah Elawady"
                      className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-2 border-primary/40 shadow-skill-glow"
                    />
                    <h4 className="text-xl font-bold text-primary mb-2">Marwa Abdullah Elawady</h4>
                    <p className="text-muted-foreground text-sm">Backend Engineer & DevOps Enthusiast</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
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
                      
                      <span className="text-foreground"> PHP, Laravel, Docker,CI/CD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="text-foreground">  Open to Remote & Freelance </span>
                    </div>

                      

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;