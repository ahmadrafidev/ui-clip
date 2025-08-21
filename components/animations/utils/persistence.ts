import { useEffect, useState } from 'react';

/**
 * Custom hook for persistent local storage with SSR-safe handling
 * @param key - The localStorage key
 * @param defaultValue - Default value when key doesn't exist
 * @returns [value, setValue, isLoaded] tuple with loading state
 */
export function useLocalStorage<T>(
  key: string, 
  defaultValue: T
): [T, (value: T | ((prev: T) => T)) => void, boolean] {
  // Initialize state with undefined to prevent hydration mismatch
  const [storedValue, setStoredValue] = useState<T | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from localStorage on client side
  useEffect(() => {
    const initializeFromStorage = () => {
      try {
        if (typeof window !== 'undefined') {
          const item = window.localStorage.getItem(key);
          if (item) {
            const parsedItem = JSON.parse(item);
            setStoredValue(parsedItem);
          } else {
            setStoredValue(defaultValue);
          }
        }
      } catch (error) {
        console.warn(`Error reading localStorage key "${key}":`, error);
        setStoredValue(defaultValue);
      } finally {
        setIsLoaded(true);
      }
    };

    // Use requestAnimationFrame for smoother transition
    const rafId = requestAnimationFrame(initializeFromStorage);
    
    return () => cancelAnimationFrame(rafId);
  }, [key, defaultValue]);

  // Update localStorage when value changes
  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const currentValue = storedValue ?? defaultValue;
      const valueToStore = value instanceof Function ? value(currentValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue ?? defaultValue, setValue, isLoaded];
}

/**
 * Utility function to safely get value from localStorage
 * @param key - The localStorage key
 * @param defaultValue - Default value when key doesn't exist or error occurs
 * @returns The stored value or default value
 */
export function getStoredValue<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Utility function to safely set value in localStorage
 * @param key - The localStorage key
 * @param value - The value to store
 */
export function setStoredValue<T>(key: string, value: T): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error setting localStorage key "${key}":`, error);
  }
}

/**
 * Utility function to remove value from localStorage
 * @param key - The localStorage key to remove
 */
export function removeStoredValue(key: string): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.warn(`Error removing localStorage key "${key}":`, error);
  }
}
