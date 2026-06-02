import { steps } from "@/data/steps";
import StepCard from "./StepCard";

const HowToTrain = () => {
  return (
    <section className="w-full bg-[#1a1a1a] py-20 px-6">
      {/* Heading */}
      <div className="flex flex-col items-center mb-14">
        <p className="text-[#2dd4c8] text-xs tracking-[0.3em] uppercase mb-3">
          The Discipline
        </p>
        <h2 className="text-white font-black uppercase italic text-5xl md:text-6xl tracking-tight">
          How To Train
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
};

export default HowToTrain;
