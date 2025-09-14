import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Marwa Abdullah Elawady
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary font-semibold">
            Backend Developer with a Tester's Eye for Quality
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Laravel expert who thinks like a QA engineer. Building resilient backend systems 
            that anticipate failure and deliver robust solutions for complex applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
           <a href="#projects">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              View My Work
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
              onClick={() => window.open('https://automated-repos.github.io/Marwa-Abdullah-Portfolio/cv.pdf', '_blank')}
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-8">
            <a href="https://github.com/workytip" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary-foreground hover:bg-primary rounded-full w-12 h-12">
                <Github className="h-6 w-6" />
              </Button>
            </a>

            <a href="https://linkedin.com/in/marwa-abdullah-cs" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary-foreground hover:bg-primary rounded-full w-12 h-12">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>

            <a href="mailto:workytip@gmail.com">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary-foreground hover:bg-primary rounded-full w-12 h-12">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;