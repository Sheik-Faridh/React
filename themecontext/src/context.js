import { createContext } from "react";

export const themeContext = createContext();

export const AppProvider = ({ children, setTheme }) => {
  return (
    <themeContext.Provider value={{ setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
