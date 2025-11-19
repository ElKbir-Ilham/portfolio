"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Mic2, 
  Cog, 
  Laptop, 
  Car, 
  ArrowRight 
} from "lucide-react"; // Icônes modernes

import SL from "@/assets/SL.jpeg";
import SLL from "@/assets/SLL.jpeg";
import K1 from "@/assets/K1.jpeg";
import K2 from "@/assets/K2.jpeg";
import K3 from "@/assets/K3.jpeg";
import W1 from "@/assets/W1.png";
import W2 from "@/assets/w2.png";
import W3 from "@/assets/W3.png";
import W4 from "@/assets/W4.png";
import W5 from "@/assets/W5.png";
import A1 from "@/assets/A1.png";
import A2 from "@/assets/A2.png";
import A3 from "@/assets/A3.png";
import A4 from "@/assets/A4.png";
import AI from "@/assets/AI.jpeg";

const Projets = () => {
  const projets = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[#ff7a00]" />,
      title: "Projet Académique – Smart Lighting",
      description: `
Conception d’un système d’éclairage intelligent destiné aux salles de classe, capable de commuter automatiquement entre l’énergie électrique et l’énergie solaire selon la disponibilité et la luminosité ambiante.
- Capteurs de luminosité et présence
- Module de commande mobile
- Commande vocale via application IoT
`,
      objectif: "Réduire la consommation énergétique et améliorer le confort.",
      images: [SL, SLL],
    },
    {
      icon: <Mic2 className="w-8 h-8 text-gray-800" />,
      title: "Projet Académique – Reconnaissance Vocale et Identification du Locuteur",
      description: `
Modèle IA en Python pour identifier un locuteur à partir de sa voix.
- Extraction des MFCC
- Réseau CNN pour classification
- Interface Gradio pour tests en direct
`,
      objectif: "Combiner IA, traitement du signal et deep learning.",
      images: [AI],
    },
    {
      icon: <Cog className="w-8 h-8 text-gray-700" />,
      title: "Projet PFA – Filtre de Kalman sous Simulink et Arduino",
      description: `
Développement d’un filtre de Kalman pour estimer position et vitesse d’un système bruité.
- Modélisation MATLAB/Simulink
- Implémentation temps réel sur Arduino
`,
      objectif: "Appliquer les principes d’estimation aux systèmes embarqués.",
      images: [K1, K2, K3],
    },
    {
      icon: <Laptop className="w-8 h-8 text-[#ff7a00]" />,
      title: "Projet de Stage – GTI",
      description: `
Application web de gestion des réclamations clients.
- Technologies : C#, .NET 8, PostgreSQL
- Fonctionnalités : authentification, soumission, suivi, tableau admin
- Contribution au front-end et base de données
`,
      objectif: "Développer des compétences pratiques en développement web.",
      images: [W1, W2, W3, W4, W5],
    },
    {
      icon: <Car className="w-8 h-8 text-gray-700" />,
      title: "Projet de Stage PFA – ALTEN",
      description: `
Modélisation d’un régulateur de vitesse adaptatif (ACC) pour véhicules autonomes.
- Contrôleur ACC sous Simulink
- Tests sur CARLA Simulator
- Fusion capteurs et YOLO pour détection d’objets
`,
      objectif: "Concevoir un modèle intelligent de conduite assistée.",
      images: [A1, A2, A3, A4],
    },
  ];

  return (
    <section id="projets" className="py-20 bg-white text-[#0c0c0c]">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#0c0c0c]">Mes Projets</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            En parallèle de mon parcours, je mène plusieurs projets qui me
            permettent d’explorer et d’affiner mes compétences en systèmes
            embarqués et développement logiciel.
          </p>
        </div>

        {/* Liste des projets */}
        <div className="space-y-8">
          {projets.map((projet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden hover:shadow-[0_0_20px_rgba(255,122,0,0.25)] 
                border border-gray-200 bg-[#f8f8f8] rounded-2xl transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <Carousel images={projet.images} />
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        {projet.icon}
                        <h3 className="text-2xl font-bold">{projet.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4 whitespace-pre-line leading-relaxed">
                        {projet.description}
                      </p>

                      {/* Objectif avec icône ArrowRight */}
                      <div className="flex items-center gap-2 text-gray-800 font-medium">
                        <ArrowRight className="w-4 h-4 text-[#ff7a00]" />
                        <span>{projet.objectif}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Carousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-auto flex justify-center items-center bg-white rounded-xl shadow-md p-2">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="max-h-80 w-auto object-contain rounded-xl transition-transform duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#ff7a00]/20 text-black p-2 rounded-full shadow transition-colors"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#ff7a00]/20 text-black p-2 rounded-full shadow transition-colors"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default Projets;
