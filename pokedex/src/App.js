import React, { useState } from "react";
import { GlobalStyle, MainContainer } from "./components/globalStyle";
import Router from "./router/router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import { PageContext } from "./constants/context";

function App() {
  const [page, setPage] = useState("home");

  const contexts = {page, setPage}

  return (
    <PageContext.Provider value={contexts}>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <GlobalStyle />
          <Router />
        </MainContainer>
      </ThemeProvider>
    </PageContext.Provider>
  );
}

export default App;
