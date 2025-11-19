"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// 🌟 Animation fade + léger décalage en montée
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// 💫 Animation cartes soft skills
const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, rotateX: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const About = () => {
  const skills = [
    "C / C++ (MISRA C)", "VHDL", "Arduino & Raspberry Pi",
    "Bases AUTOSAR", "FreeRTOS", "Linux embarqué",
    "GPIO, UART, SPI, I2C, CAN",
    "Matlab/Simulink", "CATIA 3D", "Machine Learning", "ADAS",
    "Java", "Python", "C# / .NET 8",
    "HTML", "CSS", "JavaScript", "PHP", "XML", "Android Studio"
  ];

  const softSkills = [
    {
      skill: "Pensée critique",
      description: "Analyser les situations et prendre des décisions réfléchies.",
      example:
        "Dans mon projet Smart Lighting, j’ai préféré comparer plusieurs choix techniques possibles avant de valider la solution la plus cohérente pour le fonctionnement global du système.",
    },
    {
      skill: "Résolution de problèmes",
      description: "Identifier rapidement les causes d’un problème et trouver des solutions.",
      example:
        "Pendant mon projet de reconnaissance vocale, j’ai dû revoir ma méthode d’extraction des paramètres audio pour améliorer la qualité du modèle et obtenir des résultats plus fiables.",
    },
    {
      skill: "Communication efficace",
      description: "Expliquer clairement des concepts techniques et collaborer.",
      example:
        "Au club Great Debaters, j’ai appris à structurer mes idées et à vulgariser des notions techniques, ce qui m’aide aujourd’hui à expliquer des architectures embarquées à mon équipe.",
    },
    {
      skill: "Esprit d’équipe",
      description: "Travailler en groupe en favorisant la cohésion et l’entraide.",
      example:
        "Sur le projet Smart Lighting, j’ai coordonné la répartition des tâches entre électronique, code embarqué et application mobile pour respecter les délais.",
    },
    {
      skill: "Adaptabilité",
      description: "S’adapter rapidement à de nouveaux environnements et technologies.",
      example:
        "En rejoignant ALTEN, j’ai dû apprendre rapidement CARLA, YOLO et de nouveaux outils Simulink pour être opérationnelle en quelques jours sur le projet ACC.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Présentation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            À propos de moi
          </motion.h2>

          <motion.p
            className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Depuis que j’ai découvert les <strong>systèmes d’information embarqués</strong>,
            je me passionne pour tout ce qui relie le matériel et le logiciel.
            <br /><br />

            <span className="text-[#ff7a00] font-semibold">À court terme :</span> mon objectif est de me spécialiser dans ce domaine, c’est-à-dire en <strong>systèmes informatiques embarqués</strong>,
            afin de renforcer mes compétences techniques et d’approfondir ma compréhension des technologies embarquées.
            <br /><br />

            Mon stage chez <strong>Alten</strong> a été une expérience marquante : j’y ai découvert un environnement professionnel dynamique, bienveillant et tourné vers l’innovation.
            Cette immersion m’a donné envie de poursuivre dans une entreprise internationale, de relever de nouveaux défis et de contribuer à des projets ambitieux.
            <br /><br />

            <span className="text-[#ff7a00] font-semibold">À moyen terme :</span> je souhaite intégrer une entreprise multinationale pour continuer à apprendre et m’épanouir sur des projets concrets à fort impact technologique, tout en développant mon expertise et mon réseau.
            <br /><br />

            <span className="text-[#ff7a00] font-semibold">À long terme :</span> mon rêve est de <strong>créer ma propre entreprise</strong> dans les systèmes embarqués intelligents, afin de transformer mes idées en solutions réelles et utiles.
            Pour atteindre cet objectif, plusieurs chemins sont possibles : acquérir de l’expérience pratique sur des projets complexes, collaborer avec des équipes multidisciplinaires, identifier des besoins concrets à résoudre, et développer progressivement des prototypes testés et améliorés.
            <br /><br />

            Cet objectif m’inspire à bâtir des solutions ayant un impact réel : améliorer la fiabilité et l’efficacité des systèmes, simplifier les processus et proposer des produits qui ont une utilité tangible pour la société.
          </motion.p>
        </motion.div>

        {/* Compétences techniques */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.2 }}
          variants={fadeUp}
          className="text-2xl font-bold mb-8 text-center"
        >
          Mes compétences techniques
        </motion.h3>

        <motion.div
          className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              custom={i}
              variants={fadeUp}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm shadow-sm hover:shadow-md transition-all bg-white"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2"
        >
          <Sparkles size={22} /> Soft Skills
        </motion.h3>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {softSkills.map((soft, i) => (
            <motion.div
              key={soft.skill}
              custom={i}
              variants={cardVariant}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
            >
              <Card className="p-5 rounded-2xl shadow-md bg-white hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-2 text-primary">
                  {soft.skill}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {soft.description}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mt-2 border-l-2 border-[#ff7a00]/70 pl-3">
                  {soft.example}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
