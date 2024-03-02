import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { colors } from "./styles/theme.style";
import { Container } from "./components/Container.style";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={colors}>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
