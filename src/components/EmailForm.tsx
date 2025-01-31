import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending chat history and notes to:", email);
    toast({
      title: "Success!",
      description: "Chat history and notes will be sent to your email.",
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-semibold text-gray-900">Send to Email</h3>
      </div>
      
      <div className="flex gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
          className="flex-1 focus:ring-primary/20"
        />
        <Button type="submit" size="sm" className="px-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
          Send
        </Button>
      </div>
    </form>
  );
};