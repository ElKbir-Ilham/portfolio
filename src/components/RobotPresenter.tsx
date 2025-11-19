"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Robot from "@/assets/robot.png";

interface GuideStep {
  message: string;
  targetId: string;
}

// Définis les messages par section
const steps: GuideStep[] = [
  { message: "Bienvenue sur mon portfolio ! Je vais te faire découvrir mes projets.", targetId: "projets" },
  { message: "Voici mon parcours académique et mes expériences professionnelles.", targetId: "parcours" },
  { message: "Découvre mes compétences techniques et soft skills.", targetId: "about" },
];

const RobotPresenter = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Fonction pour scroller vers la section si l'utilisateur clique sur le robot
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Détecter la section visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // Milieu de l'écran
      steps.forEach((step, index) => {
        const section = document.getElementById(step.targetId);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos <= bottom) {
            setCurrentStep(index);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { message, targetId } = steps[currentStep];

  // Optionnel : changer automatiquement le message si l'utilisateur ne scroll pas
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 12000); // toutes les 12s
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <motion.div
      className="fixed bottom-10 left-10 flex flex-col items-center z-50 cursor-pointer"
      onClick={() => scrollToSection(targetId)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={Robot} alt="Robot Guide" className="w-24 h-24 mb-2" />

      <AnimatePresence mode="wait">
        <motion.div
          key={message}
          className="bg-primary/90 text-white px-4 py-2 rounded-lg text-sm text-center shadow-lg max-w-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {message}
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="mt-2 w-3 h-3 bg-white rounded-full animate-bounce"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default RobotPresenter;
