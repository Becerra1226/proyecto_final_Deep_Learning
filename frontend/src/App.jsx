import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import WhyComputerVision from "./components/WhyCV.jsx";
import DemoSection from "./components/DemoSection";

function App() {

  return (

    <div className="bg-[#020617]">

      <Navbar />

      <Hero />

      <ProblemSection />

      <WhyComputerVision />

      <DemoSection />

    </div>
  );
}

export default App;