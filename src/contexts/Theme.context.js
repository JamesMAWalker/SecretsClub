import React, { createContext } from 'react';

import useToggle from '../hooks/useToggleState.hook';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
