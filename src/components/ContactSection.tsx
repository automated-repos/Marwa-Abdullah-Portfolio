import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import ThankYou from './ThankYou';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formsubmit.co/workytip@gmail.com', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Form submission failed');
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReturn = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your backend or DevOps needs? Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-primary/20 shadow-card-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">Marwa.a.elawady@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+201099420890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Alexandria, Egypt</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-primary/20 shadow-card-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Services & Expertise</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Backend Development (PHP, Laravel)</p>
                  <p>• REST API Design & Development</p>
                  <p>• Database Design & Optimization</p>
                  <p>• Multi-tenant Architecture Solutions</p>
                  <p>• CI/CD Pipeline Development</p>
                  <p>• DevOps & Infrastructure Automation</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-card border-primary/20 shadow-card-shadow">
            <CardContent className="p-8">
              {isSubmitted ? (
                <ThankYou onReturn={handleReturn} />
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="_subject" value="New message from your portfolio!" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          First Name
                        </label>
                        <Input 
                          name="First Name"
                          placeholder="John" 
                          className="bg-secondary border-primary/20 focus:border-primary"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Last Name
                        </label>
                        <Input 
                          name="Last Name"
                          placeholder="Doe" 
                          className="bg-secondary border-primary/20 focus:border-primary"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email
                      </label>
                      <Input 
                        type="email" 
                        name="email"
                        placeholder="john.doe@company.com" 
                        className="bg-secondary border-primary/20 focus:border-primary"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Subject
                      </label>
                      <Input 
                        name="Subject"
                        placeholder="Project Discussion" 
                        className="bg-secondary border-primary/20 focus:border-primary"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message
                      </label>
                      <Textarea 
                        name="Message"
                        placeholder="Tell me about your project requirements..." 
                        rows={6}
                        className="bg-secondary border-primary/20 focus:border-primary resize-none"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;