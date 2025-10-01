import { Card, CardContent } from "@/components/ui/card";

export function PolishLesson() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-pink-400 to-red-500">
      <Card className="max-w-2xl w-full shadow-lg">
        <CardContent className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">📚 Język polski</h1>
          <p className="text-lg text-muted-foreground">
            Nauka ortografii, gramatyki i czytania.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
