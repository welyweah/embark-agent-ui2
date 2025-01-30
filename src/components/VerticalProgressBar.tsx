import { Circle, CircleCheck, House, HousePlus, MapPinHouse } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerticalProgressBarProps {
  progress: number;
}

const stages = [
  { icon: House, label: "Startup Information" },
  { icon: HousePlus, label: "Shareholding" },
  { icon: MapPinHouse, label: "Vesting Agreements" },
  { icon: House, label: "Intellectual Property" },
  { icon: House, label: "Employment Agreements" },
  { icon: CircleCheck, label: "Closing Details" },
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
                {/* Traffic Light Indicators */}
                <div className="flex gap-1 mr-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    isActive ? "bg-yellow-500" : "bg-yellow-200"
                  )} />
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    isActive ? "bg-green-500" : "bg-green-200"
                  )} />
                </div>
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