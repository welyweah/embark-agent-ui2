import { useState } from "react";
import { PenLine } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export const NoteTaking = () => {
  const [notes, setNotes] = useState("");

  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-lg">
          <PenLine className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-semibold text-gray-900">Your Notes</h3>
      </div>
      
      <div className="space-y-4">
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Take notes here..."
          className="min-h-[400px] resize-none focus:ring-primary/20 text-gray-700 placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};