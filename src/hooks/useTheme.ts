import { useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    try {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved) return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // ignore localStorage access errors
    }
    return 'light';
  });

  const [isMounted, setIsMounted] = useState(false);

  // Apply theme to document
  const applyTheme = useCallback((themeToApply: Theme) => {
    if (typeof document === 'undefined') return;
    
    const root = document.documentElement;
    
    // Remove both theme classes
    root.classList.remove('light', 'dark');
    // Add current theme class
    root.classList.add(themeToApply);
    
    // Update data-theme attribute for CSS targeting
    root.setAttribute('data-theme', themeToApply);
    
    // Update meta theme-color for browser UI
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeToApply === 'dark' ? '#111827' : '#ffffff');
    }
    
    // Save to localStorage
    try {
      localStorage.setItem('theme', themeToApply);
    } catch {
      // ignore localStorage write errors
    }
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    setIsMounted(true);
    applyTheme(theme);
  }, [applyTheme, theme]);

  // Update when theme changes
  useEffect(() => {
    if (isMounted) {
      applyTheme(theme);
    }
  }, [theme, isMounted, applyTheme]);

  // Listen for system theme changes (only if user hasn't set preference)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      try {
        // Only update if user hasn't explicitly set a preference
        if (!localStorage.getItem('theme')) {
          setTheme(mediaQuery.matches ? 'dark' : 'light');
        }
      } catch {
        // ignore localStorage read errors
      }
    };

    // Modern browsers
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } else {
      // fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }
  }, []);

  // Toggle theme function
  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme, isMounted };
}