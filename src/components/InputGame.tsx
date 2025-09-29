import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface InputGameProps {
  level: string;
  onBack: () => void;
}

export function InputGame({ level, onBack }: InputGameProps) {
  const [question, setQuestion] = useState({ a: 0, b: 0, answer: 0 });
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const inputRef = useRef<HTMLInputElement>(null); // Ref do inputu

  const generateQuestion = useCallback(() => {
    const maxNum = level === "beginner" ? 5 : level === "intermediate" ? 10 : 10;
    const a = Math.floor(Math.random() * maxNum) + 1;
    const b = Math.floor(Math.random() * maxNum) + 1;
    const answer = a * b;

    setQuestion({ a, b, answer });
    setUserAnswer("");
    setFeedback("");
    setIsCorrect(null);

    // Ustawiamy fokus na input po małym delay, żeby input był gotowy
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [level]);

  useEffect(() => {
    generateQuestion();
  }, [level, generateQuestion]);

  const handleSubmit = () => {
    const answer = parseInt(userAnswer);
    const correct = answer === question.answer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 15); // Punkty za poprawną odpowiedź
      setFeedback("Doskonale! 🌟");
      setTimeout(() => generateQuestion(), 1500);
    } else {
      setFeedback(`Nie tym razem. Prawidłowa odpowiedź to ${question.answer}`);
      setTimeout(() => generateQuestion(), 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && userAnswer && isCorrect === null) {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm p-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="outline"
            onClick={onBack}
            className="bg-white/20 border-white/30 text-white hover:bg-white/30"
          >
            ← Powrót
          </Button>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-white font-bold">Punkty: {score}</span>
          </div>
        </div>

        <Card className="mb-6 animate-bounce-in">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl mb-4 text-muted-foreground">Wpisz wynik:</h2>
            <div className="text-6xl font-bold text-foreground mb-6">
              {question.a} × {question.b} =
            </div>

            <div className="max-w-md mx-auto mb-6">
              <Input
                ref={inputRef} // Podpinamy ref
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Twoja odpowiedź..."
                className="text-2xl text-center h-16 text-foreground bg-white/95"
                disabled={isCorrect !== null}
              />
            </div>

            {feedback && (
              <div
                className={`text-xl font-semibold mb-4 ${
                  isCorrect ? "text-success" : "text-warning"
                } animate-bounce-in`}
              >
                {feedback}
              </div>
            )}

            {userAnswer && isCorrect === null && (
              <Button variant="success" size="lg" onClick={handleSubmit}>
                Sprawdź odpowiedź
              </Button>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-white/80 text-sm">
            Wpisz swoją odpowiedź i naciśnij Enter lub przycisk
          </p>
        </div>
      </div>
    </div>
  );
}
