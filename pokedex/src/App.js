import React from "react";
import { GlobalStyle, MainContainer } from "./components/globalStyle";
import Router from "./router/router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <GlobalStyle />
        <Router />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
