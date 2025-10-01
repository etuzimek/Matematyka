import { Card, CardContent } from "@/components/ui/card";

export function NatureLesson() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-green-400 to-blue-500">
      <Card className="max-w-2xl w-full shadow-lg">
        <CardContent className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">🌍 Przyroda</h1>
          <p className="text-lg text-muted-foreground">
            Odkrywaj świat roślin, zwierząt i zjawisk przyrodniczych.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
