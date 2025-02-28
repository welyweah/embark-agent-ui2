
import { useState } from "react";
import { Info, X, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FactBubbleProps {
  fact: string;
  onDismiss: () => void;
}

export const FactBubble = ({ fact, onDismiss }: FactBubbleProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="animate-float h-[150px] perspective">
      <div 
        className={`relative w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of the card */}
        <Card 
          className="absolute w-full h-full backface-hidden bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg flex gap-3 items-start group border border-gray-50 hover:shadow-xl transition-all duration-300"
        >
          <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <p className="text-sm text-gray-600 leading-relaxed">{fact}</p>
          <button
            onClick={handleFlip}
            className="absolute bottom-2 right-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-200"
            aria-label="Flip card"
          >
            <ArrowRight className="w-4 h-4 text-primary" />
          </button>
        </Card>

        {/* Back of the card */}
        <Card 
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary/10 backdrop-blur-sm p-5 rounded-xl shadow-lg flex flex-col justify-between border border-primary/20 hover:shadow-xl transition-all duration-300"
        >
          <div className="text-sm text-gray-700 font-medium">
            Would you like to know more?
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <button
              onClick={handleFlip}
              className="p-2 text-xs text-primary hover:text-primary/80 transition-colors"
            >
              Back to fact
            </button>
            <button
              onClick={onDismiss}
              className="p-2 text-xs text-destructive hover:text-destructive/80 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};
