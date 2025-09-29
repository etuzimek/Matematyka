import { useState } from "react";
import { SkillLevel } from "@/components/SkillLevel";
import { GameSelector } from "@/components/GameSelector";
import { TileGame } from "@/components/TileGame";
import { InputGame } from "@/components/InputGame";

type AppState = "skill-selection" | "game-selection" | "tile-game" | "input-game" | "story-game";

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("skill-selection");
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    setCurrentState("game-selection");
  };

  const handleGameSelect = (gameType: string) => {
    switch (gameType) {
      case "tile":
        setCurrentState("tile-game");
        break;
      case "input":
        setCurrentState("input-game");
        break;
      case "story":
        // Coming soon - will be implemented later
        alert("Tryb opowiadań będzie dostępny wkrótce! 📚");
        break;
    }
  };

  const handleBackToGameSelection = () => {
    setCurrentState("game-selection");
  };

  const handleBackToLevelSelection = () => {
    setCurrentState("skill-selection");
  };

  switch (currentState) {
    case "skill-selection":
      return <SkillLevel onLevelSelect={handleLevelSelect} />;
    
    case "game-selection":
      return (
        <GameSelector 
          level={selectedLevel}
          onGameSelect={handleGameSelect}
          onBack={handleBackToLevelSelection}
        />
      );
    
    case "tile-game":
      return (
        <TileGame 
          level={selectedLevel}
          onBack={handleBackToGameSelection}
        />
      );
    
    case "input-game":
      return (
        <InputGame 
          level={selectedLevel}
          onBack={handleBackToGameSelection}
        />
      );
    
    default:
      return <SkillLevel onLevelSelect={handleLevelSelect} />;
  }
};

export default Index;
