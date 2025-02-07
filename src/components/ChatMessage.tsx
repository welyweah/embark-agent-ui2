
import { Rocket } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 items-start gap-3 animate-fade-in`}>
      {!isUser && (
        <div className="bg-primary/5 p-2 rounded-lg">
          <div className="w-8 h-8 flex items-center justify-center">
            <Rocket className="w-6 h-6 text-primary" />
          </div>
        </div>
      )}
      <div
        className={`max-w-[70%] transition-all duration-300 ${
          isUser
            ? "bg-primary text-white p-5 rounded-2xl rounded-tr-none shadow-md hover:shadow-lg"
            : "bg-white border border-gray-100 hover:border-gray-200 rounded-2xl text-gray-700 p-5 shadow-sm hover:shadow-md"
        }`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
};
