import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import ProblemSection from "./components/ProblemSection";
import WhyComputerVision from "./components/WhyCV.jsx";
import PipelineSection from "./components/PipelineSection";
import TrainingStats from "./components/TrainingStats";
import CriticalAnalysis from "./components/CriticalAnalysis";
import DemoSection from "./components/DemoSection";

function App() {

  return (

    <div className="bg-[#020617]">

      <Navbar />

      <Hero />

      <ProblemSection />

      <WhyComputerVision />

      <PipelineSection />

      <TrainingStats />

      <CriticalAnalysis />

      <DemoSection />

    </div>
  );
}

export default App;
