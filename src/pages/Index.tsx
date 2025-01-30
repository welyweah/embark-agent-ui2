import { useState } from "react";
import { FactBubble } from "@/components/FactBubble";
import { ProgressBar } from "@/components/ProgressBar";
import { ChatMessage } from "@/components/ChatMessage";
import { MessageSquare } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left sidebar with facts */}
      <div className="w-64 p-6 hidden lg:flex flex-col gap-6">
        {facts.map((fact, index) => (
          <FactBubble key={index} fact={fact} />
        ))}
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full pr-24">
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
        <div className="p-6 border-t bg-white">
          <div className="flex gap-4 items-center max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-4 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-colors">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right progress bar */}
      <div className="w-24 p-6 hidden lg:flex justify-center fixed right-0 top-0 bottom-0">
        <ProgressBar progress={65} />
      </div>
    </div>
  );
};

export default Index;