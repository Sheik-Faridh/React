import { useContext } from "react";
import { themeContext } from "../context";

const useTheme = () => useContext(themeContext);

export default useTheme;
