import { Circle, CircleCheck, House, HousePlus, MapPinHouse } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerticalProgressBarProps {
  progress: number;
}

const stages = [
  { icon: House, label: "Start" },
  { icon: HousePlus, label: "Discovery" },
  { icon: MapPinHouse, label: "Planning" },
  { icon: House, label: "Execution" },
  { icon: CircleCheck, label: "Complete" },
];

export const VerticalProgressBar = ({ progress }: VerticalProgressBarProps) => {
  const currentStage = Math.floor((progress / 100) * stages.length);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold text-gray-900">Progress</div>
      <div className="flex gap-4">
        <div className="w-2 bg-gray-100 rounded-full relative h-[300px]">
          <div
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-primary/50 rounded-full transition-all duration-500"
            style={{ height: `${progress}%` }}
          />
        </div>
        
        <div className="flex flex-col justify-between h-[300px]">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = index <= currentStage;
            
            return (
              <div
                key={index}
                className={cn(
                  "transition-all duration-300 transform flex items-center gap-2",
                  isActive ? "text-primary scale-110" : "text-gray-300"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{stage.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};