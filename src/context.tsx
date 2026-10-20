import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { content, type Content, type Lang } from './content';

type Theme = 'dark' | 'light';

interface AppState {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Content;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppState | null>(null);

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* almacenamiento no disponible: se ignora */
  }
}

function initialLang(): Lang {
  const saved = read('av-lang');
  if (saved === 'es' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

function initialTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'light' ? 'light' : 'dark';
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    write('av-lang', lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0B0C0F' : '#F3F2EE');
    write('av-theme', theme);
  }, [theme]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleTheme = useCallback(() => setTheme((p) => (p === 'dark' ? 'light' : 'dark')), []);

  const value = useMemo(() => ({ lang, setLang, t: content[lang], theme, toggleTheme }), [lang, setLang, theme, toggleTheme]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp debe usarse dentro de AppProvider');
  return ctx;
}
