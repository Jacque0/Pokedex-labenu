import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { pageData } from "../../constants/pageData";
import { Link } from "react-router-dom";
import {ContainerHeader} from './styleHeader'

export default function Header() {
  const { states, setters } = useContext(GlobalStateContext);

  const { page, pokemon } = states;
  const { setPage, setPokemon } = setters;

  return (
    <ContainerHeader display={pageData[page].display}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to={pageData[page].path}>
              <Button
                onClick={() => {setPage(pageData[page].nextPage)
                                setPokemon('')}}
                variant="contained"
                color="secondary"
              >
                {pageData[page].button}
              </Button>
            </Link>
            <Typography
              align="center"
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {pageData[page].title+pokemon}
            </Typography>
            <Link to={"/pokedex"}>
              <Button
                className="extra-button"
                onClick={() => {setPage("pokedex")
                                setPokemon('')}}
                variant="contained"
                color="secondary"
              >
                Pokédex
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ContainerHeader>
  );
}
