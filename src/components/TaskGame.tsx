import { useEffect, useRef, useState } from "react";
import { tasks, Task } from "./tasks";

interface TaskGameProps {
  onBack: () => void;
}

export function TaskGame({ onBack }: TaskGameProps) {
  const [shuffledTasks, setShuffledTasks] = useState<Task[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [wrongCategories, setWrongCategories] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [repeatTasks, setRepeatTasks] = useState<Task[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Losujemy zadania po pierwszym renderze
  useEffect(() => {
    const shuffled = [...tasks].sort(() => Math.random() - 0.5);
    setShuffledTasks(shuffled);

    // Ustawiamy fokus po małym opóźnieniu
    setTimeout(() => inputRef.current?.focus(), 0);
  }, []);

  // Zawsze ustawiamy fokus przy zmianie zadania lub pokazaniu wyników
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [currentIndex, showResults]);

  const handleSubmit = () => {
    if (!shuffledTasks[currentIndex]) return;

    const answer = inputRef.current?.value.trim() || "";
    const correctAnswer = shuffledTasks[currentIndex].answer;

    if (answer === correctAnswer) {
      setCorrectCount(prev => prev + 1);
    } else {
      setWrongCount(prev => prev + 1);
      setWrongCategories(prev => {
        const category = shuffledTasks[currentIndex].category;
        if (!prev.includes(category)) return [...prev, category];
        return prev;
      });
    }

    inputRef.current!.value = "";

    if (currentIndex + 1 >= shuffledTasks.length) {
      // Koniec zadań – pokaż podsumowanie i przygotuj zadania do powtórzenia
      setShowResults(true);
      const repeat = tasks.filter(task =>
        wrongCategories.includes(task.category)
      );
      setRepeatTasks(repeat);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleRetry = () => {
    // Resetujemy grę dla powtórki z błędnych kategorii
    setShuffledTasks([...repeatTasks].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    setWrongCategories([]);
    setShowResults(false);
    setRepeatTasks([]);
  };

  return (
    <div className="min-h-screen bg-gradient-primary p-4 flex flex-col items-center">
      {!showResults && shuffledTasks.length > 0 && (
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl text-white mb-4">
            Zadanie {currentIndex + 1} / {shuffledTasks.length}
          </h2>
          <p className="text-xl text-white mb-4">
            {shuffledTasks[currentIndex].question}
          </p>
          <input
            ref={inputRef}
            type="text"
            className="w-full p-2 mb-4 text-black text-lg rounded"
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-2"
          >
            Sprawdź
          </button>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Wróć
          </button>
        </div>
      )}

      {showResults && (
        <div className="w-full max-w-2xl text-center text-white">
          <h2 className="text-3xl mb-4">Podsumowanie</h2>
          <p>Poprawne odpowiedzi: {correctCount}</p>
          <p>Błędne odpowiedzi: {wrongCount}</p>
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={onBack}
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
            >
              Wróć
            </button>
            {wrongCategories.length > 0 && (
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
              >
                Powtórz błędne kategorie
              </button>
            )}
          </div>
          {repeatTasks.length > 0 && (
            <div className="mt-6 text-left bg-white text-black p-4 rounded">
              <h3 className="text-xl mb-2">Dział do powtórzenia:</h3>
              <ul className="list-disc pl-6">
                {Array.from(new Set(repeatTasks.map(t => t.category))).map(
                  category => (
                    <li key={category}>{category}</li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
