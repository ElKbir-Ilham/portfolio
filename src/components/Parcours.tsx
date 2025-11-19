"use client";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Globe } from "lucide-react";
import { motion } from "framer-motion";
import GTI from "@/assets/gti.png";
import ALTEN from "@/assets/ALTEN-Logo.png";

// 🌟 Animation fade + léger décalage en montée
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// 💫 Animation subtile des cartes
const cardVariant = {
  hidden: { opacity: 0, scale: 0.95, rotateX: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Parcours = () => {
  const formations = [
    {
      period: "2025 - en cours",
      title: "Université Paris Cité – EIDD",
      subtitle: "",
      location: "Paris, France",
      description: "Cycle d’ingénieur",
    },
    {
      period: "2023 - 2025",
      title: "ENSA de Fès - Université Sidi Mohamed Ben Abdellah",
      subtitle: "",
      location: "Fès, Maroc",
      description:
        "Cycle d’ingénieur en Systèmes Embarqués et Informatique Industrielle",
    },
    {
      period: "2021 - 2023",
      title: "ENSA de Fès - Université Sidi Mohamed Ben Abdellah",
      subtitle: "",
      location: "Fès, Maroc",
      description: "Cycle préparatoire intégré",
    },
    {
      period: "2020 - 2021",
      title: "Lycée Moulay Slimane",
      subtitle: "",
      location: "Fès, Maroc",
      description:
        "Baccalauréat en Sciences Physiques | Mention Très Bien",
    },
  ];

  const experiences = [
    {
      period: "1 Juillet 2024 - 31 Juillet 2024",
      logo: GTI,
      title:
        "Stagiaire en développement web chez Grands Travaux Informatiques (GTI)",
      subtitle: "Développement front-end et back-end",
      location: "Maroc",
      description:
        "Lors de mon stage chez GTI, j’ai conçu et développé une application web de gestion des réclamations clients, en assurant la création des interfaces, la gestion de la base de données et la validation des fonctionnalités.",
      points: [
        "Développement d'une application web en C#, .NET et MySQL",
        "Création d’interfaces utilisateur et gestion des bases de données",
        "Test et validation des fonctionnalités",
      ],
    },
    {
      period: "1 Juillet 2025 – 15 Août 2025",
      logo: ALTEN,
      title:
        "Stagiaire en systèmes embarqués chez ALTEN Delivery Center Maroc",
      subtitle: "",
      location: "Maroc",
      description:
        "Lors de mon stage chez ALTEN, j’ai réalisé un projet sur la modélisation d’un système ACC (Adaptive Cruise Control) dans le domaine des systèmes embarqués automobiles. J’ai travaillé sur la conception du modèle sous Simulink, ainsi que sur les tests et simulations à l’aide de CARLA.",
      points: [
        "Modélisation d’un système ACC sur Simulink",
        "Tests et simulations sur CARLA avec Sensor Fusion et YOLO pour la détection d’objets",
        "Analyse et validation des performances du système",
      ],
    },
  ];

  // 🔤 LANGUES : ordre + B2 + certificat TCF
  const langues = [
    { name: "Anglais", level: "Professionnel" },
    {
      name: "Français",
      level: "B2",
      certificate: "/certificats/TCF_Ilham_El_Kbir.pdf", // à adapter
    },
    { name: "Arabe", level: "Langue maternelle" },
  ];

  return (
    <section id="parcours" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* --- En-tête --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Mon Parcours</h2>
          <p className="text-lg text-muted-foreground">
            Entre apprentissages théoriques et premières immersions
            professionnelles, je trace un chemin qui me prépare à la suite.
          </p>
        </motion.div>

        {/* --- FORMATIONS --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="text-primary" />
            Formation Académique
          </h3>
          <div className="space-y-6">
            {formations.map((formation, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariant}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 150, damping: 10 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="md:w-40 shrink-0 text-center">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {formation.period}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1">
                        {formation.title}
                      </h4>
                      <p className="text-primary font-semibold mb-1">
                        {formation.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {formation.location}
                      </p>
                      <p className="mb-4">{formation.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- EXPERIENCES --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="text-primary" />
            Expériences Professionnelles
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariant}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 150, damping: 10 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="flex flex-col items-center md:w-48">
                    <span className="bg-[#0c3866]/10 text-[#FF6600] px-4 py-1 rounded-full text-sm font-semibold mb-3 text-center">
                      {exp.period}
                    </span>
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.title} logo`}
                        className="w-20 h-20 object-contain mb-2"
                      />
                    )}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                    {exp.subtitle && (
                      <p className="italic text-muted-foreground">
                        {exp.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                    <p className="mt-3">{exp.description}</p>
                    <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1">
                      {exp.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- LANGUES --- */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Globe className="text-primary" />
            Langues
          </h3>
          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {langues.map((langue, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow min-w-[200px]">
                  <h4 className="text-xl font-bold mb-2">{langue.name}</h4>
                  <p className="text-muted-foreground text-base mb-2">
                    {langue.level}
                  </p>

                  {langue.certificate && (
                    <a
                      href={langue.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-3 py-1 text-xs font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Voir le certificat
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
