1. Cel produktu

Stworzenie prostej aplikacji webowej (PWA), umożliwiającej prowadzenie dziennego raportu dotyczącego diety, treningu i kroków, wraz z wizualizacją postępów w formie heatmapy (analogicznej do GitHuba).
Aplikacja ma być lekka, jednoosobowa, bez logowania, działająca w przeglądarce desktopowej i mobilnej.

2. Zakres aplikacji (MVP)
2.1 Widok główny (dzisiejszy dzień)

Wyświetlanie bieżącej daty.

Formularz dzienny z polami:

Checkbox: „Deficyt kaloryczny”

Checkbox: „Dzień treningowy”

Pole: „Liczba kroków” (wartość liczbową wpisuje użytkownik)

Sekcja „Plan treningowy” (opcjonalna):

przycisk „Dodaj plan”, po kliknięciu możliwość dodania ćwiczeń (nazwa + liczba powtórzeń lub czas).

Zapis danych lokalnie w bazie aplikacji.

2.2 Heatmapa (główny dashboard)

Wyświetlana zawsze na górze strony (pod sekcją dzisiejszego dnia).

Styl i układ jak na GitHub (365 dni, przesuwające się w czasie).

Kolorowanie dnia:

Zielony – spełnione oba warunki: dieta + trening.

Pomarańczowy – spełniony tylko jeden warunek (dieta albo trening).

Szary – brak danych lub pominięty dzień.

Kliknięcie dnia otwiera formularz edycji raportu z danego dnia.

2.3 Raport tygodniowy

Dostępny z menu (przycisk „Raport tygodniowy”).

Wyświetla dane z ostatnich 7 dni:

Liczba kroków na każdy dzień.

Informacja, czy spełnione były warunki (dieta i/lub trening).

Plan treningowy (jeśli był wpisany).

Raport w formie ekranu – bez możliwości eksportu/udostępniania.

3. Wymagania funkcjonalne

Aplikacja działa offline dzięki PWA.

Dane przechowywane w lokalnej bazie przeglądarki (np. IndexedDB).

Interfejs prosty i responsywny (desktop + mobile).

Możliwość edycji danych z przeszłości.

Brak integracji z zewnętrznymi systemami (wszystko ręcznie).

4. Wymagania niefunkcjonalne

Język interfejsu: tylko polski.

Bezpieczeństwo: brak autoryzacji, aplikacja przeznaczona dla jednego użytkownika na wewnętrznym serwerze.

Wydajność: aplikacja musi działać płynnie na przeglądarce desktopowej i mobilnej.

Utrzymanie prostoty: brak gamifikacji, brak powiadomień, brak eksportu danych.

5. Priorytety MVP
Must-have (wersja 1.0)

Heatmapa (365 dni, kolory: zielony/pomarańczowy/szary).

Formularz dzienny: dieta, trening, kroki, opcjonalny plan treningowy.

Raport tygodniowy jako ekran w aplikacji.

Działanie offline (PWA).

Responsywny interfejs (desktop + mobile).

Nice-to-have (przyszłość)

Wpisywanie dokładnych kalorii zamiast checkboxa.

Możliwość rozbudowy raportów (np. miesięcznych).

Ulepszenia UI/UX (np. sortowanie ćwiczeń, szybkie podsumowania).

6. User Stories

Jako użytkownik chcę zaznaczyć, czy jestem w deficycie kalorycznym, aby śledzić swoją dietę.

Jako użytkownik chcę zaznaczyć, czy odbyłem trening, aby śledzić swoją aktywność fizyczną.

Jako użytkownik chcę wpisać liczbę kroków, aby monitorować codzienną aktywność.

Jako użytkownik chcę dodać plan treningowy z ćwiczeniami, aby mieć zapis mojego planu.

Jako użytkownik chcę widzieć heatmapę 365 dni, aby mieć wizualny obraz postępów.

Jako użytkownik chcę móc kliknąć w dzień na heatmapie i edytować raport, aby poprawić błędne wpisy.

Jako użytkownik chcę wygenerować tygodniowy raport, aby przeanalizować moje wyniki z ostatnich dni.

7. Techniczne sugestie dla zespołu

Frontend: React + Tailwind (lekki i szybki interfejs).

Dane: IndexedDB (np. przez bibliotekę Dexie.js dla prostszej obsługi).

PWA: manifest + service worker (cache’owanie, offline).

UI/UX: wzorować się na prostocie GitHub heatmap + formularz kroków podobny do todo list.