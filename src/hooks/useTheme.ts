import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
    // Always trust what's already on the <html> element (set by the inline
    // blocking script in index.html), so we never flash the wrong icon.
    if (typeof window !== 'undefined') {
        return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        try {
            localStorage.setItem('theme', theme);
        } catch (_) {
            // Silently ignore if localStorage is unavailable (e.g., private browsing)
        }
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

    return { theme, toggleTheme } as const;
}
