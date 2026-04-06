import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Freelance Designer",
    text: "These Elementor tutorials completely changed how I build client websites. The Crocoblock lessons saved me weeks of trial and error.",
  },
  {
    name: "James L.",
    role: "Agency Owner",
    text: "The AI automation course helped us automate our entire lead pipeline. We saved 15+ hours per week. Absolutely worth it.",
  },
  {
    name: "Maria G.",
    role: "WordPress Developer",
    text: "Clear, practical, and always up-to-date. The best WordPress tutorial content I've found online. Highly recommend!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">What Students Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gradient-card border border-border rounded-xl p-8 shadow-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
