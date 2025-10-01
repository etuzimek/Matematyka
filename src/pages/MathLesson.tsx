import { useState } from "react";
import { ChapterSelector } from "@/components/ChapterSelector";
import { TaskGame } from "@/components/TaskGame";
import { InputGame } from "@/components/InputGame";
import { TileGame } from "@/components/TileGame";

export function MathLesson() {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleBack = () => {
    if (selectedGame) {
      // wróć z gry do wyboru działu
      setSelectedGame(null);
    } else if (selectedChapter) {
      // wróć z działu do wyboru działu
      setSelectedChapter(null);
    }
  };

  // 👇 1. ekran wyboru działu
  if (!selectedChapter) {
    return (
      <ChapterSelector
        onChapterSelect={(chapterId) => setSelectedChapter(chapterId)}
        onBack={() => window.history.back()}
      />
    );
  }

  // 👇 2. po wybraniu działu można odpalić TaskGame
  if (selectedChapter && !selectedGame) {
    return (
      <TaskGame
        onBack={handleBack}
      />
    );
  }

  // 👇 3. tryby gier – jeśli chcesz dodać przełączanie
  if (selectedGame === "input") {
    return <InputGame level="beginner" onBack={handleBack} />;
  }
  if (selectedGame === "tiles") {
    return <TileGame level="beginner" onBack={handleBack} />;
  }

  return null;
}
