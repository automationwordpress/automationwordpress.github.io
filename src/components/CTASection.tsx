import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="relative rounded-2xl bg-gradient-card border border-border p-12 md:p-20 text-center shadow-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Level Up?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Join thousands of students building better websites and smarter workflows. Start your journey today.
            </p>
            <Button size="lg" className="bg-gradient-accent text-accent-foreground font-semibold px-10 py-6 text-base hover:opacity-90 transition-opacity">
              Start Free Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
