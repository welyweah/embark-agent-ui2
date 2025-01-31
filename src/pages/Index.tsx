import { useState } from "react";
import { FactBubble } from "@/components/FactBubble";
import { ProgressBar } from "@/components/ProgressBar";
import { ChatMessage } from "@/components/ChatMessage";
import { MessageSquare, Sparkles, Bot } from "lucide-react";
import { VerticalProgressBar } from "@/components/VerticalProgressBar";
import { NoteTaking } from "@/components/NoteTaking";
import { EmailForm } from "@/components/EmailForm";
import { ThemeToggle } from "@/components/theme-toggle";

const initialFacts = [
  "Welcome to fact bubbles, we are here to help you throughout the process so you focus on building your exciting start-up :)",
  "Did you know Embark.Law is one of the most innovative startup lawyers in Switzerland? 🇨🇭 ",
  "We will appear at time to explain complex concepts that you might not be familiar with",
  "Did you know 'Vesting Agreements' are needed to make sure each shareholder applies to a number of rules before taking out shares, it's important, but don't worry we have excellent suggestions ",
];

const suggestions = [
  "What are the types of companies?",
  "What's the best shareholder structure?",
  "What is the cost of setting a startup?",
];

const Index = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isUser: false },
    { text: "I need help with my project.", isUser: true },
    { text: "I'd be happy to help! What kind of project are you working on?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [facts, setFacts] = useState(initialFacts);

  const handleDismissFact = (index: number) => {
    setFacts(facts.filter((_, i) => i !== index));
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue("");
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "I understand. Could you tell me more about your specific needs?",
          isUser: false
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ThemeToggle />
      <div className="relative z-10 flex justify-between">
        {/* Left sidebar with facts */}
        <div className="w-72 p-8 hidden lg:flex flex-col gap-8">
          {facts.map((fact, index) => (
            <FactBubble 
              key={index} 
              fact={fact} 
              onDismiss={() => handleDismissFact(index)}
            />
          ))}
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col max-w-4xl">
          {/* Header */}
          <div className="p-8 flex items-center shadow-sm">
            <div className="flex items-center gap-4">
              <img
                src="/lovable-uploads/c1ded814-b1d4-457e-846e-52388a54eff8.png"
                alt="Embark Law"
                className="h-14 transition-transform duration-300 hover:scale-105"
              />
              <span className="text-2xl font-semibold">Startup Agent</span>
            </div>
          </div>

          {/* Progress Bar */}
          <ProgressBar progress={65} className="mt-2" />

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-8">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message.text}
                isUser={message.isUser}
              />
            ))}
          </div>

          {/* Input area */}
          <div className="p-8">
            {/* Suggestion bubbles */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="px-5 py-2.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-all duration-300 hover:shadow-md"
                  onClick={() => {
                    setInputValue(suggestion);
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="flex gap-4 items-center max-w-3xl mx-auto relative">
              <div className="absolute left-4 text-muted-foreground">
                <Sparkles className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Lets build your amazing startup 🚀"
                className="flex-1 p-4 pl-12 rounded-full border border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-background shadow-sm hover:shadow-md"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="bg-primary text-primary-foreground p-4 rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                onClick={handleSendMessage}
              >
                <Bot className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-96 p-8 hidden xl:flex flex-col gap-8">
          <VerticalProgressBar progress={65} />
          <NoteTaking />
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Index;