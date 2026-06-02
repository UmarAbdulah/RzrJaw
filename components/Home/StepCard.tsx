import { Step } from "@/types/steps";

const StepCard = ({ step }: { step: Step }) => {
  return (
    <div className="group flex flex-col items-center text-center border border-[#2f2f2f] hover:border-[#2dd4c8] transition-all duration-500 ease-in-out">
      {/* Step number badge */}
      <div className="flex justify-start w-full -mt-4 px-4">
        <span className="bg-[#2dd4c8] text-[#1f1f1f] text-xs font-bold w-7 h-7 flex items-center justify-center rounded-sm">
          {step.id}
        </span>
      </div>

      {/* Icon */}
      <div className="my-6 text-gray-400 group-hover:text-[#2dd4c8] transition-all duration-500">
        {step.icon}
      </div>

      {/* Title */}
      <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4 group-hover:text-[#2dd4c8] transition-all duration-500">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed px-10 pb-10">
        {step.description}
      </p>
    </div>
  );
};

export default StepCard;
