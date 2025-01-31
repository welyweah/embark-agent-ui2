import { Info, X } from "lucide-react";

interface FactBubbleProps {
  fact: string;
  onDismiss: () => void;
}

export const FactBubble = ({ fact, onDismiss }: FactBubbleProps) => {
  return (
    <div className="animate-float bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg max-w-[350px] flex gap-3 items-start group border border-gray-50 hover:shadow-xl transition-all duration-300">
      <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
      <p className="text-sm text-gray-600 leading-relaxed">{fact}</p>
      <button
        onClick={onDismiss}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 hover:bg-gray-100 rounded-full"
        aria-label="Dismiss fact"
      >
        <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
      </button>
    </div>
  );
};