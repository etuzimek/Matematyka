export interface Task {
  question: string;
  answer: string;
  category: string;
}

export const tasks: Task[] = [
  // =========================
  // Dodawanie
  // =========================
  { question: "17 + 8 =", answer: "25", category: "Dodawanie" },
  { question: "36 + 9 =", answer: "45", category: "Dodawanie" },
  { question: "124 + 6 =", answer: "130", category: "Dodawanie" },
  { question: "30 + 40 =", answer: "70", category: "Dodawanie" },
  { question: "80 + 60 =", answer: "140", category: "Dodawanie" },
  { question: "140 + 30 =", answer: "170", category: "Dodawanie" },
  { question: "67 + 20 =", answer: "87", category: "Dodawanie" },
  { question: "80 + 13 =", answer: "93", category: "Dodawanie" },
  { question: "120 + 18 =", answer: "138", category: "Dodawanie" },

  // Podobne dodatkowe
  { question: "45 + 27 =", answer: "72", category: "Dodawanie" },
  { question: "99 + 15 =", answer: "114", category: "Dodawanie" },
  { question: "250 + 34 =", answer: "284", category: "Dodawanie" },
  { question: "78 + 122 =", answer: "200", category: "Dodawanie" },

  // =========================
  // Odejmowanie
  // =========================
  { question: "27 − 8 =", answer: "19", category: "Odejmowanie" },
  { question: "47 − 9 =", answer: "38", category: "Odejmowanie" },
  { question: "135 − 6 =", answer: "129", category: "Odejmowanie" },
  { question: "70 − 20 =", answer: "50", category: "Odejmowanie" },
  { question: "120 − 30 =", answer: "90", category: "Odejmowanie" },
  { question: "270 − 50 =", answer: "220", category: "Odejmowanie" },
  { question: "49 − 20 =", answer: "29", category: "Odejmowanie" },
  { question: "95 − 50 =", answer: "45", category: "Odejmowanie" },
  { question: "145 − 20 =", answer: "125", category: "Odejmowanie" },

  // Podobne dodatkowe
  { question: "100 − 45 =", answer: "55", category: "Odejmowanie" },
  { question: "88 − 29 =", answer: "59", category: "Odejmowanie" },
  { question: "300 − 120 =", answer: "180", category: "Odejmowanie" },
  { question: "75 − 38 =", answer: "37", category: "Odejmowanie" },

  // =========================
  // Sprytne dodawanie kilku liczb
  // =========================
  { question: "86 + 97 + 3 =", answer: "186", category: "Sprytne dodawanie" },
  { question: "99 + 27 + 1 =", answer: "127", category: "Sprytne dodawanie" },
  { question: "6 + 78 + 94 + 2 =", answer: "180", category: "Sprytne dodawanie" },

  // Podobne dodatkowe
  { question: "45 + 55 + 10 =", answer: "110", category: "Sprytne dodawanie" },
  { question: "150 + 25 + 75 =", answer: "250", category: "Sprytne dodawanie" },
  { question: "12 + 18 + 20 =", answer: "50", category: "Sprytne dodawanie" },

  // =========================
  // Równania
  // =========================
  { question: "x + 27 = 50. Ile wynosi x?", answer: "23", category: "Równania" },
  { question: "35 + y = 72. Ile wynosi y?", answer: "37", category: "Równania" },
  { question: "39 − z = 20. Ile wynosi z?", answer: "19", category: "Równania" },
  { question: "t − 55 = 40. Ile wynosi t?", answer: "95", category: "Równania" },
  { question: "48 = u + 34. Ile wynosi u?", answer: "14", category: "Równania" },
  { question: "60 = 95 − w. Ile wynosi w?", answer: "35", category: "Równania" },

  // Podobne dodatkowe
  { question: "x + 15 = 42. Ile wynosi x?", answer: "27", category: "Równania" },
  { question: "y − 18 = 12. Ile wynosi y?", answer: "30", category: "Równania" },
  { question: "z + 24 = 100. Ile wynosi z?", answer: "76", category: "Równania" },
  { question: "p − 50 = 25. Ile wynosi p?", answer: "75", category: "Równania" },

  // =========================
  // Tekstowe – logiczne
  // =========================
  { 
    question: "W klasie pierwszej dentysta wyleczył 5 zębów chłopcom i 3 dziewczynkom, a w drugiej 7 chłopcom i 11 dziewczynkom. Ile łącznie zębów wyleczył?", 
    answer: "26", 
    category: "Zadania tekstowe" 
  },
  { 
    question: "Patrycja zebrała 22 grzyby. Mama miała o 5 więcej, a tata o 7 mniej. Ile grzybów miał tata?", 
    answer: "15", 
    category: "Zadania tekstowe" 
  },

  // Podobne dodatkowe
  { 
    question: "Ania ma 14 jabłek. Jej brat ma o 6 więcej. Ile ma brat?", 
    answer: "20", 
    category: "Zadania tekstowe" 
  },
  { 
    question: "Basia ma 30 zł. Kasia ma o 12 zł mniej. Ile ma Kasia?", 
    answer: "18", 
    category: "Zadania tekstowe" 
  }
];
