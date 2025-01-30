interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 items-start gap-3`}>
      {!isUser && (
        <img
          src="/lovable-uploads/c1ded814-b1d4-457e-846e-52388a54eff8.png"
          alt="AI"
          className="w-6 h-6 mt-1"
        />
      )}
      <div
        className={`max-w-[70%] ${
          isUser
            ? "bg-primary text-white p-4 rounded-2xl rounded-tr-none"
            : "bg-transparent border border-gray-200 rounded-2xl text-gray-800 p-4"
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};