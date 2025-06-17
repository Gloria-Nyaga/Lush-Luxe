import React, { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create the provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // default theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
