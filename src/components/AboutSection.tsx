import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import avatar from "@/assets/avatar.png";

const AboutSection = () => {
  const highlights = [
    "3 years of professional experience",
    "QA background and testing mindset",
    "Multi-tenant SaaS (healthcare & retail)",
    "REST API design",
    "CI/CD & deployment (GitHub Actions, Docker)",
    "Reliability-focused code"
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
                Early in my career, I was a key contributor to a complex multi-tenant Laravel backend. Just as we were heading to production, the company's focus shifted and I was asked to join the QA effort for a new product. Instead of seeing it as a setback, I embraced it and discovered a talent for spotting edge cases and the places where systems break.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                But I missed building. So I deliberately returned to development, rebuilding my skills with that new perspective: going deeper into system design and how data-intensive systems fail, and sharpening my PHP and Laravel through hands-on work, not just documentation.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                Testing also taught me that many failures don't start in the code. They start in how it's built, configured and deployed. So I followed reliability past the codebase and joined the DEPI DevOps track, where I provisioned an AWS EKS cluster with Terraform and automated deployments with Jenkins, Docker and Kubernetes. At Merspire I put that into practice every day: I manage the DigitalOcean servers behind Bareeq and the GitHub Actions pipeline that ships it to production.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                Today I write backend code that is reliable by design, not just functional, and I care just as much about how it reaches production. QA didn't change my path. It sharpened how I think about edge cases, API contracts, and system behavior under real-world conditions.
              </p>

              <p className="text-lg text-primary font-semibold leading-relaxed">
                My goal is to grow into a Senior Software Engineer, someone who doesn't just implement features but helps shape the architecture behind them. I'm looking for a backend role, ideally Laravel-focused, where I can take ownership, go deep, and keep getting better.
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
                      src={avatar}
                      alt="Marwa Abdullah logo"
                      className="w-28 h-28 mx-auto mb-4 rounded-full shadow-skill-glow"
                    />
                    <h4 className="text-xl font-bold text-primary mb-2">Marwa Abdullah Elawady</h4>
                    <p className="text-muted-foreground text-sm">Backend Engineer · Laravel & DevOps</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="text-foreground">Alexandria, Egypt</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="text-foreground">3 Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Specialization</span>
                      <span className="text-foreground">Backend & DevOps</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Technologies</span>
                      
                      <span className="text-foreground">PHP, Laravel, Docker, CI/CD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="text-foreground">Open to Full-time Roles</span>
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