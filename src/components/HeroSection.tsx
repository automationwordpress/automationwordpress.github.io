import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-primary font-medium">New tutorials every week</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
            Master{" "}
            <span className="text-gradient-primary">Elementor</span>,{" "}
            <span className="text-gradient-accent">Crocoblock</span> &{" "}
            <span className="text-gradient-primary">AI Automation</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Learn to build stunning WordPress websites and automate your workflows with expert-led tutorials. From beginner to advanced, I'll guide you every step of the way.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-primary text-accent-foreground font-semibold px-8 py-6 text-base shadow-glow hover:opacity-90 transition-opacity">
              Start Learning <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border px-8 py-6 text-base hover:bg-secondary">
              <Play className="mr-2 h-5 w-5" /> Watch Free Lesson
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 text-muted-foreground">
            <div>
              <span className="text-3xl font-bold text-foreground font-heading">50+</span>
              <p className="text-sm">Tutorials</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="text-3xl font-bold text-foreground font-heading">2K+</span>
              <p className="text-sm">Students</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="text-3xl font-bold text-foreground font-heading">4.9</span>
              <p className="text-sm">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
