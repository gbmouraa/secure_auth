import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../authContext";
import { ThemeProvider } from "styled-components";
import { Container } from "../components/Container.style";
import { colors } from "../styles/theme.style";
import Header from "../components/Header";
import Home from "../pages/Home";
import LogIn from "../pages/Login";
import Private from "./Private";
import Profile from "../pages/Profile";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={colors}>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<LogIn />} />
            </Routes>
            <Routes>
              <Route
                path="/profile"
                element={
                  <Private>
                    <Profile />
                  </Private>
                }
              />
            </Routes>
          </Container>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
