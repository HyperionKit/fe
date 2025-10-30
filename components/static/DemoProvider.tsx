'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { smartWalletDemo, DemoFeature, DemoUser, DemoFlow } from '@/foundation/products-demo';

interface DemoState {
  currentUser: DemoUser | null;
  activeFeature: DemoFeature | null;
  activeFlow: DemoFlow | null;
  isDemoRunning: boolean;
  demoProgress: number;
  currentStep: number;
  notifications: DemoNotification[];
  theme: 'light' | 'dark';
  language: string;
}

interface DemoNotification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  duration?: number;
  timestamp: number;
}

interface DemoContextType {
  // State
  state: DemoState;
  demo: typeof smartWalletDemo;
  
  // Actions
  setCurrentUser: (user: DemoUser | null) => void;
  setActiveFeature: (feature: DemoFeature | null) => void;
  setActiveFlow: (flow: DemoFlow | null) => void;
  startDemo: (featureId: string) => void;
  stopDemo: () => void;
  nextStep: () => void;
  previousStep: () => void;
  resetDemo: () => void;
  addNotification: (notification: Omit<DemoNotification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: string) => void;
  
  // Computed
  isFeatureActive: (featureId: string) => boolean;
  getCurrentStep: () => any;
  getDemoProgress: () => number;
  getFilteredFeatures: (category?: string, difficulty?: string) => DemoFeature[];
}

const DemoContext = createContext<DemoContextType | null>(null);

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};

interface DemoProviderProps {
  children: React.ReactNode;
  initialUser?: DemoUser;
  initialTheme?: 'light' | 'dark';
}

export const DemoProvider: React.FC<DemoProviderProps> = ({ 
  children, 
  initialUser = null,
  initialTheme = 'dark'
}) => {
  const [state, setState] = useState<DemoState>({
    currentUser: initialUser,
    activeFeature: null,
    activeFlow: null,
    isDemoRunning: false,
    demoProgress: 0,
    currentStep: 0,
    notifications: [],
    theme: initialTheme,
    language: 'en'
  });

  const setCurrentUser = useCallback((user: DemoUser | null) => {
    setState(prev => ({ ...prev, currentUser: user }));
  }, []);

  const setActiveFeature = useCallback((feature: DemoFeature | null) => {
    setState(prev => ({ ...prev, activeFeature: feature }));
  }, []);

  const setActiveFlow = useCallback((flow: DemoFlow | null) => {
    setState(prev => ({ ...prev, activeFlow: flow }));
  }, []);

  const startDemo = useCallback((featureId: string) => {
    const feature = smartWalletDemo.features.find(f => f.id === featureId);
    if (!feature) return;

    setState(prev => ({
      ...prev,
      activeFeature: feature,
      isDemoRunning: true,
      demoProgress: 0,
      currentStep: 0
    }));

    // Add demo start notification
    addNotification({
      type: 'info',
      title: 'Demo Started',
      message: `Starting ${feature.title} demo...`,
      duration: 3000
    });
  }, []);

  const stopDemo = useCallback(() => {
    setState(prev => ({
      ...prev,
      isDemoRunning: false,
      demoProgress: 0,
      currentStep: 0
    }));

    addNotification({
      type: 'info',
      title: 'Demo Stopped',
      message: 'Demo has been stopped.',
      duration: 2000
    });
  }, []);

  const nextStep = useCallback(() => {
    setState(prev => {
      if (!prev.activeFeature) return prev;
      
      const totalSteps = prev.activeFeature.demoSteps.length;
      const newStep = Math.min(prev.currentStep + 1, totalSteps - 1);
      const progress = ((newStep + 1) / totalSteps) * 100;
      
      return {
        ...prev,
        currentStep: newStep,
        demoProgress: progress
      };
    });
  }, []);

  const previousStep = useCallback(() => {
    setState(prev => {
      const newStep = Math.max(prev.currentStep - 1, 0);
      const totalSteps = prev.activeFeature?.demoSteps.length || 1;
      const progress = ((newStep + 1) / totalSteps) * 100;
      
      return {
        ...prev,
        currentStep: newStep,
        demoProgress: progress
      };
    });
  }, []);

  const resetDemo = useCallback(() => {
    setState(prev => ({
      ...prev,
      activeFeature: null,
      activeFlow: null,
      isDemoRunning: false,
      demoProgress: 0,
      currentStep: 0
    }));
  }, []);

  const addNotification = useCallback((notification: Omit<DemoNotification, 'id' | 'timestamp'>) => {
    const newNotification: DemoNotification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now()
    };

    setState(prev => ({
      ...prev,
      notifications: [...prev.notifications, newNotification]
    }));

    // Auto-remove notification after duration
    if (notification.duration) {
      setTimeout(() => {
        removeNotification(newNotification.id);
      }, notification.duration);
    }
  }, []);

  const removeNotification = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      notifications: prev.notifications.filter(n => n.id !== id)
    }));
  }, []);

  const setTheme = useCallback((theme: 'light' | 'dark') => {
    setState(prev => ({ ...prev, theme }));
  }, []);

  const setLanguage = useCallback((language: string) => {
    setState(prev => ({ ...prev, language }));
  }, []);

  const isFeatureActive = useCallback((featureId: string) => {
    return state.activeFeature?.id === featureId;
  }, [state.activeFeature]);

  const getCurrentStep = useCallback(() => {
    if (!state.activeFeature) return null;
    return state.activeFeature.demoSteps[state.currentStep];
  }, [state.activeFeature, state.currentStep]);

  const getDemoProgress = useCallback(() => {
    return state.demoProgress;
  }, [state.demoProgress]);

  const getFilteredFeatures = useCallback((category?: string, difficulty?: string) => {
    return smartWalletDemo.features.filter(feature => {
      if (category && feature.category !== category) return false;
      if (difficulty && feature.difficulty !== difficulty) return false;
      return true;
    });
  }, []);

  const contextValue: DemoContextType = {
    state,
    demo: smartWalletDemo,
    setCurrentUser,
    setActiveFeature,
    setActiveFlow,
    startDemo,
    stopDemo,
    nextStep,
    previousStep,
    resetDemo,
    addNotification,
    removeNotification,
    setTheme,
    setLanguage,
    isFeatureActive,
    getCurrentStep,
    getDemoProgress,
    getFilteredFeatures
  };

  return (
    <DemoContext.Provider value={contextValue}>
      {children}
    </DemoContext.Provider>
  );
};

export default DemoProvider;
