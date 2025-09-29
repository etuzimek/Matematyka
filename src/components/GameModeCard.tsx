import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GameModeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  difficulty: "Łatwy" | "Średni" | "Trudny";
  onPlay: () => void;
}

export function GameModeCard({ title, description, icon, difficulty, onPlay }: GameModeCardProps) {
  const difficultyColors = {
    "Łatwy": "bg-gradient-success",
    "Średni": "bg-gradient-warm", 
    "Trudny": "bg-gradient-primary"
  };

  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-card group">
      <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-white rounded-bl-lg ${difficultyColors[difficulty]}`}>
        {difficulty}
      </div>
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center text-4xl transition-transform group-hover:scale-110 animate-float">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <Button variant="game" onClick={onPlay} className="w-full">
          Zagraj teraz!
        </Button>
      </CardContent>
    </Card>
  );
}