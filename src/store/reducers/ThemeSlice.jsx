import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: localStorage.getItem("theme") === "dark",
};

// const applyTheme = (isDark) => {
//     const root = document.documentElement
//     if (isDark) {
//         root.classList.add('dark')
//         root.classList.remove('light')
//         localStorage.setItem('theme','dark')
//     } else {
//         root.classList.add('light')
//         root.classList.remove('dark')
//         localStorage.setItem('theme','light')
//     }

// }

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      const theme = state.darkMode ? "dark" : "light";
      document.documentElement.classList.add(theme);
      document.documentElement.classList.remove( theme === "dark" ? "light" : "dark" );
      localStorage.setItem("theme", theme);

      // applyTheme(state.darkMode)
      // },
      // setDarkMode : (state,action) => {
      //     state.darkMode = action.payload
      //     applyTheme(state.darkMode)
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
