import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="text-xl font-bold font-heading text-gradient-primary">
          SkillForge
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#courses" className="hover:text-foreground transition-colors">Courses</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-gradient-primary text-accent-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl p-6 flex flex-col gap-4">
          <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>Courses</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>About</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setOpen(false)}>Contact</a>
          <Button className="bg-gradient-primary text-accent-foreground font-semibold mt-2">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
