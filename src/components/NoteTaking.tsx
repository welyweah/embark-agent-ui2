import { useState } from "react";
import { PenLine } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export const NoteTaking = () => {
  const [notes, setNotes] = useState("");

  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex items-center gap-2 mb-4">
        <PenLine className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Your Notes</h3>
      </div>
      
      <div className="space-y-4">
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Take notes here..."
          className="min-h-[400px] resize-none"
        />
      </div>
    </div>
  );
};