import { Layers, Blocks, Bot, ArrowRight } from "lucide-react";

const courses = [
  {
    icon: Layers,
    title: "Elementor Mastery",
    description: "Build pixel-perfect websites without code. From layouts to advanced interactions and dynamic content.",
    lessons: 18,
    level: "Beginner → Advanced",
    color: "primary" as const,
  },
  {
    icon: Blocks,
    title: "Crocoblock Deep Dive",
    description: "Unlock JetEngine, JetSmartFilters and more. Build dynamic listings, custom post types, and powerful queries.",
    lessons: 15,
    level: "Intermediate",
    color: "accent" as const,
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Automate workflows with Make, Zapier, and AI tools. Connect your WordPress site to powerful automations.",
    lessons: 12,
    level: "All Levels",
    color: "primary" as const,
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">What You'll Learn</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">Course Tracks</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Three focused learning paths to take you from beginner to pro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group bg-gradient-card border border-border rounded-xl p-8 shadow-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                course.color === "accent" ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
              }`}>
                <course.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{course.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                <span>{course.lessons} lessons</span>
                <span>{course.level}</span>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline group-hover:gap-3 gap-2 transition-all"
              >
                Explore Course <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
