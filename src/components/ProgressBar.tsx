import { House, Lightbulb, Trees, User, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress?: number;
  className?: string;
}

export function ProgressBar({ progress = 0, className }: ProgressBarProps) {
  const stages = [
    { name: "Startup Information", icon: House },
    { name: "Shareholding", icon: Banknote },
    { name: "Vesting Agreements", icon: Trees },
    { name: "Intellectual Property", icon: Lightbulb },
    { name: "Employment Agreements", icon: User },
    { name: "Closing Details", icon: House },
  ];

  const currentStage = Math.floor((progress / 100) * stages.length);

  return (
    <div className={cn("w-full px-4 pt-6", className)}>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isCompleted = index < currentStage;
            const isCurrent = index === currentStage;

            return (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div
                  className={cn(
                    "rounded-full p-2",
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isCurrent
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-px bg-gray-200 w-full mt-6" />
      </div>
    </div>
  );
}