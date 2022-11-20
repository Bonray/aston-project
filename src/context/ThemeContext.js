import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = { isModeDark: false };

const themeReducer = (state, action) => {
  if (action.type === 'LIGHT_MODE') {
    return { isModeDark: false };
  }
  if (action.type === 'DARK_MODE') {
    return { isModeDark: true };
  }
}

const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;