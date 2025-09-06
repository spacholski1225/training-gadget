# Kompleksowy Plan Projektu PWA "Diet & Training Tracker"

## 1. Podsumowanie PRD (6 punktów)

1. **PWA offline-first** - jednoosobowa aplikacja bez logowania, hostowana na wewnętrznym serwerze
2. **Heatmapa 365 dni** - wizualizacja jak GitHub (zielony=dieta+trening, pomarańczowy=jedno z dwóch, szary=brak danych)
3. **Dzienny formularz** - checkboxy deficyt/trening, pole kroki, opcjonalny plan ćwiczeń
4. **Tygodniowy raport** - ekranowy przegląd ostatnich 7 dni bez eksportu
5. **IndexedDB/Dexie** - dane lokalne, brak integracji zewnętrznych
6. **Język polski** - prosty interfejs, brak gamifikacji/powiadomień

## 2. Lista założeń

1. **Dane przeszłych dni** - domyślnie szare jeśli brak wpisu, możliwość edycji
2. **Heatmapa startowa** - rozpoczyna się od dziś minus 365 dni
3. **Plan treningowy** - prosta lista ćwiczeń (nazwa + powtórzenia/czas)
4. **Walidacja kroków** - wartość liczbowa 0-100000
5. **Responsywność** - mobile-first, minimum 320px szerokość

## 3. Plan projektu - Milestones

### Milestone 1: Fundament (Sprint 1-2)
- Setup projektu, PWA, IndexedDB schema
- Podstawowy routing i layout

### Milestone 2: Core Features (Sprint 3-4)  
- Dzienny formularz z zapisem do DB
- Heatmapa z kolorowaniem i kliknięciami

### Milestone 3: Raporty i Edycja (Sprint 5-6)
- Tygodniowy raport
- Edycja danych z przeszłości

### Milestone 4: Polish & Deploy (Sprint 7)
- Testy, optymalizacje, deployment

## 4. Backlog.json

```json
{
  "project": "Diet & Training Tracker PWA",
  "version": "1.0",
  "tasks": [
    {
      "id": "TASK-001",
      "title": "Setup projektu i repozytorium",
      "description": "Inicjalizacja Vite + React + TypeScript + Tailwind",
      "criteria": "Projekt uruchamia się na localhost, wszystkie narzędzia działają",
      "estimation": "S",
      "priority": "P0",
      "dependencies": []
    },
    {
      "id": "TASK-002", 
      "title": "Konfiguracja PWA manifest i service worker",
      "description": "Setup PWA plugin, manifest.json, basic service worker dla offline",
      "criteria": "Aplikacja instaluje się jako PWA, działa offline",
      "estimation": "M",
      "priority": "P0",
      "dependencies": ["TASK-001"]
    },
    {
      "id": "TASK-003",
      "title": "Schema IndexedDB z Dexie",
      "description": "Definicja tabel: days, exercises. Podstawowe operacje CRUD",
      "criteria": "Dane zapisują się i odczytują z IndexedDB",
      "estimation": "M", 
      "priority": "P0",
      "dependencies": ["TASK-001"]
    },
    {
      "id": "TASK-004",
      "title": "Layout główny i routing",
      "description": "Header, navigation, podstawowy routing (React Router)",
      "criteria": "Nawigacja między stronami działa",
      "estimation": "S",
      "priority": "P0", 
      "dependencies": ["TASK-001"]
    },
    {
      "id": "TASK-005",
      "title": "Komponenty formularza dziennego",
      "description": "Checkboxy, input kroków, state management",
      "criteria": "Formularz renderuje się, walidacja działa",
      "estimation": "M",
      "priority": "P0",
      "dependencies": ["TASK-003", "TASK-004"]
    },
    {
      "id": "TASK-006", 
      "title": "Zapis danych dziennych do IndexedDB",
      "description": "Integracja formularza z bazą danych",
      "criteria": "Dane z formularza zapisują się i persistent po odświeżeniu",
      "estimation": "M",
      "priority": "P0",
      "dependencies": ["TASK-005"]
    },
    {
      "id": "TASK-007",
      "title": "Algorytm generowania 365 dni dla heatmapy",
      "description": "Funkcja tworząca array dat od dziś-365 do dziś",
      "criteria": "Zwraca poprawne daty, obsługuje lata przestępne",
      "estimation": "S",
      "priority": "P0",
      "dependencies": []
    },
    {
      "id": "TASK-008",
      "title": "Komponenty heatmapy - grid i single day",
      "description": "CSS Grid layout, pojedyncze komórki, responsive",
      "criteria": "Heatmapa wyświetla 365 kwadratów w grid layout",
      "estimation": "L",
      "priority": "P0", 
      "dependencies": ["TASK-007"]
    },
    {
      "id": "TASK-009",
      "title": "Logika kolorowania heatmapy",
      "description": "Mapowanie danych na kolory: zielony/pomarańczowy/szary",
      "criteria": "Dni kolorują się zgodnie z regułami biznesowymi",
      "estimation": "M",
      "priority": "P0",
      "dependencies": ["TASK-008", "TASK-003"]
    },
    {
      "id": "TASK-010",
      "title": "Obsługa kliknięcia w dzień heatmapy", 
      "description": "Modal/routing do edycji dnia, przekazanie daty",
      "criteria": "Kliknięcie otwiera formularz z poprawną datą",
      "estimation": "M",
      "priority": "P1",
      "dependencies": ["TASK-009"]
    },
    {
      "id": "TASK-011",
      "title": "Formularz planu treningowego",
      "description": "Dynamiczna lista ćwiczeń, dodawanie/usuwanie",
      "criteria": "Plan treningowy zapisuje się jako część dnia",
      "estimation": "L",
      "priority": "P1", 
      "dependencies": ["TASK-006"]
    },
    {
      "id": "TASK-012",
      "title": "Strona tygodniowego raportu",
      "description": "Komponenty do wyświetlania danych z 7 dni",
      "criteria": "Raport pokazuje kroki, checkboxy, plany z ostatniego tygodnia",
      "estimation": "M",
      "priority": "P1",
      "dependencies": ["TASK-003", "TASK-004"]
    },
    {
      "id": "TASK-013", 
      "title": "Responsywny design mobile",
      "description": "Tailwind classes, breakpoints, touch-friendly",
      "criteria": "Aplikacja działa na mobile >= 320px",
      "estimation": "M",
      "priority": "P1",
      "dependencies": ["TASK-008"]
    },
    {
      "id": "TASK-014",
      "title": "Walidacja i error handling",
      "description": "Walidacja formularzy, obsługa błędów DB",
      "criteria": "Błędne dane są odrzucane z komunikatami",
      "estimation": "M",
      "priority": "P1", 
      "dependencies": ["TASK-006"]
    },
    {
      "id": "TASK-015",
      "title": "Testy jednostkowe core functions",
      "description": "Jest + RTL testy dla algorytmów i komponentów",
      "criteria": "Coverage >= 70% dla core logic",
      "estimation": "L",
      "priority": "P2",
      "dependencies": ["TASK-007", "TASK-009"]
    }
  ]
}
```

## 5. Stack technologiczny

### Frontend
- **React 18** - stabilny, szybki, dobra dokumentacja
- **TypeScript** - type safety, lepsze DX
- **Vite** - szybki build tool, HMR, PWA plugin
- **Tailwind CSS** - utility-first, responsive, szybki prototyping

### Dane i PWA
- **Dexie.js** - wrapper dla IndexedDB, lepsze API niż natywny
- **@vite/plugin-pwa** - manifest.json, service worker, offline
- **React Router** - client-side routing

### Rozwój i testy  
- **Jest + React Testing Library** - unit i integration testy
- **ESLint + Prettier** - code quality
- **Husky + lint-staged** - pre-commit hooks

## 6. Schemat danych IndexedDB

```typescript
// dexie-schema.ts
import Dexie, { Table } from 'dexie';

export interface DayRecord {
  id?: number;
  date: string; // YYYY-MM-DD
  calorieDeficit: boolean;
  training: boolean;
  steps: number;
  exercises?: Exercise[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Exercise {
  id: string;
  name: string;
  reps?: number;
  duration?: number; // minutes
  weight?: number; // kg
}

export class AppDatabase extends Dexie {
  days!: Table<DayRecord>;

  constructor() {
    super('DietTrainingDB');
    this.version(1).stores({
      days: '++id, date, calorieDeficit, training, steps, createdAt'
    });
  }
}

export const db = new AppDatabase();

// Przykład użycia
const saveDayData = async (dayData: Omit<DayRecord, 'id'>) => {
  await db.days.put({
    ...dayData,
    updatedAt: new Date()
  });
};

const getDayData = async (date: string) => {
  return await db.days.where('date').equals(date).first();
};
```

## 7. Struktura repozytorium

```
training-gadget/
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── icons/                 # PWA icons (różne rozmiary)
│   └── sw.js                  # Service worker (auto-generated)
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx     # Główny header z nawigacją  
│   │   │   └── Layout.tsx     # Main layout wrapper
│   │   ├── Heatmap/
│   │   │   ├── Heatmap.tsx    # Główny komponent heatmapy
│   │   │   ├── HeatmapDay.tsx # Pojedynczy dzień w heatmapie
│   │   │   └── utils.ts       # Algorytmy dat i kolorów
│   │   ├── DailyForm/
│   │   │   ├── DailyForm.tsx  # Formularz dzienny
│   │   │   └── ExerciseForm.tsx # Formularz ćwiczeń
│   │   └── WeeklyReport/
│   │       └── WeeklyReport.tsx # Tygodniowy raport
│   ├── hooks/
│   │   ├── useDatabase.ts     # Hook do operacji DB
│   │   └── useHeatmapData.ts  # Hook do danych heatmapy
│   ├── lib/
│   │   ├── database.ts        # Dexie schema i setup
│   │   └── utils.ts           # Pomocnicze funkcje
│   ├── pages/
│   │   ├── Home.tsx           # Strona główna (dzienny + heatmapa)
│   │   ├── WeeklyReport.tsx   # Strona raportu
│   │   └── EditDay.tsx        # Edycja dnia (modal/page)
│   ├── types/
│   │   └── index.ts           # TypeScript typy
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tests/
│   ├── __mocks__/             # Mocks dla IndexedDB
│   ├── components/            # Testy komponentów
│   └── utils/                 # Testy funkcji pomocniczych
├── package.json
├── vite.config.ts             # Konfiguracja Vite + PWA
├── tailwind.config.js
├── tsconfig.json
├── jest.config.js
├── Dockerfile                 # Container setup
├── docker-compose.yml         # Local development
├── .github/workflows/         # CI/CD
└── README.md
```

## 8. UI Breakdown - Wireframes

### Strona główna (Home)
```
[Header: Diet & Training Tracker] [Menu: Raport Tygodniowy]

=== DZISIEJSZY DZIEŃ ===
Data: 6 września 2025

□ Deficyt kaloryczny
□ Dzień treningowy  
Kroki: [____] (placeholder: np. 8000)

[+ Dodaj plan treningowy] (rozwijany)

[Zapisz dzień]

=== HEATMAPA (365 dni) ===
[■■■■■■■] [■■■■■■■] ... (52 tygodnie)
 P W Ś C P S N   P W Ś C P S N
 
Legenda: ■ zielony (dieta+trening) ■ pomarańczowy (jedno) ■ szary (brak)
```

### Specyfikacja komponentu Heatmap

```typescript
interface HeatmapProps {
  data: Map<string, DayRecord>; // klucz: YYYY-MM-DD
  onDayClick: (date: string) => void;
  className?: string;
}

// Algorytm:
// 1. generateYearDates() - tworzy 365 dat od today-365 do today
// 2. mapDataToColors() - mapuje DayRecord na kolor (green/orange/gray)
// 3. renderGrid() - 7x52 CSS Grid z touch-friendly size
// 4. handleDayClick() - callback z datą w formacie YYYY-MM-DD

// Reguły kolorów:
// - ZIELONY: calorieDeficit=true AND training=true
// - POMARAŃCZOWY: calorieDeficit=true XOR training=true  
// - SZARY: brak danych LUB (calorieDeficit=false AND training=false)
```

## 9. Kod startowy - Snippets

### A) Dexie Schema
```typescript
// src/lib/database.ts
import Dexie, { Table } from 'dexie';

export interface DayRecord {
  id?: number;
  date: string; // YYYY-MM-DD
  calorieDeficit: boolean;
  training: boolean;
  steps: number;
  exercises?: Exercise[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Exercise {
  id: string;
  name: string;
  reps?: number;
  duration?: number;
  weight?: number;
}

class AppDatabase extends Dexie {
  days!: Table<DayRecord>;

  constructor() {
    super('DietTrainingDB');
    this.version(1).stores({
      days: '++id, date, calorieDeficit, training, steps, createdAt'
    });
  }
}

export const db = new AppDatabase();
```

### B) PWA Service Worker
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Diet & Training Tracker',
        short_name: 'DietTracker',
        description: 'Osobisty tracker diety i treningów',
        theme_color: '#10b981',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png', 
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
```

### C) Heatmap Skeleton
```typescript
// src/components/Heatmap/Heatmap.tsx
import React from 'react';
import { DayRecord } from '../../lib/database';

interface HeatmapProps {
  data: Map<string, DayRecord>;
  onDayClick: (date: string) => void;
}

export const Heatmap: React.FC<HeatmapProps> = ({ data, onDayClick }) => {
  // TODO: Implement generateYearDates()
  const yearDates = generateYearDates();
  
  // TODO: Implement getColorForDay()
  const getColorClass = (date: string) => {
    const dayData = data.get(date);
    return getColorForDay(dayData);
  };

  return (
    <div className="heatmap-container">
      <div className="grid grid-cols-7 gap-1 max-w-4xl">
        {yearDates.map(date => (
          <HeatmapDay
            key={date}
            date={date}
            colorClass={getColorClass(date)}
            onClick={() => onDayClick(date)}
          />
        ))}
      </div>
    </div>
  );
};

// TODO: Implement these utility functions
const generateYearDates = (): string[] => {
  // Return array of 365 dates in YYYY-MM-DD format
  return [];
};

const getColorForDay = (dayData?: DayRecord): string => {
  // Return Tailwind class: 'bg-green-400', 'bg-orange-400', 'bg-gray-300'
  return 'bg-gray-300';
};
```

### D) Daily Form
```typescript
// src/components/DailyForm/DailyForm.tsx
import React, { useState } from 'react';
import { db } from '../../lib/database';

export const DailyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    calorieDeficit: false,
    training: false,
    steps: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    
    await db.days.put({
      date: today,
      ...formData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    // TODO: Show success message, update heatmap
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="deficit"
          checked={formData.calorieDeficit}
          onChange={(e) => setFormData(prev => ({ ...prev, calorieDeficit: e.target.checked }))}
        />
        <label htmlFor="deficit">Deficyt kaloryczny</label>
      </div>
      
      {/* TODO: Add other form fields */}
      
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Zapisz dzień
      </button>
    </form>
  );
};
```

## 10. Plan sprintów

### Sprint 1 (2 tygodnie) - FUNDAMENT
**Cel:** Działająca PWA z podstawowym zapisem danych

**Zadania:**
- TASK-001: Setup projektu
- TASK-002: Konfiguracja PWA  
- TASK-003: Schema IndexedDB
- TASK-004: Layout i routing
- TASK-005: Komponenty formularza

**Definition of Done:** 
- Aplikacja uruchamia się jako PWA
- Formularz zapisuje dane do IndexedDB
- Podstawowa nawigacja działa

### Sprint 2 (2 tygodnie) - HEATMAPA
**Cel:** Działająca heatmapa z kolorowaniem

**Zadania:**
- TASK-006: Zapis danych dziennych
- TASK-007: Algorytm 365 dni
- TASK-008: Komponenty heatmapy
- TASK-009: Logika kolorowania

## 11. Test Plan

### Unit Tests (Jest + RTL)
```typescript
// tests/utils/heatmap.test.ts
import { generateYearDates, getColorForDay } from '../../src/components/Heatmap/utils';

describe('Heatmap Utils', () => {
  test('generateYearDates returns 365 dates', () => {
    const dates = generateYearDates();
    expect(dates).toHaveLength(365);
  });

  test('getColorForDay returns green for diet+training', () => {
    const dayData = { calorieDeficit: true, training: true, steps: 5000 };
    expect(getColorForDay(dayData)).toBe('bg-green-400');
  });

  test('getColorForDay returns orange for diet OR training', () => {
    const dayData1 = { calorieDeficit: true, training: false, steps: 3000 };
    const dayData2 = { calorieDeficit: false, training: true, steps: 7000 };
    expect(getColorForDay(dayData1)).toBe('bg-orange-400');
    expect(getColorForDay(dayData2)).toBe('bg-orange-400');
  });

  test('getColorForDay returns gray for no data or neither condition', () => {
    expect(getColorForDay()).toBe('bg-gray-300');
    const dayData = { calorieDeficit: false, training: false, steps: 2000 };
    expect(getColorForDay(dayData)).toBe('bg-gray-300');
  });
});
```

### Critical Test Cases
- Zapis i odczyt danych z IndexedDB
- Kolorowanie heatmapy zgodnie z regułami  
- Responsywność na mobile
- PWA offline functionality
- Walidacja formularzy

## 12. Deployment

### Dockerfile
```dockerfile
# Dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### docker-compose.yml
```yaml
version: '3.8'
services:
  diet-tracker:
    build: .
    ports:
      - "3000:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    restart: unless-stopped
```

### Kroki deployment
1. `npm run build` - build produkcyjny
2. `docker build -t diet-tracker .`
3. `docker-compose up -d` 
4. Sprawdź `http://localhost:3000`

## 13. Checklists

### PR Checklist
- [ ] Testy przechodzą (npm test)
- [ ] Build działa (npm run build)
- [ ] Lint bez błędów (npm run lint) 
- [ ] TypeScript bez błędów
- [ ] PWA działa offline
- [ ] Mobile responsywne (>=320px)
- [ ] Accessibility podstawowe (alt, labels)

### Code Review Checklist  
- [ ] Kod zgodny z konwencją projektu
- [ ] Brak console.log w produkcji
- [ ] Error handling zaimplementowany
- [ ] TypeScript typy poprawne
- [ ] Performance optymalne (memo, callbacks)

### QA Checklist
- [ ] Formularz zapisuje dane poprawnie
- [ ] Heatmapa koloruje zgodnie z regułami
- [ ] Kliknięcie w dzień otwiera edycję
- [ ] Tygodniowy raport wyświetla poprawne dane
- [ ] PWA instaluje się na mobile/desktop
- [ ] Aplikacja działa offline
- [ ] Dane persystują po odświeżeniu

## 14. Assumptions.md

### Założenia projektu Diet & Training Tracker

#### Dane i przechowywanie
1. **Brak synchronizacji** - dane tylko lokalnie, brak backup/restore
2. **Format daty** - używamy YYYY-MM-DD jako klucz podstawowy  
3. **Heatmapa retrospektywna** - pokazuje 365 dni wstecz od dziś
4. **Brak walidacji kroków** - przyjmujemy 0-100000 jako sensowny zakres
5. **Plan treningowy** - maksymalnie 20 ćwiczeń na dzień

#### Interfejs użytkownika  
6. **Mobile first** - minimum 320px szerokość
7. **Bez dark mode** - tylko jasny motyw w MVP
8. **Język** - wyłącznie polski, brak i18n
9. **Brak onboarding** - użytkownik intuicyjnie zrozumie
10. **Toast notifications** - proste komunikaty sukcesu/błędu

#### Techniczne
11. **IndexedDB support** - zakładamy nowoczesną przeglądarkę
12. **Service Worker** - auto-update strategy
13. **Bundle size** - target <500KB po gzip
14. **Performance** - heatmapa renderuje <100ms
15. **Offline period** - aplikacja działa bez sieci przez dowolny czas

## 15. Następne kroki - Immediate Actions

### Akcje do wykonania natychmiast:

1. **Inicjalizacja repo i setup** 
   ```bash
   git checkout -b feature/initial-setup
   npm create vite@latest . -- --template react-ts
   npm install dexie @vite/plugin-pwa tailwindcss
   ```

2. **Konfiguracja podstawowych narzędzi**
   ```bash
   git checkout -b feature/tooling-config  
   # Setup Tailwind, PWA plugin, ESLint, Prettier
   # Commit: "Configure build tools and PWA setup"
   ```

3. **Implementacja Dexie schema**
   ```bash
   git checkout -b feature/database-schema
   # Stwórz src/lib/database.ts z kodem z sekcji 9A
   # Commit: "Add IndexedDB schema with Dexie"
   ```

4. **Layout i routing foundation**
   ```bash
   git checkout -b feature/layout-routing
   # Header, Layout, React Router setup  
   # Commit: "Add main layout and routing structure"
   ```

5. **Heatmap skeleton implementation**
   ```bash
   git checkout -b feature/heatmap-skeleton
   # Kod z sekcji 9C, basic grid layout
   # Commit: "Add Heatmap component skeleton with 365-day grid"
   ```

### Sugerowany workflow:
- Każde zadanie = osobny branch
- PR review przed merge do master
- Testy automatyczne w CI/CD
- Deploy preview dla każdego PR

**Projekt jest gotowy do natychmiastowej implementacji. Wszystkie artefakty, kod startowy i plany są kompletne.**