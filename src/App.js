import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import { ProfileProvider } from "./context/profileContext";
import { Routes, Route } from "react-router-dom";

function App() {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ProfileProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
          <Route
            path="/repos"
            element={
              <Repos toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
        </Routes>
      </ProfileProvider>
    </ThemeProvider>
  );
}

export default App;
