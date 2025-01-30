import { useState } from "react";
import { FactBubble } from "@/components/FactBubble";
import { ProgressBar } from "@/components/ProgressBar";
import { ChatMessage } from "@/components/ChatMessage";
import { MessageSquare, Sparkles, Send } from "lucide-react";

const facts = [
  "Our AI is trained on millions of conversations",
  "We use advanced natural language processing",
  "Get instant responses 24/7",
];

const Index = () => {
  const [messages] = useState([
    { text: "Hello! How can I help you today?", isUser: false },
    { text: "I need help with my project.", isUser: true },
    { text: "I'd be happy to help! What kind of project are you working on?", isUser: false },
  ]);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left sidebar with facts */}
      <div className="w-64 p-6 hidden lg:flex flex-col gap-6">
        {facts.map((fact, index) => (
          <FactBubble key={index} fact={fact} />
        ))}
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="p-6 flex items-center border-b">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/c1ded814-b1d4-457e-846e-52388a54eff8.png"
              alt="Embark Law"
              className="h-12"
            />
            <span className="text-xl font-semibold text-gray-900">Startup Agent</span>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar progress={65} />

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-6">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
        </div>

        {/* Input area */}
        <div className="p-6">
          <div className="flex gap-4 items-center max-w-3xl mx-auto relative">
            <div className="absolute left-4 text-gray-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 p-4 pl-12 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-transparent"
            />
            <button className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2">
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
          <div className="mt-2 text-center text-sm text-gray-500">
            Press Enter to send your message
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;