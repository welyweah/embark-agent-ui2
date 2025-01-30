import { Circle, CircleCheck, CircleDot, CirclePlus, Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
}

const stages = [
  { icon: Circle, label: "Start" },
  { icon: CircleDot, label: "Discovery" },
  { icon: CirclePlus, label: "Planning" },
  { icon: Square, label: "Execution" },
  { icon: CircleCheck, label: "Complete" },
];

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const currentStage = Math.floor((progress / 100) * stages.length);

  return (
    <div className="h-full flex flex-col items-center gap-8">
      <div className="h-full w-2 bg-gray-100 rounded-full relative">
        <div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-primary/50 rounded-full transition-all duration-500"
          style={{ height: `${progress}%` }}
        />
      </div>
      
      <div className="flex flex-col gap-6">
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