import { useState } from 'react';
import { SubjectSelect } from '@/components/SubjectSelect';
import { ChapterSelector } from '@/components/ChapterSelector';
import { TaskGame } from '@/components/TaskGame';

type AppState =
  | 'subject-selection'
  | 'chapter-selection'
  | 'task-game';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('subject-selection');
  const [selectedChapter, setSelectedChapter] = useState<string>('');

  const handleSubjectSelect = (subject: string) => {
    setCurrentState('chapter-selection');
  };

  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setCurrentState('task-game');
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

    case 'task-game':
      return <TaskGame onBack={handleBackToChapterSelection} />;

    default:
      return <SubjectSelect onSubjectSelect={handleSubjectSelect} />;
  }
};

export default Index;
