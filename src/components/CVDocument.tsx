import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const C = {
  accent: '#0ea5e9',
  text: '#111827',
  sub: '#374151',
  muted: '#6b7280',
  border: '#d1d5db',
  bg: '#f3f4f6',
};

const s = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    paddingTop: 34,
    paddingBottom: 26,
    paddingHorizontal: 44,
    color: C.text,
    lineHeight: 1.45,
  },
  // Header
  header: {
    marginBottom: 11,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: C.accent,
    borderBottomStyle: 'solid',
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 22,
    lineHeight: 1.3,
    marginBottom: 14,
    color: C.text,
  },
  jobTitle: {
    fontSize: 11,
    color: C.accent,
    lineHeight: 1.3,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactItem: {
    fontSize: 8.5,
    color: C.muted,
    marginRight: 14,
  },
  // Section
  section: {
    marginBottom: 9,
  },
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: C.text,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    borderBottomStyle: 'solid',
    paddingBottom: 2,
    marginBottom: 6,
  },
  // Entry (experience / project / education)
  entry: {
    marginBottom: 8,
  },
  entrySmall: {
    marginBottom: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  entryTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    flex: 1,
    marginRight: 8,
    color: C.text,
  },
  entryPeriod: {
    fontSize: 8.5,
    color: C.muted,
  },
  entrySubtitle: {
    fontSize: 8.5,
    color: C.accent,
    marginBottom: 2,
  },
  entryDesc: {
    fontSize: 8.5,
    color: C.sub,
    marginBottom: 3,
    lineHeight: 1.45,
  },
  // Bullets
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 1.5,
    paddingLeft: 8,
  },
  dot: {
    fontSize: 8.5,
    color: C.accent,
    marginRight: 5,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.45,
    color: C.sub,
  },
  // Tech tags
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 3,
  },
  tag: {
    fontSize: 7.5,
    backgroundColor: C.bg,
    paddingHorizontal: 4,
    paddingVertical: 1.5,
    marginRight: 3,
    marginBottom: 2,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: C.border,
    borderStyle: 'solid',
    color: C.sub,
  },
  // Skills grid
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillCol: {
    width: '50%',
    marginBottom: 4,
    paddingRight: 10,
  },
  skillCatName: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
    marginBottom: 1,
    color: C.text,
  },
  skillItems: {
    fontSize: 8.5,
    color: C.sub,
    lineHeight: 1.4,
  },
  // Profile
  profileText: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: C.sub,
  },
  // Languages
  langRow: {
    flexDirection: 'row',
  },
  langItem: {
    fontSize: 9,
    marginRight: 22,
    color: C.sub,
  },
  langBold: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
  },
});

const Bullet = ({ text }: { text: string }) => (
  <View style={s.bulletRow}>
    <Text style={s.dot}>•</Text>
    <Text style={s.bulletText}>{text}</Text>
  </View>
);

const Tags = ({ items }: { items: string[] }) => (
  <View style={s.techRow}>
    {items.map((t, i) => (
      <Text key={i} style={s.tag}>{t}</Text>
    ))}
  </View>
);

const SecTitle = ({ children }: { children: string }) => (
  <Text style={s.sectionTitle}>{children}</Text>
);

export const CVDocument = () => (
  <Document title="Marwa Abdullah Elawady - CV" author="Marwa Abdullah Elawady">
    <Page size="A4" style={s.page}>

      {/* HEADER */}
      <View style={s.header}>
        <Text style={s.name}>Marwa Abdullah Elawady</Text>
        <Text style={s.jobTitle}>Software Engineer  ·  Backend Engineer  ·  Laravel Specialist</Text>
        <View style={s.contactRow}>
          <Link src="mailto:marwa.a.elawady@gmail.com" style={s.contactItem}>Email</Link>
          <Link src="https://wa.me/201099420890" style={s.contactItem}>+201099420890</Link>
          <Text style={s.contactItem}>Alexandria, Egypt</Text>
          <Link src="https://github.com/workytip" style={s.contactItem}>GitHub</Link>
          <Link src="https://linkedin.com/in/marwa-abdullah-cs" style={s.contactItem}>LinkedIn</Link>
          <Link src="https://marwa.elawady.site" style={s.contactItem}>Portfolio</Link>
        </View>
      </View>

      {/* PROFILE */}
      <View style={s.section}>
        <SecTitle>Profile</SecTitle>
        <Text style={s.profileText}>
          Software Engineer with 2+ years of professional backend experience, specialising in PHP and Laravel. Proven track record building production systems, from multi-tenant SaaS platforms and RESTful APIs to complex database architecture and third-party integrations. Known for writing reliable, well-structured code shaped by a background that included quality assurance. Comfortable owning a backend system end-to-end and eager to grow into a Senior Software Engineer role where I can contribute to architecture decisions and deliver scalable, maintainable solutions.
        </Text>
      </View>

      {/* PROFESSIONAL EXPERIENCE */}
      <View style={s.section}>
        <SecTitle>Professional Experience</SecTitle>

        <View style={s.entry}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Backend Engineer (Part-time)</Text>
            <Text style={s.entryPeriod}>Oct 2025 – Present</Text>
          </View>
          <Text style={s.entrySubtitle}>Merspire · Remote, Egypt</Text>
          <Text style={s.entryDesc}>
            Leads backend engineering for Bareeq, a production SaaS platform for jewelry store management. Owns the full backend lifecycle: API design, database architecture, DevOps operations, and quality assurance.
          </Text>
          <Bullet text="Architected and built the complete backend for Bareeq, a live multi-tenant SaaS serving jewelry retailers" />
          <Bullet text="Designed REST APIs powering real-time POS, inventory tracking, and financial management features" />
          <Bullet text="Implemented QR-code-based product cataloging and automated invoice generation system" />
          <Bullet text="Built multi-branch cash register and treasury management with live financial reporting and analytics" />
          <Bullet text="Owns server operations on DigitalOcean Droplet: Nginx configuration, SSL, and production environment management" />
          <Bullet text="Built and maintains GitHub Actions CI/CD pipeline for automated testing and zero-downtime deployments" />
          <Bullet text="Applied QA discipline with systematic testing across all critical financial and transactional workflows" />
          <Bullet text="Currently building IoT/NFC integration for fast, hands-free inventory stocktaking" />
          <Tags items={['Laravel', 'PHP', 'MySQL', 'REST API', 'Redis', 'Laravel Octane', 'DigitalOcean', 'Nginx', 'GitHub Actions', 'CI/CD', 'Multi-tenant Architecture', 'NFC / IoT']} />
        </View>

        <View style={s.entry}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Software Engineer</Text>
            <Text style={s.entryPeriod}>Feb 2023 – Dec 2024</Text>
          </View>
          <Text style={s.entrySubtitle}>nWeave · Alexandria, Egypt</Text>
          <Text style={s.entryDesc}>
            Designed and maintained the backend of a multi-tenant healthcare SaaS (AHS-nWeave) serving multiple independent healthcare providers. Transitioned into QA Engineer (May–Oct 2024), embedding testing discipline directly into the development cycle.
          </Text>
          <Bullet text="Architected multi-tenant backend with strict data isolation, custom domain routing, and tenant-specific workflow configurations" />
          <Bullet text="Built RESTful APIs for complex healthcare workflows: provider configurations, patient data management, and centralized reporting" />
          <Bullet text="Implemented OAuth2 + Active Directory authentication with granular role-based access control" />
          <Bullet text="Led end-to-end API testing using Postman; identified and documented critical bugs that prevented production incidents" />
          <Bullet text="Optimized MS SQL Server query performance and database structures across central and tenant-specific databases" />
          <Bullet text="Established quality gates and testing protocols aligned with healthcare data compliance requirements" />
          <Tags items={['Laravel', 'PHP', 'MS SQL Server', 'MySQL', 'REST API', 'OAuth2', 'Active Directory', 'Multi-tenancy', 'Queue Jobs', 'QA']} />
        </View>

        <View style={s.entry}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Laravel Developer, Freelance</Text>
            <Text style={s.entryPeriod}>Feb 2024 – Aug 2024</Text>
          </View>
          <Text style={s.entrySubtitle}>Logic · Cairo, Egypt</Text>
          <Bullet text="Built a custom HR Assessment System using Laravel + Livewire, from database design to frontend delivery" />
          <Bullet text="Designed multi-stage assessment workflows with configurable scoring, bulk Excel import, and dynamic scheduling matrix" />
          <Bullet text="Delivered Chart.js analytics dashboard and automated PDF report generation for hiring decisions" />
          <Tags items={['Laravel', 'Livewire', 'PHP', 'MySQL', 'Bootstrap', 'Chart.js', 'PDF Reports']} />
        </View>
      </View>

      {/* TECHNICAL SKILLS */}
      <View break style={s.section}>
        <SecTitle>Technical Skills</SecTitle>
        <View style={s.skillsGrid}>
          <View style={s.skillCol}>
            <Text style={s.skillCatName}>Backend Development</Text>
            <Text style={s.skillItems}>PHP, Laravel, REST API, OOP, System Architecture, Queue Jobs</Text>
          </View>
          <View style={s.skillCol}>
            <Text style={s.skillCatName}>DevOps & CI/CD</Text>
            <Text style={s.skillItems}>Git, GitHub Actions, CI/CD Pipelines, Docker, Ansible, Bash Scripting</Text>
          </View>
          <View style={s.skillCol}>
            <Text style={s.skillCatName}>Database Design & Management</Text>
            <Text style={s.skillItems}>MySQL, MS SQL Server, Database Design, Query Optimization, Eloquent ORM</Text>
          </View>
          <View style={s.skillCol}>
            <Text style={s.skillCatName}>Infrastructure & Deployment</Text>
            <Text style={s.skillItems}>Linux, Nginx / Apache, Deployment Automation, Server Provisioning</Text>
          </View>
          <View style={s.skillCol}>
            <Text style={s.skillCatName}>Laravel Ecosystem</Text>
            <Text style={s.skillItems}>Livewire, Multi-tenant Architecture, Sanctum, Task Scheduling, Observers / Events, Artisan</Text>
          </View>
          <View style={s.skillCol}>
            <Text style={s.skillCatName}>Frontend Proficiency</Text>
            <Text style={s.skillItems}>HTML, CSS, JavaScript, Bootstrap, ReactJs, Angular</Text>
          </View>
          <View style={s.skillCol}>
            <Text style={s.skillCatName}>Development Practices</Text>
            <Text style={s.skillItems}>QA Processes, API Testing (Postman), JIRA, Agile / Scrum</Text>
          </View>
        </View>
      </View>

      {/* KEY PROJECTS */}
      <View style={s.section}>
        <SecTitle>Key Projects</SecTitle>

        <View style={s.entrySmall}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Bareeq: Jewelry Store Management SaaS</Text>
            <Text style={s.entryPeriod}>Oct 2025 – Present</Text>
          </View>
          <Link src="https://bareeq.merspire.com" style={s.entrySubtitle}>Visit Site</Link>
          <Text style={s.entryDesc}>
            Production multi-tenant SaaS for jewelry retailers: QR-based POS, real-time inventory, supplier management, customer CRM, multi-branch treasury tracking, and analytics dashboards. Currently integrating IoT/NFC for fast, hands-free stocktaking.
          </Text>
          <Tags items={['Laravel', 'PHP', 'MySQL', 'REST API', 'Redis', 'Laravel Octane', 'Multi-tenant', 'QR Integration', 'NFC / IoT']} />
        </View>

        <View style={s.entrySmall}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Multi-Tenant Healthcare SaaS (AHS-nWeave)</Text>
            <Text style={s.entryPeriod}>2023 – 2024</Text>
          </View>
          <Link src="https://revixir.com" style={s.entrySubtitle}>Visit Site</Link>
          <Text style={s.entryDesc}>
            Secure multi-tenant healthcare platform with HIPAA-compliant data isolation, custom domain routing, OAuth2 + Active Directory auth, and tenant-specific workflow configurations.
          </Text>
          <Tags items={['Laravel', 'OAuth2', 'Active Directory', 'Multi-tenancy', 'MS SQL Server', 'Queue Jobs', 'Domain Routing']} />
        </View>

        <View style={s.entrySmall}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>HR Assessment System</Text>
            <Text style={s.entryPeriod}>2024</Text>
          </View>
          <Text style={s.entryDesc}>
            Hiring automation platform with multi-stage assessments, bulk Excel data handling, dynamic interviewer-candidate scheduling matrix, and PDF report generation.
          </Text>
          <Tags items={['Laravel', 'Livewire', 'PHP', 'MySQL', 'Chart.js', 'PDF Reports']} />
        </View>

        <View style={s.entrySmall}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Social Media Content Scheduler</Text>
            <Text style={s.entryPeriod}>2023</Text>
          </View>
          <Text style={s.entryDesc}>
            Full-stack scheduling dashboard using Laravel Queues and Job Scheduling for reliable async post publishing, with a React frontend.
          </Text>
          <Link src="https://github.com/workytip/content-scheduler" style={s.entrySubtitle}>GitHub</Link>
          <Tags items={['Laravel', 'React', 'MySQL', 'Queue Jobs', 'REST API']} />
        </View>
      </View>

      {/* EDUCATION & TRAINING */}
      <View style={s.section}>
        <SecTitle>Education &amp; Training</SecTitle>

        {/* Formal Education */}
        <View style={s.entry}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Bachelor of Computers and Information Technology, Computer Science</Text>
            <Text style={s.entryPeriod}>Sep 2013 – Jan 2019</Text>
          </View>
          <Text style={s.entrySubtitle}>Assiut University (AUN) · Assiut, Egypt</Text>
        </View>

        {/* Training & Certifications */}
        <Text style={{ fontSize: 8, fontFamily: 'Helvetica-Bold', color: C.muted, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 4 }}>Training &amp; Certifications</Text>

        <View style={s.entrySmall}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>DevOps Engineer Track (6 Months)</Text>
            <Text style={s.entryPeriod}>Jun 2025 – Jan 2026</Text>
          </View>
          <Text style={s.entrySubtitle}>DEPI-MCIT · Alexandria, Egypt</Text>
        </View>

        <View style={s.entrySmall}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Cyber Security Scholarship</Text>
            <Text style={s.entryPeriod}>Aug 2025 – Sep 2025</Text>
          </View>
          <Text style={s.entrySubtitle}>NTI-MCIT · Egypt  ·  VPN, OS Security, F5, BigIP, Trellix, GCP Security</Text>
        </View>

        <View style={s.entrySmall}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Open Source Applications Development: Laravel &amp; Angular</Text>
            <Text style={s.entryPeriod}>Aug 2022 – Nov 2022</Text>
          </View>
          <Text style={s.entrySubtitle}>ITI-MCIT · Alexandria, Egypt · 4 Months</Text>
        </View>

        <View style={s.entrySmall}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Web Development Diploma: PHP &amp; MySQL</Text>
            <Text style={s.entryPeriod}>2021</Text>
          </View>
          <Text style={s.entrySubtitle}>NTI · Egypt</Text>
        </View>

        <View style={s.entrySmall}>
          <View style={s.topRow}>
            <Text style={s.entryTitle}>Professional Full Stack Diploma: Web Development</Text>
            <Text style={s.entryPeriod}>Aug 2020 – Nov 2020</Text>
          </View>
          <Text style={s.entrySubtitle}>YAT Academy - MCIT · Remote, Egypt · 4 Months  ·  PHP, Laravel, Database</Text>
        </View>

        {/* Languages — kept inside Education to prevent page 3 */}
        <View style={{ marginTop: 7 }}>
          <SecTitle>Languages</SecTitle>
          <View style={s.langRow}>
            <Text style={s.langItem}><Text style={s.langBold}>Arabic</Text>: Native/Bilingual</Text>
            <Text style={s.langItem}><Text style={s.langBold}>English</Text>: Fluent</Text>
            <Text style={s.langItem}><Text style={s.langBold}>German</Text>: Basic</Text>
          </View>
        </View>
      </View>

    </Page>
  </Document>
);
