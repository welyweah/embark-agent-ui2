interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 items-start gap-3 animate-fade-in`}>
      {!isUser && (
        <div className="bg-primary/5 p-2 rounded-lg">
          <img
            src="/lovable-uploads/c1ded814-b1d4-457e-846e-52388a54eff8.png"
            alt="AI"
            className="w-8 h-8"
          />
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