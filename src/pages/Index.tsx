import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Parcours from "@/components/Parcours";
import Projets from "@/components/Projets";
import { ActivitesReseau, Reseau } from "@/components/ActivitesReseau";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Parcours />
      <Projets />
      <ActivitesReseau />
      <Reseau />
      <Contact />
    </div>
  );
};

export default Index;
