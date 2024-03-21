import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserProvider } from "../userContext";
import { ThemeProvider } from "styled-components";
import { Container } from "../components/Container.style";
import { colors } from "../styles/theme.style";
import Header from "../components/Header";
import Register from "../pages/Register";
import LogIn from "../pages/Login";
import Private from "./Private";
import Profile from "../pages/Profile";
import Footer from "../components/Footer";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={colors}>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<Register />} />
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
            <Footer />
          </Container>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
