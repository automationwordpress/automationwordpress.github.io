import { CheckCircle } from "lucide-react";

const highlights = [
  "Hands-on projects in every lesson",
  "Real-world client website examples",
  "Private community access",
  "Lifetime access to all content",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-6">
              Your Guide to WordPress & AI
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I've spent years building websites with Elementor and Crocoblock, and now I'm combining that with AI automation to help creators and businesses work smarter, not harder.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My tutorials are practical, no-fluff, and designed to get you building real projects from day one.
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border shadow-card overflow-hidden flex items-center justify-center animate-pulse-glow">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl font-bold font-heading text-accent-foreground">SF</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-2">SkillForge</h3>
                <p className="text-muted-foreground">Elementor · Crocoblock · AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
