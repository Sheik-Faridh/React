import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { AppProvider } from "./context";
import ThemeContainer from "./ThemeContainer";
import {
  blueCSSVariables,
  darkCSSVariables,
  defaultCSSVariables,
  redCSSVariables
} from "./themes";
import "./styles.css";

const setCSSVariables = ({ theme }) => {
  const themes = {
    dark: darkCSSVariables,
    blue: blueCSSVariables,
    red: redCSSVariables
  };
  return theme in themes ? themes[theme] : defaultCSSVariables;
};

const GlobalStyle = createGlobalStyle`
  :root {
    ${(props) => setCSSVariables(props)}
  }
`;

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <AppProvider setTheme={setTheme}>
      <GlobalStyle theme={theme} />
      <ThemeContainer />
    </AppProvider>
  );
}
