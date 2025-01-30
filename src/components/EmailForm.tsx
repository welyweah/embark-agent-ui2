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
    // Here you would typically integrate with an email service
    console.log("Sending chat history and notes to:", email);
    toast({
      title: "Success!",
      description: "Chat history and notes will be sent to your email.",
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg border">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Send to Email</h3>
      </div>
      
      <div className="flex gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
          className="flex-1"
        />
        <Button type="submit" size="sm">
          Send
        </Button>
      </div>
    </form>
  );
};