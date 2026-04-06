const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <a href="/" className="text-lg font-bold font-heading text-gradient-primary">SkillForge</a>
        <div className="flex gap-6">
          <a href="#courses" className="hover:text-foreground transition-colors">Courses</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p>© 2026 SkillForge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
