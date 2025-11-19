import { Button } from "@/components/ui/button";
import { ChevronDown, Linkedin, Mail } from "lucide-react";
import Image from "@/assets/me.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Texte animé */}
          <motion.div
            className="space-y-6"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Bonjour, je suis{" "}
              <span className="text-primary">
                Future ingénieure en Systèmes Informatiques Embarqués
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Curieuse, motivée et tournée vers l’innovation, je souhaite mettre
              mes compétences en systèmes embarqués, électronique et
              développement au service d’une équipe ambitieuse, tout en
              continuant à apprendre et à me perfectionner. Étudiante ingénieure
              en 1ʳᵉ année du cycle d’ingénierie à l’EIDD – Université Paris
              Cité, je suis passionnée par les technologies intelligentes et les
              systèmes connectés.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={buttonVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Button
                variant="outline"
                className="gap-2 hover:scale-105 transition-transform duration-300"
                onClick={() => scrollToSection("about")}
              >
                En savoir plus
                <ChevronDown size={18} />
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <a
                href="https://www.linkedin.com/in/ilham-el-kbir-228594279/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors hover:scale-110 duration-300"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image + encart de contact */}
          <motion.div
            className="flex flex-col items-center lg:items-end gap-4"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="relative max-w-xs lg:max-w-sm rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
            >
              <motion.img
                src={Image}
                alt="Moi"
                className="w-full h-auto object-cover rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>

            <motion.div
              className="w-full max-w-sm rounded-2xl bg-background/80 border shadow-md px-4 py-3 flex items-center justify-between backdrop-blur"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Me contacter
                </p>
                <p className="text-sm font-semibold">
                  Mes informations sont ici 👇
                </p>
              </div>
              <Button
                size="sm"
                className="gap-2"
                onClick={() => scrollToSection("contact")}
              >
                <Mail size={16} />
                Contact
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
