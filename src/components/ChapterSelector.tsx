interface ChapterSelectorProps {
  onChapterSelect: (chapterId: string) => void;
  onBack: () => void;
}

export function ChapterSelector({ onChapterSelect, onBack }: ChapterSelectorProps) {
  const chapters = [
    { id: "numbers_operations", title: "Liczby i działania", color: "bg-orange-600" },
    { id: "number_systems", title: "Systemy zapisywania liczb", color: "bg-orange-600" },
    { id: "written_operations", title: "Działania pisemne", color: "bg-orange-600" },
    { id: "geometry_figures", title: "Figury geometryczne", color: "bg-blue-600" },
    { id: "fractions_simple", title: "Ułamki zwykłe", color: "bg-green-600" },
    { id: "fractions_decimal", title: "Ułamki dziesiętne", color: "bg-green-600" },
    { id: "figure_areas", title: "Pola figur", color: "bg-blue-600" },
    { id: "cuboids_cubes", title: "Prostopadłościany i sześciany", color: "bg-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <button 
            onClick={onBack}
            className="mb-4 text-white/80 hover:text-white text-sm flex items-center mx-auto"
          >
            ← Wróć
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-bounce-in">
            Wybierz dział matematyki 📚
          </h1>
          <p className="text-xl text-white/90">
            Rozpocznij ćwiczenia z wybranego działu
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className={`p-6 rounded-lg text-white font-bold text-center cursor-pointer animate-bounce-in ${chapter.color}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => onChapterSelect(chapter.id)}
            >
              {chapter.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
