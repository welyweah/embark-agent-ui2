import { House, HousePlus, MapPinHouse, Circle, CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
}

const stages = [
  { icon: House, label: "Start" },
  { icon: HousePlus, label: "Discovery" },
  { icon: MapPinHouse, label: "Planning" },
  { icon: House, label: "Execution" },
  { icon: CircleCheck, label: "Complete" },
];

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const currentStage = Math.floor((progress / 100) * stages.length);

  return (
    <div className="w-full flex flex-col items-center gap-4 bg-white p-6 border-b">
      <div className="w-full h-2 bg-gray-100 rounded-full relative">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex justify-between w-full">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isActive = index <= currentStage;
          
          return (
            <div
              key={index}
              className={cn(
                "transition-all duration-300 transform",
                isActive ? "text-primary scale-110" : "text-gray-300"
              )}
              title={stage.label}
            >
              <Icon className="w-6 h-6" />
            </div>
          );
        })}
      </div>
    </div>
  );
};