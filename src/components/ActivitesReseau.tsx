"use client";

import { Card } from "@/components/ui/card";
import { Handshake, Users, Rocket, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

// 👉 Adapte ces imports selon tes vrais fichiers d’images
import RonaldImg from "@/assets/ronald.png";   // capture de l’avis de Ronald
import MichaelImg from "@/assets/michael.png"; // capture de l’avis de Michaël
import AnthonyImg from "@/assets/antony.png";  // capture de l’avis d’Anthony

// Animation commune
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// ===============================
// Activités & Centres d’intérêt
// ===============================
export const ActivitesReseau = () => {
  const activites = [
    {
      icon: <Users className="w-10 h-10 text-[#ff7a00]" />,
      title: "Club Great Debaters",
      description: `
Membre active du club <strong>Great Debaters</strong>, j’ai participé à plusieurs débats et simulations de conférences. 
Ces expériences m’ont permis d’améliorer mes compétences en communication, ma prise de parole et mon esprit critique.`,
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-[#ff7a00]" />,
      title: "Club Future Pioneers",
      description: `
Au sein du club <strong>Future Pioneers</strong>, j’ai contribué à des actions associatives et solidaires. 
Nous organisions des activités, des sorties et des collectes pour venir en aide à des familles dans le besoin.`,
    },
    {
      icon: <Rocket className="w-10 h-10 text-[#ff7a00]" />,
      title: "Club Hardsoft",
      description: `
En tant que membre du club <strong>Hardsoft</strong>, j’ai participé à des formations techniques autour des systèmes embarqués, 
de la programmation bas niveau et de l’électronique.`,
    },
  ];

  return (
    <section id="activites" className="py-20 bg-white text-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#0c0c0c]">
            Activités & Centres d’intérêt
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Des expériences humaines, associatives et techniques qui ont renforcé
            mes qualités personnelles et ma passion pour l’innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {activites.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <Card
                className="p-6 h-full flex flex-col justify-between bg-[#f3f3f3] border border-gray-200 rounded-2xl 
                hover:shadow-[0_0_20px_rgba(255,122,0,0.25)] hover:border-[#ff7a00] transition-all duration-300"
              >
                <div>
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-[#ff7a00]">
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===============================
// Réseau & Démarches professionnelles
// ===============================
export const Reseau = () => {
  const avis = [
    {
      name: "Ronald Lekane",
      company: "Valeo – Architecte Systèmes Embarqués & Industriels",
      date: "18 nov. 2025",
      image: RonaldImg,
      learn:
        "Cette rencontre m’a aidée à mieux comprendre le rôle d’architecte système : prendre du recul sur l’ensemble du système et relier exigences, architecture et choix techniques.",
    },
    {
      name: "Michaël",
      company:
        "Industrie aéronautique et spatiale – Head of Discipline System Engineering & Architecture",
      date: "13 nov. 2025",
      image: MichaelImg,
      learn:
        "L’échange m’a permis de mieux voir comment les systèmes embarqués sont utilisés dans l’aéronautique et le spatial, et l’importance de la rigueur et de la traçabilité dans ces domaines.",
    },
    {
      name: "Anthony",
      company: "Capgemini – Tech Lead Software Embarqué",
      date: "10 nov. 2025",
      image: AnthonyImg,
      learn:
        "Nous avons beaucoup parlé du quotidien d’un ingénieur embarqué en société de conseil, des attentes sur le CV, les projets techniques et la posture à adopter en entretien.",
    },
  ];

  return (
    <section id="reseau" className="py-20 bg-white text-[#0c0c0c]">
      <div className="container mx-auto px-4 text-center">
        {/* Intro */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Handshake className="w-14 h-14 text-[#ff7a00] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4 text-[#0c0c0c]">
            Réseau & Démarches professionnelles
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Grâce à la plateforme <b>MyJobGlasses</b>, j’ai échangé avec plusieurs
            ingénieurs en <b>systèmes embarqués</b>. Ces rencontres m’aident à mieux
            comprendre les réalités du métier, les parcours possibles et les
            compétences à développer pour la suite.
          </p>
          <a
            href="https://www.linkedin.com/in/ilham-el-kbir-228594279/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-[#ff7a00] text-white rounded-full font-medium 
            hover:bg-[#e36c00] transition-colors duration-300"
          >
            Voir mon profil LinkedIn
          </a>
        </motion.div>

        {/* Avis des professionnels */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {avis.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                className="flex flex-col h-full bg-white border border-gray-200 
                           rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 
                           transition-all duration-300 p-5 text-left"
              >
                {/* Nom + poste + date */}
                <div className="mb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-[#0c0c0c]">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">{item.company}</p>
                    </div>
                    <span className="text-[11px] text-gray-400 whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Ton commentaire sur l’échange */}
                <p className="text-sm text-gray-800 leading-relaxed mb-4">
                  {item.learn}
                </p>

                {/* Image du feedback du professionnel */}
                <img
                  src={item.image}
                  alt={`Feedback de ${item.name}`}
                  className="mt-auto rounded-xl border border-gray-200 shadow-sm max-h-64 w-auto mx-auto object-contain bg-gray-50"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificat d’accomplissement */}
        <motion.div
          className="max-w-xl mx-auto mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-6 bg-[#fdf7f1] border border-[#ff7a00]/30 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">
              Certificat d’accomplissement
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Attestation liée à mon parcours d’exploration des métiers et aux
              échanges menés avec des professionnels via MyJobGlasses.
            </p>
            <a
              href="/certificats/myjobglasses_orientation_certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#ff7a00] rounded-full hover:bg-[#e36c00] transition-colors"
            >
              Voir le certificat
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// ===============================
// Export par défaut combiné
// ===============================
export default function SectionActivitesReseau() {
  return (
    <>
      <ActivitesReseau />
      <Reseau />
    </>
  );
}
