import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SubjectSelectProps {
  onSubjectSelect: (subject: string) => void;
}

export function SubjectSelect({ onSubjectSelect }: SubjectSelectProps) {
  const subjects = [
    {
      id: "polish",
      title: "Język polski",
      description: "Ortografia, gramatyka i czytanie",
      emoji: "📚",
    },
    {
      id: "math",
      title: "Matematyka",
      description: "Dodawanie, odejmowanie, mnożenie i dzielenie",
      emoji: "➗",
    },
    {
      id: "nature",
      title: "Przyroda",
      description: "Świat roślin, zwierząt i zjawisk przyrodniczych",
      emoji: "🌍",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-bounce-in">
            Wybierz przedmiot! 🎓
          </h1>
          <p className="text-xl text-white/90">
            Rozpocznij naukę wybranego przedmiotu
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {subjects.map((subject, index) => (
            <Card
              key={subject.id}
              className="transition-all duration-300 hover:scale-105 hover:shadow-card animate-bounce-in cursor-pointer h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => onSubjectSelect(subject.id)}
            >
              <CardContent className="p-6 text-center flex flex-col h-full">
                <div
                  className="text-6xl mb-4 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {subject.emoji}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {subject.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {subject.description}
                </p>
                <Button variant="hero" className="w-full mt-auto">
                  Wybierz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
