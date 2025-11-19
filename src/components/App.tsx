import Hero from "@/components/Hero";
import RobotPresenter from "@/components/RobotPresenter";

export default function App() {
  return (
    <>
      <Hero />

      <section id="projets" className="min-h-screen">
        {/* Projets */}
      </section>

      <section id="parcours" className="min-h-screen">
        {/* Parcours */}
      </section>

      <section id="about" className="min-h-screen">
        {/* Compétences et soft skills */}
      </section>

      <RobotPresenter />
    </>
  );
}
