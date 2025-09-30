import { useState } from 'react';
import { SubjectSelect } from '@/components/SubjectSelect';
import { ChapterSelector } from '@/components/ChapterSelector';
import { TileGame } from '@/components/TileGame';
import { InputGame } from '@/components/InputGame';

type AppState =
  | 'subject-selection'
  | 'chapter-selection'
  | 'tile-game'
  | 'input-game'
  | 'story-game';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('subject-selection');
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setCurrentState('chapter-selection');
  };

  const handleChapterSelect = (chapterId: string) => {
    // Na razie wszystkie działy otwierają TileGame
    setCurrentState('tile-game');
  };

  const handleBackToChapterSelection = () => {
    setCurrentState('chapter-selection');
  };

  const handleBackToSubjectSelection = () => {
    setCurrentState('subject-selection');
  };

  switch (currentState) {
    case 'subject-selection':
      return <SubjectSelect onSubjectSelect={handleSubjectSelect} />;

    case 'chapter-selection':
      return (
        <ChapterSelector
          onChapterSelect={handleChapterSelect}
          onBack={handleBackToSubjectSelection}
        />
      );

    case 'tile-game':
      return (
        <TileGame level={selectedSubject} onBack={handleBackToChapterSelection} />
      );

    case 'input-game':
      return (
        <InputGame level={selectedSubject} onBack={handleBackToChapterSelection} />
      );

    default:
      return <SubjectSelect onSubjectSelect={handleSubjectSelect} />;
  }
};

export default Index;
