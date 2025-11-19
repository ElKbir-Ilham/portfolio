import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            ILHAM EL KBIR
          </button>
          <div className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary"
            >
              Accueil
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary"
            >
              À propos
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("parcours")}
              className="text-foreground hover:text-primary"
            >
              Parcours
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projets")}
              className="text-foreground hover:text-primary"
            >
              Projets
            </Button>
            {/* <Button
              variant="ghost"
              onClick={() => scrollToSection("recommandations")}
              className="text-foreground hover:text-primary"
            >
              Recommandations
            </Button> */}
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
