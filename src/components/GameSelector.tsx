import { GameModeCard } from "./GameModeCard";

interface GameSelectorProps {
  level: string;
  onGameSelect: (gameType: string) => void;
  onBack: () => void;
}

export function GameSelector({ level, onGameSelect, onBack }: GameSelectorProps) {
  const gameModes = [
    {
      title: "Kafelki",
      description: "Wybierz prawidłową odpowiedź z dostępnych opcji",
      icon: "🎯",
      difficulty: "Łatwy" as const,
      gameType: "tile"
    },
    {
      title: "Wpisywanie",
      description: "Wpisz prawidłową odpowiedź na klawiaturze",
      icon: "⌨️",
      difficulty: "Średni" as const,
      gameType: "input"
    },
    {
      title: "Opowiadania",
      description: "Rozwiąż zadania w kontekście ciekawych historyjek",
      icon: "📚",
      difficulty: "Trudny" as const,
      gameType: "story"
    }
  ];

  const levelTitles = {
    beginner: "Początkujący (1-5)",
    intermediate: "Średniozaawansowany (1-10)", 
    advanced: "Zaawansowany (1-10+)"
  };

  return (
    <div className="min-h-screen bg-gradient-primary p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <button 
            onClick={onBack}
            className="mb-4 text-white/80 hover:text-white text-sm flex items-center mx-auto"
          >
            ← Zmień poziom
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-bounce-in">
            Wybierz tryb gry 🎮
          </h1>
          <p className="text-xl text-white/90">
            Poziom: {levelTitles[level as keyof typeof levelTitles]}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {gameModes.map((mode, index) => (
            <div 
              key={mode.gameType}
              className="animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <GameModeCard
                title={mode.title}
                description={mode.description}
                icon={mode.icon}
                difficulty={mode.difficulty}
                onPlay={() => onGameSelect(mode.gameType)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}