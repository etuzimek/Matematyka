import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TileGameProps {
  level: string;
  onBack: () => void;
}

export function TileGame({ level, onBack }: TileGameProps) {
  const [question, setQuestion] = useState({ a: 0, b: 0, answer: 0 });
  const [options, setOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateQuestion = useCallback(() => {
    const maxNum = level === "beginner" ? 5 : level === "intermediate" ? 10 : 10;
    const a = Math.floor(Math.random() * maxNum) + 1;
    const b = Math.floor(Math.random() * maxNum) + 1;
    const answer = a * b;
    
    // Generate wrong answers
    const wrongAnswers: number[] = [];
    while (wrongAnswers.length < 3) {
      const wrong = answer + Math.floor(Math.random() * 20) - 10;
      if (wrong !== answer && wrong > 0 && !wrongAnswers.includes(wrong)) {
        wrongAnswers.push(wrong);
      }
    }
    
    // Shuffle options
    const allOptions = [answer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    setQuestion({ a, b, answer });
    setOptions(allOptions);
    setFeedback("");
    setIsCorrect(null);
  }, [level]);

  useEffect(() => {
    generateQuestion();
  }, [level, generateQuestion]);

  const handleAnswer = (selectedAnswer: number) => {
    const correct = selectedAnswer === question.answer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 10);
      setFeedback("Świetnie! 🎉");
      setTimeout(() => generateQuestion(), 1500);
    } else {
      setFeedback(`Spróbuj ponownie! Prawidłowa odpowiedź to ${question.answer}`);
      setTimeout(() => generateQuestion(), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-learning p-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" onClick={onBack} className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            ← Powrót
          </Button>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-white font-bold">Punkty: {score}</span>
          </div>
        </div>

        <Card className="mb-6 animate-bounce-in">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl mb-4 text-muted-foreground">Oblicz wynik:</h2>
            <div className="text-6xl font-bold text-foreground mb-6">
              {question.a} × {question.b} = ?
            </div>
            
            {feedback && (
              <div className={`text-xl font-semibold mb-4 ${isCorrect ? 'text-success' : 'text-warning'} animate-bounce-in`}>
                {feedback}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <Button
              key={`${option}-${index}`}
              variant="answer"
              size="tile"
              onClick={() => handleAnswer(option)}
              disabled={isCorrect !== null}
              className={`h-20 text-2xl ${
                isCorrect !== null 
                  ? option === question.answer 
                    ? 'bg-success border-success text-white' 
                    : 'opacity-50'
                  : ''
              }`}
            >
              {option}
            </Button>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">
            Wybierz prawidłową odpowiedź z kafelków powyżej
          </p>
        </div>
      </div>
    </div>
  );
}