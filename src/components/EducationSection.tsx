import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Education & Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional development journey
          </p>
        </div>

        <div className="space-y-8">
          {/* University Education */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      Bachelor of Computers and Information Technology
                    </CardTitle>
                    <p className="text-primary font-semibold">Assiut University (AUN)</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:ml-auto">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Sep 2013 - Jan 2019
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    Assiut, Egypt
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Computer Science Department - Focused on software engineering, algorithms, 
                data structures, and web development technologies.
              </p>
            </CardContent>
          </Card>

          {/* Internships & Training */}
          <div className="grid gap-6">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Professional Training & Internships
            </h3>
            
            {/* DEPI Internship */}
            <Card className="border border-primary/20 hover:border-primary/30 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div>
                    <CardTitle className="text-lg text-foreground">DevOps Engineer Track</CardTitle>
                    <p className="text-primary font-medium">DEPI-MCIT</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:ml-auto">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Jun 2025 - Jan 2026
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Alexandria, Egypt
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  6 Months intensive program focusing on DevOps tools and methodologies
                </p>
              </CardContent>
            </Card>

            {/* ITI Internship */}
            <Card className="border border-primary/20 hover:border-primary/30 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div>
                    <CardTitle className="text-lg text-foreground">Open Source Applications Development</CardTitle>
                    <p className="text-primary font-medium">ITI-MCIT</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:ml-auto">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Aug 2022 - Nov 2022
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Alexandria, Egypt
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  4 Months program focusing on Laravel and Angular development
                </p>
              </CardContent>
            </Card>

            {/* NTI Training */}
            <Card className="border border-primary/20 hover:border-primary/30 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div>
                    <CardTitle className="text-lg text-foreground">Web Development Track</CardTitle>
                    <p className="text-primary font-medium">NTI - MCIT</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:ml-auto">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Jun 2022 - Jul 2022
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Remote, Smart Village, Egypt
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  1 Month intensive training focusing on PHP, MySQL and Laravel
                </p>
              </CardContent>
            </Card>

            {/* YAT Academy */}
            <Card className="border border-primary/20 hover:border-primary/30 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div>
                    <CardTitle className="text-lg text-foreground">Professional Full Stack Diploma</CardTitle>
                    <p className="text-primary font-medium">YAT ACADEMY - MCIT</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:ml-auto">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Aug 2020 - Nov 2020
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Remote, Egypt
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  4 Months professional diploma focusing on Database, PHP and Laravel
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;