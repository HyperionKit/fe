"use client";

import { useState, useEffect } from 'react';

type DarkModeCallback = (isDarkMode: boolean) => void;

/**
 * Dark Mode Manager - Handles all dark mode functionality
 */
export class DarkModeManager {
  private isDarkMode: boolean = false;
  private listeners: DarkModeCallback[] = [];

  /**
   * Initialize dark mode from localStorage or system preference
   */
  init(): boolean {
    if (typeof window === 'undefined') return false;

    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      this.isDarkMode = JSON.parse(saved);
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    this.applyTheme();
    return this.isDarkMode;
  }

  /**
   * Toggle dark mode on/off
   */
  toggle(): boolean {
    this.isDarkMode = !this.isDarkMode;
    this.save();
    this.applyTheme();
    this.notifyListeners();
    return this.isDarkMode;
  }

  /**
   * Set dark mode to specific state
   */
  set(isDark: boolean): boolean {
    this.isDarkMode = isDark;
    this.save();
    this.applyTheme();
    this.notifyListeners();
    return this.isDarkMode;
  }

  /**
   * Get current dark mode state
   */
  get(): boolean {
    return this.isDarkMode;
  }

  /**
   * Save preference to localStorage
   */
  private save(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    }
  }

  /**
   * Apply theme to document
   */
  private applyTheme(): void {
    if (typeof document === 'undefined') return;

    const html = document.documentElement;
    
    if (this.isDarkMode) {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
  }

  /**
   * Subscribe to dark mode changes
   */
  subscribe(callback: DarkModeCallback): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  /**
   * Notify all listeners of changes
   */
  private notifyListeners(): void {
    this.listeners.forEach(callback => callback(this.isDarkMode));
  }
}

// Create singleton instance
export const darkModeManager = new DarkModeManager();

// React Hook for dark mode
interface UseDarkModeReturn {
  isDarkMode: boolean;
  toggle: () => void;
  setDarkMode: (isDark: boolean) => void;
}

export function useDarkMode(): UseDarkModeReturn {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Initialize dark mode
    const currentMode = darkModeManager.init();
    setIsDarkMode(currentMode);

    // Subscribe to changes
    const unsubscribe = darkModeManager.subscribe(setIsDarkMode);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('darkMode') === null) {
        darkModeManager.set(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      unsubscribe();
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggle = (): void => {
    darkModeManager.toggle();
  };
  
  const setDarkMode = (isDark: boolean): void => {
    darkModeManager.set(isDark);
  };

  return {
    isDarkMode,
    toggle,
    setDarkMode
  };
}