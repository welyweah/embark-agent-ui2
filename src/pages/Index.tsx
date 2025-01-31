import { useState } from "react";
import { FactBubble } from "@/components/FactBubble";
import { ProgressBar } from "@/components/ProgressBar";
import { ChatMessage } from "@/components/ChatMessage";
import { MessageSquare, Sparkles, Bot } from "lucide-react";
import { VerticalProgressBar } from "@/components/VerticalProgressBar";
import { NoteTaking } from "@/components/NoteTaking";
import { EmailForm } from "@/components/EmailForm";

const facts = [
  "Our AI is trained on millions of conversations",
  "We use advanced natural language processing",
  "Get instant responses 24/7",
];

const suggestions = [
  "How do I start a company?",
  "What's the best business structure?",
  "How to write a business plan?",
];

const Index = () => {
  const [messages] = useState([
    { text: "Hello! How can I help you today?", isUser: false },
    { text: "I need help with my project.", isUser: true },
    { text: "I'd be happy to help! What kind of project are you working on?", isUser: false },
  ]);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05
        }}
      />
      
      <div className="relative z-10 flex justify-between">
        {/* Left sidebar with facts */}
        <div className="w-64 p-6 hidden lg:flex flex-col gap-6">
          {facts.map((fact, index) => (
            <FactBubble key={index} fact={fact} />
          ))}
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col max-w-4xl bg-white/80 backdrop-blur-sm">
          {/* Header */}
          <div className="p-6 flex items-center border-b bg-white">
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
          <div className="p-6 bg-white">
            {/* Suggestion bubbles */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="flex gap-4 items-center max-w-3xl mx-auto relative">
              <div className="absolute left-4 text-gray-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Lets build your amazing startup 🚀"
                className="flex-1 p-4 pl-12 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-transparent"
              />
              <button className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Bot className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-2 text-center text-sm text-gray-500">
              Press Enter to send your message
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-80 p-6 hidden xl:flex flex-col gap-6 border-l bg-white">
          <VerticalProgressBar progress={65} />
          <NoteTaking />
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Index;