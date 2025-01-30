import { Info } from "lucide-react";

interface FactBubbleProps {
  fact: string;
}

export const FactBubble = ({ fact }: FactBubbleProps) => {
  return (
    <div className="animate-float bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[250px] flex gap-2 items-start">
      <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
      <p className="text-sm text-gray-700">{fact}</p>
    </div>
  );
};