interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 items-start gap-3`}>
      {!isUser && (
        <div className="bg-primary/10 p-1.5 rounded-lg">
          <img
            src="/lovable-uploads/c1ded814-b1d4-457e-846e-52388a54eff8.png"
            alt="AI"
            className="w-6 h-6"
          />
        </div>
      )}
      <div
        className={`max-w-[70%] transition-all duration-200 ${
          isUser
            ? "bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-md hover:shadow-lg"
            : "bg-white border border-gray-200 hover:border-gray-300 rounded-2xl text-gray-800 p-4 shadow-sm hover:shadow-md"
        }`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
};