
import { useState } from "react";
import { FactBubble } from "@/components/FactBubble";
import { ProgressBar } from "@/components/ProgressBar";
import { ChatMessage } from "@/components/ChatMessage";
import { Bot, Sparkles, ArrowRight, Rocket } from "lucide-react";
import { VerticalProgressBar } from "@/components/VerticalProgressBar";
import { NoteTaking } from "@/components/NoteTaking";
import { EmailForm } from "@/components/EmailForm";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();

  const handleDismissFact = (index: number) => {
    setFacts(facts.filter((_, i) => i !== index));
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue("");
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

  const handleExpertClick = () => {
    toast({
      title: "Connecting to Expert",
      description: "You will be connected with an Embark.LAW expert shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-4 left-4 z-50">
        <img 
          src="/lovable-uploads/678273c0-a616-478b-95b4-7c84ad662b9c.png"
          alt="Embark.LAW Logo"
          className="w-32 h-32 object-contain"
        />
      </div>
      <div className="relative z-10 flex justify-between">
        <div className="w-72 p-8 pt-40 hidden lg:flex flex-col gap-8">
          {facts.map((fact, index) => (
            <FactBubble 
              key={index} 
              fact={fact} 
              onDismiss={() => handleDismissFact(index)}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col max-w-4xl bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl mx-4 my-4 border border-white/20">
          <div className="p-6 flex items-center border-b border-gray-100/50">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-primary/15 group">
                <Rocket className="h-10 w-10 text-primary transition-all duration-300 group-hover:rotate-12" />
              </div>
              <span className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Ember - Your Startup AI Lawyer
              </span>
            </div>
          </div>
          <ProgressBar progress={65} className="mt-2" />
          <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-b from-white/50 to-white/30">
            {messages.map((message, index) => (
              <div key={index} className="animate-fade-in">
                <ChatMessage
                  message={message.text}
                  isUser={message.isUser}
                />
              </div>
            ))}
          </div>
          <div className="p-6 bg-white/70 backdrop-blur-md rounded-b-2xl border-t border-gray-100/50">
            <div className="flex flex-wrap gap-2 mb-3 justify-center">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm bg-white/80 hover:bg-white text-gray-700 rounded-full hover:shadow-md transition-all duration-300 border border-accent/20 hover:border-accent/40 hover:text-accent hover:scale-105 active:scale-95"
                  onClick={() => {
                    setInputValue(suggestion);
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <div className="flex gap-4 items-center max-w-3xl mx-auto relative">
              <div className="absolute left-4 text-primary/60">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <input
                type="text"
                placeholder="Lets build your amazing startup 🚀"
                className="flex-1 p-4 pl-12 rounded-full border border-primary/20 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="bg-primary text-white p-4 rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
                onClick={handleSendMessage}
              >
                <Bot className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-96 p-8 hidden xl:flex flex-col gap-8">
          <VerticalProgressBar progress={65} />
          <Button
            onClick={handleExpertClick}
            className="w-full py-6 text-base font-medium bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 rounded-xl"
          >
            Continue with Embark.LAW Expert
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <NoteTaking />
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
