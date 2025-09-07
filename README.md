# Diet & Training Tracker PWA

Osobisty tracker diety i treningów z wizualizacją heatmapy - offline-first Progressive Web App.

## 🚀 Szybki start

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie dev
npm run dev

# Build produkcyjny
npm run build

# Preview buildu produkcyjnego
npm run preview
```

## 📋 Funkcjonalności (MVP)

- ✅ **Dzienny formularz** - checkboxy deficyt/trening, pole kroków
- ✅ **Heatmapa 365 dni** - wizualizacja jak GitHub 
- ✅ **PWA offline-first** - działa bez połączenia internetowego
- ✅ **IndexedDB** - lokalne przechowywanie danych
- 🔄 **Tygodniowy raport** (w planach)
- 🔄 **Edycja przeszłych dni** (w planach)

## 🛠 Stack technologiczny

- **React 18** + TypeScript
- **Vite** - build tool i dev server
- **Tailwind CSS** - stylowanie
- **Dexie.js** - wrapper dla IndexedDB
- **React Router** - routing
- **PWA** - manifest + service worker

## 📁 Struktura projektu

```
src/
├── components/
│   ├── Layout/          # Header, Layout
│   ├── Heatmap/         # Komponenty heatmapy
│   ├── DailyForm/       # Formularz dzienny
│   └── WeeklyReport/    # Raport tygodniowy
├── pages/               # Strony aplikacji
├── lib/                 # Database, utilities
├── hooks/               # Custom React hooks
└── types/               # TypeScript definitions
```

## 📊 Kolory heatmapy

- 🟢 **Zielony** - deficyt kaloryczny + trening
- 🟠 **Pomarańczowy** - jedno z dwóch
- ⚪ **Szary** - brak danych

## 🎯 Następne kroki

1. Implementacja tygodniowego raportu
2. Edycja danych z przeszłości
3. Plan treningowy (lista ćwiczeń)
4. Testy jednostkowe
5. Deploy na serwer

---

Projekt oparty na [planie rozwoju](./plan.md) - pełna specyfikacja techniczna i roadmapa.