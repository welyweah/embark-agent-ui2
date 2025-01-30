import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PenLine, Save } from "lucide-react";

export const NoteTaking = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [currentNote, setCurrentNote] = useState("");

  const handleAddNote = () => {
    if (currentNote.trim()) {
      setNotes([...notes, currentNote.trim()]);
      setCurrentNote("");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex items-center gap-2 mb-4">
        <PenLine className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Notes</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            placeholder="Add a note..."
            className="flex-1"
          />
          <Button onClick={handleAddNote} size="sm">
            <Save className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="space-y-2 max-h-[200px] overflow-y-auto">
          {notes.map((note, index) => (
            <div key={index} className="p-2 bg-gray-50 rounded text-sm">
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};