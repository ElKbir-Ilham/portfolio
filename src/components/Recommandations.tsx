// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Quote, Phone } from "lucide-react";

// const Recommandations = () => {
//   const competences = [
//     "Analyse de données",
//     "Automatisation",
//     "Rigueur",
//     "Autonomie",
//     "Communication",
//   ];

//   return (
//     <section id="recommandations" className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Recommandation</h2>
//           <p className="text-lg text-muted-foreground">
//             Voici une recommandation de mon ancien manager lors de mon stage chez Eurofins,
//             soulignant mes compétences et qualités professionnelles.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <Card className="p-8 hover:shadow-xl transition-shadow">
//             <div className="mb-6">
//               <div className="flex items-start gap-4 mb-4">
//                 <div className="p-3 bg-primary/10 rounded-full">
//                   <Quote className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">Manager Eurofins</h3>
//                   <p className="text-muted-foreground">Responsable de laboratoire</p>
//                   <p className="text-sm text-muted-foreground mt-1">
//                     Stage Mars - Août 2025
//                   </p>
//                   <p className="text-sm text-muted-foreground">Eurofins - Vergèze, France</p>
//                 </div>
//               </div>

//               <blockquote className="pl-6 border-l-4 border-primary italic text-lg leading-relaxed mb-6">
//                 "Elvira Noelle a effectué un stage de 6 mois au sein de notre laboratoire, où elle
//                 a démontré une excellente capacité d'adaptation, d'apprentissage et un remarquable
//                 esprit d'équipe. Elle a rapidement maîtrisé les protocoles de laboratoire,
//                 contribué efficacement aux projets en cours, et son travail sur l'automatisation du
//                 traitement de données analytiques a considérablement amélioré nos processus
//                 internes. Rigoureuse, autonome et curieuse, elle a su poser les bonnes questions au
//                 bon moment, faisant preuve d'un professionnalisme constant. Je recommande vivement
//                 Elvira Noelle pour sa motivation, sa précision et sa valeur ajoutée à toute
//                 équipe."
//               </blockquote>

//               <div className="mb-6">
//                 <h4 className="font-bold mb-3">Compétences mises en avant :</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {competences.map((comp) => (
//                     <Badge key={comp} variant="secondary" className="px-4 py-2">
//                       {comp}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-muted/50 p-4 rounded-lg">
//                 <p className="text-sm font-semibold mb-2">Contact professionnel :</p>
//                 <div className="flex items-center gap-2 text-primary">
//                   <Phone size={16} />
//                   <span>+33 6 72 40 08 56</span>
//                 </div>
//                 <p className="text-sm text-muted-foreground mt-2">
//                   Disponible pour références professionnelles
//                 </p>
//               </div>
//             </div>
//           </Card>

//           <div className="text-center mt-8">
//             <h3 className="text-xl font-bold mb-2">Vous souhaitez obtenir plus d'informations ?</h3>
//             <p className="text-muted-foreground">
//               N'hésitez pas à contacter directement mon ancien encadrant pour obtenir des
//               références détaillées sur mon travail et mes compétences.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Recommandations;
