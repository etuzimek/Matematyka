import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SkillLevelProps {
  onLevelSelect: (level: string) => void;
}

export function SkillLevel({ onLevelSelect }: SkillLevelProps) {
  const levels = [
    {
      id: "beginner",
      title: "Początkujący",
      description: "Tabliczka mnożenia 1-5",
      emoji: "🌱",
      range: "1×1 do 5×10"
    },
    {
      id: "intermediate", 
      title: "Średniozaawansowany",
      description: "Tabliczka mnożenia 1-10",
      emoji: "🚀",
      range: "1×1 do 10×10"
    },
    {
      id: "advanced",
      title: "Zaawansowany", 
      description: "Pełna tabliczka do 100",
      emoji: "⭐",
      range: "1×1 do 10×10 + wyzwania"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-bounce-in">
            Wybierz swój poziom! 🎯
          </h1>
          <p className="text-xl text-white/90">
            Zacznij swoją przygodę z tabliczką mnożenia
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {levels.map((level, index) => (
            <Card 
              key={level.id} 
              className="transition-all duration-300 hover:scale-105 hover:shadow-card animate-bounce-in cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => onLevelSelect(level.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {level.emoji}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {level.title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {level.description}
                </p>
                <p className="text-sm font-semibold text-accent mb-4">
                  {level.range}
                </p>
                <Button variant="hero" className="w-full">
                  Wybierz poziom
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}